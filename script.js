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

  