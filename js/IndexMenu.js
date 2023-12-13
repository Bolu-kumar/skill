// Function to create the breaking news section
function createBreakingNews() {
    const breakingNews = `
    <div class="container-fluid news">
    <div class="row">
      <div class="breaking-news-bar">
        <div class="breaking-news-slide">
          <a href="upcoming-workshop-Registration.html" class="breaking-news-link">
            <span class="breaking-news-title">Announcement</span>
            <div class="breaking-news-headline text-white">Enroll in any workshop before Jan 01, 2023, for just ₹99 and get a 50% discount. !! <Span>⚠️साइबर फ्रॉड जैसे अपराध की शिकायत के लिए राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल cybercrime.gov.in या (हेल्पलाइन - 1930) या निकटतम 🚨पुलिस स्टेशन पर शिकायत दर्ज करें।"</Span></div>
          </a>
        </div>
        <!-- Add more breaking-news-slide elements for additional news items -->
      </div>
    </div>
  </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', breakingNews);
}


// Function to create the navigation bar
function createNavBar() {
    const navbar = `
    <!-- Navbar Start -->
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
                <a href="#courses" class="nav-item nav-link">Courses</a>
                

                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Workshop</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="office365-workshop.html" class="dropdown-item border-bottom">Advanced office 365</a>
                            <a href="excel-workshop.html" class="dropdown-item border-bottom">Advanced Excel</a>
                            <a href="data-analyst-workshop.html" class="dropdown-item border-bottom">Advanced Data Analyst</a>
                            <a href="website-workshop.html" class="dropdown-item ">Website Development</a>
                        </div>
                </div>


                <a href="#youtube" class="nav-item nav-link">Videos</a>
                <a href="#faqs" class="nav-item nav-link">FAQs</a>
                <a class="nav-link" href="#" data-toggle="modal" data-target="#contactModal">Support</a>
                <a href="verify-certificate.html" class="nav-item nav-link">Certificate</a>

              </div>
              <a class="btn btn-primary py-2 px-4 ml-auto  d-lg-block text-center" href="#registration">Enroll Now</a>


                         
            </div>
          </nav>
        </div>
      </div>
    </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbar);
}



// Call the functions to create the navigation bar and breaking news section
createNavBar();
createBreakingNews();

