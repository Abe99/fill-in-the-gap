/********************
 * STATE
 ********************/
const state = {
  screen: "intro",
  exercise: null,
  questionIndex: 0,
  locked: false
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
        sentence1: "Last year, 33% of the population worked in secondary industries and 48% worked in the tertiary sector. This year, the figures are 27% and 53% respectively.",
        sentence2: { before: "There has been a ", after: " of the gap between those working in different sectors of the economy." },
        answer: "narrowing"
      }
      // (remaining questions unchanged for brevity)
    ]
  },

  compare: {
    type: "choice",
    questions: [
      {
        sentence: "The ___ in working conditions between our Denver department and our department in Chicago is very noticeable.",
        options: ["contrast", "compare", "comparison"],
        answer: "contrast"
      },
      {
        sentence: "The two companies ___ considerably from each other.",
        options: ["differentiate", "differ", "different"],
        answer: "differ"
      }
      // (remaining questions follow same pattern)
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
const chapterItems = document.querySelectorAll(".chapter-item");

/********************
 * CORE
 ********************/
function setScreen(name) {
  state.screen = name;
  Object.values(screens).forEach(s => s.hidden = true);
  screens[name].hidden = false;
  if (name === "question") renderQuestion();
}

function normalize(v) {
  return v.trim().toLowerCase();
}

function renderQuestion() {
  const ex = exercises[state.exercise];
  const q = ex.questions[state.questionIndex];

  counterEl.textContent = `Question ${state.questionIndex + 1} / ${ex.questions.length}`;
  hintEl.hidden = true;

  if (ex.type === "transform") {
    sentence1El.textContent = q.sentence1;
    sentence2El.innerHTML = `${q.sentence2.before}<input id="answer-input" />${q.sentence2.after}`;
    renderWordBox(ex.words);
  }

  if (ex.type === "choice") {
    sentence1El.textContent = "";
    sentence2El.innerHTML = q.sentence.replace("___", `<input id="answer-input" />`);
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
      document.getElementById("answer-input").value = word;
      document.getElementById("answer-input").focus();
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
 * EVENTS
 ********************/
chapterItems.forEach(item => {
  item.onclick = () => {
    chapterItems.forEach(i => i.setAttribute("aria-selected", "false"));
    item.setAttribute("aria-selected", "true");
    state.exercise = item.dataset.exercise;
    state.questionIndex = 0;
    setScreen("question");
  };
});

document.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  if (state.screen === "intro") setScreen("chapters");
  else if (state.screen === "question") validate();
  else if (state.screen === "complete") setScreen("chapters");
});

/********************
 * INIT
 ********************/
setScreen("intro");
