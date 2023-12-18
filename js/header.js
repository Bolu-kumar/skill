document.addEventListener('DOMContentLoaded', function() {
    // Function to add breaking news styles
        function createBreakingNews() {
        // Code for creating the breaking news section...
          const breakingNews = `
          <div class="container-fluid news">
              <div class="row">
                  <div class="breaking-news-bar">
                      <div class="breaking-news-slide">
                          <a href="upcoming-workshop-Registration.html" class="breaking-news-link">
                              <span class="breaking-news-title">Announcement</span>
                              <div class="breaking-news-headline text-white">Enroll in any workshop before Jan 01, 2024, for just ₹99 and get a 50% discount. !! <Span>⚠️साइबर फ्रॉड जैसे अपराध की शिकायत के लिए राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल cybercrime.gov.in या (हेल्पलाइन - 1930) या निकटतम 🚨पुलिस स्टेशन पर शिकायत दर्ज करें।"</Span></div>
                          </a>
                      </div>
                      <!-- Add more breaking-news-slide elements for additional news items -->
                  </div>
              </div>
          </div>
      `;
      document.body.insertAdjacentHTML('beforebegin', breakingNews);
    }

    // Function to create the navigation bar
    function createNavBar() {
        // Code for creating the navigation bar...
        const navbar = `
        <div class="container-fluid">
            <div class="row border-top px-xl-5 py-3">
                <div class="col-lg-3 d-none d-lg-block">
                    <a href="https://itfinisher.com/">
                        <img class="logo" src="img/itfinisher-logo.png" alt="">
                    </a>
                </div>
                <div class="col-2"></div>
                <div class="col-lg-7">
                    <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <a href="" class="text-decoration-none d-block d-lg-none">
                            <img class="logo" src="img/itfinisher-logo.png" alt="">
                        </a>

                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav py-0">
                                <a href="index.html" class="nav-item nav-link active">Home</a>
                                <a href="#" class="nav-item nav-link" id="courseLink">Courses</a>


                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-item nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" id="index">Workshop</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <a href="office365-workshop.html" class="dropdown-item border-bottom">Advanced office 365</a>
                                        <a href="excel-workshop.html" class="dropdown-item border-bottom">Advanced Excel</a>
                                        <a href="data-analyst-workshop.html" class="dropdown-item border-bottom">Advanced Data Analyst</a>
                                        <a href="website-workshop.html" class="dropdown-item ">Website Development</a>

                                    </div>
                                </div>

                                <a href="#" class="nav-item nav-link youtube" id="youtube">Videos</a>
                                <a href="#" class="nav-item nav-link faqs" id="index">FAQs</a>
                                <a class="nav-link support" href="#" data-toggle="modal" data-target="#contactModal" id="support">Support</a>
                                <a href="verify-certificate.html" class="nav-item nav-link certificate">Certificate</a>
                                <a href="live-quiz.html" class="nav-item nav-link" >Quiz</a>

                            </div>
                            <a class="btn btn-primary py-2 px-4 ml-auto d-lg-block text-center" href="#registration" id="enrollNow">Enroll Now</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    `;
        document.body.insertAdjacentHTML('afterbegin', navbar);










        const index = document.getElementById('index');
        index.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html'; // Replace 'workshop' with the correct ID of the Workshop section
        });
    

        const support = document.getElementById('support');
        support.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html#support'; // Replace 'support' with the correct ID of the Support section
        });
    
        const enrollNow = document.getElementById('enrollNow');
        enrollNow.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html#registration'; // Replace 'registration' with the correct ID of the Registration section
        });
    
        const courseLink = document.getElementById('courseLink');
        courseLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html#courses'; // Replace 'courses' with the correct ID of the Courses section
        });
    
        const youtube = document.getElementById('youtube');
        youtube.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html#youtube'; // Replace 'youtube' with the correct ID of the YouTube section
        });
    
        const faqs = document.getElementById('faqs');
        faqs.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html#faqs'; // Replace 'faqs' with the correct ID of the FAQs section
        });
        
    }

   
    // Call functions in desired order
    createBreakingNews(); // Display breaking news first
    createNavBar(); // Then display the navbar


});
