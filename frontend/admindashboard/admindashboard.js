async function loadpage(page, clickedButton) {
  const app = document.getElementById("main-content");

  try {
    const response = await fetch(`pages/${page}.html`);

    if (!response.ok) {
      throw new Error("Page not found");
    }

    const html = await response.text();

    app.innerHTML = html;

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

// function router() {
//   const page = location.hash.substring(1) || "Dashboard";
//   loadPage(page);
// }

// window.addEventListener("hashchange", router);
// window.addEventListener("load", router);