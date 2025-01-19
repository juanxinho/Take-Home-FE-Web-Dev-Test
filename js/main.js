document.querySelectorAll('.accordion-button').forEach((btn) => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;

        // Close all other accordion contents
        document.querySelectorAll('.accordion-button').forEach((otherBtn) => {
            const otherContent = otherBtn.nextElementSibling;

            if (otherContent !== content && !otherContent.classList.contains('hidden')) {
                otherContent.classList.add('hidden');
                otherBtn.querySelector('span img').setAttribute('src', '/assets/images/plus-circle-line.svg');
            }
        });

        // Toggle the clicked accordion content
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            btn.querySelector('span img').setAttribute('src', '/assets/images/minus-circle-line.svg');
        } else {
            content.classList.add('hidden');
            btn.querySelector('span img').setAttribute('src', '/assets/images/plus-circle-line.svg');
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
