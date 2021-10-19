class Race {
  constructor(year, round) {
    this.year = year;
    this.round = round;
  }

  getResult(year, round) {
    var result = ergast.getRaceResults({ year: year, round: round });
    console.log(result);
  }
}

bahrain2021 = new Race(2021, 1);
bahrain2021.getResult();
