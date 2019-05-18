const words = [
    "Arya Stark",
    "Sandor",
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
    "Oberyn Martel"
];

function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}

export { getWord };