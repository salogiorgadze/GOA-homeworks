const passage = document.getElementById("passage")
const wpm = document.getElementById("wpm")
const accuracy = document.getElementById("accuracy")
const time = document.getElementById("time")
const startOverlay = document.getElementById("startOverlay")
const results = document.getElementById("results")
const stats = document.getElementById("stats")
const passageContainer = document.getElementById("passageContainer")
const restartBtn = document.getElementById("restartBtn")

const data = {
  easy: [
    "The quick brown fox jumps over the lazy dog.",
    "Typing is easy.",
    "Practice every day."
  ],
  medium: [
    "Typing speed improves with practice.",
    "JavaScript makes websites interactive.",
    "Accuracy is important in typing."
  ],
  hard: [
    "Photosynthesis converts light into chemical energy.",
    "Quantum mechanics studies subatomic particles.",
    "The Renaissance reshaped European culture."
  ]
}

const state = {
  diff: "easy",
  mode: "timed",
  text: "",
  input: "",
  startTime: 0,
  timer: null,
  running: false
}
function pickText() {
  const arr = data[state.diff]
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function reset() {
  clearInterval(state.timer)
  state.text = pickText()
  state.input = ""
  state.running = false

  passage.innerHTML = ""

  for (let i = 0; i < state.text.length; i++) {
    const span = document.createElement("span")
    span.textContent = state.text[i]
    passage.appendChild(span)
  }

  wpm.textContent = "0"
  accuracy.textContent = "100%"
  time.textContent = state.mode === "timed" ? "60s" : "0s"

  startOverlay.style.display = ""
  results.style.display = "none"
  results.classList.add("hidden")
  stats.style.display = ""
  passageContainer.style.display = ""
}

function startTest() {
  if (state.running) return

  state.running = true
  state.startTime = Date.now()
  startOverlay.style.display = "none"

  state.timer = setInterval(updateTime, 1000)
}

function updateTime() {
  const seconds = Math.floor((Date.now() - state.startTime) / 1000)

  if (state.mode === "timed") {
    const left = Math.max(0, 60 - seconds)
    time.textContent = left + "s"

    if (left === 0) {
      endTest()
    }
  } else {
    time.textContent = seconds + "s"
  }
}

function updateStats() {
  const spans = passage.querySelectorAll("span")
  let correct = 0

  for (let i = 0; i < spans.length; i++) {
    spans[i].className = ""

    if (state.input[i] === undefined) continue

    if (state.input[i] === state.text[i]) {
      spans[i].className = "correct"
      correct++;
    } else {
      spans[i].className = "incorrect"
    }
  }

  const timePassed = Date.now() - state.startTime
  const minutes = timePassed / 60000

  const charsTyped = state.input.length
  const wordsTyped = charsTyped / 5

  const wpmValue = minutes ? Math.round(wordsTyped / minutes) : 0
  wpm.textContent = wpmValue

  const accValue = charsTyped ? Math.round((correct / charsTyped) * 100) : 100
  accuracy.textContent = accValue + "%"
}

function endTest() {
  if (!state.running) return;

  clearInterval(state.timer);
  state.running = false;

  let correct = 0;

  for (let i = 0; i < state.input.length; i++) {
    if (state.input[i] === state.text[i]) {
      correct++;
    }
  }

  const minutes = (Date.now() - state.startTime) / 60000;
  const wpmValue = minutes ? Math.round((state.input.length / 5) / minutes) : 0;
  const accValue = state.input.length ? Math.round((correct / state.input.length) * 100) : 100;

  stats.style.display = "none";
  passageContainer.style.display = "none";
  results.style.display = "";
  results.classList.remove("hidden");

  results.innerHTML = `
    <h2>Test Complete!</h2>
    <div class="results-stats">
      <div><b>WPM:</b> ${wpmValue}</div>
      <div><b>Accuracy:</b> ${accValue}%</div>
      <div><b>Correct:</b> ${correct}</div>
      <div><b>Incorrect:</b> ${state.input.length - correct}</div>
    </div>
  `;
}

document.onkeydown = function (e) {
  if (!state.running) return;

  if (e.key === "Backspace") {
    e.preventDefault();
    state.input = state.input.slice(0, -1);
  } 
  else if (e.key.length === 1) {
    e.preventDefault();
    state.input += e.key;
  }

  updateStats();

  if (state.input.length === state.text.length) {
    endTest();
  }
};

document.querySelectorAll(".difficulty-btn").forEach(btn => {
  btn.onclick = function () {
    document.querySelectorAll(".difficulty-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.diff = btn.dataset.difficulty;
    reset();
  }
});

document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.onclick = function () {
    document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.mode = btn.dataset.mode;
    reset();
  };
});

restartBtn.onclick = reset;
startOverlay.onclick = startTest;

reset();


