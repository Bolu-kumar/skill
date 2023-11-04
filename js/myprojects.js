  function createImageGallery() {
    const galleryData = [
      {
        imgSrc: "img/myproject/m1.jpeg",
        altText: "Image 1",
        description: "Job vacancy Update In Excel",
      },
      {
        imgSrc: "img/myproject/m2.jpeg",
        altText: "Image 2",
        description: "Search Customer Record by ID",
      },
      {
        imgSrc: "img/myproject/m3.jpeg",
        altText: "Image 3",
        description: "Admin Dashboard",
      },
      {
        imgSrc: "img/myproject/l4.png",
        altText: "Image 4",
        description: "Dynamics Dashboard Summary",
      },
      {
        imgSrc: "img/myproject/l5.png",
        altText: "Image 5",
        description: "Location wise Dashboard Patients",
      },
      {
        imgSrc: "img/myproject/l5.png",
        altText: "Image 6",
        description: "Number of patients Refer by Dr",
      },
      {
        imgSrc: "img/myproject/m6.jpeg",
        altText: "Image 7",
        description: "WhatsAPP Automation.",
      },
      {
        imgSrc: "img/myproject/m5.jpeg",
        altText: "Image 8",
        description: "Menu Based Automation Reply.",
      },
      {
        imgSrc: "img/myproject/m4.jpeg",
        altText: "Image 9",
        description: "Whatsapp Reply from Google Sheet.",
      },
    ];

    const galleryContainer = document.querySelector('.myProject .container .row');

    galleryData.forEach(item => {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-md-4', 'mb-4');

      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

      const img = document.createElement('img');
      img.src = item.imgSrc;
      img.alt = item.altText;
      img.classList.add('card-img-top');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const description = document.createElement('p');
      description.classList.add('card-text');
      description.textContent = item.description;

      cardBody.appendChild(description);
      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBody);
      colDiv.appendChild(cardDiv);
      galleryContainer.appendChild(colDiv);
    });
  }

  // Call the function to create the gallery on page load
  createImageGallery();
