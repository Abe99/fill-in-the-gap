/*
  TOEIC PRACTICE – DATA ONLY
  ---------------------------------
  Exercises:
  1. Trends & Changes (transform)
  2. Comparing & Contrasting (choice)
  3. Computers & IT – Hardware (long-transform)
  4. Computers & IT – Internet (long-transform)
  5. Condition & Requirement (unscramble)
*/

const exercises = {

  /* ======================================================
     EXERCISE 1 – TRENDS & CHANGES (24 QUESTIONS)
     ====================================================== */
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
        sentence2: { before: "We need to see some ", after: " in your work." },
        answer: "marked progress" },

      { sentence1: "Young Americans want to travel, meet new people and see more of the world.",
        sentence2: { before: "Young Americans want to ", after: " their horizons." },
        answer: "broaden" },

      { sentence1: "Over the next two months, we plan to make our office computers faster.",
        sentence2: { before: "We plan to ", after: " our office computers." },
        answer: "upgrade" },

      { sentence1: "We are trying to make the accounting system simpler.",
        sentence2: { before: "We are trying to ", after: " the accounting system." },
        answer: "streamline" },

      { sentence1: "Making the company smaller has made it more profitable.",
        sentence2: { before: "", after: " the company has made it more profitable." },
        answer: "downsizing" },

      { sentence1: "Standards of service have gone down recently.",
        sentence2: { before: "Standards of service have ", after: " recently." },
        answer: "slipped" },

      { sentence1: "Property prices have gone up and down this year.",
        sentence2: { before: "Property prices have ", after: " this year." },
        answer: "fluctuated" },

      { sentence1: "We have made small changes to the rules.",
        sentence2: { before: "We have ", after: " the rules." },
        answer: "amended" },

      { sentence1: "The company plans to change its marketing division.",
        sentence2: { before: "The company plans to ", after: " its marketing division." },
        answer: "restructure" }
    ]
  },

  /* ======================================================
     EXERCISE 2 – COMPARING & CONTRASTING (15 QUESTIONS)
     ====================================================== */
  compare: {
    type: "choice",
    questions: [
      { sentence: "The ___ in working conditions between departments is noticeable.", options: ["contrast","compare","comparison"], answer: "contrast" },
      { sentence: "The two companies ___ considerably from each other.", options: ["differentiate","differ","different"], answer: "differ" },
      { sentence: "It is difficult to ___ between genuine illness and absence.", options: ["differentiate","differ","contrast"], answer: "differentiate" },
      { sentence: "The software shares common ___.", options: ["characters","characterizes","characteristics"], answer: "characteristics" },
      { sentence: "There is a clear ___.", options: ["distinguish","distinctive","distinction"], answer: "distinction" },
      { sentence: "___ with 15 years ago, PCs are cheaper.", options: ["Compared","Compare","Comparing"], answer: "Compared" },
      { sentence: "There is no ___ between the two products.", options: ["compare","comparison","contrast"], answer: "comparison" },
      { sentence: "Our phones ___ those of competitors.", options: ["similar to","alike","resemble"], answer: "resemble" },
      { sentence: "There are several ___.", options: ["similarities","similarly","similar to"], answer: "similarities" },
      { sentence: "___, hackers can steal money.", options: ["Exactly","In the same way","Just as"], answer: "In the same way" },
      { sentence: "The quality is excellent. ___, the price.", options: ["Likewise","Alike","Likeness"], answer: "Likewise" },
      { sentence: "The TOEFL tests general English. ___, the TOEIC focuses on business.", options: ["In contrast to","Although","By way of contrast"], answer: "By way of contrast" },
      { sentence: "The company struggled. ___, it made a profit.", options: ["Nevertheless","Even so","However"], answer: "Nevertheless" },
      { sentence: "There is a ___ between employment sectors.", options: ["discrepancy","discrimination","differential"], answer: "discrepancy" },
      { sentence: "The new contract applies, ___ the old one.", options: ["unlike","whereas","whereby"], answer: "whereas" }
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
This is my new (1) ___ computer that sits on a desk (I've also got a (2) ___).
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
The best thing about IT is the (1) ___. You need a (2) ___ that allows (3) ___
and a (4) ___. You can (5) ___ files and talk in (6) ___.
Companies have (7) ___. Let me (8) ___.
Oh no, another (9) ___.
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
      "websites","log on","pop-up","keywords","links","homepage",
      "online","bookmark","email","spam","delete","attachment",
      "virus","crashing","upgrade"
    ]
  },

  /* ======================================================
     EXERCISE 5 – CONDITION & REQUIREMENT (UNSCRAMBLE)
     ====================================================== */
  conditions: {
    type: "unscramble",
    questions: [
      { sentence: "___ customers continue to demand the BD17 model mobile, Telelink will continue to produce it.", scrambled: "sa nlgo sa", answer: "as long as" },
      { sentence: "___ we receive your payment within ten days, we will charge interest.", scrambled: "seusln", answer: "unless" },
      { sentence: "We offer credit ___ you maintain repayments.", scrambled: "no incotnido atth", answer: "on condition that" },
      { sentence: "Everyone will get a pay rise ___ we meet targets.", scrambled: "vogrnipid ttha", answer: "providing that" },
      { sentence: "The main ___ for spending is stability.", scrambled: "retncopiinod", answer: "condition" },
      { sentence: "___ of fire, break glass.", scrambled: "ni eacs fo", answer: "in case of" },
      { sentence: "___ a delay, passengers receive vouchers.", scrambled: "ni het nvete fo", answer: "in the event of" },
      { sentence: "The only ___ was contract length.", scrambled: "aputonstili", answer: "stipulation" },
      { sentence: "Management has ___ trust.", scrambled: "nidncoalitoun", answer: "unconditional" },
      { sentence: "___ the flight is on time, we will meet you.", scrambled: "sumsagin hatt", answer: "assuming that" },
      { sentence: "Delivery proceeds ___ the order is unchanged.", scrambled: "no teh autonmsspi hatt", answer: "on the assumption that" },
      { sentence: "Driving is a ___ of the job.", scrambled: "quereesisitpr", answer: "prerequisites" },
      { sentence: "Agree to the ___ in the contract.", scrambled: "remst and ioctnsodin", answer: "terms and conditions" },
      { sentence: "It is a ___ of the company.", scrambled: "nmreiretque", answer: "requirement" },
      { sentence: "If you have a query, call us. ___, email us.", scrambled: "niifagl ttha", answer: "failing that" },
      { sentence: "We need 20 people, ___ it can't proceed.", scrambled: "ehewotris", answer: "otherwise" }
    ]
  }

};
