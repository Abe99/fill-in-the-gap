/********************
 * DATA SAFETY CHECK
 ********************/
if (typeof exercises === "undefined") {
  throw new Error(
    "data.js is missing or loaded after app.js. Make sure data.js is loaded first."
  );
}

/********************
 * STATE
 ********************/
const state = {
  screen: "intro",
  exercise: null,
  questionIndex: 0,
  locked: false,
  selectedChapterIndex: 0
};

/********************
 * DOM
 ********************/
const screens = {
  intro: document.getElementById("screen-intro"),
  chapters: document.getElementById("screen-chapters"),
  question: document.getElementById("screen-question"),
  complete: document.getElementById("screen-complete")
};

const sentence1El = document.getElementById("sentence-1");
const sentence2El = document.getElementById("sentence-2");
const counterEl = document.getElementById("question-counter");
const hintEl = document.getElementById("hint");
const wordListEl = document.getElementById("word-list");
const chapterItems = Array.from(document.querySelectorAll(".chapter-item"));

/********************
 * SCREEN CONTROL
 ********************/
function setScreen(name) {
  state.screen = name;
  Object.values(screens).forEach(s => (s.hidden = true));
  screens[name].hidden = false;

  if (name === "question") {
    renderQuestion();
  }
}

/********************
 * RENDERING
 ********************/
function renderQuestion() {
  const ex = exercises[state.exercise];

  if (!ex) {
    throw new Error(`Exercise "${state.exercise}" not found in data.js`);
  }

  hintEl.hidden = true;
  counterEl.textContent = "";

  if (ex.type === "transform") {
    const q = ex.questions[state.questionIndex];
    counterEl.textContent = `Question ${state.questionIndex + 1} / ${ex.questions.length}`;
    sentence1El.textContent = q.sentence1;
    sentence2El.innerHTML =
      `${q.sentence2.before}<input id="answer-input" />${q.sentence2.after}`;
    renderWordBox(ex.words);
  }

  else if (ex.type === "choice") {
    const q = ex.questions[state.questionIndex];
    counterEl.textContent = `Question ${state.questionIndex + 1} / ${ex.questions.length}`;
    sentence1El.textContent = "";
    sentence2El.innerHTML =
      q.sentence.replace("___", `<input id="answer-input" />`);
    renderWordBox(q.options);
  }

  else if (ex.type === "long-transform") {
    counterEl.textContent = "Fill in the gaps";
    sentence1El.textContent = "";
    sentence2El.innerHTML = ex.text.replace(/\(\d+\)\s___/g, () =>
      `<input id="answer-input" />`
    );
    renderWordBox(ex.words);
  }

  document.getElementById("answer-input").focus();
}

/********************
 * WORD BOX
 ********************/
function renderWordBox(words) {
  wordListEl.innerHTML = "";
  words.forEach(word => {
    const li = document.createElement("li");
    li.className = "word";
    li.textContent = word;
    li.addEventListener("click", () => {
      const input = document.getElementById("answer-input");
      input.value = word;
      input.focus();
    });
    wordListEl.appendChild(li);
  });
}

/********************
 * UTIL
 ********************/
function normalize(v) {
  return v.trim().toLowerCase();
}

/********************
 * CHAPTER SELECTION
 ********************/
function updateChapterSelection() {
  chapterItems.forEach((item, i) =>
    item.setAttribute("aria-selected", i === state.selectedChapterIndex)
  );
}

updateChapterSelection();

/********************
 * KEYBOARD
 ********************/
document.addEventListener("keydown", e => {

  if (state.screen === "chapters") {
    if (e.key === "ArrowDown") {
      state.selectedChapterIndex =
        (state.selectedChapterIndex + 1) % chapterItems.length;
      updateChapterSelection();
      return;
    }

    if (e.key === "ArrowUp") {
      state.selectedChapterIndex =
        (state.selectedChapterIndex - 1 + chapterItems.length) %
        chapterItems.length;
      updateChapterSelection();
      return;
    }

    if (e.key === "Enter") {
      state.exercise =
        chapterItems[state.selectedChapterIndex].dataset.exercise;
      state.questionIndex = 0;
      setScreen("question");
      return;
    }
  }

  if (e.key === "Enter" && state.screen === "intro") {
    setScreen("chapters");
  }

  if (e.key === "Enter" && state.screen === "complete") {
    setScreen("chapters");
  }
});

/********************
 * INIT
 ********************/
setScreen("intro");
