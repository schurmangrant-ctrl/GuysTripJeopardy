// Category pool for Guys Trip Jeopardy.
// Skewed toward sports (NFL/NCAA football & basketball), geography,
// TV/movies, and some VA/NC regional flavor for the crew.
// Each category has 5 clues at standard Jeopardy values.

const CATEGORY_POOL = [
  {
    title: "NFL Legends & Records",
    clues: [
      { value: 200, clue: "This QB won 7 Super Bowls, more than any other player, across two different franchises.", answer: "Tom Brady" },
      { value: 400, clue: "This running back holds the NFL record for most rushing yards in a single season with 2,105 in 1984.", answer: "Eric Dickerson" },
      { value: 600, clue: "This legendary Green Bay Packers team plays its home games at this frozen-tundra stadium.", answer: "Lambeau Field" },
      { value: 800, clue: "This wide receiver holds the NFL career record for receiving yards with 22,895.", answer: "Jerry Rice" },
      { value: 1000, clue: "This Virginia Tech product is the NFL's all-time sack leader with 200 career sacks.", answer: "Bruce Smith" }
    ]
  },
  {
    title: "ACC Basketball",
    clues: [
      { value: 200, clue: "This fierce rivalry pits Duke against this school located just 8 miles away in Chapel Hill.", answer: "University of North Carolina (UNC)" },
      { value: 400, clue: "This Duke head coach retired in 2022 after winning 5 national titles and 1,202 career games.", answer: "Mike Krzyzewski (Coach K)" },
      { value: 600, clue: "This underdog ACC team, nicknamed the 'Cardiac Pack,' won the 1983 national championship under coach Jim Valvano.", answer: "NC State Wolfpack" },
      { value: 800, clue: "In 2019, this Duke phenom's shoe exploded during a game against rival North Carolina.", answer: "Zion Williamson" },
      { value: 1000, clue: "This ACC school's mascot is the Demon Deacon.", answer: "Wake Forest" }
    ]
  },
  {
    title: "College Football Saturdays",
    clues: [
      { value: 200, clue: "This trophy is awarded annually to the most outstanding player in college football.", answer: "The Heisman Trophy" },
      { value: 400, clue: "Before every home game, Virginia Tech's team runs onto the field at Lane Stadium to this Metallica song.", answer: "\"Enter Sandman\"" },
      { value: 600, clue: "This coach won 6 national championships at Alabama before retiring in 2024.", answer: "Nick Saban" },
      { value: 800, clue: "Clemson and this in-state rival play annually for a trophy in a game known as 'The Palmetto Bowl.'", answer: "South Carolina (Gamecocks)" },
      { value: 1000, clue: "This former Clemson QB won the Heisman and a national title before going #1 overall to the Jaguars in 2021.", answer: "Trevor Lawrence" }
    ]
  },
  {
    title: "NBA Stars",
    clues: [
      { value: 200, clue: "This Lakers legend, nicknamed 'Black Mamba,' won 5 NBA championships.", answer: "Kobe Bryant" },
      { value: 400, clue: "This Golden State Warriors guard is considered the greatest three-point shooter of all time.", answer: "Stephen Curry" },
      { value: 600, clue: "Nicknamed 'The Big Aristotle,' this dominant center won titles with the Lakers, Heat, and Celtics.", answer: "Shaquille O'Neal" },
      { value: 800, clue: "This Milwaukee Bucks forward, nicknamed the 'Greek Freak,' won back-to-back MVPs in 2019 and 2020.", answer: "Giannis Antetokounmpo" },
      { value: 1000, clue: "This Chicago Bulls legend won 6 NBA titles and 6 Finals MVPs in the 1990s.", answer: "Michael Jordan" }
    ]
  },
  {
    title: "NASCAR & Golf",
    clues: [
      { value: 200, clue: "Located in Darlington, South Carolina, this track is nicknamed 'Too Tough to Tame.'", answer: "Darlington Raceway" },
      { value: 400, clue: "This golf major is held every April at Augusta National Golf Club.", answer: "The Masters" },
      { value: 600, clue: "Nicknamed 'The Intimidator,' this NASCAR legend died in a crash at the 2001 Daytona 500.", answer: "Dale Earnhardt" },
      { value: 800, clue: "This golfer holds the record for most career major championships with 18.", answer: "Jack Nicklaus" },
      { value: 1000, clue: "Born in Level Cross, North Carolina, this NASCAR legend won a record-tying 7 Cup Series championships.", answer: "Richard Petty" }
    ]
  },
  {
    title: "US Geography",
    clues: [
      { value: 200, clue: "This is the capital of Virginia.", answer: "Richmond" },
      { value: 400, clue: "This is the capital of North Carolina.", answer: "Raleigh" },
      { value: 600, clue: "North Carolina's official nickname refers to this part of a tree, tied to its early naval-stores industry.", answer: "The Tar Heel State" },
      { value: 800, clue: "This river forms much of the Virginia/Maryland border and flows into the Chesapeake Bay.", answer: "The Potomac River" },
      { value: 1000, clue: "This U.S. state has more counties than any other, with 254.", answer: "Texas" }
    ]
  },
  {
    title: "World Geography",
    clues: [
      { value: 200, clue: "This is the largest country in the world by land area.", answer: "Russia" },
      { value: 400, clue: "This African country is home to the Great Pyramids of Giza.", answer: "Egypt" },
      { value: 600, clue: "This is the only South American country whose official language is Portuguese.", answer: "Brazil" },
      { value: 800, clue: "Located on the border of Nepal and Tibet, this is the tallest mountain in the world.", answer: "Mount Everest" },
      { value: 1000, clue: "This strait, which runs through the city of Istanbul, separates Europe and Asia.", answer: "The Bosphorus Strait" }
    ]
  },
  {
    title: "Marvel Cinematic Universe",
    clues: [
      { value: 200, clue: "This billionaire genius, played by Robert Downey Jr., is also known as Iron Man.", answer: "Tony Stark" },
      { value: 400, clue: "This 2019 film became (at the time) the highest-grossing movie ever, closing out the 'Infinity Saga.'", answer: "Avengers: Endgame" },
      { value: 600, clue: "Played by Josh Brolin, this villain sought to collect all six Infinity Stones.", answer: "Thanos" },
      { value: 800, clue: "This Wakandan superhero is also known by his royal name, T'Challa.", answer: "Black Panther" },
      { value: 1000, clue: "This actor has played Spider-Man/Peter Parker in the MCU since 2016.", answer: "Tom Holland" }
    ]
  },
  {
    title: "Sitcoms",
    clues: [
      { value: 200, clue: "This NBC mockumentary sitcom follows the staff of the Scranton branch of Dunder Mifflin.", answer: "The Office" },
      { value: 400, clue: "This sitcom follows six friends living in New York City: Ross, Rachel, Monica, Chandler, Joey, and Phoebe.", answer: "Friends" },
      { value: 600, clue: "Set in a Philadelphia dive bar, this sitcom follows 'The Gang.'", answer: "It's Always Sunny in Philadelphia" },
      { value: 800, clue: "Played by Steve Carell, this character was the regional manager of Dunder Mifflin Scranton.", answer: "Michael Scott" },
      { value: 1000, clue: "This long-running animated sitcom follows the Griffin family of Quahog, Rhode Island.", answer: "Family Guy" }
    ]
  },
  {
    title: "2000s & 2010s Movies",
    clues: [
      { value: 200, clue: "This 2008 film introduced Robert Downey Jr. as Tony Stark, kicking off the MCU.", answer: "Iron Man" },
      { value: 400, clue: "Christian Bale played the Caped Crusader in this Christopher Nolan trilogy.", answer: "The Dark Knight Trilogy (Batman)" },
      { value: 600, clue: "Set on the planet Pandora, this 2009 James Cameron film became the highest-grossing film ever at the time.", answer: "Avatar" },
      { value: 800, clue: "This 2010 Christopher Nolan film starring Leonardo DiCaprio involves entering people's dreams to plant an idea.", answer: "Inception" },
      { value: 1000, clue: "This Quentin Tarantino film starring Brad Pitt and Leonardo DiCaprio is set in 1969 Hollywood.", answer: "Once Upon a Time in Hollywood" }
    ]
  },
  {
    title: "Hip-Hop & Country",
    clues: [
      { value: 200, clue: "This Detroit rapper, known as 'Slim Shady,' starred in the 2002 film '8 Mile.'", answer: "Eminem" },
      { value: 400, clue: "This country duo, made up of Brian Kelley and Tyler Hubbard, had hits like 'Cruise' and 'Meant to Be.'", answer: "Florida Georgia Line" },
      { value: 600, clue: "This rapper and entrepreneur founded Roc Nation and is married to Beyoncé.", answer: "Jay-Z" },
      { value: 800, clue: "Known as 'The Man in Black,' this country legend sang 'Ring of Fire' and 'Folsom Prison Blues.'", answer: "Johnny Cash" },
      { value: 1000, clue: "This Compton rapper released the critically acclaimed albums 'good kid, m.A.A.d city' and 'DAMN.'", answer: "Kendrick Lamar" }
    ]
  },
  {
    title: "Beer & Bars",
    clues: [
      { value: 200, clue: "This is the best-selling domestic light beer in the United States, made by Anheuser-Busch.", answer: "Bud Light" },
      { value: 400, clue: "Held annually in Munich, this is the world's largest beer festival.", answer: "Oktoberfest" },
      { value: 600, clue: "This hoppy, bitter beer style is often abbreviated IPA.", answer: "India Pale Ale" },
      { value: 800, clue: "Founded in 2008 in Roseland, Virginia, this Blue Ridge Mountains brewery makes 'Gonzo Imperial Porter.'", answer: "Devils Backbone Brewing Company" },
      { value: 1000, clue: "Beer brewing is believed to have originated roughly 5,000 years ago in this ancient region, part of modern-day Iraq.", answer: "Sumer / Mesopotamia" }
    ]
  },
  {
    title: "Video Games",
    clues: [
      { value: 200, clue: "This Italian plumber is Nintendo's most famous mascot.", answer: "Mario" },
      { value: 400, clue: "Released in 2017, this battle royale game became a cultural phenomenon known for its dances and 'Victory Royales.'", answer: "Fortnite" },
      { value: 600, clue: "This military first-person shooter franchise includes 'Modern Warfare' and 'Black Ops.'", answer: "Call of Duty" },
      { value: 800, clue: "Made by Rockstar, this open-world game series is set in fictional cities like Los Santos and Liberty City.", answer: "Grand Theft Auto" },
      { value: 1000, clue: "This 1998 Nintendo 64 classic has Link traveling through time and is often called one of the greatest games ever made.", answer: "The Legend of Zelda: Ocarina of Time" }
    ]
  },
  {
    title: "Fast Food",
    clues: [
      { value: 200, clue: "This fast food chain's mascot is a red-haired clown named Ronald.", answer: "McDonald's" },
      { value: 400, clue: "Famous for chicken sandwiches and waffle fries, this chain is closed every Sunday.", answer: "Chick-fil-A" },
      { value: 600, clue: "This Tex-Mex chain's menu includes the 'Baja Blast' Mountain Dew flavor, exclusive to its restaurants.", answer: "Taco Bell" },
      { value: 800, clue: "Founded in Greensboro, NC in 1989, this chain is famous for its cheap 'trays' and dozens of milkshake flavors.", answer: "Cook Out" },
      { value: 1000, clue: "This fried chicken and biscuits chain was founded in Charlotte, North Carolina in 1977.", answer: "Bojangles" }
    ]
  },
  {
    title: "Presidents & General Knowledge",
    clues: [
      { value: 200, clue: "This Virginia plantation owner and Founding Father was the first President of the United States.", answer: "George Washington" },
      { value: 400, clue: "This U.S. president from Virginia was the primary author of the Declaration of Independence.", answer: "Thomas Jefferson" },
      { value: 600, clue: "This U.S. president resigned from office in 1974 due to the Watergate scandal.", answer: "Richard Nixon" },
      { value: 800, clue: "This is the only U.S. president to serve two non-consecutive terms, as the 22nd and 24th president.", answer: "Grover Cleveland" },
      { value: 1000, clue: "Eight U.S. presidents were born in this state, more than any other, including Washington, Jefferson, and Madison.", answer: "Virginia" }
    ]
  },
  {
    title: "National Parks",
    clues: [
      { value: 200, clue: "Located mostly in Wyoming, this national park is famous for the geyser 'Old Faithful.'", answer: "Yellowstone National Park" },
      { value: 400, clue: "Straddling the NC/TN border, this is the most visited national park in the U.S.", answer: "Great Smoky Mountains National Park" },
      { value: 600, clue: "This mile-deep Arizona canyon was carved out by the Colorado River.", answer: "The Grand Canyon" },
      { value: 800, clue: "This scenic 469-mile parkway connects Shenandoah National Park in Virginia to the Great Smoky Mountains.", answer: "The Blue Ridge Parkway" },
      { value: 1000, clue: "The first national park established east of the Mississippi, this Maine park includes Cadillac Mountain.", answer: "Acadia National Park" }
    ]
  },
  {
    title: "Classic Rock",
    clues: [
      { value: 200, clue: "Formed in Liverpool and made up of Lennon, McCartney, Harrison, and Starr, this is often called the most influential band ever.", answer: "The Beatles" },
      { value: 400, clue: "Fronted by Axl Rose, this American rock band released 'Appetite for Destruction' in 1987.", answer: "Guns N' Roses" },
      { value: 600, clue: "Fronted by Freddie Mercury, this British rock band performed 'Bohemian Rhapsody.'", answer: "Queen" },
      { value: 800, clue: "This Southern rock band from Jacksonville, Florida is known for 'Free Bird' and 'Sweet Home Alabama.'", answer: "Lynyrd Skynyrd" },
      { value: 1000, clue: "Often called the greatest rock song ever, this Led Zeppelin epic includes the line 'there's a lady who's sure all that glitters is gold.'", answer: "\"Stairway to Heaven\"" }
    ]
  },
  {
    title: "Olympics",
    clues: [
      { value: 200, clue: "This global sporting event is held every four years, alternating between summer and winter games.", answer: "The Olympics" },
      { value: 400, clue: "This American swimmer has won more Olympic medals than anyone in history, with 28.", answer: "Michael Phelps" },
      { value: 600, clue: "This Jamaican sprinter, the fastest man in history, holds world records in the 100m and 200m.", answer: "Usain Bolt" },
      { value: 800, clue: "This U.S. city hosted the Summer Olympics in 1996.", answer: "Atlanta, Georgia" },
      { value: 1000, clue: "This gymnast won 4 gold medals at the 2016 Rio Olympics and is the most decorated gymnast in U.S. history.", answer: "Simone Biles" }
    ]
  }
];
