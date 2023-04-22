const allBossInfo = [
    {
        name: "Iudex Gundyr",
        imageUrl: "/assets/Iudex.jpg",
        weaknesses: ["Strike", "Lightning", "Frostbite", "Farron Greatsword", "Fire", "Frostbite"],
        resistances: ["Dark", "Bleed"],
        immune: ["Poison", "Toxic"],
        exp: "3,000",
        health: "1,037",
        location: "Cemetery of Ash"
    },
    {
        name: "Vordt of the Boreal Valley",
        imageUrl: "/assets/Vordt.webp",
        weaknesses: ["Dark", "Strike"],
        resistances: ["Standard", "Slash", "Thrust", "Magic"],
        immune: ["Poison", "Toxic", "Bleed", "Frostbite"],
        exp: "3,000",
        health: "1,328",
        location: "High Wall of Lothric"
    },
    {
        name: "Curse-Rotted Greatwood",
        imageUrl: "/assets/Greatwood.webp",
        weaknesses: ["Slash", "Thrust", "Fire"],
        resistances: ["None"],
        immune: ["Poison", "Toxic", "Bleed", "Frostbite"],
        exp: "7,000",
        health: "5,405",
        location: "Undead Settlement"
    },
    {
        name: "Crystal Sage",
        imageUrl: "/assets/CrystalSage.webp",
        weaknesses: ["Slash", "Thrust", "Standard", "Strike", "Lightning", "Dark", "Fire", "Poison", "Toxic", "Frostbite"],
        resistances: ["Magic"],
        immune: ["None"],
        exp: "8,000",
        health: "2,723",
        location: "Road of Sacrifices"
    },
    {
        name: "Deacons of the Deep",
        imageUrl: "/assets/Deacons.jpg",
        weaknesses: ["Slash", "Thrust", "Standard", "Strike", "Frostbite"],
        resistances: ["Dark", "Bleed", "Magic", "Poison", "Toxic"],
        immune: ["None"],
        exp: "13,000",
        health: "4,099",
        location: "Cathedral of the Deep"
    },
    {
        name: "Abyss Watchers",
        imageUrl: "/assets/AbyssWatchers.jpg",
        weaknesses: ["Lightning"],
        resistances: ["Dark", "Bleed"],
        immune: ["Poison", "Toxic"],
        exp: "18,000",
        health: "1,548",
        location: "Farron Keep"
    },
    {
        name: "High Lord Wolnir",
        imageUrl: "/assets/Wolnir.webp",
        weaknesses: ["Strike", "Blessed Weapon"],
        resistances: ["Dark", "Poison", "Toxic"],
        immune: ["Bleed", "Frostbite"],
        exp: "22,000",
        health: "15,041",
        location: "Catacombs of Carthus"
    },
    {
        name: "Old Demon King",
        imageUrl: "/assets/DemonKing.webp",
        weaknesses: ["Dark"],
        resistances: ["Fire", "Poison", "Toxic"],
        immune: ["Bleed", "Frostbite"],
        exp: "25,000",
        health: "5,301",
        location: "Smouldering Lake"
    },
    {
        name: "Pontiff Sulyvahn",
        imageUrl: "/assets/Pontiff.webp",
        weaknesses: ["Thrust", "Fire", "Lightning", "Dark"],
        resistances: ["Frostbite", "Poison", "Toxic", "Bleed"],
        immune: ["None"],
        exp: "28,000",
        health: "5,106",
        location: "Irithyll of the Boreal Valley"
    },
    {
        name: "Aldrich, Devourer of Gods",
        imageUrl: "/assets/Aldrich.jpg",
        weaknesses: ["Thrust", "Fire", "Lightning"],
        resistances: ["Frostbite", "Dark", "Magic", "Bleed"],
        immune: ["Poison", "Toxic"],
        exp: "50,000",
        health: "4,727",
        location: "Anor Londo"
    },
    {
        name: "Yhorm the Giant",
        imageUrl: "/assets/Yhorm.jpg",
        weaknesses: ["Dark", "Lightning"],
        resistances: ["Slash", "Thrust"],
        immune: ["Poison", "Toxic", "Fire", "Bleed", "Frostbite"],
        exp: "36,000",
        health: "27,822",
        location: "Profaned Capital"
    },
    {
        name: "Dancer of the Boreal Valley",
        imageUrl: "/assets/Dancer.jpg",
        weaknesses: ["Dark", "Strike", "Lightning"],
        resistances: ["Bleed"],
        immune: ["Poison", "Toxic", "Frostbite"],
        exp: "60,000",
        health: "5,111",
        location: "High Wall of Lothric"
    },
    {
        name: "Oceiros, the Consumed King",
        imageUrl: "/assets/Oceiros.png",
        weaknesses: ["Frostbite", "Lightning"],
        resistances: ["Bleed", "Magic"],
        immune: ["Poison", "Toxic"],
        exp: "58,000",
        health: "8,087",
        location: "Consumed King's Garden"
    },
    {
        name: "Champion Gundyr",
        imageUrl: "/assets/Gundyr.jpg",
        weaknesses: ["Strike", "Bleed", "Frostbite", "Lightning"],
        resistances: ["Slash", "Poison", "Toxic"],
        immune: ["None"],
        exp: "60,000",
        health: "4,956",
        location: "Untended Graves"
    },
    {
        name: "Dragonslayer Armour",
        imageUrl: "/assets/Dragonslayer.jpg",
        weaknesses: ["Strike","Frostbite"],
        resistances: ["Slash", "Dark", "Lightning"],
        immune: ["Poison", "Toxic", "Bleed"],
        exp: "48,000",
        health: "4,581",
        location: "Lothric Castle"
    },
    {
        name: "Lothric",
        imageUrl: "/assets/Lothric.jpg",
        weaknesses: ["Frostbite", "Lightning", "Magic"],
        resistances: ["Dark"],
        immune: ["Poison", "Toxic"],
        exp: "85,000",
        health: "4,294",
        location: "Grand Archives"
    },
    {
        name: "Ancient Wyvern",
        imageUrl: "/assets/Wyvern.webp",
        weaknesses: ["Plunging Attack", "Frostbite", "Lightning", "Thrust"],
        resistances: ["Poison", "Toxic", "Bleed", "Fire", "Standard", "Strike", "Slash"],
        immune: ["None"],
        exp: "70,000",
        health: "7,873",
        location: "Archdragon Peak"
    },
    {
        name: "King of the Storm",
        imageUrl: "/assets/Storm.jpg",
        weaknesses: ["Frostbite", "Lightning"],
        resistances: ["Poison", "Toxic", "Bleed", "Fire"],
        immune: ["None"],
        exp: "80,000",
        health: "4,577",
        location: "Archdragon Peak"
    },
    {
        name: "Nameless King",
        imageUrl: "/assets/Nameless.jpg",
        weaknesses: ["Fire", "Dark"],
        resistances: ["Bleed", "Frostbite", "Lightning"],
        immune: ["Poison", "Toxic"],
        exp: "80,000",
        health: "7,100",
        location: "Archdragon Peak"
    },
    {
        name: "Soul of Cinder(Phase 1)",
        imageUrl: "/assets/CinderOne.jpg",
        weaknesses: ["Lightning", "Dark"],
        resistances: ["Bleed", "Fire"],
        immune: ["Poison", "Toxic"],
        exp: "n/a",
        health: "6,557",
        location: "Kiln of the First Flame"
    },
    {
        name: "Soul of Cinder(Phase 2)",
        imageUrl: "/assets/CinderTwo.jpg",
        weaknesses: ["Lightning", "Dark"],
        resistances: ["Bleed", "Fire"],
        immune: ["Poison", "Toxic"],
        exp: "100,000",
        health: "4,209",
        location: "Kiln of the First Flame"
    }
]

export default allBossInfo