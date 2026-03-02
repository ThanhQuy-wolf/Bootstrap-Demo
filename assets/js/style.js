// Bootstrap 5 custom validation
(function () {
    "use strict";

    document.querySelectorAll(".needs-validation").forEach(form => {
        form.addEventListener("submit", event => {
            event.preventDefault();
            if (!form.checkValidity()) {
                event.stopPropagation();
            } else {
                window.location.href = "index.html";
            }
            form.classList.add("was-validated");
        }, false);
    });
})();

// Index Page – Header & Navigation
document.addEventListener("DOMContentLoaded", () => {
    // Reload page when Bootstrap icon is clicked
    document.getElementById('bootstrapIcon')?.addEventListener('click', e => {
        e.preventDefault();
        window.location.reload();
    });

    // Navigate to sign-in page when Logout button is clicked
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        window.location.href = 'sign-in.html';
    });

    // Initialise all tooltips
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));

    // Highlight active nav link on scroll (throttled via requestAnimationFrame)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            let current = '';
            const scrollY = window.scrollY;

            sections.forEach(section => {
                if (scrollY >= section.offsetTop - 100) {
                    current = section.id;
                }
            });

            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + current);
            });

            ticking = false;
        });
    });
});
