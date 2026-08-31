async function loadpage(page, clickedButton) {
  const app = document.getElementById("main-content");

  try {
    const response = await fetch(`pages/${page}.html`);


    if (!response.ok) {
      throw new Error("Page not found");
    }

    const html = await response.text();

    app.innerHTML = html;
    if (page === "Toppersection") {
        inittoppersection();
    }
    localStorage.setItem("currentPage", page);

    // Sabhi buttons se active remove karo
        document.querySelectorAll(".dashboard-left button").forEach(button => {
            button.classList.remove("active");
        });

        // Click kiya hua button active karo
        if (clickedButton) {
            clickedButton.classList.add("active");
        }

  } catch (error) {
    app.innerHTML = `
      <h1>404</h1>
      <p>Could not load the page.</p>
    `;
  }

  

}

document.addEventListener("DOMContentLoaded", () => {
    const savedPage = localStorage.getItem("currentPage");

    if (savedPage) {
        loadpage(savedPage);
    } else {
        loadpage("dashboard");
    }
});


// function router() {
//   const page = location.hash.substring(1) || "Dashboard";
//   loadPage(page);
// }

// window.addEventListener("hashchange", router);
// window.addEventListener("load", router);





// Toppersection
function inittoppersection() {
    const uploadImage = document.getElementById("ImageDiv");
    const fileInput = document.getElementById("fileInput");
    const previewDiv = document.getElementById("ImageDivPreview");
    const previewImage = document.getElementById("imagePreview");
    const button = document.getElementById("deletebutton");

    // Click on upload area
    uploadImage.addEventListener("click", () => {
        fileInput.click();
    });

    // When image is selected
    fileInput.addEventListener("change", () => {

        const file = fileInput.files[0];

        if (file) {

            // Create image URL
            const imageURL = URL.createObjectURL(file);

            // Put URL into the actual img
            previewImage.src = imageURL;

            // Hide upload section
            uploadImage.classList.add("hidden");

            // Show preview section
            previewDiv.classList.remove("hidden");
        }
    });
    button.addEventListener("click", ()=>{
      previewImage.src = "";
      fileInput.value = "";
      previewDiv.classList.add("hidden");
      uploadImage.classList.remove("hidden");

    })
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    inittoppersection();
});


