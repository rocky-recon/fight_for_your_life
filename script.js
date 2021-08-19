// document.getElementById("help").addEventListener("click", showHelp);
// document.getElementById("game").addEventListener("click", game);

let currentRoom = "start";
let commands = ["go", "grab", "inventory", "talk", "display"];
let inventory = ["dog tags", "high and tight"];

// Change room
function changeRoom(dir) {
  if (rooms[currentRoom].directions[dir] !== undefined) {
    currentRoom = rooms[currentRoom].directions[dir];
    $("#game-text").append("<p>" + rooms[currentRoom].description + "</p>");
  } else {
    $("#game-text").append("<p>You cannot go that way!</p>");
    $("#game-text").append("<p>" + rooms[currentRoom].description + "</p>");
  }
}

//  Get item
function getItem(get) {
  if (rooms[currentRoom].items[get] !== undefined) {
    inventory = rooms[currentRoom].items[get];
    $("#game-text").append("<p>" + inventory + "</p>");
  } else {
    $("#game-text").append("<p>Nothing to grab here!!!</p>");
    $("#game-text").append("<p>" + inventory + "</p>");
  }
}

function showHelp() {
  // clear screen
  document.getElementById("game-text").innerHTML = " ";
  $("#game-text").append("<p>Here are the possible commands: </p>");
  $("#game-text").append("<p><ul>");
  for (let i = 0; i < commands.length; i++) {
    $("#game-text").append("<li>" + commands[i] + "</li>");
  }
  $("#game-text").append("</ul></p>");
  $("#game-text").append("<p>" + rooms[currentRoom].description + "</p>");
}

function showInventory() {
  if (inventory.length === 0) {
    $("#game-text").append("<p>You are not carrying anything!</p>");
    $("#game-text").append("<p>" + rooms[currentRoom].description + "</p>");
    return;
  }
  $("#game-text").append("<p>Here is your inventory: </p>");
  $("#game-text").append("<p><ul>");
  for (let i = 0; i < inventory.length; i++) {
    $("#game-text").append("<li>" + inventory[i] + "</li>");
  }
  $("#game-text").append("</ul></p>");
}

async function playerInput(input) {
  // clear screen
  document.getElementById("game-text").innerHTML = " ";
  const command = input.split(" ")[0];
  switch (command) {
    case "go":
      let dir = input.split(" ")[1];
      changeRoom(dir);
      break;
    // case "search":
    //   let search = input.split(" ")[1];
    //   changeRoom(search);
    //   break;
    case "grab":
      let get = input.split(" ")[1];
      getItem(get);
      break;
    case "show":
      showItem();
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

// game function
function game() {
  changeRoom;
}

// display Help and hide it.
$("#help").bind("click", function () {
  document.getElementById("game-text").innerHTML = " ";
  $("#game-text").append(
    "<div id=help-text>" +
      "<h4>" +
      "You must type one of the followings: " +
      "</h4>" +
      "<p>" +
      // here are the commands work on , <b>'talk'</b>, <b>'display'</b>
      "<b>'go'</b>,<b>'grab'</b>, <b>'inventory'</b> plus" +
      " direction, weapon, health" +
      "</p> " +
      "<p>" +
      "You can pick up weapons and health in every room." +
      "</p>" +
      "</div>"
  );
  $("#game-text").append("<p>" + rooms[currentRoom].description + "</p>");
});

// How to Start the game from the start button
$("#start-game").bind("click", function () {
  document.getElementById("game-text").innerHTML = " ";
  $("#game-text").append(
    "<p id=first-text>" +
      rooms.start.description +
      " " +
      rooms.start.items.weapon_desc +
      " " +
      rooms.start.items.health_desc +
      "</p>"
  );
});

// How to show inventory of the game
$("#inventory").bind("click", function () {
  document.getElementById("game-text").innerHTML = " ";
  $("#game-text").append("<p id=first-text>" + inventory + "</p>");
  $("#game-text").append("<p>" + rooms[currentRoom].description + "</p>");
});

// First screen end user sees
$(document).ready(function () {
  $("#game-text").append(
    "<h4 id=first-text>" +
      "How To Play My Text Adventure Game" +
      "</h4> " +
      "<p>" +
      "You must type one of the followings " +
      // here are the commands work on , <b>'talk'</b>, <b>'display'</b>
      "<b>'go'</b>,<b>'grab'</b>, <b>'inventory'</b> plus" +
      " direction, weapon, health" +
      "</p> " +
      "<p>" +
      "You can pick up weapons and health in every room." +
      "If you need any help you can select the <b> Help </b> button below. " +
      "</p>" +
      "<p>" +
      "Press Start to begin the Game. <b> Good Luck </b>" +
      "</p>"
  );

  $(document).keypress(function (key) {
    if (key.which === 13 && $("#user-input").is(":focus")) {
      const value = $("#user-input").val().toLowerCase();
      $("#user-input").val("");
      playerInput(value);
    }
  });
});
