var Starters = {
  "Raw Scallops from Erquy": {
    image: "./images/course1.jpg",
    price: "$30",
    description: "Candied Jerusalem artichokes, truffle",
  },
  "Spring Roll": {
    image: "./images/course2.png",
    price: "$25",
    description: "Candied Jerusalem artichokes, truffle",
  },
  "French Onion Soup": {
    image: "./images/course3.jpg",
    price: "$20",
    description: "Candied Jerusalem artichokes, truffle",
  },
  "Tomato Bruschetta": {
    image: "./images/course4.jpg",
    price: "$25",
    description: "Candied Jerusalem artichokes, truffle",
  },
};

var Main_Dish = {
  "Grilled Salmon with Dil Sauce": {
    image: "./images/course5.jpg",
    price: "$40",
    description: "Candied Jerusalem artichokes, truffle",
  },
  "Roast Beef with Vegetable": {
    image: "./images/course6.jpg",
    price: "$20",
    description: "Candied Jerusalem artichokes, truffle",
  },
  "Marrkesh Vegetetarian Curruy": {
    image: "./images/course7.jpg",
    price: "$50",
    description: "Candied Jerusalem artichokes, truffle",
  },
  "Spicy Vegan Potato Curry": {
    image: "./images/course8.jpg",
    price: "$60",
    description: "Candied Jerusalem artichokes, truffle",
  },
};

console.log(Starters["Spring Roll"].image);

function addCourses() {
  let Start = document.getElementById("Starters");
  let main = document.getElementById("mainCourse");

  for (let i in Starters) {
    Start.insertAdjacentHTML(
      "afterend",
      `<div class="courseCards">
              <img src="${Starters[i].image}" />
              <div>
                <h2>${i}</h2>
                <p>${Starters[i].description}</p>
              </div>
              <div class="hr"></div>
              <h2>${Starters[i].price}</h2>
            </div>`
    );
  }

  for (let i in Main_Dish) {
    main.insertAdjacentHTML(
      "afterend",
      `<div class="courseCards">
              <img src="${Main_Dish[i].image}" />
              <div>
                <h2>${i}</h2>
                <p>${Main_Dish[i].description}</p>
              </div>
              <div class="hr"></div>
              <h2>${Main_Dish[i].price}</h2>
            </div>`
    );
  }
}

addCourses();
