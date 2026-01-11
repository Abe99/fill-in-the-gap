/*************************
 * SAFETY CHECK
 *************************/
if (typeof exercises === "undefined") {
  throw new Error("data.js must be loaded before app.js");
}

/*************************
 * STATE
 *************************/
const state = {
  screen: "intro",
  exercise: null,
  questionIndex: 0,
  selectedChapterIndex: 0,
  locked: false
};

/*************************
 * DOM REFERENCES
 *************************/
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

/*************************
 * UTIL
 *************************/
const normalize = v => v.trim().toLowerCase();

/*************************
 * SCREEN CONTROL
 *************************/
function setScreen(name) {
  state.screen = name;
  Object.values(screens).forEach(s => (s.hidden = true));
  screens[name].hidden = false;
  if (name === "question") renderQuestion();
}

/*************************
 * RENDER WORD BOX
 *************************/
function renderWords(words = []) {
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

/*************************
 * RENDER QUESTION
 *************************/
function renderQuestion() {
  const ex = exercises[state.exercise];
  const q = ex.questions[state.questionIndex];

  hintEl.hidden = true;
  counterEl.textContent = `Question ${state.questionIndex + 1} / ${ex.questions.length}`;

  // TRANSFORM (Exercises 1, 7, 8)
  if (ex.type === "transform") {
    sentence1El.textContent = q.sentence1;
    sentence2El.innerHTML =
      `${q.sentence2.before}<input id="answer-input" />${q.sentence2.after}`;
    renderWords(ex.words);
  }

  // CHOICE (Exercises 2, 6)
  if (ex.type === "choice") {
    sentence1El.textContent = "";
    sentence2El.innerHTML =
      q.sentence.replace("___", `<input id="answer-input" />`);
    renderWords(q.options);
  }

  // LONG TRANSFORM (Exercises 3, 4)
  if (ex.type === "long-transform") {
    sentence1El.textContent = "";
    sentence2El.innerHTML = q
      ? q
      : ex.text.replace(/\(\d+\)\s___/g, `<input id="answer-input" />`);
    renderWords(ex.words);
  }

  // UNSCRAMBLE (Exercise 5)
  if (ex.type === "unscramble") {
    sentence1El.textContent = `Rearrange: ${q.scrambled}`;
    sentence2El.innerHTML =
      q.sentence.replace("___", `<input id="answer-input" />`);
    renderWords([]);
  }

  document.getElementById("answer-input").focus();
}

/*************************
 * VALIDATION
 *************************/
function validate() {
  if (state.locked) return;

  const input = document.getElementById("answer-input");
  const ex = exercises[state.exercise];
  const q = ex.questions[state.questionIndex];

  let correct = false;

  if (ex.type === "choice" || ex.type === "transform" || ex.type === "unscramble") {
    correct = normalize(input.value) === normalize(q.answer);
  }

  if (ex.type === "long-transform") {
    correct =
      normalize(input.value) === normalize(ex.answers[state.questionIndex]);
  }

  if (correct) {
    state.locked = true;
    setTimeout(() => {
      state.questionIndex++;
      state.locked = false;
      if (state.questionIndex < ex.questions.length) {
        renderQuestion();
      } else {
        setScreen("complete");
      }
    }, 250);
  } else {
    hintEl.textContent = `Correct answer: ${
      q.answer || ex.answers[state.questionIndex]
    }`;
    hintEl.hidden = false;
    input.value = "";
    input.focus();
  }
}

/*************************
 * CHAPTER SELECTION
 *************************/
function updateChapterSelection() {
  chapterItems.forEach((item, i) =>
    item.setAttribute("aria-selected", i === state.selectedChapterIndex)
  );
}
updateChapterSelection();

/*************************
 * KEYBOARD HANDLING
 *************************/
document.addEventListener("keydown", e => {

  if (state.screen === "intro" && e.key === "Enter") {
    setScreen("chapters");
  }

  if (state.screen === "chapters") {
    if (e.key === "ArrowDown") {
      state.selectedChapterIndex =
        (state.selectedChapterIndex + 1) % chapterItems.length;
      updateChapterSelection();
    }
    if (e.key === "ArrowUp") {
      state.selectedChapterIndex =
        (state.selectedChapterIndex - 1 + chapterItems.length) %
        chapterItems.length;
      updateChapterSelection();
    }
    if (e.key === "Enter") {
      state.exercise =
        chapterItems[state.selectedChapterIndex].dataset.exercise;
      state.questionIndex = 0;
      setScreen("question");
    }
  }

  if (state.screen === "question" && e.key === "Enter") {
    validate();
  }

  if (state.screen === "complete" && e.key === "Enter") {
    setScreen("chapters");
  }
});

/*************************
 * INIT
 *************************/
setScreen("intro");
