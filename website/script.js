document.getElementById('feedbackForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const email = emailInput.value;
    const message = messageInput.value;


    grecaptcha.ready(async function() {
        const recaptchaToken = await grecaptcha.execute('6LdtA1IqAAAAAGv9imy5hhgEt5_H5wx23WqE9EHS', {action: 'submit'});

        try {
            const response = await fetch('https://168ah2wg02.execute-api.us-east-1.amazonaws.com/prod/feedback', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    message: message,
                    recaptchaToken: recaptchaToken
                })
            });


            if (!response.ok) {
                throw new Error('Failed to send feedback');
            }


            const result = await response.json();
            alert(result.message);  

            
            emailInput.value = '';
            messageInput.value = '';

        } catch (error) {
            alert(error.message);  
        }
    });
});



let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const sec1 = document.querySelector('.sec-1');
    sec1.classList.add('show-animate');
});



const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://nspjqdglvc5d67edni3k432yfy0lyzso.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `<b>${data}</b> Page views`;
}
updateCounter();
