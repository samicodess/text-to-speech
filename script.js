let btn = document.querySelector("button");
let userText = document.querySelector("input");

let msg = new SpeechSynthesisUtterance();


// Function to retrieve the list of available voices
function populateVoices() {
    let voices = window.speechSynthesis.getVoices();
    // Find a female voice
    let femaleVoice = voices.find(function(voice) {
        return voice.name === 'Yasmin Arabic Female'; // Adjust the voice name according to your browser and system
    });

    // Set the desired voice
    msg.voice = femaleVoice;
}

// Populate voices initially
populateVoices();

// Update voices if changed
window.speechSynthesis.onvoiceschanged = populateVoices;

// when click on button
btn.addEventListener('click', () => {
    // when input value is blank
    if(userText.value == "") {
        msg.text = "Please type text that you wanna speech";
    } else {
        msg.text = userText.value;
    }
    window.speechSynthesis.speak(msg);
})
