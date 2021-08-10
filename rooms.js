var rooms = {
  start: {
    directions: {
      south: "Road",
      east: "Yard",
    },
    description:
      "You're Affliction shirt matches with your truck. You can go <b>south</b> to the road or <b>east</b> to your yard",

    // spell: "skoal wintergreen dip",
    // spell_desc: "back pocket of jeans",
    // health: "monster energy drink",
    // health_desc: "Monster Energy Drink gives energy but hurts your health",
    // random_CQC: 0,
    // 'pic' : hippo_pic("truck_map.txt"),
  },

  road: {
    directons: {
      north: "Go <b>north</b> if you want to continue playing the game",
    },
    // #you won the game
    description: "You have won the game",
  },

  yard: {
    directions: {
      north: "Shed",
      south: "House",
    },
    description:
      "There are toys on the ground. You can go <b>north</b> to the Shed or <b>south</b> to the House.",

    item: "dog poop",
    item_desc: "The chihuahua strikes again",
    random_CQC: 30,
    // 'pic' : hippo_pic("yard_map.txt"),
  },

  shed: {
    directions: {
      west: "Shed",
    },
    description: "The Shed has been here for years and offers moral support.",

    item: "chair",
    item_desc: "The chair is only here for moral support",

    random_CQC: 0,
  },

  // #figure out how to make Taco Bell and Monster hurt your health'''
  house: {
    directions: {
      west: "Kitchen",
      south: "Living Room",
      east: "Hall",
    },
    description:
      "You're house was built before WWII and the mold is older than your grand-father. You can go north to the Kitchen, south to the Living room, or west to the hall.",
    spell: "white muscle shirt",
    spell_desc: "You're white muscle shirt can be used to attack",

    health: "taco bell",
    health_desc: "Taco Bell attacks your gut!!!",
    random_CQC: 60,
    // 'pic' : hippo_pic("house_map.txt"),
  },

  kitchen: {
    directions: {
      south: "Living Room",
      north: "Door",
    },
    description:
      "The fride door is open and somehow there is PB&J on the ceiling. You can go south to the Living Room or north through a Door",
    health: "monster energy drink",
    health_desc: "Monster Energy Drink gives energy but hurts your health",
    random_CQC: 50,
    // 'pic' : hippo_pic("kitche_map.txt"),
  },

  "Living Room": {
    directions: {
      east: "Hall",
      west: "Kitchen",
      north: "Yard",
    },
    description:
      "Live, Love, Laugh is on the wall. You can go west to the Hall",
    health: "taco bell",
    health_desc: "Taco Bell attacks your gut!!!",

    random_CQC: 40,
  },

  hall: {
    directions: {
      west: "Office",
      south: "Bedroom",
      east: "Living Room",
    },
    description:
      "A dark valley that takes you to your Bedroom or the office. You can go west to the Office, south to the Bedroom, or east to the living room",
    spell: "self-esteem",
    spell_desc: "Self-esteem can be used to attack",

    random_CQC: 0,
  },

  office: {
    directions: {
      north: "Kitchen",
    },
    description:
      "You have entered the MLM spot. Grab your leggings and SALE! SALE! SALE!!!",
    item: "xbox",
    item_desc: "You have decided to hide and play COD",
  },

  bedroom: {
    directions: {
      north: "Hall",
    },
    description: "The place you lost your soul",
    item: "ps4",
    item_desc: "Play video games to avoid responsibilities",

    random_CQC: 100,
    // 'pic' : hippo_pic("hippo.txt"),
  },
};
