var currentRoom = "start";
var commands = ["go", "grab", "inventory", "talk", "display"];
var inventory = ["dog tags", "high and tight"];

// Change room
function changeRoom(dir) {
  if (rooms[currentRoom].directions[dir] !== undefined) {
    currentRoom = rooms[currentRoom].directions[dir];
    $("#game-text").append("<p>" + rooms[currentRoom].description + "</p>");
  } else {
    $("#game-text").append("<p>You cannot go that way!</p>");
  }
}

//  Get item
function getItem(get) {
  if (rooms[currentRoom].items[get] !== undefined) {
    currentRoom = rooms[currentRoom].items[get];
    $("#game-text").append("<p>" + rooms[currentRoom].items + "</p>");
  } else {
    $("#game-text").append("<p>Nothing to grab here!!!</p>");
  }
}

// Search room
// function searchRoom(search) {
//   if (rooms[currentRoom].items[search] !== undefined) {
//     currentRoom = rooms[currentRoom].items[search];
//     $("#game-text").append("<p>" + rooms[currentRoom].items + "</p>");
//   } else {
//     $("#game-text").append("<p>Nothing to grab here!!!</p>");
//   }
// }

function showHelp() {
  $("#game-text").append("<p>Here are the possible commands: </p>");
  $("#game-text").append("<p><ul>");
  for (var i = 0; i < commands.length; i++) {
    $("#game-text").append("<li>" + commands[i] + "</li>");
  }
  $("#game-text").append("</ul></p>");
}

function showInventory() {
  if (inventory.length === 0) {
    $("#game-text").append("<p>You are not carrying anything!</p>");
    return;
  }
  $("#game-text").append("<p>Here is your inventory: </p>");
  $("#game-text").append("<p><ul>");
  for (var i = 0; i < inventory.length; i++) {
    $("#game-text").append("<li>" + inventory[i] + "</li>");
  }
  $("#game-text").append("</ul></p>");
}

function playerInput(input) {
  var command = input.split(" ")[0];
  switch (command) {
    case "go":
      var dir = input.split(" ")[1];
      changeRoom(dir);
      break;
    // case "search":
    //   var search = input.split(" ")[1];
    //   changeRoom(search);
    //   break;
    case "grab":
      var get = input.split(" ")[1];
      getItem(get);
      break;
    case "help":
      showHelp();
      break;
    case "inventory":
      showInventory();
      break;
    default:
      $("#game-text").append("<p>Invalid command!</p>");
  }
}

// Clear screen
// $display.empty();

$(document).ready(function () {
  $("#game-text").append("<p>" + rooms.start.description + "</p>");

  $(document).keypress(function (key) {
    if (key.which === 13 && $("#user-input").is(":focus")) {
      var value = $("#user-input").val().toLowerCase();
      $("#user-input").val("");
      playerInput(value);
    }
  });
});
