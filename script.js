document.addEventListener("DOMContentLoaded", () => {

  const searchBtn = document.querySelector(".search");
  const searchBox = document.querySelector(".search-box");
  const resultsContainer = document.querySelector(".cards-container");
  const doctorSection = document.querySelector(".doctor-section");

  searchBtn.addEventListener("click", async () => {
    const query = searchBox.value;

    const res = await fetch(`search.php?q=${query}`);
    const data = await res.json();

    resultsContainer.innerHTML = "";
    doctorSection.style.display = "block";

    data.forEach(doc => {
      resultsContainer.innerHTML += `
        <div class="doctor-card">
          <img src="./public/${doc.photo}" />
          <h3>${doc.name}</h3>
          <p>${doc.specialty}</p>
          <p>${doc.experience}</p>
          <p>${doc.location}</p>
          <p>📞 ${doc.contact}</p>
        </div>
      `;
    });
  });

});
