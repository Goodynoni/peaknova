// Hamburger Menu Toggle
const menuToggle = document.getElementById("pnMenuToggle");
const navLinks = document.getElementById("pnNavLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}


const counters = document.querySelectorAll(".counter");

const speed = 120; // smaller = faster

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCount();
});

const estateItems = document.querySelectorAll(".estate-item");

estateItems.forEach(item => {
  const btn = item.querySelector(".estate-btn");

  btn.addEventListener("click", () => {
    // Close others
    estateItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // Toggle current
    item.classList.toggle("active");
  });
});


const estateImages = {
  imperial: ["1.jpg", "2.jpg", "3.jpg"],
  amber: ["1.jpg", "2.jpg", "3.jpg"],
  manor: ["1.jpg", "2.jpg", "3.jpg"],
  everstead: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
};

// Toggle images under clicked estate
document.querySelectorAll(".estate-card").forEach(card => {
  card.addEventListener("click", () => {
    const estate = card.dataset.estate;
    const gallery = card.querySelector(".estate-gallery");

    if (gallery.style.display === "grid") {
      gallery.style.display = "none";
      return;
    }

    gallery.innerHTML = "";
    estateImages[estate].slice(0, 3).forEach(img => {
      gallery.innerHTML += `
        <img src="assets/${estate}/${img}" />
      `;
    });

    gallery.style.display = "grid";
  });
});

const btn = document.getElementById("toggleProperties");
const section = document.getElementById("allProperties");

btn.addEventListener("click", () => {
  section.classList.toggle("hidden");

  btn.textContent = section.classList.contains("hidden")
    ? "See All Properties →"
    : "Hide Properties ↑";

  if (!section.classList.contains("hidden")) {
    section.scrollIntoView({ behavior: "smooth" });
  }
});






