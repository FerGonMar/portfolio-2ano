// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.progress');
const skillsSection = document.querySelector('.skills');

const animateSkills = () => {
    const triggerBottom = window.innerHeight * 0.8;
    
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        
        if (barTop < triggerBottom) {
            const targetWidth = bar.parentElement.previousElementSibling.lastElementChild.textContent;
            bar.style.width = targetWidth;
        }
    });
};

window.addEventListener('scroll', animateSkills);

// Download CV functionality
document.querySelector('.download-cv').addEventListener('click', function() {
    // Create a Blob with sample CV content (you would replace this with your actual CV file)
    const cvContent = `
    Gilson da Silva
    Analista de sistemas
    
    Contato:
    Telefone: +55 35 670-399-9009
    Email: gilsondasilva182@gmail.com
    Endereço: 146, Silviano Brandaão
    
    Skills:
    - Photoshop (95%)
    - Corel Draw (90%)
    - Adobe ilustraitor (70%)
    - Motion Graphics (75%)
    - Adobe XD (90%)
    - HTML (90%)
    - CSS (80%)
    - Javascript (80%)
    - React (60%)
    - React Native (30%)
    - Node js  (50%)
    - Nextjs   (30%)
    - TypeScript (40%)

    
    Languages:
    - Ingles Basico
    `;
    
    // Create Blob and download link
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gilson-silva-cv.txt';
    
    // Trigger download
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
});

// Optional: Add loading animation during download
const downloadButton = document.querySelector('.download-cv');
downloadButton.addEventListener('click', function() {
    // Add loading state
    this.innerHTML = 'Downloading...';
    this.style.opacity = '0.7';
    
    // Reset button after download (after small delay to show loading state)
    setTimeout(() => {
        this.innerHTML = 'Download CV';
        this.style.opacity = '1';
    }, 1000);
});