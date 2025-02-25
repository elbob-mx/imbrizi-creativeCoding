bandsArray = [
    "Metallica",
    "Iron Maiden",
    "Slayer",
    "Pantera",
    "Megadeth",
    "Anthrax",
    "Sepultura",
    "Black Sabbath",
    "Judas Priest",
    "Motorhead",
    "Led Zeppelin",
    "Deep Purple",
    "Pink Floyd",
    "Queen",
    "The Rolling Stones",
    "The Who",
    "The Doors",
    "The Jimi Hendrix Experience",
    "The Clash",
    "Rammstein",
    "Rage Against the Machine",
    "Deftones",
    "Tool",
    "Mastodon",
    "Opeth",
    "Porcupine Tree",
    "Rush",
    "King Crimson",
    "Emerson, Lake & Palmer",
    "Camel",
    "The Alan Parsons Project",
    "Electric Light Orchestra",
    "Supertramp",
];

function listArtists() {
    for (let i = 0; i < bandsArray.length; i++) {
        console.log(bandsArray[i]);
    }
}

function listArtists() {
    console.log(bandsArray[Math.floor(Math.random() * 10)]);
}

listArtists();
