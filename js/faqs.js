
// JSON Data for FAQs
const faqData = [
    {
        question: "When is the workshop?",
        answer: "The workshop will be start on every Saturday & Sunday at 11:00 AM.",
    },
    {
        question: "Is there any prerequisite required?",
        answer: "No, it is an absolutely beginner-friendly workshop.",
    },
    {
        question: "Will it be recorded?",
        answer: "No, it won't be recorded.",
    },
    {
        question: "I made the payment but didn't receive any email?",
        answer: "Please write to us at it.finisher@gmail.com, and our awesome support team will get back to you as soon as possible.",
    },
    {
        question: "Is there any age limit for the workshop?",
        answer: "No, there is no age limit. The workshop covers tools that you can easily learn and use without being a tech expert.",
    },
    {
        question: "Is it a certified workshop?",
        answer: "Yes, it is an IT FINISHER certified workshop.",
    },
];

// Get the container for FAQ items
const faqContainer = document.querySelector('.faqsContent');

// Loop through the FAQ data and create HTML elements for each item
faqData.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.innerHTML = `
        <input type="checkbox" id="question${index + 1}" name="q" class="questions">
        <div class="plus">➡️</div>
        <label for="question${index + 1}" class="question border-bottom">${faq.question}</label>
        <div class="answers">${faq.answer}</div>
    `;

    faqContainer.appendChild(faqItem);
});
