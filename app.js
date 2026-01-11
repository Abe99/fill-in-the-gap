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
        sentence: "The ___ in working conditions between our Denver department and our department in Chicago is very noticeable.",
        options: ["contrast", "compare", "comparison"],
        answer: "contrast"
      },
      {
        sentence: "The two companies ___ considerably from each other.",
        options: ["differentiate", "differ", "different"],
        answer: "differ"
      },
      {
        sentence: "It is often difficult to ___ between employees who are genuinely ill and those who are not.",
        options: ["differentiate", "differ", "contrast"],
        answer: "differentiate"
      },
      {
        sentence: "Our new software shares some common ___.",
        options: ["characters", "characterizes", "characteristics"],
        answer: "characteristics"
      },
      {
        sentence: "There's a clear ___ between starting your own company and taking over one that already exists.",
        options: ["distinguish", "distinctive", "distinction"],
        answer: "distinction"
      },
      {
        sentence: "___ with 15 years ago, home PCs are cheaper.",
        options: ["Compared", "Compare", "Comparing"],
        answer: "Compared"
      },
      {
        sentence: "There's absolutely no ___ between the two products.",
        options: ["compare", "comparison", "contrast"],
        answer: "comparison"
      },
      {
        sentence: "Our latest phones ___ those of our main competitor.",
        options: ["similar to", "alike", "resemble"],
        answer: "resemble"
      },
      {
        sentence: "There are several ___ between the new photocopier and the old one.",
        options: ["similarities", "similarly", "similar to"],
        answer: "similarities"
      },
      {
        sentence: "Hackers can destroy files. ___, they can steal your money.",
        options: ["Exactly", "In the same way", "Just as"],
        answer: "In the same way"
      },
      {
        sentence: "The quality is excellent. ___, the price.",
        options: ["Likewise", "Alike", "Likeness"],
        answer: "Likewise"
      },
      {
        sentence: "The TOEFL tests general English. ___, the TOEIC focuses on business.",
        options: ["In contrast to", "Although", "By way of contrast"],
        answer: "By way of contrast"
      },
      {
        sentence: "The company performed badly. ___, it made a profit.",
        options: ["Nevertheless", "Even so", "However"],
        answer: "Nevertheless"
      },
      {
        sentence: "There is a large ___ between service and primary sector employment.",
        options: ["discrepancy", "discrimination", "differential"],
        answer: "discrepancy"
      },
      {
        sentence: "The new contract requires notice, ___ the old one did not.",
        options: ["unlike", "whereas", "whereby"],
        answer: "whereas"
      }
    ]
  }
};

/********************
 * DOM + LOGIC
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

function updateChapterSelection() {
  chapterItems.forEach((item, i) =>
    item.setAttribute("aria-selected", i === state.selectedChapterIndex)
  );
}

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
    renderWords(ex.words);
  } else {
    sentence1El.textContent = "";
    sentence2El.innerHTML = q.sentence.replace("___", `<input id="answer-input" />`);
    renderWords(q.options);
  }

  document.getElementById("answer-input").focus();
}

function renderWords(words) {
  wordListEl.innerHTML = "";
  words.forEach(w => {
    const li = document.createElement("li");
    li.className = "word";
    li.textContent = w;
    li.onclick = () => {
      const input = document.getElementById("answer-input");
      input.value = w;
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
      state.questionIndex < ex.questions.length
        ? renderQuestion()
        : setScreen("complete");
    }, 250);
  } else {
    input.classList.add("incorrect");
    input.value = "";
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
      state.exercise = chapterItems[state.selectedChapterIndex].dataset.exercise;
      state.questionIndex = 0;
      setScreen("question");
      return;
    }
  }

  if (e.key === "Enter" && state.screen === "intro") setScreen("chapters");
  else if (e.key === "Enter" && state.screen === "question") validate();
  else if (e.key === "Enter" && state.screen === "complete") setScreen("chapters");
});

/********************
 * INIT
 ********************/
updateChapterSelection();
setScreen("intro");
