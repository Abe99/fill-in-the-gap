/*
  TOEIC PRACTICE – DATA ONLY
  ---------------------------------
  Exercises included:
  1. Trends & Changes
  2. Comparing & Contrasting
  3. Computers & IT – Hardware
  4. Computers & IT – Internet
  5. Condition & Requirement
  6. Confusing Words
  7. Continuing & Repeating
  8. Earnings, Rewards & Benefits
  9. Entertainment, Art, Sports & Media
*/

const exercises = {

  /* ======================================================
     EXERCISE 1 – TRENDS & CHANGES
     ====================================================== */
  trends: {
    type: "transform",
    words: [
      "amended","broaden","build up","considerable growth","constant rise","cuts",
      "deterioration","downsizing","downward trend","dramatic increase","expansion",
      "fluctuated","general improvement","marked progress","narrowing",
      "phased out","reduce","restructure",
      "sharp decline / fall","slipped","steady decrease","streamline",
      "strengthening","tightening up","upgrade","upward trend"
    ],
    questions: [
      { sentence1: "33% worked in secondary industries and 48% in tertiary. This year it is 27% and 53%.",
        sentence2: { before: "There has been a ", after: " of the gap between sectors." },
        answer: "narrowing" },
      { sentence1: "Overseas sales fell from 60% to 15%.",
        sentence2: { before: "There has been a ", after: " in overseas sales." },
        answer: "sharp decline / fall" },
      { sentence1: "People live more comfortably than before.",
        sentence2: { before: "There has been a ", after: " in living standards." },
        answer: "general improvement" },
      { sentence1: "The company is bigger than two years ago.",
        sentence2: { before: "Because of company ", after: ", we need more staff." },
        answer: "expansion" },
      { sentence1: "The dollar buys more foreign currency.",
        sentence2: { before: "There has been a ", after: " of the dollar." },
        answer: "strengthening" },
      { sentence1: "Importing goods is harder now.",
        sentence2: { before: "There has been a ", after: " of border controls." },
        answer: "tightening up" },
      { sentence1: "Inflation rose steadily between 2002 and 2005.",
        sentence2: { before: "There was a ", after: " in inflation." },
        answer: "constant rise" },
      { sentence1: "Staff numbers rose from 200 to 1000.",
        sentence2: { before: "There was a ", after: " in staff numbers." },
        answer: "dramatic increase" }
    ]
  },

  /* ======================================================
     EXERCISE 2 – COMPARING & CONTRASTING
     ====================================================== */
  compare: {
    type: "choice",
    questions: [
      { sentence: "The ___ in conditions is noticeable.", options: ["contrast","compare","comparison"], answer: "contrast" },
      { sentence: "The companies ___ considerably.", options: ["differentiate","differ","different"], answer: "differ" },
      { sentence: "It is hard to ___ between them.", options: ["differentiate","differ","contrast"], answer: "differentiate" },
      { sentence: "They share common ___.", options: ["characters","characterizes","characteristics"], answer: "characteristics" },
      { sentence: "There is a clear ___.", options: ["distinguish","distinctive","distinction"], answer: "distinction" }
    ]
  },

  /* ======================================================
     EXERCISE 3 – COMPUTERS & IT (HARDWARE)
     ====================================================== */
  computers1: {
    type: "long-transform",
    words: [
      "desktop","laptop","components","CPU","memory","hard disk","capacity",
      "software","word processing","spreadsheet","DTP","load",
      "CD drive","USB port","flash-drive","monitor",
      "keyboard","printer","scanner","mouse"
    ],
    text: `
This is my (1) ___ computer (I also have a (2) ___).
There are six main (3) ___. The first is the (4) ___.
It carries the (5) ___ including the (6) ___.
Mine has a high (7) ___.
It came with (8) ___ including (9) ___, (10) ___ and (11) ___.
You can (12) ___ programs using the (13) ___ or the (14) ___,
into which you can put a (15) ___.
The other parts are the (16) ___, (17) ___, (18) ___,
(19) ___ and (20) ___.
    `,
    answers: [
      "desktop","laptop","components","CPU","memory","hard disk",
      "capacity","software","word processing","spreadsheet","DTP",
      "load","CD drive","USB port","flash-drive",
      "monitor","keyboard","printer","scanner","mouse"
    ]
  },

  /* ======================================================
     EXERCISE 4 – COMPUTERS & IT (INTERNET)
     ====================================================== */
  computers2: {
    type: "long-transform",
    words: [
      "Internet","provider","access","search engine","download","chatrooms",
      "websites","log on","pop-up","keywords","links","homepage",
      "online","bookmark","email","spam","delete","attachment",
      "virus","crashing","upgrade"
    ],
    text: `
The best thing about IT is the (1) ___.
You need a (2) ___ that allows (3) ___ and a (4) ___.
You can (5) ___ files and talk in (6) ___.
Companies have (7) ___. Let me (8) ___.
Oh no, a (9) ___.
I type into the (10) ___, which finds (11) ___ and gives (12) ___.
Here is our (13) ___. You can buy things (14) ___.
Before I (15) ___, I will (16) ___ it.
The most important thing is (17) ___. I receive lots of (18) ___.
I will (19) ___ it. This email has an (20) ___.
Be careful: it may contain a (21) ___.
Last week it kept (22) ___. I should (23) ___ it.
    `,
    answers: [
      "Internet","provider","access","search engine","download","chatrooms",
      "websites","log on","pop-up","keywords","links","homepage",
      "online","bookmark","email","spam","delete","attachment",
      "virus","crashing","upgrade"
    ]
  },

  /* ======================================================
     EXERCISE 5 – CONDITION & REQUIREMENT
     ====================================================== */
  conditions: {
    type: "unscramble",
    questions: [
      { sentence: "___ customers continue to demand the model, production will continue.", scrambled: "sa nlgo sa", answer: "as long as" },
      { sentence: "___ we receive payment, interest will be charged.", scrambled: "seusln", answer: "unless" },
      { sentence: "Credit is offered ___ payments are regular.", scrambled: "no incotnido atth", answer: "on condition that" },
      { sentence: "Everyone gets a rise ___ targets are met.", scrambled: "vogrnipid ttha", answer: "providing that" }
    ]
  },

  /* ======================================================
     EXERCISE 6 – CONFUSING WORDS
     ====================================================== */
  confusing: {
    type: "choice",
    questions: [
      { sentence: "Make your report as ___ as possible.", options: ["subjective","objective"], answer: "objective" },
      { sentence: "Inspectors regularly ___ kitchens.", options: ["inspect","analyze"], answer: "inspect" },
      { sentence: "She is very ___ of our help.", options: ["appreciable","appreciative"], answer: "appreciative" }
    ]
  },

  /* ======================================================
     EXERCISE 7 – CONTINUING & REPEATING
     ====================================================== */
  continuing: {
    type: "transform",
    words: [
      "resume","return","maintain","persistent","continuous",
      "continually","persevere","reopen","steady",
      "perpetuate","continue","repeatedly","progressing",
      "revert","keep it up"
    ],
    questions: [
      {
        sentence1: "We hope to start production again soon.",
        sentence2: { before: "We hope to ", after: " production soon." },
        answer: "resume"
      },
      {
        sentence1: "The air conditioning keeps breaking down.",
        sentence2: { before: "The air conditioning is ", after: " breaking down." },
        answer: "continually"
      },
      {
        sentence1: "Everyone is delighted with your work.",
        sentence2: { before: "", after: "!" },
        answer: "keep it up"
      }
    ]
  },

  /* ======================================================
     EXERCISE 8 – EARNINGS, REWARDS & BENEFITS
     ====================================================== */
  earnings: {
    type: "transform",
    words: [
      "salary","remuneration","overtime","increment","deduction",
      "minimum wage","double time","pension plan","raise","advance",
      "payslip","bonus","payroll","rewards package","weighting",
      "leave entitlement","income","expenditure","job satisfaction",
      "commission","stock options","incentive plan","rate",
      "redundancy pay","discount","relocation allowance",
      "profit sharing","gross","net","index-linked",
      "performance-related","commensurate","golden handshake"
    ],
    questions: [
      {
        sentence1: "A wage is paid weekly.",
        sentence2: { before: "A ", after: " is paid monthly." },
        answer: "salary"
      },
      {
        sentence1: "Money paid for work.",
        sentence2: { before: "This is called ", after: "." },
        answer: "remuneration"
      }
    ]
  },

  /* ======================================================
     EXERCISE 9 – ENTERTAINMENT, ART, SPORTS & MEDIA
     ====================================================== */
  entertainment: {
    type: "transform",
    words: [
      "readership","circulation","coverage","technical","anchor",
      "works","literature","box-office","actors",
      "opening","audience","galleries","admission",
      "fans","spectators","draw"
    ],
    questions: [
      {
        sentence1: "They have many readers.",
        sentence2: { before: "They have a large ", after: "." },
        answer: "readership"
      },
      {
        sentence1: "The match finished with no winner.",
        sentence2: { before: "The final result was a ", after: "." },
        answer: "draw"
      }
    ]
  }

};
