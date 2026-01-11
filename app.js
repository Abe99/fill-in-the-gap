/********************
 * STATE
 ********************/
const state = {
  screen: "intro",
  questionIndex: 0,
  locked: false
};

/********************
 * DATA
 ********************/
const chapter = {
  words: [
    "amended","broaden","build up","considerable growth","constant rise","cuts",
    "deterioration","downsizing","downward trend","dramatic increase","expansion",
    "fluctuated","general improvement","marked progress","narrow","narrowing",
    "phased in","phased out","reduce","relaxation","restructure",
    "sharp decline / fall","slipped","steady decrease","streamline",
    "strengthening","tightening up","upgrade","upward trend","weakening","widening"
  ],
  questions: [
    { sentence1: "Last year, 33% of the population worked in secondary industries and 48% worked in the tertiary sector. This year, the figures are 27% and 53% respectively.",
      sentence2: { before: "There has been a ", after: " of the gap between those working in different sectors of the economy." },
      answer: "narrowing" },
    { sentence1: "Last year, the overseas market accounted for 60% of our sales. This year, it only accounts for about 15%.",
      sentence2: { before: "There has been a ", after: " in overseas sales figures in the last year." },
      answer: "sharp decline / fall" },
    { sentence1: "People can afford to buy more and live more comfortably than they could twenty years ago.",
      sentence2: { before: "There has been a ", after: " in the standard of living." },
      answer: "general improvement" },
    { sentence1: "Because our company is bigger now than it was two years ago, we need to recruit more employees.",
      sentence2: { before: "Because of company ", after: " over the last two years, we need more workers." },
      answer: "expansion" },
    { sentence1: "American travelers abroad have discovered that they can buy more foreign currency with their dollar.",
      sentence2: { before: "There has been a ", after: " of the dollar." },
      answer: "strengthening" },
    { sentence1: "It is now much harder to import goods into the country than it was a few years ago.",
      sentence2: { before: "There has been a ", after: " of border controls for imports." },
      answer: "tightening up" },
    { sentence1: "In 2002 inflation was running at about 4%, in 2003 it was 4.5%, in 2004 it was 5% and in 2005 it was 5.5%.",
      sentence2: { before: "Between 2002 and 2005, there was a ", after: " in the rate of inflation." },
      answer: "constant rise" },
    { sentence1: "Last year, the company employed 200 people. This year it now has over 1000 employees.",
      sentence2: { before: "There has been a ", after: " in the number of employees working for the company." },
      answer: "dramatic increase" },
    { sentence1: "Unemployment figures have dropped by about 2% every year for the last four years.",
      sentence2: { before: "There has been a ", after: " in unemployment figures over the last four years." },
      answer: "steady decrease" },
    { sentence1: "Over the next few years, some management positions in the company will be gradually removed.",
      sentence2: { before: "Some management positions will be ", after: " over the next few years." },
      answer: "phased out" },
    { sentence1: "Because of forecasts for high demand in the future, we need to increase our stocks.",
      sentence2: { before: "We need to ", after: " our stocks to cope with future demand." },
      answer: "build up" },
    { sentence1: "The government will spend less on the welfare system next year.",
      sentence2: { before: "There are going to be ", after: " in welfare spending next year." },
      answer: "cuts" },
    { sentence1: "Public services are less reliable now than they were five years ago.",
      sentence2: { before: "There has been a ", after: " in public services reliability over the last five years." },
      answer: "deterioration" },
    { sentence1: "Nowadays, more and more people are traveling abroad for business and pleasure.",
      sentence2: { before: "There has been ", after: " in the overseas travel market." },
      answer: "considerable growth" },
    { sentence1: "Compared with five years ago, more people are shopping in out-of-town malls than in local stores.",
      sentence2: { before: "There has been an ", after: " in the number of people shopping in out-of-town malls." },
      answer: "upward trend" },
    { sentence1: "Unless your work visibly improves, we will have to recommend a transfer to another department.",
      sentence2: { before: "We need to see some ", after: " in your work, or we will recommend a departmental transfer." },
      answer: "marked progress" },
    { sentence1: "Young Americans want to travel, meet new people and see more of the world than their parents and grandparents did.",
      sentence2: { before: "Young Americans want to ", after: " their horizons." },
      answer: "broaden" },
    { sentence1: "Over the next two months, we plan to make our office computers faster and more efficient.",
      sentence2: { before: "Over the next two months, we plan to ", after: " our office computers." },
      answer: "upgrade" },
    { sentence1: "We are trying to make the accounting system simpler and more efficient.",
      sentence2: { before: "We are trying to ", after: " the accounting system." },
      answer: "streamline" },
    { sentence1: "Making the company smaller by making a lot of staff members redundant has made it much more profitable than it was before.",
      sentence2: { before: "", after: " the company has made it much more profitable than it was before." },
      answer: "downsizing" },
    { sentence1: "Standards of service have gone down recently, and as a result we have lost a lot of customers.",
      sentence2: { before: "Standards of service have ", after: " recently, and as a result we have lost a lot of customers." },
      answer: "slipped" },
    { sentence1: "Property prices have gone up, then gone down, then gone up again this year.",
      sentence2: { before: "Property prices have ", after: " this year." },
      answer: "fluctuated" },
    { sentence1: "We have made small changes to the rules for applying for instant credit.",
      sentence2: { before: "We have ", after: " the rules for applying for instant credit." },
      answer: "amended" },
    { sentence1: "The company is planning to change its marketing division to make it more effective.",
      sentence2: { before: "The company is planning to ", after: " its marketing division." },
      answer: "restructure" }
  ]
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

/********************
 * FUNCTIONS
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
  const q = chapter.questions[state.questionIndex];
  counterEl.innerHTML = `Question <strong>${state.questionIndex + 1}</strong> / ${chapter.questions.length}`;
  sentence1El.textContent = q.sentence1;

  sentence2El.innerHTML = `
    ${q.sentence2.before}
    <input id="answer-input" type="text" />
    ${q.sentence2.after}
  `;

  const input = document.getElementById("answer-input");
  input.focus();

  hintEl.hidden = true;
  renderWordBox(input);
}

function renderWordBox(input) {
  wordListEl.innerHTML = "";
  chapter.words.forEach(word => {
    const li = document.createElement("li");
    li.className = "word";
    li.textContent = word;
    if (chapter.questions.slice(0, state.questionIndex).some(q => q.answer === word)) {
      li.classList.add("used");
    }
    li.onclick = () => {
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

  if (normalize(input.value) === normalize(chapter.questions[state.questionIndex].answer)) {
    input.classList.add("correct");
    state.locked = true;
    setTimeout(() => {
      state.questionIndex++;
      state.locked = false;
      if (state.questionIndex < chapter.questions.length) {
        renderQuestion();
      } else {
        setScreen("complete");
      }
    }, 250);
  } else {
    input.classList.add("incorrect");
    input.value = "";
    input.focus();
    hintEl.textContent = `Correct answer: ${chapter.questions[state.questionIndex].answer}`;
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
 * KEYS
 ********************/
document.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  if (state.screen === "intro") setScreen("chapters");
  else if (state.screen === "chapters") setScreen("question");
  else if (state.screen === "question") validate();
  else if (state.screen === "complete") {
    state.questionIndex = 0;
    setScreen("chapters");
  }
});

/********************
 * INIT
 ********************/
setScreen("intro");
