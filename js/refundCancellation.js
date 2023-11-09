const data = {
    "Post": "3rd Aug 2023",
    "Purchase Acknowledgment": "Thank you for purchasing our workshop/course.",
    "Absent Candidates": "If a candidate fails to attend the workshop/course and/or examination, he/she will be marked absent, and no replacement lectures/examinations will be provided. The candidate is also not eligible for a refund.",
    "Transfer Request Deadline": "The request for batch change or candidate name transfer should be made at least 48 hours prior to the start of the course, post which you will not be eligible for any changes in batch or candidate name.",
    "Cancellation and Refund": "Once purchased, our workshops/courses cannot be canceled and are non-refundable.",
    "Contact Information": "If you have any additional questions or would like to request a batch change or candidate name transfer, feel free to contact us on it.finisher@gmail.com.",


};

const contentDiv = document.getElementById('content');
const keys = Object.keys(data);

keys.forEach(key => {
    const section = document.createElement('div');
    section.innerHTML = `<h2>${key}</h2><p>${data[key]}</p>`;
    contentDiv.appendChild(section);
});
