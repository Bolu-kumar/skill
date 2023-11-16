// JSON Data
    const sliderData = [
        {
            title: "Join Workshop Now",
            bgColor: "bg-registration",
            hrColor: "bg-primary",
            imageSrc: "img/course/office0.png",
            altText: "Course Image",
            buttonText: "Become a professional in Excel! Enroll Now: Click Here:👉",
            buttonLink: "www.itfinisher.com",
            content: [
                "LEARN EXCEL - FREE ONLINE EXCEL TRAINING",
                "LEARN THE ADVANCE DATA ANALYTICS USING MS EXCEL",
                "ATTEND A 3-HOUR POWERFUL LIVE WORKSHOP ON ADVANCED EXCEL.",
                "NO PRIOR TECHNICAL EXCEL KNOWLEDGE REQUIRED",
                "TOP 10% OF EXCEL USERS WHO CAN USE THE FUNCTIONS SMARTLY",
            ],
        },
        // Add more objects for additional sections if needed

        {
            title: "Join Workshop Now",
            bgColor: "bg-registration",
            hrColor: "bg-primary",
            imageSrc: "img/course/word0.png",
            altText: "Course Image",
            buttonText: "Become a professional in Excel! Enroll Now: Click Here:👉",
            buttonLink: "www.itfinisher.com",
            content: [
                "LEARN EXCEL - FREE ONLINE EXCEL TRAINING",
                "LEARN THE ADVANCE DATA ANALYTICS USING MS EXCEL",
                "ATTEND A 3-HOUR POWERFUL LIVE WORKSHOP ON ADVANCED EXCEL.",
                "NO PRIOR TECHNICAL EXCEL KNOWLEDGE REQUIRED",
                "TOP 10% OF EXCEL USERS WHO CAN USE THE FUNCTIONS SMARTLY",
            ],
        },



        {
            title: "Join Workshop Now",
            bgColor: "bg-registration",
            hrColor: "bg-primary",
            imageSrc: "img/course/excel-0.png",
            altText: "Course Image",
            buttonText: "Become a professional in Excel! Enroll Now: Click Here:👉",
            buttonLink: "www.itfinisher.com",
            content: [
                "LEARN EXCEL - FREE ONLINE EXCEL TRAINING",
                "LEARN THE ADVANCE DATA ANALYTICS USING MS EXCEL",
                "ATTEND A 3-HOUR POWERFUL LIVE WORKSHOP ON ADVANCED EXCEL.",
                "NO PRIOR TECHNICAL EXCEL KNOWLEDGE REQUIRED",
                "TOP 10% OF EXCEL USERS WHO CAN USE THE FUNCTIONS SMARTLY",
            ],
        },



    ];

    // Get the carousel container
    const carouselContainer = document.querySelector('.carousel-inner');

    // Loop through the JSON data to generate slides
    sliderData.forEach((item, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }

        carouselItem.innerHTML = `
        <section id="registration">
            <div class="container-fluid ${item.bgColor}" style="margin-top: 0px; padding-bottom: 30px;">
                <h1 class="display-5 mb-0 text-center text-white py-5" style="padding-bottom: 100px;">${item.title}</h1>
                <hr class="custom-hr mx-auto ${item.hrColor} mb-5" style="width: 12%;">
                <div class="container py-5">
                    <div class="row align-items-center">
                        <div class="col-lg-7 mb-4 mb-lg-0 text-center text-lg-left">
                            <h5 class="text-primary text-uppercase mb-3" style="letter-spacing: 5px;">Need Any Courses</h5>
                            <h1 class="text-white">${item.title}</h1>
                            <p class="text-white">${item.content[2]}</p>
                            <div class="py-2">
                                ${item.content.map(contentItem => `<ul class="text-white"><i class="fa fa-check text-primary mr-3"></i>${contentItem}</ul>`).join('')}
                            </div>
                        </div>
                        <div class="col-lg-5 text-center">
                            <div class="card border-0">
                                <div class="card-body rounded-bottom bg-dark p-0">
                                    <img src="${item.imageSrc}" alt="${item.altText}" class="img-fluid" style="object-fit: cover; max-width: 100%; border-radius: 5%;">
                                </div>
                            </div>
                        </div>
                        <div class="col-12 text-center py-3">
                            <a href="${item.buttonLink}" class="btn btn-primary btn-lg" style="width: 100%; max-width: 500px;">
                                ${item.buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;

        carouselContainer.appendChild(carouselItem);
    });

    // Wait for the document to be fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Initialize the carousel
        $('#myCarousel').carousel({
            interval: 1000 // Set the interval in milliseconds (5 seconds in this example)
        });
    });
