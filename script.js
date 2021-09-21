window.onload = () => {
    window.localStorage.removeItem("score");

    setInterval(() => {
      if (window.scrollY == 0) {
        document.querySelectorAll(".sticky").forEach(i => {
          i.style = "display: none;";
        });
      } else {
        document.querySelectorAll(".sticky").forEach(i => {
          i.style = "display: block;";
        });
      }
    }, 100);
  }

  let saveForm = () => {
    let score = 0;
    let parent;
    let correct = 0;
    let incorrect = 0;
    document.querySelectorAll('.value').forEach(function(button) {
      parent = button.parentElement.parentElement;
      button.disabled = true;
      if (button.value == "true" && button.checked || button.value !== "true" && !button.checked) {
        button.parentElement.style = "background-color: #C1E1C1; transition: 0.5s ease-in";
        correct++;
        score++;
      } else {
        button.parentElement.style = "background-color: #E1C1C1; transition: 0.5s ease-in";
        incorrect++;
        score--;
      }
    });
    if (score < 0) score = 0;
    if (parent.querySelector(".score") == null) {
    let p = document.createElement("p");
    p.className = "score";
    p.innerHTML = `Punktzahl: ${score}/30<br>Korrekt: ${correct}<br>Inkorrekt: ${incorrect}`;
    parent.appendChild(p);
    parent.querySelector(".submit").disabled = true;
    }
    let currentScore = parseInt(window.localStorage.getItem("score")) || 0;
    window.localStorage.setItem("score", currentScore + score);
  }