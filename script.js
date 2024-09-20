document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector(".header h1");
  const nameText = "> Sriram Madduri";
  const introText = document.getElementById("intro-text");
  const terminalSection = document.getElementById("terminal-section");
  const projectsSection = document.getElementById("projects");
  const footer = document.querySelector("footer");
  let index = 0;

  const introStatement = "Currently pursuing my Master's in Computer Science And Engineering at Santa Clara University. Passionate about Artificial Intelligence with a focus on Computer Vision.";

  // Initially hide all sections except for the name
  terminalSection.style.display = "none";
  projectsSection.style.display = "none";
  footer.style.display = "none";
  introText.style.display = "block"; // Show the intro text directly

  function typeWriter() {
    if (index < nameText.length) {
      nameElement.innerHTML = nameText.slice(0, ++index) + '<span class="blinking-cursor">|</span>';
      setTimeout(typeWriter, 100); // Speed of typing effect for the name
    } else {
      // Show the intro statement and sections
      introText.innerHTML = introStatement;
      showSectionsInSequence();
    }
  }

  function showSectionsInSequence() {
    setTimeout(() => {
      terminalSection.style.display = "block";
      terminalSection.classList.add("fade-in");
    }, 300);

    setTimeout(() => {
      projectsSection.style.display = "block";
      projectsSection.classList.add("fade-in");
    }, 600);

    setTimeout(() => {
      footer.style.display = "block";
      footer.classList.add("fade-in");
    }, 900);
  }

  typeWriter();
});
