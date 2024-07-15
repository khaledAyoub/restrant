var namesPfp = {
  Daniyal: {
    image: "./images/pfp/pfp1.jpg",
    city: "newyork",
    review: `"It is professional, considers everyone's time, can think about the
            There are many variations of passages whole probls small niche,
            friendly.`,
  },
  JohnDoe: {
    image: "./images/pfp/pfp2.jpg",
    city: "egypt",
    review: `"It is professional,  's time, can think about the
            There are many  of passages whole probls small niche,
            friendly.`,
  },
  notDany: {
    image: "./images/pfp/pfp3.jpg",
    city: "cairo",
    review: `"It is , considers everyone's time, can think about the
            There are  variations of  whole probls small niche,
            friendly.`,
  },
  dodo: {
    image: "./images/pfp/pfp4.jpg",
    city: "washonton",
    review: `"It is , considers 's time, can think about the
            There are many   passages whole probls small niche,
            friendly.`,
  },
  anya: {
    image: "./images/pfp/pfp5.jpeg",
    city: "paris",
    review: `"It is professional, considers everyone's , can  about the
            There are many variations of  whole probls small niche,
            friendly.`,
  },
  marcous: {
    image: "./images/pfp/pfp6.jpeg",
    city: "gliym",
    review: `"It is professional, considers everyone's time, can think about the
             are many  of passages  probls small niche,
            friendly.`,
  },
  undifiend01: {
    image: "./images/pfp/pfp7.jpeg",
    city: "china",
    review: `"It is professional, considers everyone's time, can think about the
            There are many variations of passages whole probls small niche,
            friendly.`,
  },
  userUnknow: {
    image: "./images/pfp/pfp8.png",
    city: "chingBong",
    review: `"It is , considers everyone's time,  think about the
            There are many  of passages whole probls small niche,
            friendly.`,
  },
  notMe: {
    image: "./images/pfp/pfp9.png",
    city: "kingKong",
    review: `"It is professional, considers everyone's time, can think about the
            There are many variations of passages whole probls small niche,
            friendly.`,
  },
  ItsRed: {
    image: "./images/pfp/pfp10.jpeg",
    city: "Godzilla",
    review: `"It is professional, considers everyone's time, can think about the
            There are many variations of passages whole probls small niche,
            friendly.`,
  },
};

function fillReviews() {
  let reviewDiv = document.querySelector(".customersReviews");
  for (i in namesPfp) {
    reviewDiv.insertAdjacentHTML(
      "beforeend",
      ` <div class="reviewCard">
          <div>
            <img src=${namesPfp[i].image} />
            <div>
              <h2>${i}</h2>
              <h3>${namesPfp[i].city}</h3>
            </div>
          </div>
          <p>
          ${namesPfp[i].review}</p>
          </p>
        </div>`
    );
  }
}

var slider = document.querySelector(".customersReviews");
let goLeftButton = document.querySelector("#goLeft");
let goRightButton = document.querySelector("#goRight");
let count = 0;

goLeftButton.style.display = "none";

function goLeft() {
  count--;
  console.log(count);
  slider.style.transform += "translateX(80dvw)";
  if (!count) {
    goLeftButton.style.display = "none";
  }
  goRightButton.style.display = "block";
}
function goRight() {
  count++;
  console.log(count);

  slider.style.transform += "translateX(-80dvw)";
  if (count == Math.round(Object.keys(namesPfp).length / 3)) {
    goRightButton.style.display = "none";
  }
  goLeftButton.style.display = "block";
}

fillReviews();

document.body.addEventListener("resize", (event) => {
  console.log("kk");
});
