document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.className = savedTheme;
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.className;
        const newTheme = currentTheme === 'light' ? 'dark' : 'dark';
        
        // Update body class
        body.className = newTheme;
        
        // Update icon
        updateThemeIcon(newTheme);
        
        // Save preference
        localStorage.setItem('theme', newTheme);
        
        // Add smooth transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        // Remove transition after animation completes
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.textContent = '☀️';
            themeIcon.setAttribute('aria-label', 'Switch to light mode');
        } else {
            themeIcon.textContent = '🌙';
            themeIcon.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
    
    // Add keyboard accessibility
    themeToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            themeToggle.click();
        }
    });
    
    // Add focus styles for better accessibility
    themeToggle.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--accent-color-light)';
        this.style.outlineOffset = '2px';
    });
    
    themeToggle.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});
