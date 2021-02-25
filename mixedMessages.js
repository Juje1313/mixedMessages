let subject = "You";
let verb = ["can", "should", "want to"];
let message = ["let go of the past",
               "forgive your enemies",
               "be and do your best",
               "trust yourself",
               "listen to your instincts",
               "believe in yourself",
               "stay true to yourself",
               "be faithful to your family and friends",
               "invest in yourself",
               "consider your dreams",
               "reconnect with old friends",
               "take care of your body",
               "be gentle with your mistakes",
               "embrace silence",
               "learn that hobby you always wanted to",
               "have courage in all things",
               "be the hero you always looked up to",
               "take a chance on love"];

function randomPicker(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    
    return array[randomIndex];
}

function messageBuilder(subject, verbArray, messageArray) {
    let verb = randomPicker(verbArray);
    let message = randomPicker(messageArray);

    return `${subject} ${verb} ${message}`;
}

console.log(messageBuilder(subject, verb, message));