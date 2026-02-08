// Sankalpa Catering - Main JavaScript

// === Mobile Menu Toggle ===
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
});

// === Smooth Scrolling for Anchor Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for # only
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === Header Scroll Effect ===
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// === Intersection Observer for Animations ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.product-card, .catering-card, .feature-card, .contact-card'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// === Product Card Interactions ===
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            // You can add product detail modal or redirect here
            const productName = this.querySelector('h4').textContent;
            console.log(`Clicked on: ${productName}`);
            
            // Optional: Open WhatsApp with product name
            // const whatsappMessage = `Hi! I'm interested in ${productName}`;
            // window.open(`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        });
    });
});

// === Form Handling (if you add a contact form later) ===
const handleFormSubmit = (formId) => {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you! We will get back to you soon.');
        form.reset();
    });
};

// === Lazy Loading Images ===
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// === WhatsApp Integration Helper ===
const WhatsAppHelper = {
    phoneNumber: '919876543210', // Replace with your actual number
    
    openChat: function(message = '') {
        const defaultMessage = message || "Hi! I'm interested in Sankalpa Catering";
        const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, '_blank');
    },
    
    orderProduct: function(productName, quantity = 1) {
        const message = `Hi! I want to order:\n\nProduct: ${productName}\nQuantity: ${quantity}\n\nPlease confirm availability and pricing.`;
        this.openChat(message);
    },
    
    cateringInquiry: function(eventType, guests, date) {
        const message = `Hi! I need catering services:\n\nEvent Type: ${eventType}\nNumber of Guests: ${guests}\nDate: ${date}\n\nPlease provide a quote.`;
        this.openChat(message);
    }
};

// Make WhatsAppHelper globally accessible
window.WhatsAppHelper = WhatsAppHelper;

// === Analytics Event Tracking (Google Analytics) ===
const trackEvent = (category, action, label) => {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
};

// Track WhatsApp clicks
document.querySelectorAll('[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Contact', 'WhatsApp Click', 'WhatsApp Button');
    });
});

// Track product card clicks
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        const productName = this.querySelector('h4')?.textContent || 'Unknown';
        trackEvent('Products', 'Product Click', productName);
    });
});

// === Scroll Progress Indicator ===
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #FF5722, #FFB300);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

// Uncomment to enable scroll progress indicator
// createScrollProgress();

// === Back to Top Button ===
const createBackToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 45px;
        height: 45px;
        background: #FF5722;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 998;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Enable back to top button
createBackToTop();

// === Loading Animation ===
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// === Product Quick View (Optional Enhancement) ===
const createProductModal = () => {
    const modal = document.createElement('div');
    modal.id = 'productModal';
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-body">
                <div class="modal-image"></div>
                <div class="modal-info">
                    <h2 class="modal-title"></h2>
                    <p class="modal-description"></p>
                    <button class="modal-order-btn">Order via WhatsApp</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Modal styles
    const style = document.createElement('style');
    style.textContent = `
        .product-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
        }
        
        .product-modal.active {
            display: block;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
        }
        
        .modal-content {
            position: relative;
            max-width: 800px;
            margin: 50px auto;
            background: white;
            border-radius: 12px;
            padding: 2rem;
            animation: slideUp 0.3s ease;
        }
        
        @keyframes slideUp {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #757575;
        }
        
        .modal-body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        
        .modal-order-btn {
            background: #25D366;
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 1rem;
        }
    `;
    document.head.appendChild(style);
    
    // Close modal handlers
    const closeModal = () => modal.classList.remove('active');
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    return modal;
};

// === Console Branding ===
console.log(
    '%c🌶️ Sankalpa Catering',
    'color: #FF5722; font-size: 24px; font-weight: bold; font-family: "Playfair Display", serif;'
);
console.log(
    '%cAuthentic South Indian Flavors 🍛',
    'color: #3E2723; font-size: 16px; font-family: "Open Sans", sans-serif;'
);
console.log(
    '%cWebsite developed with ❤️',
    'color: #4CAF50; font-size: 12px;'
);

// === Performance Monitoring ===
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            console.log('Performance:', entry.name, entry.duration);
        }
    });
    
    perfObserver.observe({ entryTypes: ['navigation', 'resource'] });
}

// === Error Handling ===
window.addEventListener('error', (e) => {
    console.error('Global error:', e.message);
    // You can send errors to your logging service here
});

// === Service Worker Registration (for PWA - optional) ===
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(err => console.log('SW registration failed:', err));
    });
}

// Export for use in other modules if needed
export { WhatsAppHelper, trackEvent };
