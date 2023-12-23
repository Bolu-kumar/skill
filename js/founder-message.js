  // Your JavaScript code here
  const workshopData = [
    {
       
        bgColor: "bg-registration",
        hrColor: "bg-primary",
        imageSrc: "img/mypic.png",
        altText: "Course Image",
        buttonText: "Follow on Linkedin👇",
        buttonLink: "https://www.linkedin.com/in/rishikesh-4108921bb/",
        content: [
            "Rishikesh Sir (B.Tech) & currently working as a Software Engineer",
            "I have 5+ years of experience",
            "This course offers the best value for the money",
            "Hands-on experience with real projects",
            "Project-oriented curriculum",
            "Engage in real project work"

            
        ],
    },
    // Add more objects for additional sections if needed
];

function generateWorkshopSection(data) {
    const workshopSection = document.getElementById('workshopMultiple');
    
    data.forEach((item) => {
        const section = document.createElement('section');
        section.classList.add('container-fluid', item.bgColor);
        section.innerHTML = `
            <section id="registration">
                <div class="container-fluid ${item.bgColor}" style="margin-top: 20px; padding-bottom: 20px;">
                    <h1 class="display-5 mb-0 text-center text-white py-4">Founder Message</h1>
                    <hr class="custom-hr mx-auto ${item.hrColor} mb-3" style="width: 20%;">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-7 col-md-12 text-center text-lg-left text-center-lg">
                                <p style="color:#fff; font-weight:bold; font-style: italic; font-size: larger;"
                                "> "Our institute offers easy-to-understand technical education. We focus on hands-on learning, providing practical industry expertise that's relevant and easy to grasp.",
                                </p>
                                <div class="py-3" style="text-align: left;">
                                ${item.content.map(contentItem => `<h2 class="text-white" style="text-align: left;"><i class="fas fa-arrow-alt-circle-right text-primary mr-2"></i>${contentItem}</h2>`).join('')}
                              </div>
                                                              </div>
                            <div class="col-lg-5 col-md-12 text-center text-center-lg">
                            <img src="${item.imageSrc}" alt="${item.altText}" class="img-fluid" style="object-fit: cover; max-width: 100%; border-radius: 5%;">

                                
                            </div>
                            <div class="col-12 text-center py-2">
                                <a href="${item.buttonLink}" class="btn btn-primary btn-lg">${item.buttonText}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
        workshopSection.appendChild(section);
    });
}

generateWorkshopSection(workshopData);