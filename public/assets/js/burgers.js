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

    var id= $(this).data("id");
    var devoured= $(this).data("devour");

    console.log("id", id);
    console.log("devoured", devoured);

    var newState = {
      devoured: devoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function(result) {
      console.log("Burger Devoured!!");
      console.log(result);
      location.reload();
    })
  })

});
