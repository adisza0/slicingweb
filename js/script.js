/*1. Hamburger Menu*/
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.navbar__link').forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
    })
})

/*2. Validasi Form*/
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const formSuccess = document.getElementById('formSuccess');

        let isValid = true;

        if (name.value.trim() === '') {
            document.getElementById('nameError').textContent = 'Nama wajib diisi';
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        if (!email.value.includes('@')) {
            document.getElementById('emailError').textContent = 'Email harus mengandung @';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        if (message.value.trim() === '') {
            document.getElementById('messageError').textContent = 'Pesan wajib diisi';
            isValid = false;
        } else {
            document.getElementById('messageError').textContent = '';
        }

        if (isValid) {
            formSuccess.textContent = 'Terima kasih! Pesanmu sudah terkirim.';
            contactForm.reset();
        } else {
            formSuccess.textContent = '';
        }
    })
}

/*3. Dark Mode*/
const themeToggle =document.getElementById('themeToggle');

function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

applyTheme(localStorage.getItem('theme') || 'light');

themeToggle.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
})