setTimeout(function () {
  // var elementCount = $("*").css("border", "3px solid red").length;
  // $("body").prepend("<h3>" + elementCount + " elements found</h3>");

  // foodInfo = document.querySelector(".foodContainer h1");
  // foodInfo = foodInfo.textContent;
  // console.log(foodInfo);

  // function getFood() {
  //   $.getJSON("./json/foodMenu.json", function (data) {
  //     for (let i = 0; i < data.food.length; i++) {
  //       $("#menu").append(
  //         '<p>' + data.food[i].name + '</p>'
  //       )};
  //       })
  //   }

  // $(".addFood").bind("click", function () {
  //   alert("Event 1");
  //   getFood();
  // });

  // var arrayFood = $.getJSON("./json/foodMenu.json", function (data) {
    
  // });
  // for (var i = 0; i < arrayFood.length; i++) {
  //   document.getElementById(arrayFood[i]).innerHTML = arrayFood[i];
  // }

  let carts = document.querySelectorAll(".addFood");

  for (let i = 0; i < carts.length; i++) {
    // foodMenu();
    carts[i].addEventListener("click", () => {
      cartNumbers();
    });
  }

  function onLoadCartNumbers() {
    let foodNumbers = localStorage.getItem("cartNumbers");

    if (foodNumbers) {
      document.querySelector(".topbar span").textContent = foodNumbers;
    }
  }

  function cartNumbers() {
    console.log("eta porra funciona caralho");
    let foodNumbers = localStorage.getItem("cartNumbers");

    foodNumbers = parseInt(foodNumbers);

    if (foodNumbers) {
      localStorage.setItem("cartNumbers", foodNumbers + 1);
      document.querySelector(".topbar span").textContent = foodNumbers + 1;
    } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector(".topbar span").textContent = 1;
    }
  }
  onLoadCartNumbers();
}, 150);