const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://nspjqdglvc5d67edni3k432yfy0lyzso.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `This page has <b>${data}</b> views`;
}

updateCounter();


// Select the toggle switch input
const toggleModeSwitch = document.getElementById('toggleModeSwitch');

// Add change event listener to toggle switch
toggleModeSwitch.addEventListener('change', function() {
    // Toggle between light and dark mode
    document.body.classList.toggle('dark-mode');
});
