// 1. Dynamic 3D Floating Shifting Elements Spawner
const canvas3D = document.getElementById('canvas3D');
const shiftingIcons = ['fa-truck', 'fa-box-open', 'fa-car', 'fa-boxes', 'fa-dolly', 'fa-couch'];

function spawnMovingAsset() {
    const asset = document.createElement('div');
    asset.classList.add('floating-logistics-icon');
    
    const randomIcon = shiftingIcons[Math.floor(Math.random() * shiftingIcons.length)];
    asset.innerHTML = `<i class="fas ${randomIcon}"></i>`;
    asset.style.left = Math.random() * 95 + 'vw';
    
    const scaleSize = Math.random() * 20 + 18; 
    asset.style.fontSize = scaleSize + 'px';
    
    const dynamicDuration = Math.random() * 12 + 18; 
    asset.style.animationDuration = dynamicDuration + 's';
    
    canvas3D.appendChild(asset);
    
    setTimeout(() => {
        asset.remove();
    }, dynamicDuration * 1000);
}

for(let i=0; i < 12; i++) {
    setTimeout(spawnMovingAsset, Math.random() * 8000);
}
setInterval(spawnMovingAsset, 3000);

// 2. Real-Time Interactive 3D Card Hover Logic
const cards3D = document.querySelectorAll('.feature-3d-card, .service-3d-box, .about-glass-box, .gallery-item');

cards3D.forEach(card => {
    card.addEventListener('mousemove', (event) => {
        const dimensions = card.getBoundingClientRect();
        const cursorX = event.clientX - dimensions.left;
        const cursorY = event.clientY - dimensions.top;
        const centerX = dimensions.width / 2;
        const centerY = dimensions.height / 2;
        
        const finalRotationX = (centerY - cursorY) / 10;
        const finalRotationY = (cursorX - centerX) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${finalRotationX}deg) rotateY(${finalRotationY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});

// 3. Mobile Responsive Toggle Menu Bar
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    const innerIcon = burgerBtn.querySelector('i');
    innerIcon.className = innerIcon.className === 'fas fa-bars' ? 'fas fa-times' : 'fas fa-bars';
});
