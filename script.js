

function Poker (firstName, lastName, nickname, origin, gender, titles, winnings, cashes, topPay, poy, twitter ) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.nickname = nickname;
  this.countryOfOrigin = origin;
  this.genderPronoun = gender;
  this.titlesWon = titles;
  this.totalWinnings = winnings;
  this.totalCashes = cashes;
  this.playerOfTheYearRank = poy;
  this.twitter = twitter;
  this.bestCashout = topPay;
}

var daniel = new Poker ('Daniel', 'Negreanu', 'Kid Poker', 'Canada', 'he', 38, '31,498,123', 241, '8,288,001', 1124, '@RealKidPoker');


var playerBio = function () {
   console.log(daniel.firstName + ' ' + daniel.lastName + ', aka ' + daniel.nickname + ', is a professional poker player from ' + daniel.countryOfOrigin + '. With ' + daniel.titlesWon + ' major titles and ' + daniel.totalCashes + ' total cashes, ' + daniel.genderPronoun + ' has accumulated $' + daniel.totalWinnings + ' in total tournament winnings. ' + daniel.firstName + '\'s largest cashout for a single tournament is $' + daniel.bestCashout + '. Follow ' + daniel.firstName + ' ' + daniel.lastName + ' on Twitter ' + daniel.twitter + '.');
}

playerBio();
