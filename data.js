// Category pool for Guys Trip Jeopardy.
// Each category has 5 difficulty tiers (200/400/600/800/1000), each tier
// holding 4 clue variants; one is picked at random when a game starts,
// so replaying the same categories still feels fresh.
//
// Difficulty ladder (kept honest on purpose):
//   200  = instant recall, everyone in the room gets it
//   400  = you have to actually follow the topic, not just recognize it
//   600  = real fan-level specific knowledge (stats, dates, names)
//   800  = deep-cut knowledge; casual fans will whiff
//   1000 = trivia-night stumper; only true experts land this

const CATEGORY_POOL = [
  {
    title: "NFL Legends & Records",
    tiers: [
      [
        { clue: "This QB has won the most Super Bowls in NFL history, with 7 championships.", answer: "Tom Brady" },
        { clue: "This is the number of players on the field for one team during a football play.", answer: "Eleven" },
        { clue: "This NFL team, based in Dallas, is nicknamed 'America's Team.'", answer: "Dallas Cowboys" },
        { clue: "This trophy is awarded each year to the winner of the Super Bowl.", answer: "The Vince Lombardi Trophy" }
      ],
      [
        { clue: "This running back holds the single-season rushing record with 2,105 yards in 1984.", answer: "Eric Dickerson" },
        { clue: "This Kansas City Chiefs quarterback has won multiple Super Bowl MVP awards in the 2020s.", answer: "Patrick Mahomes" },
        { clue: "This running back is the NFL's all-time leading rusher, with over 18,000 career yards.", answer: "Emmitt Smith" },
        { clue: "This 1972 NFL team remains the only one in league history to complete a perfect, undefeated season including the playoffs.", answer: "The Miami Dolphins" }
      ],
      [
        { clue: "This wide receiver holds the NFL career record for receiving yards, with 22,895.", answer: "Jerry Rice" },
        { clue: "This Buffalo Bills quarterback led the team to four consecutive Super Bowl appearances in the early 1990s, losing all four.", answer: "Jim Kelly" },
        { clue: "This legendary Packers quarterback won back-to-back Super Bowls in the late 1960s under coach Vince Lombardi.", answer: "Bart Starr" },
        { clue: "This Seattle Seahawks secondary of the early 2010s, featuring Richard Sherman and Earl Thomas, earned this nickname.", answer: "The Legion of Boom" }
      ],
      [
        { clue: "This Virginia Tech product is the NFL's all-time sack leader, with 200 career sacks.", answer: "Bruce Smith" },
        { clue: "This defensive end set the NFL single-season sack record with 22.5 in 2001.", answer: "Michael Strahan" },
        { clue: "This wide receiver set the NFL single-season touchdown reception record with 23 in 2007, playing for the Patriots.", answer: "Randy Moss" },
        { clue: "This running back set the NFL single-season total touchdown record with 31 in 2006, playing for the Chargers.", answer: "LaDainian Tomlinson" }
      ],
      [
        { clue: "This kicker holds the NFL record for the longest field goal ever made, a 66-yarder in 2021.", answer: "Justin Tucker" },
        { clue: "This quarterback threw a touchdown pass in 54 consecutive games between 2009 and 2012, an NFL record.", answer: "Drew Brees" },
        { clue: "This is the number of consecutive playoff games the Patriots won at one point during their 2001-2004 dynasty run, an NFL record.", answer: "Ten" },
        { clue: "This coach's Chicago Bears defense, nicknamed the '46 Defense,' dominated the 1985 season en route to a Super Bowl title.", answer: "Buddy Ryan" }
      ]
    ]
  },
  {
    title: "ACC Basketball",
    tiers: [
      [
        { clue: "This fierce rivalry pits Duke against this school located just 8 miles away in Chapel Hill.", answer: "The University of North Carolina (UNC)" },
        { clue: "This Duke arena, known for its rowdy student section, is named this.", answer: "Cameron Indoor Stadium" },
        { clue: "This is the number of points a made three-point shot is worth.", answer: "Three" },
        { clue: "This annual, single-elimination tournament to crown the national champion is nicknamed 'March Madness.'", answer: "The NCAA Tournament" }
      ],
      [
        { clue: "This Duke head coach retired in 2022 after winning 5 national titles and over 1,200 career games.", answer: "Mike Krzyzewski (Coach K)" },
        { clue: "This UNC head coach won three national championships before retiring in 2022.", answer: "Roy Williams" },
        { clue: "This ACC school's mascot is the Demon Deacon.", answer: "Wake Forest" },
        { clue: "In 2019, this Duke phenom's shoe exploded during a game against rival North Carolina.", answer: "Zion Williamson" }
      ],
      [
        { clue: "This underdog ACC team, nicknamed the 'Cardiac Pack,' won the 1983 national championship under coach Jim Valvano.", answer: "NC State Wolfpack" },
        { clue: "This nickname refers to the tent city Duke students camp out in for weeks to get tickets to the UNC game.", answer: "Krzyzewskiville (K-Ville)" },
        { clue: "This Duke player hit a legendary buzzer-beating turnaround jumper to beat Kentucky in the 1992 Elite Eight.", answer: "Christian Laettner" },
        { clue: "This ACC school completed a historic worst-to-first turnaround: losing to a 16-seed in 2018, then winning the national title in 2019.", answer: "The University of Virginia (UVA)" }
      ],
      [
        { clue: "This NC State coach, who died of cancer in 1993, gave the famous 'Don't give up... don't ever give up' ESPY speech.", answer: "Jim Valvano" },
        { clue: "This is the nickname of UNC's home arena, officially named after their legendary coach who won two national titles.", answer: "The Dean E. Smith Center (Dean Dome)" },
        { clue: "This is the number of national championships Duke won under Coach K across his entire 42-year tenure.", answer: "Five" },
        { clue: "This former Maryland and current ACC school left the conference for the Big Ten in 2014, ending a decades-old rivalry with Duke and UNC.", answer: "The University of Maryland" }
      ],
      [
        { clue: "This team lost to Duke on Christian Laettner's iconic buzzer-beater in the 1992 Elite Eight, still called simply 'The Shot' in college hoops lore.", answer: "Kentucky" },
        { clue: "This Duke player threw the length-of-court inbound pass that set up Christian Laettner's iconic 1992 buzzer-beater.", answer: "Grant Hill" },
        { clue: "This was the exact final score of the 1992 East Regional Final, decided in overtime by Laettner's shot.", answer: "104-103" },
        { clue: "This UNC coach succeeded Dean Smith and won the 1998 Final Four's #1 overall seed before losing in the national semifinal.", answer: "Bill Guthridge" }
      ]
    ]
  },
  {
    title: "College Football Saturdays",
    tiers: [
      [
        { clue: "This trophy is awarded annually to the most outstanding player in college football.", answer: "The Heisman Trophy" },
        { clue: "This is the number of points a touchdown is worth, before the extra point or two-point try.", answer: "Six" },
        { clue: "This conference, home to Alabama, Georgia, and LSU, is considered the most dominant in college football.", answer: "The SEC" },
        { clue: "Before every home game, Virginia Tech's team runs onto the field at Lane Stadium to this Metallica song.", answer: "\"Enter Sandman\"" }
      ],
      [
        { clue: "This expanded playoff format, introduced in 2024, features this many teams competing for the national championship.", answer: "12 teams" },
        { clue: "This trophy is awarded annually to the winner of the Army-Navy football game.", answer: "The Commander-in-Chief's Trophy" },
        { clue: "This coach won 6 national championships at Alabama before retiring in 2024.", answer: "Nick Saban" },
        { clue: "Clemson and this in-state rival play annually in a game nicknamed 'The Palmetto Bowl.'", answer: "South Carolina (Gamecocks)" }
      ],
      [
        { clue: "This trophy is awarded annually to the winner of the Virginia-Virginia Tech football rivalry game.", answer: "The Commonwealth Cup" },
        { clue: "This former Clemson QB won the Heisman and a national title before going #1 overall to the Jaguars in 2021.", answer: "Trevor Lawrence" },
        { clue: "First awarded in 1903, this is the oldest rivalry trophy in college football, contested by Minnesota and Michigan.", answer: "The Little Brown Jug" },
        { clue: "This is the name of Alabama's beloved elephant mascot.", answer: "Big Al" }
      ],
      [
        { clue: "This underdog's 'Statue of Liberty' trick play won the 2007 Fiesta Bowl in overtime against powerhouse Oklahoma.", answer: "Boise State" },
        { clue: "The annual Florida vs. Georgia game, played at a neutral site in Jacksonville, has earned this famous nickname.", answer: "\"The World's Largest Outdoor Cocktail Party\"" },
        { clue: "This electrifying Virginia Tech quarterback led the Hokies to an undefeated regular season and a berth in the 2000 national championship game against Florida State.", answer: "Michael Vick" },
        { clue: "This is the name of the trophy given annually to the winner of the Texas-Oklahoma rivalry, played at the Cotton Bowl in Dallas.", answer: "The Golden Hat (Red River Rivalry trophy)" }
      ],
      [
        { clue: "This is the number of national championships Nick Saban won across his entire college coaching career, at LSU and Alabama combined.", answer: "Seven" },
        { clue: "This is the only major-conference college football team to finish a season with a perfect record and NOT win a national title in the 2020s' 4-team playoff era, going 13-0 in 2023 before being left out.", answer: "Florida State" },
        { clue: "This Georgia Tech vs. Cumberland College score, 222-0 in 1916, remains the most lopsided game in college football history.", answer: "Georgia Tech (the 222-0 game)" },
        { clue: "This is the name of the award given annually to the best player at each individual position group who also excels in the classroom and community, first given in 1937 alongside the Heisman.", answer: "The Maxwell Award" }
      ]
    ]
  },
  {
    title: "NBA Stars",
    tiers: [
      [
        { clue: "This Lakers legend, nicknamed 'Black Mamba,' won 5 NBA championships.", answer: "Kobe Bryant" },
        { clue: "This is the number of points a three-pointer is worth.", answer: "Three" },
        { clue: "This Golden State Warriors guard is considered the greatest three-point shooter of all time.", answer: "Stephen Curry" },
        { clue: "This trophy is awarded annually to the NBA Finals Most Valuable Player.", answer: "The Bill Russell NBA Finals MVP Award" }
      ],
      [
        { clue: "Nicknamed 'The Big Aristotle,' this dominant center won NBA championships with both the Lakers and the Miami Heat.", answer: "Shaquille O'Neal" },
        { clue: "This Milwaukee Bucks forward, nicknamed the 'Greek Freak,' won back-to-back MVPs in 2019 and 2020.", answer: "Giannis Antetokounmpo" },
        { clue: "This Chicago Bulls legend won 6 NBA titles and 6 Finals MVPs in the 1990s.", answer: "Michael Jordan" },
        { clue: "This Los Angeles Lakers center scored 100 points in a single game in 1962, an NBA record that still stands.", answer: "Wilt Chamberlain" }
      ],
      [
        { clue: "This German-born Dallas Mavericks forward won Finals MVP in 2011 and is considered one of the greatest shooting big men ever.", answer: "Dirk Nowitzki" },
        { clue: "This Boston Celtics center won a record 11 NBA championships during his career in the 1950s and 60s.", answer: "Bill Russell" },
        { clue: "This 'Showtime' Lakers point guard won 5 championships in the 1980s and is considered one of the greatest passers ever.", answer: "Magic Johnson" },
        { clue: "This player passed Kareem Abdul-Jabbar in 2023 to become the NBA's all-time leading scorer.", answer: "LeBron James" }
      ],
      [
        { clue: "This storied NBA rivalry between two historic franchises has met a record 12 times in the NBA Finals.", answer: "The Celtics-Lakers rivalry" },
        { clue: "This center is the only player in NBA history to average more than 50 points per game over a full season, in 1961-62.", answer: "Wilt Chamberlain" },
        { clue: "This point guard holds the NBA single-season assists record, dishing out 1,164 in the 1990-91 season.", answer: "John Stockton" },
        { clue: "This forward holds the NBA record for most career rebounds, with over 23,900, despite standing just 6'9\".", answer: "Wilt Chamberlain" }
      ],
      [
        { clue: "This is the NBA record for most points scored in a single game, set by Wilt Chamberlain in 1962.", answer: "100 points" },
        { clue: "This center holds the NBA record for career rebounding average, at 22.9 per game, over his time with the Celtics and 76ers.", answer: "Bill Russell" },
        { clue: "This is the NBA record for most steals by one player in a single game, a mark shared by several players including Larry Kenon and Kendall Gill.", answer: "11" },
        { clue: "This is the number of consecutive NBA championships the Boston Celtics won from 1959 to 1966, an all-time record for any major American sports league.", answer: "Eight" }
      ]
    ]
  },
  {
    title: "NASCAR & Golf",
    tiers: [
      [
        { clue: "Located in Darlington, South Carolina, this track is nicknamed 'Too Tough to Tame.'", answer: "Darlington Raceway" },
        { clue: "This golf major is held every April at Augusta National Golf Club.", answer: "The Masters" },
        { clue: "This is the number of holes in a standard round of golf.", answer: "18" },
        { clue: "This NASCAR race, held every February, is considered the sport's biggest and most prestigious event.", answer: "The Daytona 500" }
      ],
      [
        { clue: "This golfer holds the record for most career major championships, with 18.", answer: "Jack Nicklaus" },
        { clue: "The winner of the Masters is awarded this famous piece of clothing.", answer: "The Green Jacket" },
        { clue: "Nicknamed 'The Intimidator,' this NASCAR legend died in a crash at the 2001 Daytona 500.", answer: "Dale Earnhardt" },
        { clue: "This golfer, known simply as 'Tiger,' won 15 major championships and dominated the sport in the early 2000s.", answer: "Tiger Woods" }
      ],
      [
        { clue: "This NASCAR track, a 2.5-mile oval in Indiana, also hosts the famous Indy 500.", answer: "Indianapolis Motor Speedway" },
        { clue: "Born in Level Cross, North Carolina, this NASCAR legend won a record-tying 7 Cup Series championships.", answer: "Richard Petty" },
        { clue: "This modern NASCAR driver also won 7 Cup Series championships between 2006 and 2016, tying Richard Petty and Dale Earnhardt.", answer: "Jimmie Johnson" },
        { clue: "Alongside the Masters, U.S. Open, and PGA Championship, this British tournament rounds out golf's four 'majors.'", answer: "The Open Championship (The British Open)" }
      ],
      [
        { clue: "This is Richard Petty's famous nickname, reflecting his stature in the sport.", answer: "\"The King\"" },
        { clue: "This is the term for a golf score of one stroke under par on a hole.", answer: "A birdie" },
        { clue: "This is the number NASCAR legend Dale Earnhardt famously drove throughout his career.", answer: "#3" },
        { clue: "This golfer set the record for lowest 72-hole score relative to par at a major, winning the 1997 Masters by 12 strokes at age 21.", answer: "Tiger Woods" }
      ],
      [
        { clue: "This driver holds the record for most career NASCAR Cup Series wins, with 200 — nearly double the next closest driver.", answer: "Richard Petty" },
        { clue: "This driver is NASCAR's all-time runner-up in career wins, with 105, and famously feuded with Richard Petty throughout the 1960s and 70s.", answer: "David Pearson" },
        { clue: "This golfer's 1953 season, in which he won 3 of the 4 majors he entered (skipping the PGA Championship), is considered one of the greatest seasons in golf history.", answer: "Ben Hogan" },
        { clue: "This is the number of career Cup Series wins Jeff Gordon has, third-most all-time behind Petty and David Pearson.", answer: "93" }
      ]
    ]
  },
  {
    title: "MLB & Baseball",
    tiers: [
      [
        { clue: "This is the number of players on the field for one team's defense in baseball.", answer: "Nine" },
        { clue: "This is the number of strikes it takes for a batter to strike out.", answer: "Three" },
        { clue: "This legendary Yankees slugger, known as 'The Bambino,' is considered one of the greatest players ever.", answer: "Babe Ruth" },
        { clue: "This is the term for a pitcher completing a game in which the opposing team gets zero hits.", answer: "A no-hitter" }
      ],
      [
        { clue: "This MLB team plays its home games at Truist Park in Atlanta.", answer: "The Atlanta Braves" },
        { clue: "This MLB team, based in Washington D.C., won the World Series in 2019.", answer: "The Washington Nationals" },
        { clue: "This San Francisco Giants slugger holds MLB's career home run record with 762, though tainted by steroid allegations.", answer: "Barry Bonds" },
        { clue: "This term describes a batter hitting a single, double, triple, and home run all in the same game.", answer: "The cycle" }
      ],
      [
        { clue: "This Yankees center fielder, known as 'The Yankee Clipper,' had a 56-game hitting streak in 1941 that remains unbroken.", answer: "Joe DiMaggio" },
        { clue: "This San Francisco Giants slugger holds the single-season home run record with 73, set in 2001.", answer: "Barry Bonds" },
        { clue: "This is the term for a pitcher striking out every batter he faces in a single inning, on nine total pitches.", answer: "An immaculate inning" },
        { clue: "This two-way superstar, who pitches and hits at an elite level, won AL MVP in both 2021 and 2023 with the Angels.", answer: "Shohei Ohtani" }
      ],
      [
        { clue: "This pitcher holds the all-time MLB career strikeout record, with over 5,700.", answer: "Nolan Ryan" },
        { clue: "This is the term for a pitcher throwing a game with no hits, no walks, no errors, and no baserunners at all.", answer: "A perfect game" },
        { clue: "This player holds the record for most career hits in MLB history, with 4,256.", answer: "Pete Rose" },
        { clue: "This pitcher threw a record 7 career no-hitters, more than double the next closest pitcher in MLB history.", answer: "Nolan Ryan" }
      ],
      [
        { clue: "This is the record for most home runs in a single game by one player, 4, accomplished by 18 different players including Lou Gehrig and Willie Mays.", answer: "Four" },
        { clue: "This player holds the modern-era single-season record for stolen bases, swiping 130 in 1982.", answer: "Rickey Henderson" },
        { clue: "This is the number of consecutive scoreless innings pitched by Orel Hershiser in 1988, still the MLB record.", answer: "59" },
        { clue: "This shortstop broke Lou Gehrig's 'Iron Man' consecutive games played streak in 1995, finishing his own streak at 2,632 games.", answer: "Cal Ripken Jr." }
      ]
    ]
  },
  {
    title: "Boxing & MMA",
    tiers: [
      [
        { clue: "This organization is the largest and most popular mixed martial arts promotion in the world.", answer: "The UFC (Ultimate Fighting Championship)" },
        { clue: "This legendary boxer, known as 'The Greatest,' famously said 'float like a butterfly, sting like a bee.'", answer: "Muhammad Ali" },
        { clue: "This is the term for winning a boxing or MMA match by knocking your opponent unconscious.", answer: "A knockout (KO)" },
        { clue: "This retired boxer finished his career undefeated at 50-0, with wins over Manny Pacquiao and Conor McGregor.", answer: "Floyd Mayweather Jr." }
      ],
      [
        { clue: "This UFC weight class covers fighters between 205 and 265 pounds, the largest class.", answer: "Heavyweight" },
        { clue: "This Irish UFC fighter became the first to hold two championship belts simultaneously, in 2016.", answer: "Conor McGregor" },
        { clue: "This dominant former UFC light heavyweight and heavyweight champion is nicknamed 'Bones.'", answer: "Jon Jones" },
        { clue: "This heavyweight boxer became the youngest heavyweight champion ever at age 20, in 1986.", answer: "Mike Tyson" }
      ],
      [
        { clue: "This term describes winning a fight when the opponent verbally or physically gives up mid-match.", answer: "A submission (tap out)" },
        { clue: "This female UFC pioneer, nicknamed 'Rowdy,' was the first woman signed to the UFC and a former Olympic judoka.", answer: "Ronda Rousey" },
        { clue: "This 1974 boxing match between Muhammad Ali and George Foreman, held in Zaire, is famously known by this name.", answer: "\"The Rumble in the Jungle\"" },
        { clue: "This Russian UFC lightweight champion retired undefeated at 29-0 in 2020.", answer: "Khabib Nurmagomedov" }
      ],
      [
        { clue: "This 1975 boxing match between Muhammad Ali and Joe Frazier, held in the Philippines, is known by this name.", answer: "\"The Thrilla in Manila\"" },
        { clue: "This is the scoring system judges use in boxing, where the round winner typically gets 10 points and the loser gets 9 or fewer.", answer: "The 10-point must system" },
        { clue: "This UFC middleweight champion went undefeated for nearly seven years and defended his title a record 10 times.", answer: "Anderson Silva" },
        { clue: "This boxer's 1990 upset knockout of Mike Tyson in Tokyo is considered one of the biggest upsets in sports history.", answer: "James 'Buster' Douglas" }
      ],
      [
        { clue: "This is the record for most consecutive successful UFC title defenses across all divisions, set by Demetrious Johnson at 11.", answer: "Eleven" },
        { clue: "This boxer's record of 49-0, unbeaten across his entire heavyweight career in the 1940s-50s, remains an all-time perfect record no heavyweight has matched.", answer: "Rocky Marciano" },
        { clue: "This 1997 fight is infamous for the moment Mike Tyson bit off a piece of this opponent's ear.", answer: "Evander Holyfield" },
        { clue: "This former boxing champion handed Ronda Rousey the first loss of her MMA career, via a stunning head-kick knockout at UFC 193 in 2015.", answer: "Holly Holm" }
      ]
    ]
  },
  {
    title: "Olympics",
    tiers: [
      [
        { clue: "This global sporting event is held every four years, alternating between summer and winter games.", answer: "The Olympics" },
        { clue: "This is the number of interlocking rings in the Olympic logo.", answer: "Five" },
        { clue: "This U.S. city hosted the Summer Olympics in 1996.", answer: "Atlanta, Georgia" },
        { clue: "This country hosted the 2024 Summer Olympics.", answer: "France (Paris)" }
      ],
      [
        { clue: "This American swimmer has won more Olympic medals than anyone in history, with 28.", answer: "Michael Phelps" },
        { clue: "This gymnast won 4 gold medals at the 2016 Rio Olympics and is the most decorated gymnast in U.S. history.", answer: "Simone Biles" },
        { clue: "This Jamaican sprinter, the fastest man in history, holds world records in the 100m and 200m.", answer: "Usain Bolt" },
        { clue: "This country hosted the 2022 Winter Olympics, having also hosted the Summer Games back in 2008.", answer: "China (Beijing)" }
      ],
      [
        { clue: "This U.S. track and field legend won four gold medals at the 1936 Berlin Olympics, defying Nazi propaganda.", answer: "Jesse Owens" },
        { clue: "This U.S. men's basketball squad, featuring Michael Jordan and Magic Johnson, dominated the 1992 Barcelona Olympics.", answer: "The Dream Team" },
        { clue: "This gymnast scored the first perfect 10 in Olympic history, at the 1976 Montreal Olympics.", answer: "Nadia Comaneci" },
        { clue: "This U.S. hockey team's stunning upset of the Soviet Union at the 1980 Lake Placid Olympics is known by this name.", answer: "\"The Miracle on Ice\"" }
      ],
      [
        { clue: "This is the ancient Greek city where the original Olympic Games began in 776 BC.", answer: "Olympia" },
        { clue: "This country has hosted the Summer Olympics more than any other, with London hosting three times.", answer: "The United Kingdom" },
        { clue: "This swimmer won a record 8 gold medals at a single Olympics, the 2008 Beijing Games.", answer: "Michael Phelps" },
        { clue: "This U.S. gymnast famously stuck a vault landing on an injured ankle to clinch team gold at the 1996 Atlanta Olympics.", answer: "Kerri Strug" }
      ],
      [
        { clue: "This is the only city to have hosted the Winter Olympics twice while never hosting the Summer Games, in 1964 and 1976.", answer: "Innsbruck, Austria" },
        { clue: "This is the number of African countries that boycotted the 1976 Montreal Olympics over a New Zealand rugby tour to apartheid South Africa.", answer: "More than two dozen (roughly 25-29 nations)" },
        { clue: "This American decathlete, dubbed the 'World's Greatest Athlete,' won gold at the 1912 Stockholm Olympics before having his medals stripped over amateurism rules (later reinstated).", answer: "Jim Thorpe" },
        { clue: "This is the number of consecutive Olympic gold medals Carl Lewis won in the long jump, spanning four Olympics from 1984 to 1996.", answer: "Four" }
      ]
    ]
  },
  {
    title: "US Geography",
    tiers: [
      [
        { clue: "This is the capital of Virginia.", answer: "Richmond" },
        { clue: "This is the capital of North Carolina.", answer: "Raleigh" },
        { clue: "This is the largest U.S. state by land area.", answer: "Alaska" },
        { clue: "This is the smallest U.S. state by land area.", answer: "Rhode Island" }
      ],
      [
        { clue: "North Carolina's official nickname refers to a substance from pine trees tied to its early naval-stores industry.", answer: "The Tar Heel State" },
        { clue: "This U.S. city, famous for its casinos and nightlife, is nicknamed 'Sin City.'", answer: "Las Vegas" },
        { clue: "This river forms much of the Virginia/Maryland border and flows into the Chesapeake Bay.", answer: "The Potomac River" },
        { clue: "This mountain range runs through Virginia and North Carolina, part of the larger Appalachian chain.", answer: "The Blue Ridge Mountains" }
      ],
      [
        { clue: "This U.S. state has more counties than any other, with 254.", answer: "Texas" },
        { clue: "This is the longest river in the United States, flowing over 2,300 miles from Minnesota to the Gulf of Mexico.", answer: "The Mississippi River" },
        { clue: "This chain of North Carolina barrier islands, a popular vacation spot, is known as the 'Outer Banks.'", answer: "The Outer Banks (OBX)" },
        { clue: "This is the lowest point in North America, located in California's Death Valley.", answer: "Badwater Basin" }
      ],
      [
        { clue: "This is the only place in the U.S. where four states meet at a single point: Arizona, Utah, Colorado, and New Mexico.", answer: "The Four Corners" },
        { clue: "This is the deepest lake in the United States, located in Oregon.", answer: "Crater Lake" },
        { clue: "Eight U.S. presidents were born in this state, more than any other, including Washington, Jefferson, and Madison.", answer: "Virginia" },
        { clue: "This is the highest point east of the Mississippi River, a peak in North Carolina standing 6,684 feet tall.", answer: "Mount Mitchell" }
      ],
      [
        { clue: "This U.S. state has the longest coastline in the country by far, including all its islands and inlets — well ahead of California or Florida.", answer: "Alaska" },
        { clue: "This is the least populous U.S. state capital city, with a population under 10,000.", answer: "Montpelier, Vermont" },
        { clue: "This odd rectangular chunk of southeastern Missouri dips down into Arkansas, forming one of the strangest state borders in the U.S.", answer: "The Missouri Bootheel" },
        { clue: "This is the only state whose borders touch exactly one other U.S. state.", answer: "Maine (borders only New Hampshire)" }
      ]
    ]
  },
  {
    title: "World Geography",
    tiers: [
      [
        { clue: "This is the largest country in the world by land area.", answer: "Russia" },
        { clue: "This African country is home to the Great Pyramids of Giza.", answer: "Egypt" },
        { clue: "This is the largest continent by both land area and population.", answer: "Asia" },
        { clue: "This is the only South American country whose official language is Portuguese.", answer: "Brazil" }
      ],
      [
        { clue: "This European country is famously shaped like a boot.", answer: "Italy" },
        { clue: "This is the longest river in the world, flowing through northeastern Africa.", answer: "The Nile River" },
        { clue: "Located on the border of Nepal and Tibet, this is the tallest mountain in the world.", answer: "Mount Everest" },
        { clue: "This is the smallest country in the world, located entirely within the city of Rome.", answer: "Vatican City" }
      ],
      [
        { clue: "This strait, which runs through the city of Istanbul, separates Europe and Asia.", answer: "The Bosphorus Strait" },
        { clue: "This is the largest hot desert in the world, spanning much of North Africa.", answer: "The Sahara Desert" },
        { clue: "This South American country is home to Machu Picchu, the ancient Incan citadel.", answer: "Peru" },
        { clue: "This is the saltiest lake in the world, bordered by Jordan and Israel.", answer: "The Dead Sea" }
      ],
      [
        { clue: "This is the driest place on Earth, a desert located in northern Chile.", answer: "The Atacama Desert" },
        { clue: "This is one of only two 'doubly landlocked' countries in the world, located in Central Asia.", answer: "Uzbekistan" },
        { clue: "This African country recognizes the most official languages of any country in the world, with 11.", answer: "South Africa" },
        { clue: "This landlocked European country is doubly landlocked, along with Uzbekistan, and sits between Switzerland and Austria.", answer: "Liechtenstein" }
      ],
      [
        { clue: "This is the only country in the world that spans all four hemispheres (north, south, east, and west).", answer: "Kiribati" },
        { clue: "This country has the most time zones of any nation in the world, 12 in total, thanks to its scattered overseas territories.", answer: "France" },
        { clue: "This landlocked country, entirely surrounded by South Africa, is one of only three enclave nations in the world.", answer: "Lesotho" },
        { clue: "This is the world's newest widely recognized country, having gained independence in 2011 after a referendum.", answer: "South Sudan" }
      ]
    ]
  },
  {
    title: "National Parks",
    tiers: [
      [
        { clue: "Located mostly in Wyoming, this national park is famous for the geyser 'Old Faithful.'", answer: "Yellowstone National Park" },
        { clue: "This Arizona national park is a mile-deep canyon carved out by the Colorado River.", answer: "Grand Canyon National Park" },
        { clue: "This is the federal agency that manages America's national parks.", answer: "The National Park Service" },
        { clue: "Straddling the NC/TN border, this is the most visited national park in the U.S.", answer: "Great Smoky Mountains National Park" }
      ],
      [
        { clue: "This California national park is home to towering sequoia trees, including the largest tree on Earth by volume.", answer: "Sequoia National Park" },
        { clue: "This Utah national park is famous for its red-rock hoodoos: tall, thin rock spires.", answer: "Bryce Canyon National Park" },
        { clue: "This scenic 469-mile parkway connects Shenandoah National Park in Virginia to the Great Smoky Mountains.", answer: "The Blue Ridge Parkway" },
        { clue: "This Wyoming national park, just south of Yellowstone, is known for the jagged Teton mountain range.", answer: "Grand Teton National Park" }
      ],
      [
        { clue: "This Virginia national park is known for Skyline Drive and stunning fall foliage.", answer: "Shenandoah National Park" },
        { clue: "The first national park established east of the Mississippi, this Maine park includes Cadillac Mountain.", answer: "Acadia National Park" },
        { clue: "This was the first national park ever established in the world, created in 1872.", answer: "Yellowstone National Park" },
        { clue: "This Alaska national park is the largest in the U.S. system, bigger than the state of Vermont.", answer: "Wrangell-St. Elias National Park" }
      ],
      [
        { clue: "This is the approximate total number of official national parks in the United States as of the mid-2020s.", answer: "63" },
        { clue: "This South Dakota national park is known for its dramatic, eroded rock formations.", answer: "Badlands National Park" },
        { clue: "This is the smallest national park in the U.S. by area, located in St. Louis, Missouri, and centered on a famous stainless steel arch.", answer: "Gateway Arch National Park" },
        { clue: "This national park, the only one located entirely within a single city, is found in Indiana along the shores of Lake Michigan.", answer: "Indiana Dunes National Park" }
      ],
      [
        { clue: "This is the least visited national park in the U.S. system, a remote Alaskan park with fewer than 10,000 visitors most years and no roads leading into it.", answer: "Gates of the Arctic National Park" },
        { clue: "This national park was the first to be designated primarily for its cave system, home to the longest known cave network on Earth.", answer: "Mammoth Cave National Park" },
        { clue: "This is the year Congress passed the Organic Act, formally creating the National Park Service.", answer: "1916" },
        { clue: "This U.S. territory in the South Pacific, not one of the 50 states, is home to the only American national park south of the equator.", answer: "American Samoa" }
      ]
    ]
  },
  {
    title: "Marvel Cinematic Universe",
    tiers: [
      [
        { clue: "This billionaire genius, played by Robert Downey Jr., is also known as Iron Man.", answer: "Tony Stark" },
        { clue: "This green-skinned superhero transforms when he gets angry.", answer: "The Hulk (Bruce Banner)" },
        { clue: "This actor plays Captain America, Steve Rogers, in the MCU.", answer: "Chris Evans" },
        { clue: "This 2008 film introduced Robert Downey Jr. as Tony Stark, kicking off the MCU.", answer: "Iron Man" }
      ],
      [
        { clue: "This 2019 film became, at the time, the highest-grossing movie ever, closing out the 'Infinity Saga.'", answer: "Avengers: Endgame" },
        { clue: "This Wakandan superhero is also known by his royal name, T'Challa.", answer: "Black Panther" },
        { clue: "This actor has played Spider-Man/Peter Parker in the MCU since 2016.", answer: "Tom Holland" },
        { clue: "Played by Josh Brolin, this villain sought to collect all six Infinity Stones.", answer: "Thanos" }
      ],
      [
        { clue: "This is the name of Thor's magical hammer.", answer: "Mjolnir" },
        { clue: "This ragtag team of heroes, including Star-Lord, Gamora, and Rocket, protects the cosmos with plenty of attitude.", answer: "The Guardians of the Galaxy" },
        { clue: "This is the name of the fictional African nation ruled by the Black Panther.", answer: "Wakanda" },
        { clue: "This actress plays Natasha Romanoff, also known as Black Widow.", answer: "Scarlett Johansson" }
      ],
      [
        { clue: "This is the in-universe term for the sprawling, multi-film storyline culminating in 'Avengers: Infinity War' and 'Endgame.'", answer: "The Infinity Saga" },
        { clue: "This organization, introduced in the 'Loki' TV series, polices the multiverse and its timelines.", answer: "The Time Variance Authority (TVA)" },
        { clue: "This is the in-universe nickname for the event in which Thanos erased half of all life in the universe.", answer: "\"The Blip\" (or \"The Snap\")" },
        { clue: "This actress plays Wanda Maximoff, also known as the Scarlet Witch.", answer: "Elizabeth Olsen" }
      ],
      [
        { clue: "This is the name of the fictional metal, found only in Wakanda, used to make Captain America's shield and Black Panther's suit.", answer: "Vibranium" },
        { clue: "This actor plays Ego, the living planet revealed to be Star-Lord's biological father in 'Guardians of the Galaxy Vol. 2.'", answer: "Kurt Russell" },
        { clue: "This is the name of the sorcerer supreme's sanctum in New York City, first introduced in 'Doctor Strange.'", answer: "The Sanctum Sanctorum" },
        { clue: "This is the real name of the villain Killmonger from 'Black Panther,' revealed to be T'Challa's cousin.", answer: "N'Jadaka (Erik Stevens)" }
      ]
    ]
  },
  {
    title: "Sitcoms",
    tiers: [
      [
        { clue: "This NBC mockumentary sitcom follows the staff of the Scranton branch of Dunder Mifflin.", answer: "The Office" },
        { clue: "This sitcom follows six friends living in New York City: Ross, Rachel, Monica, Chandler, Joey, and Phoebe.", answer: "Friends" },
        { clue: "This long-running animated sitcom follows the Simpson family in the town of Springfield.", answer: "The Simpsons" },
        { clue: "Played by Steve Carell, this character was the regional manager of Dunder Mifflin Scranton.", answer: "Michael Scott" }
      ],
      [
        { clue: "This long-running animated sitcom follows the Griffin family of Quahog, Rhode Island.", answer: "Family Guy" },
        { clue: "This sitcom follows a group of socially awkward scientist friends, including Sheldon and Leonard.", answer: "The Big Bang Theory" },
        { clue: "Set in a Philadelphia dive bar, this sitcom follows a group of friends known as 'The Gang.'", answer: "It's Always Sunny in Philadelphia" },
        { clue: "This actor plays Dwight Schrute, the beet-farming assistant to the regional manager.", answer: "Rainn Wilson" }
      ],
      [
        { clue: "This mockumentary sitcom is set in the parks department of the fictional town of Pawnee, Indiana.", answer: "Parks and Recreation" },
        { clue: "This character, played by Danny DeVito, co-owns Paddy's Pub alongside the rest of 'The Gang.'", answer: "Frank Reynolds" },
        { clue: "This is the name of the fictional paper company at the center of The Office.", answer: "Dunder Mifflin" },
        { clue: "This actor plays Jim Halpert, the prankster salesman, in The Office.", answer: "John Krasinski" }
      ],
      [
        { clue: "This actress played Pam Beesly, the receptionist-turned-saleswoman at Dunder Mifflin.", answer: "Jenna Fischer" },
        { clue: "This Parks and Recreation character, played by Nick Offerman, is famous for his love of woodworking, mustaches, and bacon.", answer: "Ron Swanson" },
        { clue: "This actress played Michael Scott's on-again, off-again love interest and eventual wife, Holly Flax.", answer: "Amy Ryan" },
        { clue: "This actor narrates How I Met Your Mother as the voice of 'Future Ted,' though he never appears on screen during the show's original run.", answer: "Bob Saget" }
      ],
      [
        { clue: "This corporation buys out Dunder Mifflin in The Office's later seasons, eventually rebranding the Scranton branch before selling it back.", answer: "Sabre" },
        { clue: "This real person, a friend of creator Larry David's, was the inspiration for the character of Kramer on Seinfeld.", answer: "Kenny Kramer" },
        { clue: "This is Kramer's rarely revealed first name on Seinfeld, kept a running mystery for most of the show before a season 6 episode finally revealed it.", answer: "Cosmo" },
        { clue: "This actor voices both Peter Griffin and Stewie Griffin on Family Guy, along with several other regular characters.", answer: "Seth MacFarlane" }
      ]
    ]
  },
  {
    title: "2000s & 2010s Movies",
    tiers: [
      [
        { clue: "This 2008 film introduced Robert Downey Jr. as Tony Stark, kicking off the MCU.", answer: "Iron Man" },
        { clue: "This 2009 James Cameron film, set on the planet Pandora, became the highest-grossing film ever at the time.", answer: "Avatar" },
        { clue: "This animated Pixar film follows a rat who dreams of becoming a chef in Paris.", answer: "Ratatouille" },
        { clue: "Christian Bale played the Caped Crusader in this Christopher Nolan trilogy.", answer: "The Dark Knight Trilogy (Batman)" }
      ],
      [
        { clue: "This 2010 Christopher Nolan film, starring Leonardo DiCaprio, involves entering people's dreams to plant an idea.", answer: "Inception" },
        { clue: "This 2004 comedy, starring Will Ferrell, follows a San Diego news anchor and his eccentric team.", answer: "Anchorman" },
        { clue: "This Quentin Tarantino film, starring Brad Pitt and Leonardo DiCaprio, is set in 1969 Hollywood.", answer: "Once Upon a Time in Hollywood" },
        { clue: "This 2000 film starring Russell Crowe as a Roman general-turned-gladiator won Best Picture.", answer: "Gladiator" }
      ],
      [
        { clue: "This 2009 comedy follows a group of friends piecing together a wild night after a bachelor party in Las Vegas.", answer: "The Hangover" },
        { clue: "This 2006 Best Picture winner, set in Boston, starred Leonardo DiCaprio and Matt Damon as operatives on opposite sides of the law.", answer: "The Departed" },
        { clue: "This 2014 Christopher Nolan film, starring Matthew McConaughey, follows astronauts traveling through a wormhole to save humanity.", answer: "Interstellar" },
        { clue: "This 2007 Coen Brothers Best Picture winner stars Javier Bardem as a terrifying hitman with a captive bolt pistol.", answer: "No Country for Old Men" }
      ],
      [
        { clue: "This 2000 psychological thriller, directed by Christopher Nolan, tells its story in reverse chronological order.", answer: "Memento" },
        { clue: "This actor finally won his first Best Actor Oscar for the 2015 film 'The Revenant,' after years of nominations.", answer: "Leonardo DiCaprio" },
        { clue: "This 2002 film, directed by Spike Jonze and written by Charlie Kaufman, stars Nicolas Cage playing twin screenwriters.", answer: "Adaptation" },
        { clue: "This 2012 Best Picture winner dramatizes the covert CIA operation to rescue six Americans during the Iran hostage crisis.", answer: "Argo" }
      ],
      [
        { clue: "This 2011 film, directed by Terrence Malick and starring Brad Pitt, controversially won the Palme d'Or despite a famously divisive, abstract narrative about the origins of the universe.", answer: "The Tree of Life" },
        { clue: "This actor starred as a nameless, mostly silent Hollywood stunt driver moonlighting as a getaway driver in 2011's 'Drive.'", answer: "Ryan Gosling" },
        { clue: "This actor won Best Actor for playing ruthless oil prospector Daniel Plainview in 2007's 'There Will Be Blood.'", answer: "Daniel Day-Lewis" },
        { clue: "This 2004 film, starring Kate Winslet and Jim Carrey, involves a company that erases specific memories from people's minds.", answer: "Eternal Sunshine of the Spotless Mind" }
      ]
    ]
  },
  {
    title: "90s & 2000s Cartoons",
    tiers: [
      [
        { clue: "This sponge who lives in a pineapple under the sea works at the Krusty Krab.", answer: "SpongeBob SquarePants" },
        { clue: "This yellow animated family includes Homer, Marge, Bart, Lisa, and Maggie.", answer: "The Simpsons" },
        { clue: "This Nickelodeon show follows a boy genius with a giant brain who builds inventions in his secret lab.", answer: "Jimmy Neutron: Boy Genius" },
        { clue: "This anime follows a ninja named Naruto Uzumaki who dreams of becoming leader of his village.", answer: "Naruto" }
      ],
      [
        { clue: "This Nickelodeon show follows a bald monk boy who must master four elements to save the world.", answer: "Avatar: The Last Airbender" },
        { clue: "This Cartoon Network show follows a boy named Finn and his magical, shapeshifting dog Jake, in the Land of Ooo.", answer: "Adventure Time" },
        { clue: "This anime/manga follows Goku and his friends as they battle increasingly powerful enemies while chasing magic orbs.", answer: "Dragon Ball Z" },
        { clue: "This Cartoon Network show follows a team of teen superheroes including Robin, Starfire, Cyborg, Raven, and Beast Boy.", answer: "Teen Titans" }
      ],
      [
        { clue: "This early 2000s Nickelodeon show follows a boy named Timmy Turner who has two magical godparents.", answer: "The Fairly OddParents" },
        { clue: "This Cartoon Network show follows three friends — Ed, Edd, and Eddy — who scheme to earn money from the neighborhood kids to buy jawbreakers.", answer: "Ed, Edd n Eddy" },
        { clue: "This anime follows brothers Edward and Alphonse Elric, searching for the Philosopher's Stone after a failed alchemy experiment.", answer: "Fullmetal Alchemist" },
        { clue: "This late-90s Cartoon Network show follows a boy with a secret laboratory hidden behind his bookcase, and his ditzy older sister Dee Dee.", answer: "Dexter's Laboratory" }
      ],
      [
        { clue: "This is the name of the fictional village where Naruto and his fellow ninja live.", answer: "The Hidden Leaf Village (Konohagakure)" },
        { clue: "This 2000s Adult Swim show, known for its absurdist humor, follows a floating meatball, a shapeshifting milkshake, and a lazy box of fries.", answer: "Aqua Teen Hunger Force" },
        { clue: "This is the name of the underwater city where SpongeBob SquarePants lives.", answer: "Bikini Bottom" },
        { clue: "This is the name of Timmy Turner's fairy godfather on The Fairly OddParents, voiced with a dopey, childlike personality.", answer: "Cosmo" }
      ],
      [
        { clue: "These are the names of the two Water Tribe siblings, a waterbending girl and her non-bending brother, who accompany Aang throughout Avatar: The Last Airbender.", answer: "Katara and Sokka" },
        { clue: "This is the name of Zuko's father, the primary antagonist of Avatar: The Last Airbender's first two seasons, who eventually becomes Fire Lord.", answer: "Ozai" },
        { clue: "This is the name of the robotic host who introduced episodes on Cartoon Network's action-anime programming block, Toonami, which launched in 1997.", answer: "TOM (Toonami Operations Module)" },
        { clue: "This is the name of the organization of ninja who hunt down and eliminate tailed-beast hosts in Naruto, of which Itachi Uchiha is a member.", answer: "Akatsuki" }
      ]
    ]
  },
  {
    title: "Hip-Hop & Country",
    tiers: [
      [
        { clue: "This Detroit rapper, known as 'Slim Shady,' starred in the 2002 film '8 Mile.'", answer: "Eminem" },
        { clue: "Known as 'The Man in Black,' this country legend sang 'Ring of Fire' and 'Folsom Prison Blues.'", answer: "Johnny Cash" },
        { clue: "This rapper and entrepreneur founded Roc Nation and is married to Beyoncé.", answer: "Jay-Z" },
        { clue: "This Compton rapper released the critically acclaimed albums 'good kid, m.A.A.d city' and 'DAMN.'", answer: "Kendrick Lamar" }
      ],
      [
        { clue: "This country duo, made up of Brian Kelley and Tyler Hubbard, had hits like 'Cruise' and 'Meant to Be.'", answer: "Florida Georgia Line" },
        { clue: "This country superstar's hits include 'Friends in Low Places,' making him one of the best-selling solo artists ever.", answer: "Garth Brooks" },
        { clue: "This rapper, born Marshall Mathers, was discovered and signed by Dr. Dre in the late 1990s.", answer: "Eminem" },
        { clue: "This female country star broke crossover records with albums like 'Fearless' and 'Red' before moving into pop.", answer: "Taylor Swift" }
      ],
      [
        { clue: "This Atlanta rap duo, made up of Big Boi and Andre 3000, blended Southern rap with funk and soul.", answer: "OutKast" },
        { clue: "This late rapper, known for 'Juicy' and 'Hypnotize,' was a leading figure in East Coast hip-hop before his 1997 murder.", answer: "The Notorious B.I.G." },
        { clue: "This country artist, born in Georgia, is known for hits like 'Chicken Fried' as frontman of his namesake band.", answer: "Zac Brown" },
        { clue: "This West Coast rapper, killed in 1996, released the iconic album 'All Eyez on Me.'", answer: "Tupac Shakur" }
      ],
      [
        { clue: "This rapper's real name is Aubrey Drake Graham, and he got his start as an actor on the Canadian teen drama 'Degrassi.'", answer: "Drake" },
        { clue: "This is the record label, co-founded by Dr. Dre and Suge Knight in 1991, that was home to Tupac and Snoop Dogg.", answer: "Death Row Records" },
        { clue: "This classic country outlaw, along with Willie Nelson, Kris Kristofferson, and Johnny Cash, formed the supergroup 'The Highwaymen.'", answer: "Waylon Jennings" },
        { clue: "This rapper's diss track 'Hit 'Em Up,' aimed at The Notorious B.I.G. and Bad Boy Records, escalated hip-hop's East Coast-West Coast rivalry in 1996.", answer: "Tupac Shakur" }
      ],
      [
        { clue: "This is the name of the Compton street gang affiliation frequently referenced in Dr. Dre and Snoop Dogg's early G-funk era lyrics and clothing (the 'blue' one).", answer: "The Crips" },
        { clue: "This producer, who discovered Eminem and signed him to Aftermath Entertainment, also launched the careers of Snoop Dogg and 50 Cent.", answer: "Dr. Dre" },
        { clue: "This is the title of Johnny Cash's famous 1968 live album, recorded at a California prison and considered one of the greatest live albums ever.", answer: "At Folsom Prison" },
        { clue: "This female rapper, part of the Wu-Tang Clan-adjacent scene, released 'The Score' with her group before a hugely successful solo career and the album 'Miseducation.'", answer: "Lauryn Hill" }
      ]
    ]
  },
  {
    title: "Classic Rock",
    tiers: [
      [
        { clue: "Formed in Liverpool and made up of Lennon, McCartney, Harrison, and Starr, this is often called the most influential band ever.", answer: "The Beatles" },
        { clue: "This British rock band, fronted by Freddie Mercury, performed 'Bohemian Rhapsody.'", answer: "Queen" },
        { clue: "This band's lead singer, Mick Jagger, has fronted the group since 1962, alongside guitarist Keith Richards.", answer: "The Rolling Stones" },
        { clue: "Fronted by Axl Rose, this American rock band released 'Appetite for Destruction' in 1987.", answer: "Guns N' Roses" }
      ],
      [
        { clue: "This Southern rock band from Jacksonville, Florida is known for 'Free Bird' and 'Sweet Home Alabama.'", answer: "Lynyrd Skynyrd" },
        { clue: "This legendary guitarist, known for 'Purple Haze' and 'Voodoo Child,' died in 1970 at age 27.", answer: "Jimi Hendrix" },
        { clue: "Often called the greatest rock song ever, this Led Zeppelin epic includes the line 'there's a lady who's sure all that glitters is gold.'", answer: "\"Stairway to Heaven\"" },
        { clue: "This English rock band, known for the album 'Dark Side of the Moon,' is famous for its elaborate live shows and prog-rock sound.", answer: "Pink Floyd" }
      ],
      [
        { clue: "This 1969 music festival in upstate New York became a defining moment of the counterculture movement.", answer: "Woodstock" },
        { clue: "This American rock band, fronted by Eddie Vedder, emerged from Seattle's grunge scene with the 1991 album 'Ten.'", answer: "Pearl Jam" },
        { clue: "This band's lead singer, Kurt Cobain, died in 1994, cementing the group's legacy as grunge pioneers.", answer: "Nirvana" },
        { clue: "This Eagles song, often cited as one of the greatest of all time, features the lyric 'you can check out any time you like, but you can never leave.'", answer: "\"Hotel California\"" }
      ],
      [
        { clue: "This is the nickname for the group of legendary musicians, including Hendrix, Joplin, Morrison, and Cobain, who all died at age 27.", answer: "The 27 Club" },
        { clue: "This Led Zeppelin drummer, known for his powerful, distinctive style, died in 1980, leading the band to disband.", answer: "John Bonham" },
        { clue: "This is the name of The Beatles' final recorded studio album, famous for its crosswalk cover photo.", answer: "Abbey Road" },
        { clue: "This double album, released by Pink Floyd in 1979, tells the story of a rock star's descent into isolation and features 'Another Brick in the Wall.'", answer: "The Wall" }
      ],
      [
        { clue: "This is the name of the record label founded by The Beatles in 1968, home to Apple Corps and originally intended to give the band creative control.", answer: "Apple Records" },
        { clue: "This guitarist, a member of Cream and later a solo artist, is known by the nickname 'Slowhand' and the hit 'Layla.'", answer: "Eric Clapton" },
        { clue: "This is the title of the 1973 Pink Floyd album that stayed on the Billboard 200 chart for a record 900-plus consecutive weeks.", answer: "The Dark Side of the Moon" },
        { clue: "This drummer for The Who died in 1978 at age 32 after years of struggles with substance abuse, one of rock's most notoriously wild performers.", answer: "Keith Moon" }
      ]
    ]
  },
  {
    title: "2010s Pop & Alternative",
    tiers: [
      [
        { clue: "This pop star, born Stefani Germanotta, is known by this stage name and hits like 'Poker Face' and 'Bad Romance.'", answer: "Lady Gaga" },
        { clue: "This artist released the album '1989' in 2014, marking her full transition into pop music.", answer: "Taylor Swift" },
        { clue: "This English singer-songwriter's albums are titled with symbols like '+,' '×,' and '÷.'", answer: "Ed Sheeran" },
        { clue: "This Canadian singer got his start on YouTube as a teenager before becoming a global pop star with hits like 'Baby.'", answer: "Justin Bieber" }
      ],
      [
        { clue: "This British-Irish boy band, formed on the X Factor in 2010, included Harry Styles and Niall Horan.", answer: "One Direction" },
        { clue: "This American rock band, fronted by Dan Reynolds, is known for hits like 'Radioactive' and 'Believer.'", answer: "Imagine Dragons" },
        { clue: "This Barbadian singer's hits include 'Umbrella,' 'Diamonds,' and 'Work,' and she also built a major beauty brand.", answer: "Rihanna" },
        { clue: "This duo, made up of Tyler Joseph and Josh Dun, blends genres and had a massive hit with 'Stressed Out.'", answer: "Twenty One Pilots" }
      ],
      [
        { clue: "This song, by Gotye featuring Kimbra, was inescapable on the radio in 2011 and 2012.", answer: "\"Somebody That I Used to Know\"" },
        { clue: "This singer's 2011 album '21' swept the Grammys and included the hit 'Rolling in the Deep.'", answer: "Adele" },
        { clue: "This American electronic music duo, known for wearing robot helmets, released 'Random Access Memories' in 2013.", answer: "Daft Punk" },
        { clue: "This indie-folk band, fronted by Marcus Mumford, broke out with the hit 'I Will Wait' and the album 'Babel.'", answer: "Mumford & Sons" }
      ],
      [
        { clue: "This song by Lorde, released when she was just 16, became a massive hit in 2013 critiquing materialism in pop culture.", answer: "\"Royals\"" },
        { clue: "This is the massive California music festival, held in the desert each April, that has become a cultural phenomenon.", answer: "Coachella" },
        { clue: "This artist's 2016 album 'Lemonade' was a visual album exploring infidelity and Black womanhood.", answer: "Beyoncé" },
        { clue: "This British band, fronted by Chris Martin, released the 2008 album 'Viva la Vida or Death and All His Friends.'", answer: "Coldplay" }
      ],
      [
        { clue: "This is the name of Kanye West's 2010 album, widely considered one of the greatest hip-hop albums of the decade, shortened in casual reference to 'MBDTF.'", answer: "My Beautiful Dark Twisted Fantasy" },
        { clue: "This singer's 2015 album '25' sold over 3 million copies in its first week in the U.S., the best sales week for any album in over a decade.", answer: "Adele" },
        { clue: "This artist, born Abel Tesfaye, performs under a stage name that's simply 'The Weekend' with the middle 'e' dropped.", answer: "The Weeknd" },
        { clue: "This is the record label, co-founded by Jay-Z in 2008, that eventually signed artists like Rihanna and J. Cole.", answer: "Roc Nation" }
      ]
    ]
  },
  {
    title: "Beer & Bars",
    tiers: [
      [
        { clue: "This is the best-selling domestic light beer in the United States, made by Anheuser-Busch.", answer: "Bud Light" },
        { clue: "This is the term for beer served directly from a keg rather than a bottle or can.", answer: "Draft (draught) beer" },
        { clue: "This is the generic term for a mixed alcoholic drink, like a Moscow Mule or an Old Fashioned.", answer: "A cocktail" },
        { clue: "Held annually in Munich, this is the world's largest beer festival.", answer: "Oktoberfest" }
      ],
      [
        { clue: "This hoppy, bitter beer style is often abbreviated IPA.", answer: "India Pale Ale" },
        { clue: "This popular Mexican beer is traditionally served with a lime wedge in the neck of the bottle.", answer: "Corona" },
        { clue: "This is the process of making beer by fermenting grains, most commonly barley.", answer: "Brewing" },
        { clue: "This is the term for the foam that forms on top of a freshly poured beer.", answer: "The head" }
      ],
      [
        { clue: "This Belgian style of high-alcohol, bottle-conditioned ale includes brands like Chimay and Westmalle.", answer: "Trappist ale (Belgian ale)" },
        { clue: "Founded in 2008 in Roseland, Virginia, this Blue Ridge Mountains brewery makes 'Gonzo Imperial Porter.'", answer: "Devils Backbone Brewing Company" },
        { clue: "This dark, roasted beer style, similar to a porter but typically stronger, includes varieties like 'Imperial' and 'Milk.'", answer: "Stout" },
        { clue: "This is the alcohol content range, by volume, that most domestic light beers fall into.", answer: "Roughly 4-5% ABV" }
      ],
      [
        { clue: "Beer brewing is believed to have originated roughly 5,000 years ago in this ancient region, part of modern-day Iraq.", answer: "Sumer (Mesopotamia)" },
        { clue: "This German beer purity law, dating to 1516, restricted beer ingredients to just water, barley, and hops.", answer: "The Reinheitsgebot" },
        { clue: "This is the world's best-selling beer brand by volume, brewed almost entirely for the Chinese market.", answer: "Snow Beer" },
        { clue: "This measurement, expressed on a scale, indicates how bitter a beer tastes based on its hop content.", answer: "IBU (International Bitterness Units)" }
      ],
      [
        { clue: "This is the term for the layer of dead yeast cells that settles at the bottom of a fermentation vessel or bottle-conditioned beer.", answer: "Trub (or lees/sediment)" },
        { clue: "This monk-brewed Belgian abbey, one of only about a dozen certified 'Trappist' breweries in the world, produces the highly sought-after Westvleteren 12.", answer: "Sint-Sixtusabdij van Westvleteren (Westvleteren Abbey)" },
        { clue: "This is the term for a beer style aged in bourbon barrels, picking up notes of vanilla, oak, and caramel from the wood.", answer: "A barrel-aged (bourbon barrel-aged) beer" },
        { clue: "This ancient Mesopotamian poem, one of the oldest known pieces of literature, includes one of the earliest written references to beer being used to civilize a wild man.", answer: "The Epic of Gilgamesh" }
      ]
    ]
  },
  {
    title: "Video Games",
    tiers: [
      [
        { clue: "This Italian plumber is Nintendo's most famous mascot.", answer: "Mario" },
        { clue: "This battle royale game, released in 2017, became a cultural phenomenon known for its dances and 'Victory Royales.'", answer: "Fortnite" },
        { clue: "This blue, speedy hedgehog is Sega's mascot.", answer: "Sonic the Hedgehog" },
        { clue: "This military first-person shooter franchise includes 'Modern Warfare' and 'Black Ops.'", answer: "Call of Duty" }
      ],
      [
        { clue: "Made by Rockstar, this open-world game series is set in fictional cities like Los Santos and Liberty City.", answer: "Grand Theft Auto" },
        { clue: "This sandbox building game, where players mine blocks and build structures, is one of the best-selling games ever made.", answer: "Minecraft" },
        { clue: "This 1998 Nintendo 64 classic has Link traveling through time and is often called one of the greatest games ever made.", answer: "The Legend of Zelda: Ocarina of Time" },
        { clue: "This battle royale game, developed by a South Korean studio, popularized the genre with 'chicken dinner' wins.", answer: "PUBG (PlayerUnknown's Battlegrounds)" }
      ],
      [
        { clue: "This multiplayer online battle arena game, made by Riot Games, is one of the most-played esports titles ever.", answer: "League of Legends" },
        { clue: "This 2023 Nintendo Switch game, an open-world sequel, follows Link exploring the skies above Hyrule.", answer: "The Legend of Zelda: Tears of the Kingdom" },
        { clue: "This Bethesda role-playing game franchise, known for open-world fantasy exploration, includes the game 'Skyrim.'", answer: "The Elder Scrolls" },
        { clue: "This annual esports tournament for Dota 2, hosted by Valve, is famous for its enormous, crowdfunded prize pools.", answer: "The International" }
      ],
      [
        { clue: "This 1972 game, featuring two paddles and a ball, is widely considered the first commercially successful video game.", answer: "Pong" },
        { clue: "This is the best-selling video game of all time, with over 300 million copies sold across all its versions.", answer: "Minecraft" },
        { clue: "This Japanese video game designer created both the Mario and The Legend of Zelda franchises for Nintendo.", answer: "Shigeru Miyamoto" },
        { clue: "This 1993 first-person shooter by id Software, a sequel to 'Wolfenstein 3D,' is widely credited with popularizing the entire FPS genre.", answer: "Doom" }
      ],
      [
        { clue: "This is the console generally credited with causing the North American video game industry crash of 1983, due to a flood of low-quality titles.", answer: "The Atari 2600" },
        { clue: "This is the name of the infamous 1982 movie tie-in game, so poorly received that unsold cartridges were reportedly buried in a New Mexico landfill.", answer: "E.T. the Extra-Terrestrial" },
        { clue: "This is the real name of the character known as 'Master Chief' in the Halo video game series.", answer: "John-117" },
        { clue: "This game designer, credited as the 'father of the video game industry,' created Pong and founded Atari in 1972.", answer: "Nolan Bushnell" }
      ]
    ]
  },
  {
    title: "Fast Food",
    tiers: [
      [
        { clue: "This fast food chain's mascot is a red-haired clown named Ronald.", answer: "McDonald's" },
        { clue: "This burger chain's longtime slogan is 'Have it Your Way.'", answer: "Burger King" },
        { clue: "This chain is famous for chicken sandwiches, waffle fries, and being closed every Sunday.", answer: "Chick-fil-A" },
        { clue: "This Tex-Mex chain's menu includes the 'Baja Blast' Mountain Dew flavor, exclusive to its restaurants.", answer: "Taco Bell" }
      ],
      [
        { clue: "This sandwich chain's old slogan was 'Eat Fresh,' and its former spokesperson Jared left amid scandal.", answer: "Subway" },
        { clue: "This fried chicken chain, based in Louisville, Kentucky, is known by initials standing for a Southern state.", answer: "KFC (Kentucky Fried Chicken)" },
        { clue: "Founded in Greensboro, NC in 1989, this chain is famous for its cheap 'trays' and dozens of milkshake flavors.", answer: "Cook Out" },
        { clue: "This burger chain, known for small square-shaped patties and being open 24/7, was founded in 1921 in Wichita, Kansas.", answer: "White Castle" }
      ],
      [
        { clue: "This chain's founder, Dave Thomas, named the restaurant after his daughter.", answer: "Wendy's" },
        { clue: "This fried chicken and biscuits chain was founded in Charlotte, North Carolina in 1977.", answer: "Bojangles" },
        { clue: "This West Coast favorite burger chain is known for its 'Double-Double' and 'animal style' fries.", answer: "In-N-Out Burger" },
        { clue: "This is the year McDonald's was founded by the McDonald brothers in San Bernardino, California.", answer: "1940" }
      ],
      [
        { clue: "This is the name commonly used for the special sauce found on a Big Mac.", answer: "Big Mac Sauce" },
        { clue: "This is the number of herbs and spices in KFC's famous 'secret recipe,' according to company lore.", answer: "11" },
        { clue: "This businessman bought the McDonald brothers' restaurant concept in the 1950s and turned it into a global franchise empire.", answer: "Ray Kroc" },
        { clue: "This chain's founder, Colonel Harland Sanders, first developed his famous fried chicken recipe at a gas station in this state.", answer: "Kentucky (Corbin, Kentucky)" }
      ],
      [
        { clue: "This is the founder of Cook Out, who started the chain in Greensboro, NC in 1989 and has kept it a notoriously private company ever since.", answer: "Allan Levine" },
        { clue: "This is the year In-N-Out Burger was founded in Baldwin Park, California, making it one of the oldest surviving fast food drive-thru chains.", answer: "1948" },
        { clue: "This chain's name comes from the initials 'R.B.,' standing for the Raffel Brothers who founded it in 1964; it's known today for roast beef sandwiches.", answer: "Arby's" },
        { clue: "This is the McDonald brothers' first name pairing — the two brothers whose original restaurant Ray Kroc later bought out entirely.", answer: "Richard and Maurice McDonald" }
      ]
    ]
  },
  {
    title: "Presidents & U.S. History",
    tiers: [
      [
        { clue: "This Virginia plantation owner and Founding Father was the first President of the United States.", answer: "George Washington" },
        { clue: "This document, adopted in 1776, declared the American colonies' independence from Britain.", answer: "The Declaration of Independence" },
        { clue: "This U.S. president is depicted on the one-dollar bill.", answer: "George Washington" },
        { clue: "This U.S. president from Virginia was the primary author of the Declaration of Independence.", answer: "Thomas Jefferson" }
      ],
      [
        { clue: "This war, fought between the Union and Confederacy from 1861 to 1865, led to the end of slavery in the United States.", answer: "The Civil War" },
        { clue: "This U.S. president resigned from office in 1974 due to the Watergate scandal.", answer: "Richard Nixon" },
        { clue: "This is the only U.S. president to serve two non-consecutive terms, as the 22nd and 24th president.", answer: "Grover Cleveland" },
        { clue: "This U.S. president, who served during the Great Depression and WWII, was elected to four terms before term limits existed.", answer: "Franklin D. Roosevelt" }
      ],
      [
        { clue: "This U.S. president was assassinated in 1865, just days after the Civil War effectively ended.", answer: "Abraham Lincoln" },
        { clue: "This amendment to the Constitution granted women the right to vote in 1920.", answer: "The 19th Amendment" },
        { clue: "This U.S. president was the youngest ever elected to the office, at age 43, and was assassinated in Dallas in 1963.", answer: "John F. Kennedy" },
        { clue: "Eight U.S. presidents were born in this state, more than any other, including Washington, Jefferson, and Madison.", answer: "Virginia" }
      ],
      [
        { clue: "This is the only U.S. president to also serve as Chief Justice of the Supreme Court after leaving office.", answer: "William Howard Taft" },
        { clue: "This is the shortest presidency in U.S. history, lasting just 31 days, after the president fell ill shortly after inauguration.", answer: "William Henry Harrison" },
        { clue: "This U.S. president signed the Emancipation Proclamation in 1863, declaring enslaved people in Confederate states to be free.", answer: "Abraham Lincoln" },
        { clue: "This is the only U.S. president never elected to either the presidency or the vice presidency, having ascended to both offices through resignations.", answer: "Gerald Ford" }
      ],
      [
        { clue: "This is the youngest person to ever become U.S. president, taking office at age 42 after William McKinley's assassination in 1901.", answer: "Theodore Roosevelt" },
        { clue: "This is the only U.S. president to have earned a PhD, having received his doctorate from Johns Hopkins University before entering politics.", answer: "Woodrow Wilson" },
        { clue: "This 1803 land deal, negotiated by Thomas Jefferson, doubled the size of the United States for roughly $15 million.", answer: "The Louisiana Purchase" },
        { clue: "This is the name of the law, passed in 1798 under John Adams, that made it a crime to criticize the federal government, widely seen as an early attack on free speech.", answer: "The Sedition Act (part of the Alien and Sedition Acts)" }
      ]
    ]
  },
  {
    title: "Internet & Memes",
    tiers: [
      [
        { clue: "This social media app, known for short-form video and dances, was founded by the Chinese company ByteDance.", answer: "TikTok" },
        { clue: "This term describes a piece of media, often an image with text, that spreads rapidly online and gets endlessly remixed.", answer: "A meme" },
        { clue: "This video-sharing platform, owned by Google, is home to creators making everything from vlogs to gaming content.", answer: "YouTube" },
        { clue: "This 2012 viral music video, featuring a horse-riding dance move by Korean artist PSY, became a global phenomenon.", answer: "\"Gangnam Style\"" }
      ],
      [
        { clue: "This photo and video-sharing social platform, bought by Facebook in 2012, uses a camera icon as its logo.", answer: "Instagram" },
        { clue: "This short-form video app, known for looping 6-second clips, launched in 2013 and shut down in 2017.", answer: "Vine" },
        { clue: "This meme format features a man looking back at another woman while his girlfriend looks on in disgust.", answer: "\"Distracted Boyfriend\"" },
        { clue: "This term describes online content specifically designed to spread rapidly and be widely shared.", answer: "Viral content" }
      ],
      [
        { clue: "This 2016 meme, depicting a green cartoon frog, became associated with various online communities and controversies.", answer: "Pepe the Frog" },
        { clue: "This chat and voice platform, popular with gamers, launched in 2015 and organizes its communities into 'servers.'", answer: "Discord" },
        { clue: "This 2007 meme involves tricking someone into clicking a link that plays a certain Rick Astley song.", answer: "Rickrolling" },
        { clue: "This meme format uses a stock photo of a woman yelling next to a confused white cat sitting at a dinner table.", answer: "\"Woman Yelling at a Cat\"" }
      ],
      [
        { clue: "This is the name of the app that preceded and was eventually rebranded into 'X' after Elon Musk's 2022 acquisition.", answer: "Twitter" },
        { clue: "This is the term for a fake or automated social media account, often used to manipulate opinion or spread spam.", answer: "A bot" },
        { clue: "This slang term for something embarrassingly awkward or hard to watch became one of the most-used internet words of the 2010s.", answer: "\"Cringe\"" },
        { clue: "This 2010s meme format, showing a small dog with a Comic Sans-style inner monologue in broken English (like 'such wow'), is based on a real Shiba Inu.", answer: "\"Doge\"" }
      ],
      [
        { clue: "This is the name of the viral 2014 challenge in which participants filmed themselves dumping ice water on their heads to raise money and awareness for ALS.", answer: "The Ice Bucket Challenge" },
        { clue: "This is the year the very first YouTube video, titled 'Me at the zoo,' was uploaded by co-founder Jawed Karim.", answer: "2005" },
        { clue: "This is the term for a mock-inspirational poster, using stock photography and an ironic, deflating caption, popularized online by sites like Despair.com in the early 2000s.", answer: "A demotivational poster" },
        { clue: "This is the name of the original 2003 message board, founded by Christopher Poole, credited with originating countless internet memes and meme culture itself.", answer: "4chan" }
      ]
    ]
  },
  {
    title: "Cars & Trucks",
    tiers: [
      [
        { clue: "This Michigan city is historically known as the center of the American auto industry, nicknamed 'Motor City.'", answer: "Detroit" },
        { clue: "This company, founded by Henry Ford, revolutionized manufacturing with the moving assembly line.", answer: "Ford Motor Company" },
        { clue: "This is the term for a vehicle that runs on electricity instead of gasoline.", answer: "An electric vehicle (EV)" },
        { clue: "This American company makes the Corvette, Camaro, and Silverado truck.", answer: "Chevrolet" }
      ],
      [
        { clue: "This Jeep model, known for its boxy shape and removable doors and roof, is an off-road icon.", answer: "The Jeep Wrangler" },
        { clue: "This electric car company, founded in part by Elon Musk, makes the Model 3, Model S, and Cybertruck.", answer: "Tesla" },
        { clue: "This Ford pickup truck has been the best-selling vehicle in America for decades.", answer: "The Ford F-150" },
        { clue: "This German luxury car brand's logo features a three-pointed star.", answer: "Mercedes-Benz" }
      ],
      [
        { clue: "This is the term for a car race where drivers compete in a straight line over a short, fixed distance, often a quarter mile.", answer: "Drag racing" },
        { clue: "This Italian sports car brand, known for its prancing horse logo, makes models like the F8 and Roma.", answer: "Ferrari" },
        { clue: "This is the term for replacing a car's stock exhaust system to produce a louder, more aggressive sound.", answer: "An aftermarket exhaust" },
        { clue: "This Japanese car company's 'Skyline GT-R' became a cult favorite thanks to its appearances in 'The Fast and the Furious' films.", answer: "Nissan" }
      ],
      [
        { clue: "This is the approximate top speed, in miles per hour, of the Bugatti Chiron Super Sport, one of the fastest production cars ever built.", answer: "Roughly 300+ mph" },
        { clue: "This is the year the first Ford Mustang was released, launching the American 'pony car' era.", answer: "1964" },
        { clue: "This is the term for an engine configuration where eight cylinders are arranged in a 'V' shape.", answer: "A V8 engine" },
        { clue: "This company, an American icon, filed for bankruptcy in 2009 during the financial crisis before being bailed out by the federal government.", answer: "General Motors (accept Chrysler as GM and Chrysler both received bailouts)" }
      ],
      [
        { clue: "This is the name of Toyota's luxury vehicle division, launched in 1989 to compete with Mercedes-Benz and BMW.", answer: "Lexus" },
        { clue: "This 1908 vehicle, mass-produced on Ford's moving assembly line starting in 1913, is often credited as the first car affordable to the average American family.", answer: "The Ford Model T" },
        { clue: "This 1965 U.S. federal law set the first national air pollution standards for new motor vehicles, laying the groundwork for later emissions regulations.", answer: "The Motor Vehicle Air Pollution Control Act" },
        { clue: "This Japanese automaker's 'Land Cruiser' nameplate has been in continuous production longer than any other in the company's history, dating to 1951.", answer: "Toyota" }
      ]
    ]
  }
];
