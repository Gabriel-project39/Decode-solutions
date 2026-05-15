 const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

const text = "Decode Business Solutions, where quality meets creativity";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 60);
    } else {
      // Hide cursor when typing is done
      document.getElementById("cursor").style.display = "none";
    }
  }

  window.onload = typeWriter;


const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      const counter = entry.target;
      const target = +counter.getAttribute('data-target');

      let count = 0;

      const updateCounter = () => {

        const increment = target / 100;

        if(count < target){
          count += increment;
          counter.innerText = Math.ceil(count);

          setTimeout(updateCounter, 20);

        } else {

          // Add symbols
          if(target === 98){
            counter.innerText = target + "%";
          }
          else if(target === 1){
            counter.innerText = "01";
          }
          else{
            counter.innerText = target + "+";
          }

        }

      };

      updateCounter();

      observer.unobserve(counter);

    }

  });

}, { threshold: 0.5 });

counters.forEach(counter => {
  observer.observe(counter);
});


const hiddenElements = document.querySelectorAll(
  '.right-card, .left-card'
);

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    } else {

      // Remove when leaving screen
      entry.target.classList.remove('show');

    }

  });

}, {
  threshold: 0.3
});

hiddenElements.forEach((el) => {
  revealObserver.observe(el);
});

  