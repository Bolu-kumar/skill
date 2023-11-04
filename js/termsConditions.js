    const data = {
        "IT Finisher Terms and Conditions:": "",
        "Acceptance Of Terms": "By accessing or using IT Finisher's services, including this website (itfinisher.com), you agree to be bound by these terms and conditions. If you do not agree to these terms, please refrain from using our services.",
        "Privacy Policy": "We respect your privacy and protect your personal information in accordance with our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and secure your data.",
        "Use Of Services": "You agree to use IT Finisher's services only for lawful purposes and in a way that does not infringe upon the rights of others, inhibit the use and enjoyment of the services by others, or violate applicable laws and regulations.",
        "Intellectual Property": "All content, trademarks, and intellectual property on this website are owned by IT Finisher. You may not use, reproduce, or distribute any of the content without prior written consent.",
        "Disclaimers": "IT Finisher provides information and services on an \"as-is\" basis, without any warranties or guarantees. We do our best to ensure the accuracy and reliability of the information provided, but we cannot guarantee its accuracy or suitability for your specific needs. Use the information and services at your own risk.",
        "Liability": "IT Finisher will not be liable for any direct, indirect, or consequential damages, losses, or expenses arising from the use of our services or the inability to use them.",
        "Changes To Terms": "IT Finisher reserves the right to update or modify these terms and conditions at any time without prior notice. Your continued use of our services after such changes signifies your acceptance of the revised terms.",
        "Contact Us": "If you have any questions or concerns regarding these terms and conditions, please contact us at it.finisher@gmail.com."
    }

    const contentDiv = document.getElementById('modalContent');
    const keys = Object.keys(data);

    keys.forEach(key => {
        const section = document.createElement('div');
        section.innerHTML = `<h4>${key}</h4><p>${data[key]}</p>`;
        contentDiv.appendChild(section);
    });

    // Show modal when the "Dismiss" button is clicked
    const showTermsButton = document.getElementById('showTermsButton');
    showTermsButton.addEventListener('click', () => {
        $('#termsModal').modal('show');
    });
