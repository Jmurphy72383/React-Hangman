const words = [
    "Arya Stark",
    "Sandor Clegane",
    "Tywin Lannister",
    "Lord of Light",
    "Red Wedding",
    "Trial By Combat",
    "Castle Black",
    "The Nights Watch",
    "White Walkers",
    "Iron Throne",
    "High Garden",
    "Winterfell",
    "Oberyn Martel",
    "The Mountain",
    "Dragon Glass",
    "Longclaw",
    "Tormund Giantsbane",
    "Kings Landing",
    "Euron Greyjoy",
    "The Golden Company",
    "Sansa Stark",
    "Ser Bronn Of The Blackwater",
    "Littlefinger",
    "King Joffrey"
];

function getWord() {
    return words[Math.floor(Math.random() * words.length)].toUpperCase();
}

export { getWord };