// Bootstrap 5 custom validation
(function () {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    window.location.href = "index.html";
                }

                form.classList.add("was-validated");
            },
            false,
        );
    });
})();

// Index Page - Header Event Handlers
document.addEventListener("DOMContentLoaded", function() {
    // Xử lý sự kiện click vào icon Bootstrap để reset trang
    const bootstrapIcon = document.getElementById('bootstrapIcon');
    if (bootstrapIcon) {
        bootstrapIcon.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.reload();
        });
    }

    // Xử lý sự kiện click vào nút Log out để chuyển đến sign-in.html
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            window.location.href = 'sign-in.html';
        });
    }

    // Khởi tạo Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Active nav link khi scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar .nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});
