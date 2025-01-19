document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            btn.querySelector('span').textContent = '−';
        } else {
            content.classList.add('hidden');
            btn.querySelector('span').textContent = '+';
        }
    });
});

document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active-tab class from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active-tab', 'bg-pink-500', 'text-white'));

        // Hide all tab content
        document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));

        // Add active class to the clicked button
        button.classList.add('active-tab', 'bg-pink-500', 'text-white');

        // Show the corresponding tab content
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.remove('hidden');
    });
});

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
