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

  /* Exercise 1 */
  trends: {
    type: "transform",
    words: ["narrowing"],
    questions: [{
      sentence1:
        "Last year, 33% of the population worked in secondary industries and 48% worked in the tertiary sector. This year, the figures are 27% and 53% respectively.",
      sentence2: {
        before: "There has been a ",
        after: " of the gap between those working in different sectors of the economy."
      },
      answer: "narrowing"
    }]
  },

  /* Exercise 2 */
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
  },

  /* Exercise 3 */
  computers1: {
    type: "long-transform",
    words: [
      "desktop","laptop","components","CPU","memory","hard disk","hard drive",
      "capacity","software","word processing","spreadsheet","DTP","load",
      "CD drive","USB port","flash-drive","monitor","keyboard","printer","scanner","mouse"
    ],
    text: `
This is my new (1) ___ computer that sits on top of a table or desk (I've also got a (2) ___).
As you can see, there are six main (3) ___ to it. The first is the (4) ___ which controls what it does.
It carries the (5) ___ including the (6) ___ used for storing information.
Mine has a particularly high (7) ___.
It came with its own (8) ___ including (9) ___, (10) ___ and (11) ___.
You can also (12) ___ other programs using the (13) ___ or the (14) ___,
into which you can put a (15) ___.
The other parts are the (16) ___, the (17) ___, the (18) ___,
the (19) ___ and the (20) ___.
    `,
    answers: [
      "desktop","laptop","components","CPU","memory","hard disk",
      "capacity","software","word processing","spreadsheet","DTP",
      "load","CD drive","USB port","flash-drive",
      "monitor","keyboard","printer","scanner","mouse"
    ]
  },

  /* Exercise 4 */
  computers2: {
    type: "long-transform",
    words: [
      "Internet","provider","access","search engine","download","chatrooms",
      "websites","log on","pop-up","search engine","keywords","links","homepage",
      "online","bookmark","email","spam","delete","attachment","virus",
      "crashing","upgrade"
    ],
    text: `
The best thing about modern IT is the (1) ___. Once you have a (2) ___ that allows (3) ___
and a (4) ___, you can (5) ___ files. You can talk to people in (6) ___.
Companies have their own (7) ___. Let me (8) ___.
Oh no, another (9) ___. I'll remove it.
I'll type the address into the (10) ___. It finds (11) ___ and gives (12) ___.
Here's our (13) ___. You can buy things (14) ___.
Before I (15) ___, I'll (16) ___ it.
The most important thing is (17) ___. I get lots of (18) ___.
I'll (19) ___ it. This email has an (20) ___.
Be careful: it may contain a (21) ___.
Last week it kept (22) ___. I should (23) ___ it.
    `,
    answers: [
      "Internet","provider","access","search engine","download","chatrooms",
      "websites","log on","pop-up","search engine","keywords","links","homepage",
      "online","bookmark","email","spam","delete","attachment","virus",
      "crashing","upgrade"
    ]
  }
};

/********************
 * DOM + ENGINE
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

function setScreen(name) {
  state.screen = name;
  Object.values(screens).forEach(s => s.hidden = true);
  screens[name].hidden = false;
  if (name === "question") render();
}

function render() {
  const ex = exercises[state.exercise];

  if (ex.type === "long-transform") {
    counterEl.textContent = "Fill in the gaps";
    sentence1El.textContent = "";
    sentence2El.innerHTML = ex.text.replace(/\(\d+\)\s___/g,
      () => `<input id="answer-input" />`
    );
    renderWords(ex.words);
    document.getElementById("answer-input").focus();
    return;
  }

  // existing short exercises omitted for brevity
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

/********************
 * INIT
 ********************/
setScreen("intro");
