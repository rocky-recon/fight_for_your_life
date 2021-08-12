const rooms = {
  start: {
    description:
      "You're Affliction shirt matches with your truck. <br> Go <b>east</b> to your yard.",
    directions: {
      south: "road",
      east: "yard",
    },
    items: {
      weapon: "Skoal Wintergreen Long Cut",
      health: "Monster Energy Drink",
      weapon_desc:
        "You feel a skoal wintergreen dip in the back pocket of your jeans.",
      health_desc:
        "You see a Monster energy drink. It gives you energy but hurts your health",
    },
    random_CQC: 0,
  },

  road: {
    // #you won the game
    description:
      "You have won the game. <br> Go <b>north</b> if you want to continue playing the game",
    directons: {
      north: "start",
    },
  },

  yard: {
    description:
      "There are toys on the ground. <br> You can go <b>north</b> to the Shed or <b>south</b> to the House.",
    directions: {
      north: "shed",
      south: "house",
    },
    items: {
      weapon: "dog poop",
      weapon_desc: "The chihuahua strikes again",
    },
    random_CQC: 30,
    // 'pic' : hippo_pic("yard_map.txt"),
  },

  shed: {
    description: "The Shed has been here for years and offers moral support.",
    directions: {
      south: "yard",
    },
    items: "chair",
    item_desc: "The chair is only here for moral support",

    random_CQC: 0,
  },

  // #figure out how to make Taco Bell and Monster hurt your health'''
  house: {
    description:
      "You're house was built before WWII and the mold is older than your grand-father. <br> You can go <b>west</b> to the Kitchen, <b>south</b> to the Living room,<br> or <b>east</b> to the hall.",
    directions: {
      west: "kitchen",
      south: "room",
      east: "hall",
    },
    spell: "white muscle shirt",
    spell_desc: "You're white muscle shirt can be used to attack",

    health: "taco bell",
    health_desc: "Taco Bell attacks your gut!!!",
    random_CQC: 60,
    // 'pic' : hippo_pic("house_map.txt"),
  },

  kitchen: {
    description:
      "The fride door is open and somehow there is PB&J on the ceiling. <br> You can go <b>south</b> to the Living Room or <b>north</b> through a Door",
    directions: {
      south: "room",
      north: "door",
    },
    health: "monster energy drink",
    health_desc: "Monster Energy Drink gives energy but hurts your health",
    random_CQC: 50,
    // 'pic' : hippo_pic("kitche_map.txt"),
  },

  room: {
    description:
      "Live, Love, Laugh is on the wall. You can go <b>east</b> to the Hall, <b>west</b> to the Kitchen, or go <b>north</b> to the yard.",
    directions: {
      east: "hall",
      west: "kitchen",
      north: "yard",
    },
    health: "taco bell",
    health_desc: "Taco Bell attacks your gut!!!",

    random_CQC: 40,
  },

  hall: {
    description:
      "A dark valley that takes you to your Bedroom or the office. <br> You can go <b>west</b> to the Office, <b>south</b> to the Bedroom, or <b>east</b> to the living room",
    directions: {
      west: "office",
      south: "bedroom",
      east: "room",
    },
    spell: "self-esteem",
    spell_desc: "Self-esteem can be used to attack",

    random_CQC: 0,
  },

  office: {
    description:
      "You have entered the MLM spot. Grab your leggings and SALE! SALE! SALE!!!",
    directions: {
      north: "kitchen",
    },
    item: "xbox",
    item_desc: "You have decided to hide and play COD",
  },

  bedroom: {
    description: "The place you lost your soul",
    directions: {
      north: "hall",
    },
    item: "ps4",
    item_desc: "Play video games to avoid responsibilities",

    random_CQC: 100,
    // 'pic' : hippo_pic("hippo.txt"),
  },
};
