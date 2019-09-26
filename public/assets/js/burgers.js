$(function() {

  //To add new burger to the list
  $("#submit").on("click", function() {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#name")
        .val()
        .trim()
    };

    //Send POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function(result) {
      console.log("New burger Added");
      location.reload();
    });
  });

  //To update the burger to devoured list
  $(".add-burger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devoured = $(this).data("devour");

    
    var addBurger = {
      id: id,
      devoured: devoured
    };

    $.ajax("/api/burgers/", {
      type: "PUT",
      data: addBurger
    }).then(function(result) {
      console.log("Burger Devoured!!");
      location.reload();
    })
  })

  $(".add-list").on("click", function() {
    event.preventDefault();

    var id = $(this).data("id");
    var devoured = $(this).data("devour");

    var listBurger = {
      id: id,
      devoured: devoured
    };
    console.log("listBurger", listBurger);

    $.ajax("/api/burgers/", {
      type: "PUT",
      data: listBurger
    }).then(function(result) {
      console.log("Burger Listed!!");
      location.reload();
    })
  })

});
