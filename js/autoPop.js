
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
        "title": "JOIN LIVE EXCEL WORKSHOP!!",
        "content": [
            "📅 Nov 24, 2023 | ⏰ 11:00 AM | ⌛: 3 hrs| 📼Live on Zoom/Teams",
            "➡️ ATTEND A 3-HOUR LIVE EXCEL WORKSHOP",
            "➡️ THE ADVANCE DATA ANALYTICS USING MS EXCEL",
            "➡️ NO PRIOR EXCEL KNOWLEDGE REQUIRED",
            "➡️ BECOME IN TOP 10% OF EXCEL USERS"
        ],
        "registrationLink": "live-workshop-Registration.html",
        "imageSrc": "img/course/office0.png",
        "imageAlt": "Image Alt Text"
    };
    openAndPopulatePopup(jsonData);
}, 5000);
