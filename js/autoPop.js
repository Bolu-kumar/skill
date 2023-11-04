
  function openAutoPopup() {
      var popup = document.getElementById("autoPopup");
      popup.style.display = "block";
  }

  function closeAutoPopup() {
      var popup = document.getElementById("autoPopup");
      popup.style.display = "none";
  }

  // Trigger the popup after a 5-second delay
  setTimeout(openAutoPopup, 5000);

  function openAndPopulatePopup(data) {
      var popup = document.getElementById("autoPopup");
      popup.style.display = "block";

      // Populate the popup with JSON data
      document.getElementById("popupTitle").textContent = data.title;
      var contentDiv = document.getElementById("popupContent");
      contentDiv.innerHTML = "";
      data.content.forEach(function (item) {
          var p = document.createElement("p");
          p.textContent = item;
          contentDiv.appendChild(p);
      });
      document.getElementById("registrationLink").href = data.registrationLink;
      document.getElementById("popupImage").src = data.imageSrc;
      document.getElementById("popupImage").alt = data.imageAlt;
  }

  function closeAutoPopup() {
      var popup = document.getElementById("autoPopup");
      popup.style.display = "none";
  }

  // Trigger the popup after a 5-second delay
  setTimeout(function () {
      var jsonData = {
          "title": "JOIN WORKSHOP NOW!!",
          "content": [
              "➡️ ATTEND A 3-HOUR POWERFUL LIVE WORKSHOP ON ADVANCED EXCEL.",
              "➡️ THE ADVANCE DATA ANALYTICS USING MS EXCEL",
              "➡️ NO PRIOR TECHNICAL EXCEL KNOWLEDGE REQUIRED",
              "➡️ TOP 10% OF EXCEL USERS WHO CAN USE THE FUNCTIONS SMARTLY"
          ],
          "registrationLink": "your-registration-link",
          "imageSrc": "img/course/office0.png",
          "imageAlt": "Image Alt Text"
      };
      openAndPopulatePopup(jsonData);
  }, 5000);
