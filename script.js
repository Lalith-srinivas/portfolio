 // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        const currentTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        themeToggle.addEventListener('click', () => {
            const theme = body.getAttribute('data-theme');

            if (theme === 'dark') {
                body.setAttribute('data-theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            }
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        const scrollProgress = document.getElementById('scrollProgress');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrolled / windowHeight) * 100;

            scrollProgress.style.width = scrollPercent + '%';

            if (scrolled > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Parallax Effect
        const parallaxBg = document.getElementById('parallaxBg');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            parallaxBg.style.transform = `translateY(${rate}px)`;
        });

        // Smooth Scrolling
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');

                    // Animate skill bars
                    if (entry.target.classList.contains('skill-item')) {
                        const progressBar = entry.target.querySelector('.skill-progress');
                        const width = progressBar.getAttribute('data-width');
                        setTimeout(() => {
                            progressBar.style.width = width + '%';
                        }, 200);
                    }
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in, .skill-item').forEach(el => {
            observer.observe(el);
        });

        // Typing Animation for Hero Title
        function typeWriter(text, element, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            element.style.opacity = '1';

            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize animations
        window.addEventListener('load', () => {
            // Add stagger animation to project cards
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                card.style.animationDelay = (index * 0.1) + 's';
            });

            // Add stagger animation to skill items
            const skillItems = document.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                item.style.transitionDelay = (index * 0.1) + 's';
            });
        });

        // Enhanced Parallax for Floating Shapes
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.shape');

            shapes.forEach((shape, index) => {
                const speed = 0.2 + (index * 0.1);
                const yPos = -(scrolled * speed);
                const rotation = scrolled * 0.02 * (index + 1);
                shape.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
            });
        });

        // Add subtle mouse movement effect
        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            shapes.forEach((shape, index) => {
                const moveX = (mouseX - 0.5) * 20 * (index + 1);
                const moveY = (mouseY - 0.5) * 20 * (index + 1);
                const currentTransform = shape.style.transform || '';

                if (!currentTransform.includes('translate')) {
                    shape.style.transform += ` translate(${moveX}px, ${moveY}px)`;
                }
            });
        });
const menuIcon = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
