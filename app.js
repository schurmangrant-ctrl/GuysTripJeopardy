(function () {
  "use strict";

  const TEAM_COLORS = ["#ffcc00", "#ff5c5c", "#4ade80", "#38bdf8", "#f97316", "#c084fc"];
  const MIN_TEAMS = 2;
  const MAX_TEAMS = 6;
  const NUM_CATEGORIES = 6;
  const NUM_ROWS = 5;

  // ---------------------------------------------------------------
  // State
  // ---------------------------------------------------------------
  let teamCount = 3;
  let teamNames = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6"];
  let teams = []; // {name, score, color}

  let shuffledPool = [];
  let draftOrder = [];
  let currentPickNum = 0; // number of picks made so far
  let draftPicks = []; // {poolIndex, teamIndex}
  let selectedCategories = []; // category objects in picked order

  let boardUsed = []; // [catIdx][rowIdx] => bool
  let history = []; // {catIdx, rowIdx, type: 'award'|'deduct'|'skip', teamIdx, value}

  let activeClue = null; // {catIdx, rowIdx, resolved: bool}
  let pendingResolveType = null; // 'award' | 'deduct'

  // ---------------------------------------------------------------
  // Utilities
  // ---------------------------------------------------------------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  function fmtMoney(n) {
    const sign = n < 0 ? "-" : "";
    return sign + "$" + Math.abs(n).toLocaleString();
  }

  // ---------------------------------------------------------------
  // SETUP SCREEN
  // ---------------------------------------------------------------
  const teamCountDisplay = document.getElementById("team-count-display");
  const teamNameList = document.getElementById("team-name-list");

  function renderTeamNameInputs() {
    teamNameList.innerHTML = "";
    for (let i = 0; i < teamCount; i++) {
      const row = document.createElement("div");
      row.className = "team-name-row";

      const dot = document.createElement("span");
      dot.className = "team-color-dot";
      dot.style.background = TEAM_COLORS[i];

      const input = document.createElement("input");
      input.type = "text";
      input.value = teamNames[i];
      input.maxLength = 20;
      input.placeholder = "Team " + (i + 1);
      input.addEventListener("input", () => {
        teamNames[i] = input.value;
      });

      row.appendChild(dot);
      row.appendChild(input);
      teamNameList.appendChild(row);
    }
  }

  document.getElementById("team-count-minus").addEventListener("click", () => {
    if (teamCount > MIN_TEAMS) {
      teamCount--;
      teamCountDisplay.textContent = teamCount;
      renderTeamNameInputs();
    }
  });
  document.getElementById("team-count-plus").addEventListener("click", () => {
    if (teamCount < MAX_TEAMS) {
      teamCount++;
      teamCountDisplay.textContent = teamCount;
      renderTeamNameInputs();
    }
  });

  document.getElementById("btn-to-draft").addEventListener("click", () => {
    teams = [];
    for (let i = 0; i < teamCount; i++) {
      const name = (teamNames[i] && teamNames[i].trim()) || "Team " + (i + 1);
      teams.push({ name, score: 0, color: TEAM_COLORS[i] });
    }
    initDraft();
    showScreen("screen-draft");
  });

  renderTeamNameInputs();

  // ---------------------------------------------------------------
  // DRAFT SCREEN
  // ---------------------------------------------------------------
  const draftPoolEl = document.getElementById("draft-pool");
  const draftTurnIndicator = document.getElementById("draft-turn-indicator");
  const draftProgress = document.getElementById("draft-progress");
  const draftPickedList = document.getElementById("draft-picked-list");
  const btnUndoDraft = document.getElementById("btn-undo-draft");
  const btnToBoard = document.getElementById("btn-to-board");

  function initDraft() {
    shuffledPool = shuffle(CATEGORY_POOL);
    draftOrder = [];
    for (let i = 0; i < NUM_CATEGORIES; i++) {
      draftOrder.push(i % teams.length);
    }
    currentPickNum = 0;
    draftPicks = [];
    renderDraft();
  }

  function renderDraft() {
    // Pool cards
    draftPoolEl.innerHTML = "";
    shuffledPool.forEach((cat, poolIdx) => {
      const pick = draftPicks.find((p) => p.poolIndex === poolIdx);
      const card = document.createElement("div");
      card.className = "draft-card" + (pick ? " picked" : "");
      const label = document.createElement("div");
      label.textContent = cat.title;
      card.appendChild(label);
      if (pick) {
        const pickedBy = document.createElement("span");
        pickedBy.className = "picked-by";
        pickedBy.textContent = "Picked by " + teams[pick.teamIndex].name;
        card.appendChild(pickedBy);
      } else if (currentPickNum < NUM_CATEGORIES) {
        card.addEventListener("click", () => makePick(poolIdx));
      }
      draftPoolEl.appendChild(card);
    });

    draftPickedList.innerHTML = "";
    draftPicks.forEach((p) => {
      const chip = document.createElement("span");
      chip.className = "picked-chip";
      chip.textContent = shuffledPool[p.poolIndex].title;
      draftPickedList.appendChild(chip);
    });

    if (currentPickNum < NUM_CATEGORIES) {
      const teamIdx = draftOrder[currentPickNum];
      draftTurnIndicator.textContent = "On the clock: " + teams[teamIdx].name;
      draftTurnIndicator.style.color = teams[teamIdx].color;
      draftTurnIndicator.style.borderColor = teams[teamIdx].color;
    } else {
      draftTurnIndicator.textContent = "Draft complete!";
      draftTurnIndicator.style.color = "";
    }
    draftProgress.textContent = "Picks: " + currentPickNum + " / " + NUM_CATEGORIES;

    btnUndoDraft.disabled = draftPicks.length === 0;
    btnToBoard.disabled = draftPicks.length < NUM_CATEGORIES;
  }

  function makePick(poolIdx) {
    if (currentPickNum >= NUM_CATEGORIES) return;
    const teamIdx = draftOrder[currentPickNum];
    draftPicks.push({ poolIndex: poolIdx, teamIndex: teamIdx });
    currentPickNum++;
    renderDraft();
  }

  btnUndoDraft.addEventListener("click", () => {
    if (draftPicks.length === 0) return;
    draftPicks.pop();
    currentPickNum--;
    renderDraft();
  });

  btnToBoard.addEventListener("click", () => {
    selectedCategories = draftPicks.map((p) => shuffledPool[p.poolIndex]);
    initBoard();
    showScreen("screen-board");
  });

  // ---------------------------------------------------------------
  // BOARD SCREEN
  // ---------------------------------------------------------------
  const scoreboardEl = document.getElementById("scoreboard");
  const boardGridEl = document.getElementById("board-grid");
  const btnUndoClue = document.getElementById("btn-undo-clue");

  function initBoard() {
    boardUsed = selectedCategories.map(() => new Array(NUM_ROWS).fill(false));
    history = [];
    renderScoreboard();
    renderBoard();
    btnUndoClue.disabled = true;
  }

  function renderScoreboard() {
    scoreboardEl.innerHTML = "";
    teams.forEach((team) => {
      const tile = document.createElement("div");
      tile.className = "score-tile" + (team.score < 0 ? " negative" : "");
      tile.style.borderColor = team.color;
      const nameEl = document.createElement("div");
      nameEl.className = "team-name";
      nameEl.textContent = team.name;
      nameEl.style.color = team.color;
      const scoreEl = document.createElement("div");
      scoreEl.className = "team-score";
      scoreEl.textContent = fmtMoney(team.score);
      tile.appendChild(nameEl);
      tile.appendChild(scoreEl);
      scoreboardEl.appendChild(tile);
    });
  }

  function renderBoard() {
    boardGridEl.innerHTML = "";
    selectedCategories.forEach((cat) => {
      const header = document.createElement("div");
      header.className = "board-cat-header";
      header.textContent = cat.title;
      boardGridEl.appendChild(header);
    });

    for (let row = 0; row < NUM_ROWS; row++) {
      selectedCategories.forEach((cat, catIdx) => {
        const cell = document.createElement("div");
        const used = boardUsed[catIdx][row];
        cell.className = "board-cell" + (used ? " used" : "");
        cell.textContent = used ? "" : "$" + cat.clues[row].value;
        if (!used) {
          cell.addEventListener("click", () => openClue(catIdx, row));
        }
        boardGridEl.appendChild(cell);
      });
    }
  }

  function checkGameComplete() {
    const allUsed = boardUsed.every((col) => col.every((v) => v));
    if (allUsed) {
      showGameOver();
    }
  }

  btnUndoClue.addEventListener("click", () => {
    if (history.length === 0) return;
    const last = history.pop();
    boardUsed[last.catIdx][last.rowIdx] = false;
    if (last.type === "award") {
      teams[last.teamIdx].score -= last.value;
    } else if (last.type === "deduct") {
      teams[last.teamIdx].score += last.value;
    }
    renderScoreboard();
    renderBoard();
    btnUndoClue.disabled = history.length === 0;
  });

  // ---------------------------------------------------------------
  // CLUE MODAL
  // ---------------------------------------------------------------
  const clueModal = document.getElementById("clue-modal");
  const clueCategoryLabel = document.getElementById("clue-category-label");
  const clueValueLabel = document.getElementById("clue-value-label");
  const clueTextEl = document.getElementById("clue-text");
  const clueAnswerEl = document.getElementById("clue-answer");
  const btnReveal = document.getElementById("btn-reveal");
  const clueResolveActions = document.getElementById("clue-resolve-actions");
  const clueTeamSelect = document.getElementById("clue-team-select");
  const teamSelectPrompt = document.getElementById("team-select-prompt");
  const teamSelectButtons = document.getElementById("team-select-buttons");
  const btnAward = document.getElementById("btn-award");
  const btnDeduct = document.getElementById("btn-deduct");
  const btnSkip = document.getElementById("btn-skip");
  const btnBackToResolve = document.getElementById("btn-back-to-resolve");
  const btnCancelClue = document.getElementById("btn-cancel-clue");

  function openClue(catIdx, rowIdx) {
    const cat = selectedCategories[catIdx];
    const clue = cat.clues[rowIdx];
    activeClue = { catIdx, rowIdx, value: clue.value };
    pendingResolveType = null;

    clueCategoryLabel.textContent = cat.title;
    clueValueLabel.textContent = "$" + clue.value;
    clueTextEl.textContent = clue.clue;
    clueAnswerEl.textContent = clue.answer;

    clueAnswerEl.classList.add("hidden");
    btnReveal.classList.remove("hidden");
    clueResolveActions.classList.add("hidden");
    clueTeamSelect.classList.add("hidden");

    clueModal.classList.add("active");
  }

  function closeClueModal() {
    clueModal.classList.remove("active");
    activeClue = null;
    pendingResolveType = null;
  }

  function resolveClue(type, teamIdx) {
    const { catIdx, rowIdx, value } = activeClue;
    boardUsed[catIdx][rowIdx] = true;

    if (type === "award") {
      teams[teamIdx].score += value;
      history.push({ catIdx, rowIdx, type: "award", teamIdx, value });
    } else if (type === "deduct") {
      teams[teamIdx].score -= value;
      history.push({ catIdx, rowIdx, type: "deduct", teamIdx, value });
    } else {
      history.push({ catIdx, rowIdx, type: "skip", teamIdx: null, value: 0 });
    }

    btnUndoClue.disabled = false;
    closeClueModal();
    renderScoreboard();
    renderBoard();
    checkGameComplete();
  }

  btnReveal.addEventListener("click", () => {
    clueAnswerEl.classList.remove("hidden");
    btnReveal.classList.add("hidden");
    clueResolveActions.classList.remove("hidden");
  });

  function openTeamSelect(type) {
    pendingResolveType = type;
    teamSelectPrompt.textContent =
      (type === "award" ? "Award " : "Deduct ") + "$" + activeClue.value + (type === "award" ? " to:" : " from:");

    teamSelectButtons.innerHTML = "";
    teams.forEach((team, idx) => {
      const btn = document.createElement("button");
      btn.textContent = team.name;
      btn.style.background = team.color;
      btn.addEventListener("click", () => resolveClue(type, idx));
      teamSelectButtons.appendChild(btn);
    });

    clueResolveActions.classList.add("hidden");
    clueTeamSelect.classList.remove("hidden");
  }

  btnAward.addEventListener("click", () => openTeamSelect("award"));
  btnDeduct.addEventListener("click", () => openTeamSelect("deduct"));
  btnSkip.addEventListener("click", () => resolveClue("skip", null));

  btnBackToResolve.addEventListener("click", () => {
    clueTeamSelect.classList.add("hidden");
    clueResolveActions.classList.remove("hidden");
  });

  btnCancelClue.addEventListener("click", closeClueModal);
  clueModal.addEventListener("click", (e) => {
    if (e.target === clueModal) closeClueModal();
  });

  // ---------------------------------------------------------------
  // GAME OVER SCREEN
  // ---------------------------------------------------------------
  const finalScoresEl = document.getElementById("final-scores");

  function showGameOver() {
    const sorted = teams.slice().sort((a, b) => b.score - a.score);
    const topScore = sorted[0].score;

    finalScoresEl.innerHTML = "";
    sorted.forEach((team, idx) => {
      const row = document.createElement("div");
      row.className = "final-score-row" + (team.score === topScore ? " winner" : "");
      const left = document.createElement("div");
      left.className = "rank-name";
      left.innerHTML =
        "<span>" + (idx + 1) + ".</span> <span style='color:" + team.color + "'>" + team.name + "</span>" +
        (team.score === topScore ? " 🏆" : "");
      const right = document.createElement("div");
      right.textContent = fmtMoney(team.score);
      row.appendChild(left);
      row.appendChild(right);
      finalScoresEl.appendChild(row);
    });

    showScreen("screen-gameover");
  }

  document.getElementById("btn-new-game").addEventListener("click", () => {
    teamCount = 3;
    teamNames = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6"];
    teamCountDisplay.textContent = teamCount;
    renderTeamNameInputs();
    showScreen("screen-setup");
  });
})();
