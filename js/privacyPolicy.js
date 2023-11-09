const data = {
"Use of Information": "Provide and maintain our services",

"Use Of Services":"You agree to use IT Finisher's services only for lawful purposes and in a way that does not infringe upon the rights of others, inhibit the use and enjoyment of the services by others, or violate applicable laws and regulations.",
"Security":"The security of your personal information is important to us, but please remember that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
"Disclaimers":"IT Finisher provides information and services on an as-is basis, without any warranties or guarantees. We do our best to ensure the accuracy and reliability of the information provided, but we cannot guarantee its accuracy or suitability for your specific needs. Use the information and services at your own risk.",
"Changes To Terms":"IT Finisher reserves the right to update or modify these terms and conditions at any time without prior notice. Your continued use of our services after such changes signifies your acceptance of the revised terms.",
"Contact Us": "If you have any questions or concerns regarding these terms and conditions, please contact us at it.finisher@gmail.com.",
};

const contentDiv = document.getElementById('content');
const keys = Object.keys(data);

keys.forEach(key => {
    const section = document.createElement('div');
    section.innerHTML = `<h2>${key}</h2><p>${data[key]}</p>`;
    contentDiv.appendChild(section);
});
