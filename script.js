// =========================
// MOBILE MENU
// =========================
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}


// =========================
// TYPING EFFECT
// =========================
const typingText = document.getElementById("typing-text");
const cursor = document.getElementById("cursor");

if (typingText) {
  const text = "Decode Business Solutions, where quality meets creativity";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 60);
    } else if (cursor) {
      cursor.style.display = "none";
    }
  }

  window.addEventListener("load", typeWriter);
}


// =========================
// COUNTER ANIMATION
// =========================
const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");

        let count = 0;

        const updateCounter = () => {
          const increment = target / 100;

          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCounter, 20);
          } else {
            if (target === 98) {
              counter.innerText = target + "%";
            } else if (target === 1) {
              counter.innerText = "01";
            } else {
              counter.innerText = target + "+";
            }
          }
        };

        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => {
    observer.observe(counter);
  });
}


// =========================
// SCROLL REVEAL ANIMATION
// =========================
const hiddenElements = document.querySelectorAll(
  ".right-card, .left-card"
);

if (hiddenElements.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.3
  });

  hiddenElements.forEach((el) => {
    revealObserver.observe(el);
  });
} 