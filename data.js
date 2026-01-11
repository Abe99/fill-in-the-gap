/*
  ALL CONTENT ONLY
  Safe to edit. No DOM. No logic.
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
      { sentence: "The ___ in working conditions is noticeable.", options: ["contrast","compare","comparison"], answer: "contrast" },
      { sentence: "The two companies ___ considerably.", options: ["differentiate","differ","different"], answer: "differ" },
      { sentence: "It is difficult to ___ between them.", options: ["differentiate","differ","contrast"], answer: "differentiate" },
      { sentence: "The software shares common ___.", options: ["characters","characterizes","characteristics"], answer: "characteristics" },
      { sentence: "There's a clear ___.", options: ["distinguish","distinctive","distinction"], answer: "distinction" },
      { sentence: "___ with 15 years ago, PCs are cheaper.", options: ["Compared","Compare","Comparing"], answer: "Compared" },
      { sentence: "There's no ___ between them.", options: ["compare","comparison","contrast"], answer: "comparison" },
      { sentence: "Phones ___ each other.", options: ["similar to","alike","resemble"], answer: "resemble" },
      { sentence: "There are several ___.", options: ["similarities","similarly","similar to"], answer: "similarities" },
      { sentence: "___, hackers can steal money.", options: ["Exactly","In the same way","Just as"], answer: "In the same way" },
      { sentence: "Likewise, the ___ is high.", options: ["Likewise","Alike","Likeness"], answer: "Likewise" },
      { sentence: "___, TOEIC focuses on business.", options: ["In contrast to","Although","By way of contrast"], answer: "By way of contrast" },
      { sentence: "___, it made a profit.", options: ["Nevertheless","Even so","However"], answer: "Nevertheless" },
      { sentence: "There is a ___ between sectors.", options: ["discrepancy","discrimination","differential"], answer: "discrepancy" },
      { sentence: "The contract states this, ___ the old one.", options: ["unlike","whereas","whereby"], answer: "whereas" }
    ]
  }

};
