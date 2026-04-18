export function goToContact(e) {
    e.preventDefault();
    if (window.location.pathname === '/') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = '/#contact';
    }
}
