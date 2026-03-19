// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===== LOAD EXPERIENCE TIMELINE =====
function loadExperience() {
    const timeline = document.getElementById('experienceTimeline');
    
    portfolioData.experience.forEach((job, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item fade-in';
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-header">
                    <div>
                        <h3 class="timeline-title">${job.title}</h3>
                        <div class="timeline-company">${job.company} • ${job.location}</div>
                    </div>
                    <span class="timeline-date">${job.period}</span>
                </div>
                <p class="timeline-description">${job.description}</p>
                <div class="timeline-tags">
                    ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        timeline.appendChild(item);
    });
}

// ===== LOAD SKILLS =====
function loadSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    portfolioData.skills.forEach((skillCategory, index) => {
        const category = document.createElement('div');
        category.className = 'skill-category fade-in';
        category.style.animationDelay = `${index * 0.1}s`;
        
        category.innerHTML = `
            <div class="skill-category-icon">${skillCategory.icon}</div>
            <h3 class="skill-category-title">${skillCategory.category}</h3>
            <div class="skill-items">
                ${skillCategory.items.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
            </div>
        `;
        
        skillsGrid.appendChild(category);
    });
}

// ===== LOAD PROJECTS =====
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    portfolioData.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="project-image">
                <div style="font-size: 4rem;">${project.icon}</div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-meta">
                    <div class="project-tech">
                        ${project.tech.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    ${project.link ? `
                        <a href="${project.link}" target="_blank" class="project-link">
                            View Project
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}

// ===== LOAD PUBLICATIONS =====
function loadPublications() {
    const publicationsList = document.getElementById('publicationsList');
    
    portfolioData.publications.forEach((pub, index) => {
        const item = document.createElement('div');
        item.className = 'publication-item fade-in';
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.innerHTML = `
            <span class="publication-type">${pub.type}</span>
            <h3 class="publication-title">${pub.title}</h3>
            <p class="publication-authors">${pub.authors}</p>
            <p class="publication-venue">${pub.venue}, ${pub.year}</p>
            <div class="publication-links">
                ${pub.link ? `
                    <a href="${pub.link}" target="_blank" class="publication-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Read Paper
                    </a>
                ` : ''}
                ${pub.doi ? `
                    <a href="https://doi.org/${pub.doi}" target="_blank" class="publication-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        DOI: ${pub.doi}
                    </a>
                ` : ''}
            </div>
        `;
        
        publicationsList.appendChild(item);
    });
}

// ===== LOAD BLOG =====
function loadBlog() {
    const blogGrid = document.getElementById('blogGrid');
    
    portfolioData.blog.forEach((post, index) => {
        const card = document.createElement('div');
        card.className = 'blog-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="blog-image"></div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <span>•</span>
                    <span>${post.category}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.link}" class="blog-read-more">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        `;
        
        blogGrid.appendChild(card);
    });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    // Netlify will handle the form submission
    // This just provides visual feedback
    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Re-enable after submission (Netlify handles the actual redirect)
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements after a short delay
setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}, 100);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== INITIALIZE ON LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    loadExperience();
    loadSkills();
    loadProjects();
    loadPublications();
    loadBlog();
});

// ===== TYPING EFFECT FOR HERO (Optional Enhancement) =====
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}
