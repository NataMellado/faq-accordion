document.addEventListener("DOMContentLoaded", function() {
    const faqContainers = document.querySelectorAll('.faq-container');

    // Loop through each FAQ container
    faqContainers.forEach((faqContainer, index) => {
        const faqQuestionContainer = faqContainer.querySelector('.faq-question-container');
        const faqAnswer = faqContainer.querySelector('.faq-answer');

        // Add event listeners for click and enter key
        faqQuestionContainer.addEventListener('click', toggleFaq);
        faqQuestionContainer.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                toggleFaq();
            }
        });

        // Toggle the FAQ answer
        function toggleFaq() {
            faqContainer.classList.toggle('open');
            const isOpen = faqContainer.classList.contains('open');
            faqAnswer.style.height = isOpen ? `${faqAnswer.scrollHeight}px` : '0px';
            faqContainer.querySelector('.arrow').src = isOpen ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
            removeOpen(index);
        }
    });

    // Open the first FAQ by default
    if (faqContainers.length > 0) {
        const firstFaqContainer = faqContainers[0];
        const firstFaqAnswer = firstFaqContainer.querySelector('.faq-answer');
        firstFaqContainer.classList.add('open');
        firstFaqAnswer.style.height = `${firstFaqAnswer.scrollHeight}px`;
        firstFaqContainer.querySelector('.arrow').src = './assets/images/icon-minus.svg';
    }

    // Close all other FAQs when one is opened
    function removeOpen(index1) {
        faqContainers.forEach((item, index2) => {
            if (index1 !== index2) {
                item.classList.remove('open');
                const ans = item.querySelector('.faq-answer');
                ans.style.height = '0px';
                item.querySelector('.arrow').src = './assets/images/icon-plus.svg';
            }
        });
    }
});
