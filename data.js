// Category pool for Guys Trip Jeopardy.
// Each category has 5 difficulty tiers (200/400/600/800/1000).
// Each tier holds 3 clue variants; one is picked at random when a game
// starts, so replaying the same categories still feels fresh.

const CATEGORY_POOL = [
  {
    title: "NFL Legends & Records",
    tiers: [
      [
        { clue: "This QB has won the most Super Bowls in NFL history, with 7 championships.", answer: "Tom Brady" },
        { clue: "This position on offense is responsible for throwing the ball down the field.", answer: "Quarterback" },
        { clue: "This NFL team, based in Dallas, is nicknamed 'America's Team.'", answer: "Dallas Cowboys" }
      ],
      [
        { clue: "This running back holds the single-season rushing record with 2,105 yards in 1984.", answer: "Eric Dickerson" },
        { clue: "This Kansas City Chiefs quarterback has won multiple Super Bowl MVP awards in the 2020s.", answer: "Patrick Mahomes" },
        { clue: "This legendary Packers quarterback won back-to-back Super Bowls in the late 1960s under coach Vince Lombardi.", answer: "Bart Starr" }
      ],
      [
        { clue: "This wide receiver holds the NFL career record for receiving yards, with 22,895.", answer: "Jerry Rice" },
        { clue: "This trophy, awarded to the Super Bowl champion, is named after a legendary Packers coach.", answer: "The Vince Lombardi Trophy" },
        { clue: "This Buffalo Bills quarterback led the team to four consecutive Super Bowl appearances in the early 1990s, losing all four.", answer: "Jim Kelly" }
      ],
      [
        { clue: "This Virginia Tech product is the NFL's all-time sack leader, with 200 career sacks.", answer: "Bruce Smith" },
        { clue: "This running back is the NFL's all-time leading rusher, with over 18,000 career yards.", answer: "Emmitt Smith" },
        { clue: "This 1972 NFL team remains the only one in league history to complete a perfect, undefeated season including the playoffs.", answer: "The Miami Dolphins" }
      ],
      [
        { clue: "This kicker holds the NFL record for the longest field goal ever made, a 66-yarder in 2021.", answer: "Justin Tucker" },
        { clue: "This Seattle Seahawks secondary of the early 2010s, featuring Richard Sherman and Earl Thomas, earned this nickname.", answer: "The Legion of Boom" },
        { clue: "This is the longest possible touchdown play from the line of scrimmage, matching the distance between goal lines.", answer: "99 yards" }
      ]
    ]
  },
  {
    title: "ACC Basketball",
    tiers: [
      [
        { clue: "This fierce rivalry pits Duke against this school located just 8 miles away in Chapel Hill.", answer: "The University of North Carolina (UNC)" },
        { clue: "This Duke arena, known for its rowdy student section, is named this.", answer: "Cameron Indoor Stadium" },
        { clue: "This is the number of players from each team on the court at one time in basketball.", answer: "Five" }
      ],
      [
        { clue: "This Duke head coach retired in 2022 after winning 5 national titles and over 1,200 career games.", answer: "Mike Krzyzewski (Coach K)" },
        { clue: "This UNC head coach won three national championships before retiring in 2022.", answer: "Roy Williams" },
        { clue: "This annual, single-elimination tournament to crown the national champion is nicknamed 'March Madness.'", answer: "The NCAA Tournament" }
      ],
      [
        { clue: "This underdog ACC team, nicknamed the 'Cardiac Pack,' won the 1983 national championship under coach Jim Valvano.", answer: "NC State Wolfpack" },
        { clue: "This ACC school's mascot is the Demon Deacon.", answer: "Wake Forest" },
        { clue: "This nickname refers to the tent city Duke students camp out in for weeks to get tickets to the UNC game.", answer: "Krzyzewskiville (K-Ville)" }
      ],
      [
        { clue: "In 2019, this Duke phenom's shoe exploded during a game against rival North Carolina.", answer: "Zion Williamson" },
        { clue: "This Duke player hit a legendary buzzer-beating turnaround jumper to beat Kentucky in the 1992 Elite Eight.", answer: "Christian Laettner" },
        { clue: "This NC State coach, who died of cancer in 1993, gave the famous 'Don't give up... don't ever give up' ESPY speech.", answer: "Jim Valvano" }
      ],
      [
        { clue: "This is the number of national championships Duke won under Coach K across his tenure.", answer: "Five" },
        { clue: "This ACC school completed a historic worst-to-first turnaround: losing to a 16-seed in 2018, then winning the national title in 2019.", answer: "The University of Virginia (UVA)" },
        { clue: "This is the nickname of UNC's home arena, officially named after their legendary coach who won two national titles.", answer: "The Dean E. Smith Center (Dean Dome)" }
      ]
    ]
  },
  {
    title: "College Football Saturdays",
    tiers: [
      [
        { clue: "This trophy is awarded annually to the most outstanding player in college football.", answer: "The Heisman Trophy" },
        { clue: "This is the number of points a touchdown is worth, before the extra point or two-point try.", answer: "Six" },
        { clue: "This conference, home to Alabama, Georgia, and LSU, is considered the most dominant in college football.", answer: "The SEC" }
      ],
      [
        { clue: "Before every home game, Virginia Tech's team runs onto the field at Lane Stadium to this Metallica song.", answer: "\"Enter Sandman\"" },
        { clue: "This expanded playoff format, introduced in 2024, features this many teams competing for the national championship.", answer: "12 teams" },
        { clue: "This trophy is awarded annually to the winner of the Army-Navy football game.", answer: "The Commander-in-Chief's Trophy" }
      ],
      [
        { clue: "This coach won 6 national championships at Alabama before retiring in 2024.", answer: "Nick Saban" },
        { clue: "Clemson and this in-state rival play annually in a game nicknamed 'The Palmetto Bowl.'", answer: "South Carolina (Gamecocks)" },
        { clue: "This trophy is awarded annually to the winner of the Virginia-Virginia Tech football rivalry game.", answer: "The Commonwealth Cup" }
      ],
      [
        { clue: "This former Clemson QB won the Heisman and a national title before going #1 overall to the Jaguars in 2021.", answer: "Trevor Lawrence" },
        { clue: "First awarded in 1903, this is the oldest rivalry trophy in college football, contested by Minnesota and Michigan.", answer: "The Little Brown Jug" },
        { clue: "This is the name of Alabama's beloved elephant mascot.", answer: "Big Al" }
      ],
      [
        { clue: "This underdog's 'Statue of Liberty' trick play won the 2007 Fiesta Bowl in overtime against powerhouse Oklahoma.", answer: "Boise State" },
        { clue: "The annual Florida vs. Georgia game, played at a neutral site in Jacksonville, has earned this famous nickname.", answer: "\"The World's Largest Outdoor Cocktail Party\"" },
        { clue: "This is the number of national championships Nick Saban won across his entire college coaching career, at LSU and Alabama combined.", answer: "Seven" }
      ]
    ]
  },
  {
    title: "NBA Stars",
    tiers: [
      [
        { clue: "This Lakers legend, nicknamed 'Black Mamba,' won 5 NBA championships.", answer: "Kobe Bryant" },
        { clue: "This is the number of points a three-pointer is worth.", answer: "Three" },
        { clue: "This Golden State Warriors guard is considered the greatest three-point shooter of all time.", answer: "Stephen Curry" }
      ],
      [
        { clue: "Nicknamed 'The Big Aristotle,' this dominant center won NBA championships with both the Lakers and the Miami Heat.", answer: "Shaquille O'Neal" },
        { clue: "This Milwaukee Bucks forward, nicknamed the 'Greek Freak,' won back-to-back MVPs in 2019 and 2020.", answer: "Giannis Antetokounmpo" },
        { clue: "This trophy is awarded annually to the NBA Finals Most Valuable Player.", answer: "The Bill Russell NBA Finals MVP Award" }
      ],
      [
        { clue: "This Chicago Bulls legend won 6 NBA titles and 6 Finals MVPs in the 1990s.", answer: "Michael Jordan" },
        { clue: "This German-born Dallas Mavericks forward won Finals MVP in 2011 and is considered one of the greatest shooting big men ever.", answer: "Dirk Nowitzki" },
        { clue: "This Boston Celtics center won a record 11 NBA championships during his career in the 1950s and 60s.", answer: "Bill Russell" }
      ],
      [
        { clue: "This Los Angeles Lakers center scored 100 points in a single game in 1962, an NBA record that still stands.", answer: "Wilt Chamberlain" },
        { clue: "This 'Showtime' Lakers point guard won 5 championships in the 1980s and is considered one of the greatest passers ever.", answer: "Magic Johnson" },
        { clue: "This storied NBA rivalry between two historic franchises has met a record 12 times in the NBA Finals.", answer: "The Celtics-Lakers rivalry" }
      ],
      [
        { clue: "This is the NBA record for most points scored in a single game, set by Wilt Chamberlain in 1962.", answer: "100 points" },
        { clue: "This player passed Kareem Abdul-Jabbar in 2023 to become the NBA's all-time leading scorer.", answer: "LeBron James" },
        { clue: "This center is the only player in NBA history to average more than 50 points per game over a full season, in 1961-62.", answer: "Wilt Chamberlain" }
      ]
    ]
  },
  {
    title: "NASCAR & Golf",
    tiers: [
      [
        { clue: "Located in Darlington, South Carolina, this track is nicknamed 'Too Tough to Tame.'", answer: "Darlington Raceway" },
        { clue: "This golf major is held every April at Augusta National Golf Club.", answer: "The Masters" },
        { clue: "This is the number of holes in a standard round of golf.", answer: "18" }
      ],
      [
        { clue: "This golfer holds the record for most career major championships, with 18.", answer: "Jack Nicklaus" },
        { clue: "This NASCAR race, held every February, is considered the sport's biggest and most prestigious event.", answer: "The Daytona 500" },
        { clue: "The winner of the Masters is awarded this famous piece of clothing.", answer: "The Green Jacket" }
      ],
      [
        { clue: "Nicknamed 'The Intimidator,' this NASCAR legend died in a crash at the 2001 Daytona 500.", answer: "Dale Earnhardt" },
        { clue: "This golfer, known simply as 'Tiger,' won 15 major championships and dominated the sport in the early 2000s.", answer: "Tiger Woods" },
        { clue: "This NASCAR track, a 2.5-mile oval in Indiana, also hosts the famous Indy 500.", answer: "Indianapolis Motor Speedway" }
      ],
      [
        { clue: "Born in Level Cross, North Carolina, this NASCAR legend won a record-tying 7 Cup Series championships.", answer: "Richard Petty" },
        { clue: "This modern NASCAR driver also won 7 Cup Series championships between 2006 and 2016, tying Richard Petty and Dale Earnhardt.", answer: "Jimmie Johnson" },
        { clue: "Alongside the Masters, U.S. Open, and PGA Championship, this British tournament rounds out golf's four 'majors.'", answer: "The Open Championship (The British Open)" }
      ],
      [
        { clue: "This is Richard Petty's famous nickname, reflecting his stature in the sport.", answer: "\"The King\"" },
        { clue: "This is the term for a golf score of one stroke under par on a hole.", answer: "A birdie" },
        { clue: "This is the number NASCAR legend Dale Earnhardt famously drove throughout his career.", answer: "#3" }
      ]
    ]
  },
  {
    title: "MLB & Baseball",
    tiers: [
      [
        { clue: "This is the number of players on the field for one team's defense in baseball.", answer: "Nine" },
        { clue: "This is the number of strikes it takes for a batter to strike out.", answer: "Three" },
        { clue: "This legendary Yankees slugger, known as 'The Bambino,' is considered one of the greatest players ever.", answer: "Babe Ruth" }
      ],
      [
        { clue: "This is the term for a pitcher completing a game in which the opposing team gets zero hits.", answer: "A no-hitter" },
        { clue: "This MLB team plays its home games at Truist Park in Atlanta.", answer: "The Atlanta Braves" },
        { clue: "This MLB team, based in Washington D.C., won the World Series in 2019.", answer: "The Washington Nationals" }
      ],
      [
        { clue: "This San Francisco Giants slugger holds MLB's career home run record with 762, though tainted by steroid allegations.", answer: "Barry Bonds" },
        { clue: "This term describes a batter hitting a single, double, triple, and home run all in the same game.", answer: "The cycle" },
        { clue: "This Yankees center fielder, known as 'The Yankee Clipper,' had a 56-game hitting streak in 1941 that remains unbroken.", answer: "Joe DiMaggio" }
      ],
      [
        { clue: "This San Francisco Giants slugger holds the single-season home run record with 73, set in 2001.", answer: "Barry Bonds" },
        { clue: "This is the term for a pitcher striking out every batter he faces in a single inning, on nine total pitches.", answer: "An immaculate inning" },
        { clue: "This two-way superstar, who pitches and hits at an elite level, won AL MVP in both 2021 and 2023 with the Angels.", answer: "Shohei Ohtani" }
      ],
      [
        { clue: "This pitcher holds the all-time MLB career strikeout record, with over 5,700.", answer: "Nolan Ryan" },
        { clue: "This is the term for a pitcher throwing a game with no hits, no walks, no errors, and no baserunners at all.", answer: "A perfect game" },
        { clue: "This player holds the record for most career hits in MLB history, with 4,256.", answer: "Pete Rose" }
      ]
    ]
  },
  {
    title: "Boxing & MMA",
    tiers: [
      [
        { clue: "This organization is the largest and most popular mixed martial arts promotion in the world.", answer: "The UFC (Ultimate Fighting Championship)" },
        { clue: "This legendary boxer, known as 'The Greatest,' famously said 'float like a butterfly, sting like a bee.'", answer: "Muhammad Ali" },
        { clue: "This is the term for winning a boxing or MMA match by knocking your opponent unconscious.", answer: "A knockout (KO)" }
      ],
      [
        { clue: "This retired boxer finished his career undefeated at 50-0, with wins over Manny Pacquiao and Conor McGregor.", answer: "Floyd Mayweather Jr." },
        { clue: "This UFC weight class covers fighters between 205 and 265 pounds, the largest class.", answer: "Heavyweight" },
        { clue: "This Irish UFC fighter became the first to hold two championship belts simultaneously, in 2016.", answer: "Conor McGregor" }
      ],
      [
        { clue: "This dominant former UFC light heavyweight and heavyweight champion is nicknamed 'Bones.'", answer: "Jon Jones" },
        { clue: "This term describes winning a fight when the opponent verbally or physically gives up mid-match.", answer: "A submission (tap out)" },
        { clue: "This heavyweight boxer became the youngest heavyweight champion ever at age 20, in 1986.", answer: "Mike Tyson" }
      ],
      [
        { clue: "This female UFC pioneer, nicknamed 'Rowdy,' was the first woman signed to the UFC and a former Olympic judoka.", answer: "Ronda Rousey" },
        { clue: "This 1974 boxing match between Muhammad Ali and George Foreman, held in Zaire, is famously known by this name.", answer: "\"The Rumble in the Jungle\"" },
        { clue: "This Russian UFC lightweight champion retired undefeated at 29-0 in 2020.", answer: "Khabib Nurmagomedov" }
      ],
      [
        { clue: "This 1975 boxing match between Muhammad Ali and Joe Frazier, held in the Philippines, is known by this name.", answer: "\"The Thrilla in Manila\"" },
        { clue: "This is the scoring system judges use in boxing, where the round winner typically gets 10 points and the loser gets 9 or fewer.", answer: "The 10-point must system" },
        { clue: "This UFC middleweight champion went undefeated for nearly seven years and defended his title a record 10 times.", answer: "Anderson Silva" }
      ]
    ]
  },
  {
    title: "Olympics",
    tiers: [
      [
        { clue: "This global sporting event is held every four years, alternating between summer and winter games.", answer: "The Olympics" },
        { clue: "This is the number of interlocking rings in the Olympic logo.", answer: "Five" },
        { clue: "This U.S. city hosted the Summer Olympics in 1996.", answer: "Atlanta, Georgia" }
      ],
      [
        { clue: "This American swimmer has won more Olympic medals than anyone in history, with 28.", answer: "Michael Phelps" },
        { clue: "This country hosted the 2024 Summer Olympics.", answer: "France (Paris)" },
        { clue: "This gymnast won 4 gold medals at the 2016 Rio Olympics and is the most decorated gymnast in U.S. history.", answer: "Simone Biles" }
      ],
      [
        { clue: "This Jamaican sprinter, the fastest man in history, holds world records in the 100m and 200m.", answer: "Usain Bolt" },
        { clue: "This country hosted the 2022 Winter Olympics, having also hosted the Summer Games back in 2008.", answer: "China (Beijing)" },
        { clue: "This U.S. track and field legend won four gold medals at the 1936 Berlin Olympics, defying Nazi propaganda.", answer: "Jesse Owens" }
      ],
      [
        { clue: "This is the ancient Greek city where the original Olympic Games began in 776 BC.", answer: "Olympia" },
        { clue: "This U.S. men's basketball squad, featuring Michael Jordan and Magic Johnson, dominated the 1992 Barcelona Olympics.", answer: "The Dream Team" },
        { clue: "This gymnast scored the first perfect 10 in Olympic history, at the 1976 Montreal Olympics.", answer: "Nadia Comaneci" }
      ],
      [
        { clue: "This is the flame that is lit before the games begin and burns throughout the Olympics.", answer: "The Olympic torch/flame" },
        { clue: "This U.S. hockey team's stunning upset of the Soviet Union at the 1980 Lake Placid Olympics is known by this name.", answer: "\"The Miracle on Ice\"" },
        { clue: "This country has hosted the Summer Olympics more than any other, with London hosting three times.", answer: "The United Kingdom" }
      ]
    ]
  },
  {
    title: "US Geography",
    tiers: [
      [
        { clue: "This is the capital of Virginia.", answer: "Richmond" },
        { clue: "This is the capital of North Carolina.", answer: "Raleigh" },
        { clue: "This is the largest U.S. state by land area.", answer: "Alaska" }
      ],
      [
        { clue: "North Carolina's official nickname refers to a substance from pine trees tied to its early naval-stores industry.", answer: "The Tar Heel State" },
        { clue: "This is the smallest U.S. state by land area.", answer: "Rhode Island" },
        { clue: "This U.S. city, famous for its casinos and nightlife, is nicknamed 'Sin City.'", answer: "Las Vegas" }
      ],
      [
        { clue: "This river forms much of the Virginia/Maryland border and flows into the Chesapeake Bay.", answer: "The Potomac River" },
        { clue: "This mountain range runs through Virginia and North Carolina, part of the larger Appalachian chain.", answer: "The Blue Ridge Mountains" },
        { clue: "This U.S. state has more counties than any other, with 254.", answer: "Texas" }
      ],
      [
        { clue: "This is the longest river in the United States, flowing over 2,300 miles from Minnesota to the Gulf of Mexico.", answer: "The Mississippi River" },
        { clue: "This chain of North Carolina barrier islands, a popular vacation spot, is known as the 'Outer Banks.'", answer: "The Outer Banks (OBX)" },
        { clue: "This is the lowest point in North America, located in California's Death Valley.", answer: "Badwater Basin" }
      ],
      [
        { clue: "This is the only place in the U.S. where four states meet at a single point: Arizona, Utah, Colorado, and New Mexico.", answer: "The Four Corners" },
        { clue: "This is the deepest lake in the United States, located in Oregon.", answer: "Crater Lake" },
        { clue: "Eight U.S. presidents were born in this state, more than any other, including Washington, Jefferson, and Madison.", answer: "Virginia" }
      ]
    ]
  },
  {
    title: "World Geography",
    tiers: [
      [
        { clue: "This is the largest country in the world by land area.", answer: "Russia" },
        { clue: "This African country is home to the Great Pyramids of Giza.", answer: "Egypt" },
        { clue: "This is the largest continent by both land area and population.", answer: "Asia" }
      ],
      [
        { clue: "This is the only South American country whose official language is Portuguese.", answer: "Brazil" },
        { clue: "This European country is famously shaped like a boot.", answer: "Italy" },
        { clue: "This is the longest river in the world, flowing through northeastern Africa.", answer: "The Nile River" }
      ],
      [
        { clue: "Located on the border of Nepal and Tibet, this is the tallest mountain in the world.", answer: "Mount Everest" },
        { clue: "This strait, which runs through the city of Istanbul, separates Europe and Asia.", answer: "The Bosphorus Strait" },
        { clue: "This is the smallest country in the world, located entirely within the city of Rome.", answer: "Vatican City" }
      ],
      [
        { clue: "This is the largest hot desert in the world, spanning much of North Africa.", answer: "The Sahara Desert" },
        { clue: "This South American country is home to Machu Picchu, the ancient Incan citadel.", answer: "Peru" },
        { clue: "This is the saltiest lake in the world, bordered by Jordan and Israel.", answer: "The Dead Sea" }
      ],
      [
        { clue: "This is the driest place on Earth, a desert located in northern Chile.", answer: "The Atacama Desert" },
        { clue: "This is one of only two 'doubly landlocked' countries in the world, located in Central Asia.", answer: "Uzbekistan" },
        { clue: "This African country recognizes the most official languages of any country in the world, with 11.", answer: "South Africa" }
      ]
    ]
  },
  {
    title: "National Parks",
    tiers: [
      [
        { clue: "Located mostly in Wyoming, this national park is famous for the geyser 'Old Faithful.'", answer: "Yellowstone National Park" },
        { clue: "This Arizona national park is a mile-deep canyon carved out by the Colorado River.", answer: "Grand Canyon National Park" },
        { clue: "This is the federal agency that manages America's national parks.", answer: "The National Park Service" }
      ],
      [
        { clue: "Straddling the NC/TN border, this is the most visited national park in the U.S.", answer: "Great Smoky Mountains National Park" },
        { clue: "This California national park is home to towering sequoia trees, including the largest tree on Earth by volume.", answer: "Sequoia National Park" },
        { clue: "This Utah national park is famous for its red-rock hoodoos: tall, thin rock spires.", answer: "Bryce Canyon National Park" }
      ],
      [
        { clue: "This scenic 469-mile parkway connects Shenandoah National Park in Virginia to the Great Smoky Mountains.", answer: "The Blue Ridge Parkway" },
        { clue: "This Wyoming national park, just south of Yellowstone, is known for the jagged Teton mountain range.", answer: "Grand Teton National Park" },
        { clue: "This Virginia national park is known for Skyline Drive and stunning fall foliage.", answer: "Shenandoah National Park" }
      ],
      [
        { clue: "The first national park established east of the Mississippi, this Maine park includes Cadillac Mountain.", answer: "Acadia National Park" },
        { clue: "This was the first national park ever established in the world, created in 1872.", answer: "Yellowstone National Park" },
        { clue: "This Alaska national park is the largest in the U.S. system, bigger than the state of Vermont.", answer: "Wrangell-St. Elias National Park" }
      ],
      [
        { clue: "This is the approximate total number of official national parks in the United States as of the mid-2020s.", answer: "63" },
        { clue: "This South Dakota national park is known for its dramatic, eroded rock formations.", answer: "Badlands National Park" },
        { clue: "This is the smallest national park in the U.S. by area, located in St. Louis, Missouri, and centered on a famous stainless steel arch.", answer: "Gateway Arch National Park" }
      ]
    ]
  },
  {
    title: "Marvel Cinematic Universe",
    tiers: [
      [
        { clue: "This billionaire genius, played by Robert Downey Jr., is also known as Iron Man.", answer: "Tony Stark" },
        { clue: "This green-skinned superhero transforms when he gets angry.", answer: "The Hulk (Bruce Banner)" },
        { clue: "This actor plays Captain America, Steve Rogers, in the MCU.", answer: "Chris Evans" }
      ],
      [
        { clue: "This 2019 film became, at the time, the highest-grossing movie ever, closing out the 'Infinity Saga.'", answer: "Avengers: Endgame" },
        { clue: "This Wakandan superhero is also known by his royal name, T'Challa.", answer: "Black Panther" },
        { clue: "This actor has played Spider-Man/Peter Parker in the MCU since 2016.", answer: "Tom Holland" }
      ],
      [
        { clue: "Played by Josh Brolin, this villain sought to collect all six Infinity Stones.", answer: "Thanos" },
        { clue: "This is the name of Thor's magical hammer.", answer: "Mjolnir" },
        { clue: "This ragtag team of heroes, including Star-Lord, Gamora, and Rocket, protects the cosmos with plenty of attitude.", answer: "The Guardians of the Galaxy" }
      ],
      [
        { clue: "This is the name of the fictional African nation ruled by the Black Panther.", answer: "Wakanda" },
        { clue: "This actress plays Natasha Romanoff, also known as Black Widow.", answer: "Scarlett Johansson" },
        { clue: "This is the in-universe term for the sprawling, multi-film storyline culminating in 'Avengers: Infinity War' and 'Endgame.'", answer: "The Infinity Saga" }
      ],
      [
        { clue: "This organization, introduced in the 'Loki' TV series, polices the multiverse and its timelines.", answer: "The Time Variance Authority (TVA)" },
        { clue: "This was the very first film released in the MCU, in 2008, starring Robert Downey Jr.", answer: "Iron Man" },
        { clue: "This is the in-universe nickname for the event in which Thanos erased half of all life in the universe.", answer: "\"The Blip\" (or \"The Snap\")" }
      ]
    ]
  },
  {
    title: "Sitcoms",
    tiers: [
      [
        { clue: "This NBC mockumentary sitcom follows the staff of the Scranton branch of Dunder Mifflin.", answer: "The Office" },
        { clue: "This sitcom follows six friends living in New York City: Ross, Rachel, Monica, Chandler, Joey, and Phoebe.", answer: "Friends" },
        { clue: "This long-running animated sitcom follows the Simpson family in the town of Springfield.", answer: "The Simpsons" }
      ],
      [
        { clue: "Played by Steve Carell, this character was the regional manager of Dunder Mifflin Scranton.", answer: "Michael Scott" },
        { clue: "This long-running animated sitcom follows the Griffin family of Quahog, Rhode Island.", answer: "Family Guy" },
        { clue: "This sitcom follows a group of socially awkward scientist friends, including Sheldon and Leonard.", answer: "The Big Bang Theory" }
      ],
      [
        { clue: "Set in a Philadelphia dive bar, this sitcom follows a group of friends known as 'The Gang.'", answer: "It's Always Sunny in Philadelphia" },
        { clue: "This actor plays Dwight Schrute, the beet-farming assistant to the regional manager.", answer: "Rainn Wilson" },
        { clue: "This mockumentary sitcom is set in the parks department of the fictional town of Pawnee, Indiana.", answer: "Parks and Recreation" }
      ],
      [
        { clue: "This character, played by Danny DeVito, co-owns Paddy's Pub alongside the rest of 'The Gang.'", answer: "Frank Reynolds" },
        { clue: "This is the name of the fictional paper company at the center of The Office.", answer: "Dunder Mifflin" },
        { clue: "This actor plays Jim Halpert, the prankster salesman, in The Office.", answer: "John Krasinski" }
      ],
      [
        { clue: "This actress played Pam Beesly, the receptionist-turned-saleswoman at Dunder Mifflin.", answer: "Jenna Fischer" },
        { clue: "This Parks and Recreation character, played by Nick Offerman, is famous for his love of woodworking, mustaches, and bacon.", answer: "Ron Swanson" },
        { clue: "This actress played Michael Scott's on-again, off-again love interest and eventual wife, Holly Flax.", answer: "Amy Ryan" }
      ]
    ]
  },
  {
    title: "2000s & 2010s Movies",
    tiers: [
      [
        { clue: "This 2008 film introduced Robert Downey Jr. as Tony Stark, kicking off the MCU.", answer: "Iron Man" },
        { clue: "This 2009 James Cameron film, set on the planet Pandora, became the highest-grossing film ever at the time.", answer: "Avatar" },
        { clue: "This animated Pixar film follows a rat who dreams of becoming a chef in Paris.", answer: "Ratatouille" }
      ],
      [
        { clue: "Christian Bale played the Caped Crusader in this Christopher Nolan trilogy.", answer: "The Dark Knight Trilogy (Batman)" },
        { clue: "This 2010 Christopher Nolan film, starring Leonardo DiCaprio, involves entering people's dreams to plant an idea.", answer: "Inception" },
        { clue: "This 2004 comedy, starring Will Ferrell, follows a San Diego news anchor and his eccentric team.", answer: "Anchorman" }
      ],
      [
        { clue: "This Quentin Tarantino film, starring Brad Pitt and Leonardo DiCaprio, is set in 1969 Hollywood.", answer: "Once Upon a Time in Hollywood" },
        { clue: "This 2000 film starring Russell Crowe as a Roman general-turned-gladiator won Best Picture.", answer: "Gladiator" },
        { clue: "This 2009 comedy follows a group of friends piecing together a wild night after a bachelor party in Las Vegas.", answer: "The Hangover" }
      ],
      [
        { clue: "This 2006 Best Picture winner, set in Boston, starred Leonardo DiCaprio and Matt Damon as operatives on opposite sides of the law.", answer: "The Departed" },
        { clue: "This 2014 Christopher Nolan film, starring Matthew McConaughey, follows astronauts traveling through a wormhole to save humanity.", answer: "Interstellar" },
        { clue: "This 2007 Coen Brothers Best Picture winner stars Javier Bardem as a terrifying hitman with a captive bolt pistol.", answer: "No Country for Old Men" }
      ],
      [
        { clue: "This 2000 psychological thriller, directed by Christopher Nolan, tells its story in reverse chronological order.", answer: "Memento" },
        { clue: "This actor finally won his first Best Actor Oscar for the 2015 film 'The Revenant,' after years of nominations.", answer: "Leonardo DiCaprio" },
        { clue: "This 2002 film, directed by Spike Jonze and written by Charlie Kaufman, stars Nicolas Cage playing twin screenwriters.", answer: "Adaptation" }
      ]
    ]
  },
  {
    title: "90s & 2000s Cartoons",
    tiers: [
      [
        { clue: "This sponge who lives in a pineapple under the sea works at the Krusty Krab.", answer: "SpongeBob SquarePants" },
        { clue: "This yellow animated family includes Homer, Marge, Bart, Lisa, and Maggie.", answer: "The Simpsons" },
        { clue: "This Nickelodeon show follows a boy genius with a giant brain who builds inventions in his secret lab.", answer: "Jimmy Neutron: Boy Genius" }
      ],
      [
        { clue: "This anime follows a ninja named Naruto Uzumaki who dreams of becoming leader of his village.", answer: "Naruto" },
        { clue: "This Nickelodeon show follows a bald monk boy who must master four elements to save the world.", answer: "Avatar: The Last Airbender" },
        { clue: "This Cartoon Network show follows a boy named Finn and his magical, shapeshifting dog Jake, in the Land of Ooo.", answer: "Adventure Time" }
      ],
      [
        { clue: "This anime/manga follows Goku and his friends as they battle increasingly powerful enemies while chasing magic orbs.", answer: "Dragon Ball Z" },
        { clue: "This Cartoon Network show follows a team of teen superheroes including Robin, Starfire, Cyborg, Raven, and Beast Boy.", answer: "Teen Titans" },
        { clue: "This early 2000s Nickelodeon show follows a boy named Timmy Turner who has two magical godparents.", answer: "The Fairly OddParents" }
      ],
      [
        { clue: "This Cartoon Network show follows three friends — Ed, Edd, and Eddy — who scheme to earn money from the neighborhood kids to buy jawbreakers.", answer: "Ed, Edd n Eddy" },
        { clue: "This anime follows brothers Edward and Alphonse Elric, searching for the Philosopher's Stone after a failed alchemy experiment.", answer: "Fullmetal Alchemist" },
        { clue: "This late-90s Cartoon Network show follows a boy with a secret laboratory hidden behind his bookcase, and his ditzy older sister Dee Dee.", answer: "Dexter's Laboratory" }
      ],
      [
        { clue: "This is the name of the fictional village where Naruto and his fellow ninja live.", answer: "The Hidden Leaf Village (Konohagakure)" },
        { clue: "This 2000s Adult Swim show, known for its absurdist humor, follows a floating meatball, a shapeshifting milkshake, and a lazy box of fries.", answer: "Aqua Teen Hunger Force" },
        { clue: "This is the name of the underwater city where SpongeBob SquarePants lives.", answer: "Bikini Bottom" }
      ]
    ]
  },
  {
    title: "Hip-Hop & Country",
    tiers: [
      [
        { clue: "This Detroit rapper, known as 'Slim Shady,' starred in the 2002 film '8 Mile.'", answer: "Eminem" },
        { clue: "Known as 'The Man in Black,' this country legend sang 'Ring of Fire' and 'Folsom Prison Blues.'", answer: "Johnny Cash" },
        { clue: "This rapper and entrepreneur founded Roc Nation and is married to Beyoncé.", answer: "Jay-Z" }
      ],
      [
        { clue: "This country duo, made up of Brian Kelley and Tyler Hubbard, had hits like 'Cruise' and 'Meant to Be.'", answer: "Florida Georgia Line" },
        { clue: "This Compton rapper released the critically acclaimed albums 'good kid, m.A.A.d city' and 'DAMN.'", answer: "Kendrick Lamar" },
        { clue: "This country superstar's hits include 'Friends in Low Places,' making him one of the best-selling solo artists ever.", answer: "Garth Brooks" }
      ],
      [
        { clue: "This rapper, born Marshall Mathers, was discovered and signed by Dr. Dre in the late 1990s.", answer: "Eminem" },
        { clue: "This female country star broke crossover records with albums like 'Fearless' and 'Red' before moving into pop.", answer: "Taylor Swift" },
        { clue: "This Atlanta rap duo, made up of Big Boi and Andre 3000, blended Southern rap with funk and soul.", answer: "OutKast" }
      ],
      [
        { clue: "This late rapper, known for 'Juicy' and 'Hypnotize,' was a leading figure in East Coast hip-hop before his 1997 murder.", answer: "The Notorious B.I.G." },
        { clue: "This country artist, born in Georgia, is known for hits like 'Chicken Fried' as frontman of his namesake band.", answer: "Zac Brown" },
        { clue: "This West Coast rapper, killed in 1996, released the iconic album 'All Eyez on Me.'", answer: "Tupac Shakur" }
      ],
      [
        { clue: "This rapper's real name is Aubrey Drake Graham, and he got his start as an actor on the Canadian teen drama 'Degrassi.'", answer: "Drake" },
        { clue: "This is the record label, co-founded by Dr. Dre and Suge Knight in 1991, that was home to Tupac and Snoop Dogg.", answer: "Death Row Records" },
        { clue: "This classic country outlaw, along with Willie Nelson, Kris Kristofferson, and Johnny Cash, formed the supergroup 'The Highwaymen.'", answer: "Waylon Jennings" }
      ]
    ]
  },
  {
    title: "Classic Rock",
    tiers: [
      [
        { clue: "Formed in Liverpool and made up of Lennon, McCartney, Harrison, and Starr, this is often called the most influential band ever.", answer: "The Beatles" },
        { clue: "This British rock band, fronted by Freddie Mercury, performed 'Bohemian Rhapsody.'", answer: "Queen" },
        { clue: "This band's lead singer, Mick Jagger, has fronted the group since 1962, alongside guitarist Keith Richards.", answer: "The Rolling Stones" }
      ],
      [
        { clue: "Fronted by Axl Rose, this American rock band released 'Appetite for Destruction' in 1987.", answer: "Guns N' Roses" },
        { clue: "This Southern rock band from Jacksonville, Florida is known for 'Free Bird' and 'Sweet Home Alabama.'", answer: "Lynyrd Skynyrd" },
        { clue: "This legendary guitarist, known for 'Purple Haze' and 'Voodoo Child,' died in 1970 at age 27.", answer: "Jimi Hendrix" }
      ],
      [
        { clue: "Often called the greatest rock song ever, this Led Zeppelin epic includes the line 'there's a lady who's sure all that glitters is gold.'", answer: "\"Stairway to Heaven\"" },
        { clue: "This English rock band, known for the album 'Dark Side of the Moon,' is famous for its elaborate live shows and prog-rock sound.", answer: "Pink Floyd" },
        { clue: "This 1969 music festival in upstate New York became a defining moment of the counterculture movement.", answer: "Woodstock" }
      ],
      [
        { clue: "This American rock band, fronted by Eddie Vedder, emerged from Seattle's grunge scene with the 1991 album 'Ten.'", answer: "Pearl Jam" },
        { clue: "This band's lead singer, Kurt Cobain, died in 1994, cementing the group's legacy as grunge pioneers.", answer: "Nirvana" },
        { clue: "This Eagles song, often cited as one of the greatest of all time, features the lyric 'you can check out any time you like, but you can never leave.'", answer: "\"Hotel California\"" }
      ],
      [
        { clue: "This is the nickname for the group of legendary musicians, including Hendrix, Joplin, Morrison, and Cobain, who all died at age 27.", answer: "The 27 Club" },
        { clue: "This Led Zeppelin drummer, known for his powerful, distinctive style, died in 1980, leading the band to disband.", answer: "John Bonham" },
        { clue: "This is the name of The Beatles' final recorded studio album, famous for its crosswalk cover photo.", answer: "Abbey Road" }
      ]
    ]
  },
  {
    title: "2010s Pop & Alternative",
    tiers: [
      [
        { clue: "This pop star, born Stefani Germanotta, is known by this stage name and hits like 'Poker Face' and 'Bad Romance.'", answer: "Lady Gaga" },
        { clue: "This artist released the album '1989' in 2014, marking her full transition into pop music.", answer: "Taylor Swift" },
        { clue: "This English singer-songwriter's albums are titled with symbols like '+,' '×,' and '÷.'", answer: "Ed Sheeran" }
      ],
      [
        { clue: "This Canadian singer got his start on YouTube as a teenager before becoming a global pop star with hits like 'Baby.'", answer: "Justin Bieber" },
        { clue: "This British-Irish boy band, formed on the X Factor in 2010, included Harry Styles and Niall Horan.", answer: "One Direction" },
        { clue: "This American rock band, fronted by Dan Reynolds, is known for hits like 'Radioactive' and 'Believer.'", answer: "Imagine Dragons" }
      ],
      [
        { clue: "This Barbadian singer's hits include 'Umbrella,' 'Diamonds,' and 'Work,' and she also built a major beauty brand.", answer: "Rihanna" },
        { clue: "This duo, made up of Tyler Joseph and Josh Dun, blends genres and had a massive hit with 'Stressed Out.'", answer: "Twenty One Pilots" },
        { clue: "This song, by Gotye featuring Kimbra, was inescapable on the radio in 2011 and 2012.", answer: "\"Somebody That I Used to Know\"" }
      ],
      [
        { clue: "This singer's 2011 album '21' swept the Grammys and included the hit 'Rolling in the Deep.'", answer: "Adele" },
        { clue: "This American electronic music duo, known for wearing robot helmets, released 'Random Access Memories' in 2013.", answer: "Daft Punk" },
        { clue: "This indie-folk band, fronted by Marcus Mumford, broke out with the hit 'I Will Wait' and the album 'Babel.'", answer: "Mumford & Sons" }
      ],
      [
        { clue: "This song by Lorde, released when she was just 16, became a massive hit in 2013 critiquing materialism in pop culture.", answer: "\"Royals\"" },
        { clue: "This is the massive California music festival, held in the desert each April, that has become a cultural phenomenon.", answer: "Coachella" },
        { clue: "This artist's 2016 album 'Lemonade' was a visual album exploring infidelity and Black womanhood.", answer: "Beyoncé" }
      ]
    ]
  },
  {
    title: "Beer & Bars",
    tiers: [
      [
        { clue: "This is the best-selling domestic light beer in the United States, made by Anheuser-Busch.", answer: "Bud Light" },
        { clue: "This is the term for beer served directly from a keg rather than a bottle or can.", answer: "Draft (draught) beer" },
        { clue: "This is the generic term for a mixed alcoholic drink, like a Moscow Mule or an Old Fashioned.", answer: "A cocktail" }
      ],
      [
        { clue: "Held annually in Munich, this is the world's largest beer festival.", answer: "Oktoberfest" },
        { clue: "This hoppy, bitter beer style is often abbreviated IPA.", answer: "India Pale Ale" },
        { clue: "This popular Mexican beer is traditionally served with a lime wedge in the neck of the bottle.", answer: "Corona" }
      ],
      [
        { clue: "This is the process of making beer by fermenting grains, most commonly barley.", answer: "Brewing" },
        { clue: "This Belgian style of high-alcohol, bottle-conditioned ale includes brands like Chimay and Westmalle.", answer: "Trappist ale (Belgian ale)" },
        { clue: "This is the term for the foam that forms on top of a freshly poured beer.", answer: "The head" }
      ],
      [
        { clue: "Founded in 2008 in Roseland, Virginia, this Blue Ridge Mountains brewery makes 'Gonzo Imperial Porter.'", answer: "Devils Backbone Brewing Company" },
        { clue: "This dark, roasted beer style, similar to a porter but typically stronger, includes varieties like 'Imperial' and 'Milk.'", answer: "Stout" },
        { clue: "This is the alcohol content range, by volume, that most domestic light beers fall into.", answer: "Roughly 4-5% ABV" }
      ],
      [
        { clue: "Beer brewing is believed to have originated roughly 5,000 years ago in this ancient region, part of modern-day Iraq.", answer: "Sumer (Mesopotamia)" },
        { clue: "This German beer purity law, dating to 1516, restricted beer ingredients to just water, barley, and hops.", answer: "The Reinheitsgebot" },
        { clue: "This is the world's best-selling beer brand by volume, brewed almost entirely for the Chinese market.", answer: "Snow Beer" }
      ]
    ]
  },
  {
    title: "Video Games",
    tiers: [
      [
        { clue: "This Italian plumber is Nintendo's most famous mascot.", answer: "Mario" },
        { clue: "This battle royale game, released in 2017, became a cultural phenomenon known for its dances and 'Victory Royales.'", answer: "Fortnite" },
        { clue: "This blue, speedy hedgehog is Sega's mascot.", answer: "Sonic the Hedgehog" }
      ],
      [
        { clue: "This military first-person shooter franchise includes 'Modern Warfare' and 'Black Ops.'", answer: "Call of Duty" },
        { clue: "Made by Rockstar, this open-world game series is set in fictional cities like Los Santos and Liberty City.", answer: "Grand Theft Auto" },
        { clue: "This sandbox building game, where players mine blocks and build structures, is one of the best-selling games ever made.", answer: "Minecraft" }
      ],
      [
        { clue: "This 1998 Nintendo 64 classic has Link traveling through time and is often called one of the greatest games ever made.", answer: "The Legend of Zelda: Ocarina of Time" },
        { clue: "This battle royale game, developed by a South Korean studio, popularized the genre with 'chicken dinner' wins.", answer: "PUBG (PlayerUnknown's Battlegrounds)" },
        { clue: "This multiplayer online battle arena game, made by Riot Games, is one of the most-played esports titles ever.", answer: "League of Legends" }
      ],
      [
        { clue: "This 2023 Nintendo Switch game, an open-world sequel, follows Link exploring the skies above Hyrule.", answer: "The Legend of Zelda: Tears of the Kingdom" },
        { clue: "This Bethesda role-playing game franchise, known for open-world fantasy exploration, includes the game 'Skyrim.'", answer: "The Elder Scrolls" },
        { clue: "This annual esports tournament for Dota 2, hosted by Valve, is famous for its enormous, crowdfunded prize pools.", answer: "The International" }
      ],
      [
        { clue: "This 1972 game, featuring two paddles and a ball, is widely considered the first commercially successful video game.", answer: "Pong" },
        { clue: "This is the best-selling video game of all time, with over 300 million copies sold across all its versions.", answer: "Minecraft" },
        { clue: "This Japanese video game designer created both the Mario and The Legend of Zelda franchises for Nintendo.", answer: "Shigeru Miyamoto" }
      ]
    ]
  },
  {
    title: "Fast Food",
    tiers: [
      [
        { clue: "This fast food chain's mascot is a red-haired clown named Ronald.", answer: "McDonald's" },
        { clue: "This burger chain's longtime slogan is 'Have it Your Way.'", answer: "Burger King" },
        { clue: "This chain is famous for chicken sandwiches, waffle fries, and being closed every Sunday.", answer: "Chick-fil-A" }
      ],
      [
        { clue: "This Tex-Mex chain's menu includes the 'Baja Blast' Mountain Dew flavor, exclusive to its restaurants.", answer: "Taco Bell" },
        { clue: "This sandwich chain's old slogan was 'Eat Fresh,' and its former spokesperson Jared left amid scandal.", answer: "Subway" },
        { clue: "This fried chicken chain, based in Louisville, Kentucky, is known by initials standing for a Southern state.", answer: "KFC (Kentucky Fried Chicken)" }
      ],
      [
        { clue: "Founded in Greensboro, NC in 1989, this chain is famous for its cheap 'trays' and dozens of milkshake flavors.", answer: "Cook Out" },
        { clue: "This burger chain, known for small square-shaped patties and being open 24/7, was founded in 1921 in Wichita, Kansas.", answer: "White Castle" },
        { clue: "This chain's founder, Dave Thomas, named the restaurant after his daughter.", answer: "Wendy's" }
      ],
      [
        { clue: "This fried chicken and biscuits chain was founded in Charlotte, North Carolina in 1977.", answer: "Bojangles" },
        { clue: "This West Coast favorite burger chain is known for its 'Double-Double' and 'animal style' fries.", answer: "In-N-Out Burger" },
        { clue: "This is the year McDonald's was founded by the McDonald brothers in San Bernardino, California.", answer: "1940" }
      ],
      [
        { clue: "This is the name commonly used for the special sauce found on a Big Mac.", answer: "Big Mac Sauce" },
        { clue: "This is the number of herbs and spices in KFC's famous 'secret recipe,' according to company lore.", answer: "11" },
        { clue: "This businessman bought the McDonald brothers' restaurant concept in the 1950s and turned it into a global franchise empire.", answer: "Ray Kroc" }
      ]
    ]
  },
  {
    title: "Presidents & U.S. History",
    tiers: [
      [
        { clue: "This Virginia plantation owner and Founding Father was the first President of the United States.", answer: "George Washington" },
        { clue: "This document, adopted in 1776, declared the American colonies' independence from Britain.", answer: "The Declaration of Independence" },
        { clue: "This U.S. president is depicted on the one-dollar bill.", answer: "George Washington" }
      ],
      [
        { clue: "This U.S. president from Virginia was the primary author of the Declaration of Independence.", answer: "Thomas Jefferson" },
        { clue: "This war, fought between the Union and Confederacy from 1861 to 1865, led to the end of slavery in the United States.", answer: "The Civil War" },
        { clue: "This U.S. president resigned from office in 1974 due to the Watergate scandal.", answer: "Richard Nixon" }
      ],
      [
        { clue: "This is the only U.S. president to serve two non-consecutive terms, as the 22nd and 24th president.", answer: "Grover Cleveland" },
        { clue: "This U.S. president, who served during the Great Depression and WWII, was elected to four terms before term limits existed.", answer: "Franklin D. Roosevelt" },
        { clue: "This U.S. president was assassinated in 1865, just days after the Civil War effectively ended.", answer: "Abraham Lincoln" }
      ],
      [
        { clue: "Eight U.S. presidents were born in this state, more than any other, including Washington, Jefferson, and Madison.", answer: "Virginia" },
        { clue: "This amendment to the Constitution granted women the right to vote in 1920.", answer: "The 19th Amendment" },
        { clue: "This U.S. president was the youngest ever elected to the office, at age 43, and was assassinated in Dallas in 1963.", answer: "John F. Kennedy" }
      ],
      [
        { clue: "This is the only U.S. president to also serve as Chief Justice of the Supreme Court after leaving office.", answer: "William Howard Taft" },
        { clue: "This is the shortest presidency in U.S. history, lasting just 31 days, after the president fell ill shortly after inauguration.", answer: "William Henry Harrison" },
        { clue: "This U.S. president signed the Emancipation Proclamation in 1863, declaring enslaved people in Confederate states to be free.", answer: "Abraham Lincoln" }
      ]
    ]
  },
  {
    title: "Internet & Memes",
    tiers: [
      [
        { clue: "This social media app, known for short-form video and dances, was founded by the Chinese company ByteDance.", answer: "TikTok" },
        { clue: "This term describes a piece of media, often an image with text, that spreads rapidly online and gets endlessly remixed.", answer: "A meme" },
        { clue: "This video-sharing platform, owned by Google, is home to creators making everything from vlogs to gaming content.", answer: "YouTube" }
      ],
      [
        { clue: "This 2012 viral music video, featuring a horse-riding dance move by Korean artist PSY, became a global phenomenon.", answer: "\"Gangnam Style\"" },
        { clue: "This photo and video-sharing social platform, bought by Facebook in 2012, uses a camera icon as its logo.", answer: "Instagram" },
        { clue: "This short-form video app, known for looping 6-second clips, launched in 2013 and shut down in 2017.", answer: "Vine" }
      ],
      [
        { clue: "This meme format features a man looking back at another woman while his girlfriend looks on in disgust.", answer: "\"Distracted Boyfriend\"" },
        { clue: "This term describes online content specifically designed to spread rapidly and be widely shared.", answer: "Viral content" },
        { clue: "This 2016 meme, depicting a green cartoon frog, became associated with various online communities and controversies.", answer: "Pepe the Frog" }
      ],
      [
        { clue: "This chat and voice platform, popular with gamers, launched in 2015 and organizes its communities into 'servers.'", answer: "Discord" },
        { clue: "This 2007 meme involves tricking someone into clicking a link that plays a certain Rick Astley song.", answer: "Rickrolling" },
        { clue: "This meme format uses a stock photo of a woman yelling next to a confused white cat sitting at a dinner table.", answer: "\"Woman Yelling at a Cat\"" }
      ],
      [
        { clue: "This is the name of the app that preceded and was eventually rebranded into 'X' after Elon Musk's 2022 acquisition.", answer: "Twitter" },
        { clue: "This is the term for a fake or automated social media account, often used to manipulate opinion or spread spam.", answer: "A bot" },
        { clue: "This slang term for something embarrassingly awkward or hard to watch became one of the most-used internet words of the 2010s.", answer: "\"Cringe\"" }
      ]
    ]
  },
  {
    title: "Cars & Trucks",
    tiers: [
      [
        { clue: "This Michigan city is historically known as the center of the American auto industry, nicknamed 'Motor City.'", answer: "Detroit" },
        { clue: "This company, founded by Henry Ford, revolutionized manufacturing with the moving assembly line.", answer: "Ford Motor Company" },
        { clue: "This is the term for a vehicle that runs on electricity instead of gasoline.", answer: "An electric vehicle (EV)" }
      ],
      [
        { clue: "This American company makes the Corvette, Camaro, and Silverado truck.", answer: "Chevrolet" },
        { clue: "This Jeep model, known for its boxy shape and removable doors and roof, is an off-road icon.", answer: "The Jeep Wrangler" },
        { clue: "This electric car company, founded in part by Elon Musk, makes the Model 3, Model S, and Cybertruck.", answer: "Tesla" }
      ],
      [
        { clue: "This Ford pickup truck has been the best-selling vehicle in America for decades.", answer: "The Ford F-150" },
        { clue: "This German luxury car brand's logo features a three-pointed star.", answer: "Mercedes-Benz" },
        { clue: "This is the term for a car race where drivers compete in a straight line over a short, fixed distance, often a quarter mile.", answer: "Drag racing" }
      ],
      [
        { clue: "This Italian sports car brand, known for its prancing horse logo, makes models like the F8 and Roma.", answer: "Ferrari" },
        { clue: "This is the term for replacing a car's stock exhaust system to produce a louder, more aggressive sound.", answer: "An aftermarket exhaust" },
        { clue: "This Japanese car company's 'Skyline GT-R' became a cult favorite thanks to its appearances in 'The Fast and the Furious' films.", answer: "Nissan" }
      ],
      [
        { clue: "This is the approximate top speed, in miles per hour, of the Bugatti Chiron Super Sport, one of the fastest production cars ever built.", answer: "Roughly 300+ mph" },
        { clue: "This is the year the first Ford Mustang was released, launching the American 'pony car' era.", answer: "1964" },
        { clue: "This is the term for an engine configuration where eight cylinders are arranged in a 'V' shape.", answer: "A V8 engine" }
      ]
    ]
  }
];
