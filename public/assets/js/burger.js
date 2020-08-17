// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".create-burger").on("submit", function (event) {
    event.preventDefault();
    let newBurgerName = $("#new-burger").val().trim();
    if (newBurgerName != "") {
      let newBurger = {
        burger_name: newBurgerName,
        devoured: false,
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    } else {
      //send alert to fill in the input field
      alert("Please enter a name your burger!");
    }
  });

  $(".change-status").on("click", function (event) {
    event.preventDefault();
    let id = $(event.target).data("id");

    let newStatusState = {
      devoured: true,
    };

    console.log(newStatusState);

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newStatusState,
    }).then(() => {
      console.log(`Your burger just got devoured!`);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    event.preventDefault();

    let id = $(event.target).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(() => {
      console.log(`Your burger just got deleted!`);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
