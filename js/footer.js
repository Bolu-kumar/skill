// footer.js

// Function to create the footer
function createFooter() {
    const footer = `
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-white py-2 px-sm-3 px-lg-5" style="margin-top: 20px;">
      <div class="row pt-5">
        <div class="col-lg-7 col-md-12">
          <div class="row">
            <div class="col-md-6 mb-5">
              <h5 class="text-primary text-uppercase mb-4" style="letter-spacing: 5px;">Get In Touch</h5>
              <p class="text-white">
                <i class="fa fa-map-marker-alt mr-2"></i>Head Office: Near Infosys, Mysore, Karnataka (570027)
              </p>
              <p class="text-white">
                <i class="fa fa-phone-alt mr-2"></i>+919795298083
              </p>
              <p class="text-white">
                <i class="fa fa-envelope mr-2"></i>it.finisher@gmail.com
              </p>
              <div class="d-flex justify-content-start mt-4 text-white">
                <a class="btn btn-outline-light btn-square mr-2" href="https://www.youtube.com/@it-finisher">
                  <i class="fab fa-youtube"></i>
                </a>
                <a class="btn btn-outline-light btn-square mr-2" href="https://www.facebook.com/itfinisher">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-outline-light btn-square" href="https://www.instagram.com/itfinisher/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a class="btn btn-outline-light btn-square mr-2" href="https://www.linkedin.com/company/itfinisher/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <h5 class="text-primary text-uppercase mb-4" style="letter-spacing: 5px;">Company</h5>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-white mb-2" href="about-us.html">
                  <i class="fa fa-angle-right mr-2"></i>About Us </a>
                <a class="text-white mb-2" href="contact-us.html">
                  <i class="fa fa-angle-right mr-2"></i>Contact Us </a>
                <a class="text-white mb-2" href="terms-conditions.html">
                  <i class="fa fa-angle-right mr-2"></i>Terms & Conditions</a>
                <a class="text-white mb-2" href="privacy-policy.html">
                  <i class="fa fa-angle-right mr-2"></i>Privacy & Policy</a>
                <a class="text-white" href="refund-cancellation.html">
                  <i class="fa fa-angle-right mr-2"></i>Refund & Cancellation</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 mb-5">
          <h5 class="text-primary text-uppercase mb-4" style="letter-spacing: 5px;">About Us</h5>
          <p class="text-white"> We believe in empowering professionals to become the best versions of themselves in the rapidly evolving digital world. We are providing innovative workshops and masterclasses designed to enhance skills, boost productivity, and help professionals achieve their career goals.</p>
          <div class="w-100">
            <div class="input-group">
              <input type="text" class="form-control border-light" style="padding: 30px;" placeholder="Your Email Address">
              <div class="input-group-append">
                <button class="btn btn-primary px-4">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style="border-color: rgba(256, 256, 256, .1) !important;">
      <section class="copyright my-0">
        <div class="bg-dark">
          <p class="text-center text-white py-3"> All rights reserved © 2023 IT Finisher | <button type="button" class="btn btn-link text-white" data-toggle="modal" data-target="#privacyModal"> Privacy & Policy </button> | <button type="button" class="btn btn-link text-white" data-toggle="modal" data-target="#termsModal"> Terms & Condition </button>
          </p>
        </div>
      </section>
    </div>
    <!-- Footer End -->
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
}

// Call the function to create the footer when the page loads
window.addEventListener('load', createFooter);

