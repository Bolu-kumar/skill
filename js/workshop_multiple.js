  // Your JavaScript code here
  const workshopData = [
    {
        title: "Live Workshop",
        date: "Before:10-12-2023",
        time: "11:00 AM",
        live: "Live",
        hrs: "3+ Hrs",
        bgColor: "bg-registration",
        hrColor: "bg-primary",
        imageSrc: "img/course/office0.png",
        altText: "Course Image",
        buttonText: "Become a professional in Excel! Click Here for Registration👇",
        buttonLink: "live-workshop-Registration.html",
        content: [
            "Enroll in any workshop before Dec 10, 2023, for just ₹99 and get a 50% discount.",    
            "LEARN EXCEL - FREE ONLINE EXCEL TRAINING",
            "LEARN THE ADVANCE DATA ANALYTICS USING MS EXCEL",
            "ATTEND A 3-HOUR POWERFUL LIVE WORKSHOP ON ADVANCED EXCEL.",
            "NO PRIOR TECHNICAL EXCEL KNOWLEDGE REQUIRED",
            "TOP 10% OF EXCEL USERS WHO CAN USE THE FUNCTIONS SMARTLY",
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
                                <h4 class="text-white"><i class="fas fa-calendar-alt text-primary"></i> ${item.date} <span class="mx-1"></span><i class="fas fa-thumbtack text-primary"></i> ${item.time}</h4><br>
                                <h4 class="text-white"><i class="fas fa-video text-primary"></i> ${item.live} <span class="mx-1"></span><i class="far fa-clock text-primary"></i> ${item.hrs}</h4>
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