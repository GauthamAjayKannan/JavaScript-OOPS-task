class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG(arr) {
    let r = [];
    for (let i of arr) {
      if (i.rating == "PG") {
        r.push(i);
      }
    }
    return r;
  }
}

let a = new Movie("The Avengers", "Marvel", "PG13");
let b = new Movie("Avatar", "20th Century Studios", "PG");
let c = new Movie("Spider Man", "Columbia", "PG");
let d = new Movie("Iron Man", "Marvel", "PG13");

let arr = [a, b, c, d];

//Movie object created as instructed
moviecr = new Movie("Casino Royale", "Eon productions", "PG13");
console.log(moviecr);

//Testing of getPG method
console.log(moviecr.getPG(arr));
