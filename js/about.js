const data = {
    "": "We believe in empowering professionals to become the best versions of themselves in the rapidly evolving digital world. As a leading edtech startup, we specialize in providing innovative workshops and masterclasses designed to enhance skills, boost productivity, and help professionals achieve their career goals.In the age of AI, we understand its power and its necessity. That’s why our courses are aimed to make AI an accessible and empowering tool for everyone. We firmly believe that “AI won’t replace you, but a person using AI will",
    "Vision": "Our vision is to be the premier destination for individuals looking to enhance their IT skills and become industry-ready professionals.",
    "Mission": "Our mission is to empower aspiring IT professionals by providing them with high-quality training and resources, enabling them to become proficient and confident IT finishers.",
    "Founders": "Founded by IT industry experts with a passion for education, our institute benefits from the leadership of professionals who have decades of experience in the tech world. They are committed to passing on their knowledge and expertise to the next generation of IT professionals.",
    "Impact": "Since our establishment in 2020, we have successfully trained and certified over 10k+ individuals, preparing them for successful careers in the IT field. Our graduates have gone on to secure positions in leading tech companies and contribute to the advancement of the industry."
};

const contentDiv = document.getElementById('content');
const keys = Object.keys(data);

keys.forEach(key => {
    const section = document.createElement('div');
    section.innerHTML = `<h2>${key}</h2><p>${data[key]}</p>`;
    contentDiv.appendChild(section);
});
