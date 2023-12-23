  // Your JavaScript code here
  const workshopData = [
    {
        title: "Live Workshop",
        booking: "Advanced Enroll students, get 50% Off",
        webinarDate: "Check WhatsApp",
        bgColor: "bg-registration",
        hrColor: "bg-primary",
        imageSrc: "img/mypic.png",
        altText: "Course Image",
        buttonText: "Become a professional in Excel! Click Here for Registration👇",
        buttonLink: "https://pages.razorpay.com/pl_NFY6Y9azyeEqZ6/view",
        content: [
            "Module#1. Formatting:(Number, Text, Conditional)",
            "Module#2. Data Validation:(Data Validation)",
            "Module#3. Data Cleanup:(Cleanup, Remove Duplicate, Split into columns)",
            "Module#4. Basic Functions:(SUM, AVERAGE, COUNT)",
            "Module#5. Logical Functions:(IF, AND, OR) and many more",
            "Module#6. Project1: Dynamic Marksheet Generate Based on Roll Number ",
            "Module#7. Project2: Real-time Dynamic Dashboard Design ",

            
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
                    <h1 class="display-5 mb-0 text-center text-white py-4">Enroll in Live Workshop</h1>
                    <hr class="custom-hr mx-auto ${item.hrColor} mb-3" style="width: 20%;">
                    <div class="container py-3">
                        <div class="row align-items-center">
                            <div class="col-lg-7 col-md-12 text-center text-lg-left text-center-lg">
                            <h4 class="text-white">✅Booking: ${item.booking} <span class="mx-2"></span></h4>
                            <h4 class="text-white ">✅Webinar Date: ${item.webinarDate} <span class="mx-2"></span></h4>
                            
                            <div class="py-3">${item.content.map(contentItem => `<ul class="text-white"><i class="fa fa-check text-primary mr-2"></i>${contentItem}</ul>`).join('')}</div>
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