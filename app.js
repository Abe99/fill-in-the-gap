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
 * DATA
 ********************/
const exercises = {
  trends: {
    type: "transform",
    words: [
      "amended","broaden","build up","considerable growth","constant rise","cuts",
      "deterioration","downsizing","downward trend","dramatic increase","expansion",
      "fluctuated","general improvement","marked progress","narrow","narrowing",
      "phased in","phased out","reduce","relaxation","restructure",
      "sharp decline / fall","slipped","steady decrease","streamline",
      "strengthening","tightening up","upgrade","upward trend","weakening","widening"
    ],
    questions: [
      {
        sentence1:
          "Last year, 33% of the population worked in secondary industries and 48% worked in the tertiary sector. This year, the figures are 27% and 53% respectively.",
        sentence2: {
          before: "There has been a ",
          after: " of the gap between those working in different sectors of the economy."
        },
        answer: "narrowing"
      }
    ]
  },

  compare: {
    type: "choice",
    questions: [
      {
        sentence:
          "The ___ in working conditions between our Denver department and our department in Chicago is very noticeable.",
        options: ["contrast", "compare", "comparison"],
        answer: "contrast"
      }
    ]
  }
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
 * CHAPTER SELECTION
 ********************/
function updateChapterSelection() {
  chapterItems.forEach((item, index) => {
    item.setAttribute(
      "aria-selected",
      index === state.selectedChapterIndex ? "true" : "false"
    );
  });
}

updateChapterSelection();

chapterItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    state.selectedChapterIndex = index;
    updateChapterSelection();
    startSelectedExercise();
  });
});

/********************
 * CORE LOGIC
 ********************/
function setScreen(name) {
  state.screen = name;
  Object.values(screens).forEach(s => (s.hidden = true));
  screens[name].hidden = false;
  if (name === "question") renderQuestion();
}

function normalize(v) {
  return v.trim().toLowerCase();
}

function startSelectedExercise() {
  const selected = chapterItems[state.selectedChapterIndex];
  state.exercise = selected.dataset.exercise;
  state.questionIndex = 0;
  setScreen("question");
}

function renderQuestion() {
  const ex = exercises[state.exercise];
  const q = ex.questions[state.questionIndex];

  counterEl.textContent = `Question ${state.questionIndex + 1} / ${ex.questions.length}`;
  hintEl.hidden = true;

  if (ex.type === "transform") {
    sentence1El.textContent = q.sentence1;
    sentence2El.innerHTML =
      `${q.sentence2.before}<input id="answer-input" />${q.sentence2.after}`;
    renderWordBox(ex.words);
  } else {
    sentence1El.textContent = "";
    sentence2El.innerHTML =
      q.sentence.replace("___", `<input id="answer-input" />`);
    renderWordBox(q.options);
  }

  document.getElementById("answer-input").focus();
}

function renderWordBox(words) {
  wordListEl.innerHTML = "";
  words.forEach(word => {
    const li = document.createElement("li");
    li.className = "word";
    li.textContent = word;
    li.onclick = () => {
      const input = document.getElementById("answer-input");
      input.value = word;
      input.focus();
    };
    wordListEl.appendChild(li);
  });
}

function validate() {
  if (state.locked) return;

  const input = document.getElementById("answer-input");
  if (!input.value.trim()) return;

  const ex = exercises[state.exercise];
  const correct = ex.questions[state.questionIndex].answer;

  if (normalize(input.value) === normalize(correct)) {
    input.classList.add("correct");
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
    input.classList.add("incorrect");
    input.value = "";
    input.focus();

    hintEl.textContent = `Correct answer: ${correct}`;
    hintEl.hidden = false;

    setTimeout(() => hintEl.classList.add("fade"), 1000);
    setTimeout(() => {
      hintEl.hidden = true;
      hintEl.classList.remove("fade");
      input.classList.remove("incorrect");
    }, 1300);
  }
}

/********************
 * KEYBOARD
 ********************/
document.addEventListener("keydown", e => {
  if (state.screen === "chapters") {
    if (e.key === "ArrowDown") {
      state.selectedChapterIndex =
        (state.selectedChapterIndex + 1) % chapterItems.length;
      updateChapterSelection();
      e.preventDefault();
      return;
    }

    if (e.key === "ArrowUp") {
      state.selectedChapterIndex =
        (state.selectedChapterIndex - 1 + chapterItems.length) %
        chapterItems.length;
      updateChapterSelection();
      e.preventDefault();
      return;
    }

    if (e.key === "Enter") {
      startSelectedExercise();
      return;
    }
  }

  if (e.key !== "Enter") return;

  if (state.screen === "intro") setScreen("chapters");
  else if (state.screen === "question") validate();
  else if (state.screen === "complete") setScreen("chapters");
});

/********************
 * INIT
 ********************/
setScreen("intro");
