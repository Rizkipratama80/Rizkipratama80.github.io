document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.bento-item');
    const cta = document.getElementById('cta-box');

    // Animasi masuk satu per satu (stagger)
    panels.forEach((panel, index) => {
        panel.style.opacity = '0';
        panel.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            panel.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            panel.style.opacity = '1';
            panel.style.transform = 'scale(1)';
        }, index * 100);
    });

    // Efek klik pada panel CTA
    cta.addEventListener('mousedown', () => {
        cta.style.transform = 'scale(0.95)';
    });

    cta.addEventListener('mouseup', () => {
        cta.style.transform = 'scale(1.02)';
        alert('Mari mulai bekerja sama!');
    });
});