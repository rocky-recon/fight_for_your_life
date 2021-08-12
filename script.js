document.getElementById("help").addEventListener("click", showHelp);
document.getElementById("game").addEventListener("click", game);

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
  }
}

//  Get item
function getItem(get) {
  if (rooms[currentRoom].items[get] !== undefined) {
    inventory = rooms[currentRoom].items[get];
    $("#game-text").append("<p>" + inventory + "</p>");
  } else {
    $("#game-text").append("<p>Nothing to grab here!!!</p>");
  }
}

// Show Items
// function showItem() {
//   if (rooms[currentItems].length === 0) {
//     $("#game-text").append("<p>There are no items here!</p>");
//     return;
//   }
//   $("#game-text").append("<p>Available items: </p>");
//   $("#game-text").append("<p><ul>");
//   for (var i = 0; i < rooms[currentItems].length; i++) {
//     $("#game-text").append("<li>" + rooms[currentItems].length[i] + "</li>");
//   }
//   $("#game-text").append("</ul></p>");
// }

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
  // clear screen
  document.getElementById("game-text").innerHTML = " ";
  $("#game-text").append("<p>Here are the possible commands: </p>");
  $("#game-text").append("<p><ul>");
  for (let i = 0; i < commands.length; i++) {
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

// Help button
// function help() {
//   const x = document.getElementById("help");
//   if (x.style.display === "none") {
//     x.style.display = showHelp;
//   } else {
//     x.style.display = "none";
//   }
// }

$(document).ready(function () {
  $("#game-text").append(
    "<p id=first-text>" +
      rooms.start.description +
      " " +
      rooms.start.items.weapon_desc +
      " " +
      rooms.start.items.health_desc +
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
