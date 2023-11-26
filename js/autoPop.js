
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
        "title": "LIVE EXCEL WORKSHOP!!",
        "content": [
            "📅 Dec 10, 2023 | ⏰ 11:00 AM | ⌛: 3 hrs| 📼Live on Zoom/Teams",
            "✅Module#1. Formatting:(Number, Text, Conditional)",
            "✅Module#2. Data Validation:(Data Validation)",
            "✅Module#3. Data Cleanup:(Cleanup, Remove Duplicate, Split into columns)",
            "✅Module#4. Basic Functions:(SUM, AVERAGE, COUNT)",
            "✅Module#5. Logical Functions:(IF, AND, OR)",
            "✅Module#6. Projects: Dynamic Marksheet Generate & Dashboard Design ",
        ],
        "registrationLink": "live-workshop-Registration.html",
        "imageSrc": "img/course/excel-99.png",
        "imageAlt": "Image Alt Text"
    };
    openAndPopulatePopup(jsonData);
}, 5000);
