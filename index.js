const navLinks =
document.querySelector('nav a');
const sections = document.querySelector('section');
const portfolioImages = document.querySelectorAll('.gallery img');
const contactForm = document.getElementById('submit-button');

navLinks.forEach((link) => {
    link.addEventListener('click',(e) =>{
        e.preventDefault();
        const sectionId = 
        link.getAttribute('href');
        scrollToSection(sectionId);
    });
});
portfolioImages.forEach((image)=>{
    image.addEventListener('click',()=>{})
});
contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const formData = new
    FormData(contactForm);
    submitButton.disabled = true;
});
function
scrollToSection(sectionId){
    const section = document.querySelector(sectionId);
    section.scrollIntoView({
        behaviour:
        'smooth'
    });
}