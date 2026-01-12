/*
  TOEIC PRACTICE – DATA FILE
  =========================
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
  10. Hotels
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
      "phased out","reduce","restructure","sharp decline / fall","slipped",
      "steady decrease","streamline","strengthening","tightening up",
      "upgrade","upward trend"
    ],
    questions: [
      {
        sentence1: "33% worked in secondary industries and 48% in tertiary. This year it is 27% and 53%.",
        sentence2: { before: "There has been a ", after: " of the gap between sectors." },
        answer: "narrowing"
      },
      {
        sentence1: "Overseas sales fell from 60% to 15%.",
        sentence2: { before: "There has been a ", after: " in overseas sales." },
        answer: "sharp decline / fall"
      },
      {
        sentence1: "People live more comfortably than before.",
        sentence2: { before: "There has been a ", after: " in living standards." },
        answer: "general improvement"
      },
      {
        sentence1: "The company is bigger than two years ago.",
        sentence2: { before: "Because of company ", after: ", we need more staff." },
        answer: "expansion"
      },
      {
        sentence1: "The dollar buys more foreign currency.",
        sentence2: { before: "There has been a ", after: " of the dollar." },
        answer: "strengthening"
      }
    ]
  },

  /* ======================================================
     EXERCISE 2 – COMPARING & CONTRASTING
     ====================================================== */
  compare: {
    type: "choice",
    questions: [
      {
        sentence: "The ___ in working conditions is very noticeable.",
        options: ["contrast","compare","comparison"],
        answer: "contrast"
      },
      {
        sentence: "The two companies ___ considerably.",
        options: ["differentiate","differ","different"],
        answer: "differ"
      },
      {
        sentence: "It is difficult to ___ between the two.",
        options: ["differentiate","differ","contrast"],
        answer: "differentiate"
      },
      {
        sentence: "They share common ___.",
        options: ["characters","characterizes","characteristics"],
        answer: "characteristics"
      }
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
This is my (1) ___ computer (I've also got a (2) ___).
There are six main (3) ___.
The first is the (4) ___ which carries the (5) ___ including the (6) ___.
It has a high (7) ___.
It came with (8) ___ including (9) ___, (10) ___ and (11) ___.
You can (12) ___ programs using the (13) ___ or the (14) ___,
into which you can put a (15) ___.
The other parts are the (16) ___, (17) ___, (18) ___,
(19) ___ and (20) ___.
    `,
    answers: [
      "desktop","laptop","components","CPU","memory","hard disk","capacity",
      "software","word processing","spreadsheet","DTP","load",
      "CD drive","USB port","flash-drive","monitor",
      "keyboard","printer","scanner","mouse"
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
You can (5) ___ files and chat in (6) ___.
Companies have (7) ___.
Let me (8) ___.
Oh no, a (9) ___.
I type into the (10) ___ which finds (11) ___ and gives (12) ___.
Here is our (13) ___.
You can buy things (14) ___.
Before I (15) ___ I will (16) ___ it.
Email often contains (17) ___ which I (18) ___.
Sometimes there is a (19) ___.
I need to (20) ___ my protection.
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
      {
        sentence: "___ customers continue to demand the product, it will be produced.",
        scrambled: "sa nlgo sa",
        answer: "as long as"
      },
      {
        sentence: "___ we receive payment, we will charge interest.",
        scrambled: "seusln",
        answer: "unless"
      },
      {
        sentence: "Credit is offered ___ repayments are regular.",
        scrambled: "no incotnido atth",
        answer: "on condition that"
      }
    ]
  },

  /* ======================================================
     EXERCISE 6 – CONFUSING WORDS
     ====================================================== */
  confusing: {
    type: "choice",
    questions: [
      {
        sentence: "Try to make your report as ___ as possible.",
        options: ["subjective","objective"],
        answer: "objective"
      },
      {
        sentence: "Inspectors regularly ___ kitchens.",
        options: ["inspect","analyze"],
        answer: "inspect"
      },
      {
        sentence: "She was very ___ of our efforts.",
        options: ["appreciable","appreciative"],
        answer: "appreciative"
      }
    ]
  },

  /* ======================================================
     EXERCISE 7 – CONTINUING & REPEATING
     ====================================================== */
  continuing: {
    type: "transform",
    words: [
      "resume","return","maintain","persistent","continuous",
      "continually","persevere","reopen","steady","perpetuate",
      "continue","repeatedly","progressing","revert","keep it up"
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
  },

  /* ======================================================
     EXERCISE 10 – HOTELS
     ====================================================== */
  hotels: {
    type: "transform",
    words: [
      "rates","single","twin","double","supplement","family","suite",
      "en-suite","quote","amenities","safety deposit","pay-to-view",
      "Internet","facilities","residents","non-residents",
      "room service","pool","business and conference","options",
      "self-catering","bed and breakfast (B+B)","half-board",
      "full-board","all-inclusive (AI)","peak period","advance",
      "reservations","vacancies","check-in","check-out","vacated",
      "guests","charged","shuttle","transfer","chain","website",
      "staff","experience","training","competitive","uniform",
      "chambermaids","housekeeping","receptionists",
      "waiters","waitresses","chefs","cashiers"
    ],
    questions: [
      {
        sentence1: "Prices apply from April to October.",
        sentence2: { before: "The following room ", after: " apply." },
        answer: "rates"
      },
      {
        sentence1: "Room with one bed.",
        sentence2: { before: "A ", after: " room." },
        answer: "single"
      },
      {
        sentence1: "Room with two beds.",
        sentence2: { before: "A ", after: " room." },
        answer: "twin"
      }
    ]
  }

};
