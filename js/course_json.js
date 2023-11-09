// Your JSON data
var courseData = {
    "courses": [
      {
        "title": "Microsoft Office 365",
        "update": "(Coming Soon**)",
        "image": "img/course/office0.png",
        "students": "50+ Students",
        "duration": "3+ Hrs",
        "rating": "4.5",
        "reviews": "250",
        "price": "₹0"
      },
      {
        "title": "Best Excel courses for beginner",
        "update": "(Coming Soon**)",
        "image": "img/course/excel0.png",
        "students": "100+ Students",
        "duration": "2+ Hrs",
        "rating": "4.5",
        "reviews": "250",
        "price": "₹0"
      },
      {
        "title": "Best PPT courses for beginner",
        "update": "(Coming Soon**)",
        "image": "img/course/ppt0.png",
        "students": "100 Students",
        "duration": "01h 30m",
        "rating": "4.5",
        "reviews": "100",
        "price": "₹0"
      },
      {
        "title": "Best Microsoft Word courses for beginner",
        "update": "(Coming Soon**)",
        "image": "img/course/word0.png",
        "students": "200 Students",
        "duration": "2+ Hrs",
        "rating": "4.5",
        "reviews": "330",
        "price": "₹0"
      },
      {
        "title": "Premium MS Excel courses for beginner",
        "update": "(Coming Soon**)",
        "image": "img/course/excel99.png",
        "students": "100 Students",
        "duration": "3+ Hrs",
        "rating": "4.5",
        "reviews": "250",
        "price": "₹99"
      },
      {
        "title": "Best Wordpress Website Builder courses",
        "update": "(Coming Soon**)",
        "image": "img/course/wordpress99.png",
        "students": "250 Students",
        "duration": "3+ Hrs",
        "rating": "4.5",
        "reviews": "250",
        "price": "₹99"
      }
    ]
  }
  ;

// Function to generate the HTML for each course
function createCourseHTML(course) {
    var courseHTML = `
        <div class="col-lg-4 col-md-6 mb-4 ">
            <div class="rounded overflow-hidden mb-2 shadow">
                <img class="img-fluid" src="${course.image}" alt="">
                <div class="bg-white p-4">
                    <div class="d-flex justify-content-between mb-3">
                        <small class="m-0"><i class="fa fa-users text-primary mr-5">${course.students}</i></small>
                        <small class="m-0"><i class="fa-solid fa-watch text-primary"></i>${course.duration}</i></small>
                    </div>
                    <a class="h5" href="">${course.title} <span class="text-warning"> ${course.update}</span></a>
                    <div class="border-top mt-4 pt-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2">${course.rating} <small>(${course.reviews})</small></i></h6>
                            <h5 class="m-0">${course.price}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return courseHTML;
}

// Get the course list container
var courseListContainer = document.getElementById("course-list");

// Populate the course list
courseData.courses.forEach(function (course) {
    var courseHTML = createCourseHTML(course);
    courseListContainer.innerHTML += courseHTML;
});
