// Function to open and close the side navigation bar
function toggleNav() {
    let sidenav = document.getElementById("mySidenav");
    sidenav.classList.toggle("open");
}




document.querySelectorAll('.icon-item').forEach((icon) => {
    const modal = document.getElementById('image-modal');

    icon.addEventListener('mouseover', (e) => {
        const iconName = icon.getAttribute('data-name');
        modal.textContent = iconName;

        const rect = icon.getBoundingClientRect();
        modal.style.top = `${rect.bottom + window.scrollY}px`;
        modal.style.left = `${rect.left + (rect.width / 2) - (modal.offsetWidth / 2)}px`;

        modal.style.display = 'block';
    });

    icon.addEventListener('mousemove', (e) => {
        const rect = icon.getBoundingClientRect();
        modal.style.top = `${rect.bottom + window.scrollY}px`;
        modal.style.left = `${rect.left + (rect.width / 2) - (modal.offsetWidth / 2)}px`;
    });

    icon.addEventListener('mouseout', () => {
        modal.style.display = 'none';
    });
});

// spring effect

// document.querySelectorAll('.effect').forEach(card => {
//     card.addEventListener('mouseenter', () => {
//         gsap.fromTo(
//             card,
//             { scale: 1 },
//             { scale: 1.1, duration: 0.6, ease: "elastic.out(1, 0.5)" }
//         );
//     });

//     card.addEventListener('mouseleave', () => {
//         gsap.to(card, { scale: 1, duration: 0.4, ease: "power2.out" });
//     });
// });


// input js

// Select all input and textarea fields
const inputs = document.querySelectorAll('.input-group input, .input-group textarea');

// Add event listeners to all input fields
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.nextElementSibling.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.nextElementSibling.classList.remove('active');
        }
    });
});


// Get the button
let backToTopBtn = document.getElementById('backToTopBtn');

// Show button when user scrolls down 200px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
};

// Scroll to the top when button is clicked
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    
    emailjs.send('service_w844fz3', 'template_mib4ruo', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully!");
            console.log("hello send");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send message. Please try again later.");
        });
        console.log("hello send");
        
    // Reset the form
    document.getElementById('contact-form').reset();
});



  