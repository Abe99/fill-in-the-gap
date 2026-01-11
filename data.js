/*
  TOEIC PRACTICE – DATA ONLY
  Safe to edit. No logic. No DOM.
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
      { sentence1: "Between 2002 and 2005 inflation rose steadily.",
        sentence2: { before: "There was a ", after: " in the rate of inflation." },
        answer: "constant rise" },
      { sentence1: "The company grew from 200 to 1000 employees.",
        sentence2: { before: "There was a ", after: " in employee numbers." },
        answer: "dramatic increase" },
      { sentence1: "Unemployment figures dropped every year.",
        sentence2: { before: "There was a ", after: " in unemployment." },
        answer: "steady decrease" },
      { sentence1: "Some management positions will be removed gradually.",
        sentence2: { before: "They will be ", after: "." },
        answer: "phased out" },
      { sentence1: "We need to increase stocks.",
        sentence2: { before: "We need to ", after: " our stocks." },
        answer: "build up" },
      { sentence1: "The government will spend less on welfare.",
        sentence2: { before: "There will be ", after: " in welfare spending." },
        answer: "cuts" },
      { sentence1: "Public services are less reliable.",
        sentence2: { before: "There has been a ", after: "." },
        answer: "deterioration" },
      { sentence1: "More people are traveling abroad.",
        sentence2: { before: "There has been ", after: " in overseas travel." },
        answer: "considerable growth" },
      { sentence1: "Out-of-town shopping is increasing.",
        sentence2: { before: "There has been an ", after: "." },
        answer: "upward trend" },
      { sentence1: "Your work must improve.",
        sentence2: { before: "We need to see ", after: "." },
        answer: "marked progress" },
      { sentence1: "Young people want to see more of the world.",
        sentence2: { before: "They want to ", after: " their horizons." },
        answer: "broaden" },
      { sentence1: "We will improve our computers.",
        sentence2: { before: "We will ", after: " our computers." },
        answer: "upgrade" },
      { sentence1: "We want to simplify accounting.",
        sentence2: { before: "We want to ", after: " the accounting system." },
        answer: "streamline" },
      { sentence1: "The company became smaller and more profitable.",
        sentence2: { before: "", after: " made the company more profitable." },
        answer: "downsizing" },
      { sentence1: "Service standards have gone down.",
        sentence2: { before: "Standards have ", after: "." },
        answer: "slipped" },
      { sentence1: "Property prices went up and down.",
        sentence2: { before: "Prices have ", after: "." },
        answer: "fluctuated" },
      { sentence1: "Small changes were made to the rules.",
        sentence2: { before: "The rules were ", after: "." },
        answer: "amended" },
      { sentence1: "The marketing division will be changed.",
        sentence2: { before: "The company will ", after: " its marketing division." },
        answer: "restructure" }
    ]
  },

  /* ======================================================
     EXERCISE 2 – COMPARING & CONTRASTING
     ====================================================== */
  compare: {
    type: "choice",
    questions: [
      { sentence: "The ___ in working conditions is noticeable.", options: ["contrast","compare","comparison"], answer: "contrast" },
      { sentence: "The two companies ___ considerably.", options: ["differentiate","differ","different"], answer: "differ" },
      { sentence: "It is difficult to ___ between them.", options: ["differentiate","differ","contrast"], answer: "differentiate" },
      { sentence: "The software shares common ___.", options: ["characters","characterizes","characteristics"], answer: "characteristics" },
      { sentence: "There is a clear ___.", options: ["distinguish","distinctive","distinction"], answer: "distinction" },
      { sentence: "___ with 15 years ago, PCs are cheaper.", options: ["Compared","Compare","Comparing"], answer: "Compared" },
      { sentence: "There is no ___ between them.", options: ["compare","comparison","contrast"], answer: "comparison" },
      { sentence: "Phones ___ each other.", options: ["similar to","alike","resemble"], answer: "resemble" },
      { sentence: "There are several ___.", options: ["similarities","similarly","similar to"], answer: "similarities" },
      { sentence: "___, hackers can steal money.", options: ["Exactly","In the same way","Just as"], answer: "In the same way" },
      { sentence: "The quality is excellent. ___, the price.", options: ["Likewise","Alike","Likeness"], answer: "Likewise" },
      { sentence: "___, the TOEIC focuses on business.", options: ["In contrast to","Although","By way of contrast"], answer: "By way of contrast" },
      { sentence: "___, the company made a profit.", options: ["Nevertheless","Even so","However"], answer: "Nevertheless" },
      { sentence: "There is a ___ between sectors.", options: ["discrepancy","discrimination","differential"], answer: "discrepancy" },
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
This is my new (1) ___ computer (I've also got a (2) ___).
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
     EXERCISE 5 – CONDITION & REQUIREMENT
     ====================================================== */
  conditions: {
    type: "unscramble",
    questions: [
      { sentence: "___ customers continue to demand the BD17 model, it will be produced.", scrambled: "sa nlgo sa", answer: "as long as" },
      { sentence: "___ we receive payment, interest will be charged.", scrambled: "seusln", answer: "unless" },
      { sentence: "Credit is offered ___ repayments are regular.", scrambled: "no incotnido atth", answer: "on condition that" },
      { sentence: "Everyone will get a rise ___ targets are met.", scrambled: "vogrnipid ttha", answer: "providing that" },
      { sentence: "The main ___ is economic stability.", scrambled: "retncopiinod", answer: "condition" },
      { sentence: "___ of fire, break glass.", scrambled: "ni eacs fo", answer: "in case of" },
      { sentence: "___ a delay, vouchers will be issued.", scrambled: "ni het nvete fo", answer: "in the event of" },
      { sentence: "The only ___ was the contract length.", scrambled: "aputonstili", answer: "stipulation" },
      { sentence: "Management has ___ trust.", scrambled: "nidncoalitoun", answer: "unconditional" },
      { sentence: "___ the flight is on time, we will meet you.", scrambled: "sumsagin hatt", answer: "assuming that" },
      { sentence: "Delivery proceeds ___ nothing changes.", scrambled: "no teh autonmsspi hatt", answer: "on the assumption that" },
      { sentence: "Driving is a job ___.", scrambled: "quereesisitpr", answer: "prerequisites" },
      { sentence: "Agree to the ___.", scrambled: "remst and ioctnsodin", answer: "terms and conditions" },
      { sentence: "It is a company ___.", scrambled: "nmreiretque", answer: "requirement" },
      { sentence: "If you have a query, call us. ___, email us.", scrambled: "niifagl ttha", answer: "failing that" },
      { sentence: "We need 20 people, ___ it cannot proceed.", scrambled: "ehewotris", answer: "otherwise" }
    ]
  },

  /* ======================================================
     EXERCISE 6 – CONFUSING WORDS
     ====================================================== */
  confusing: {
    type: "choice",
    questions: [
      { sentence: "Try to make your report as ___ as possible.", options: ["subjective","objectionable","subjected","objective"], answer: "objective" },
      { sentence: "Inspectors regularly ___ our kitchens.", options: ["inspect","control","study","analyze"], answer: "inspect" },
      { sentence: "___ workers are often rewarded.", options: ["conscious","conscientious","conscience","consciousness"], answer: "conscientious" },
      { sentence: "Prices are rising on the ___ that fuel costs will rise.", options: ["consumption","destruction","assumption","presumption"], answer: "assumption" },
      { sentence: "The fire caused a lot of ___ to the building.", options: ["damage","harm","injury","wound"], answer: "damage" },
      { sentence: "Subsidies helped to ___ closures.", options: ["prevent","preventive","avoidance","avoid"], answer: "prevent" },
      { sentence: "He intends to ___ down new rules.", options: ["lying","lie","laying","lay"], answer: "lay" },
      { sentence: "Cuts will have a serious ___ on sales.", options: ["effective","effect","affect","affection"], answer: "effect" },
      { sentence: "You need a ___ to take photos.", options: ["permit","permission","permissible","permitting"], answer: "permit" },
      { sentence: "The manager talked ___ about punctuality.", options: ["briefly","briefing","shortly","shorts"], answer: "briefly" },
      { sentence: "The office is closed ___ it is decorated.", options: ["during","while","for","throughout"], answer: "while" },
      { sentence: "Can you ___ me on this?", options: ["advisory","advisable","advice","advise"], answer: "advise" },
      { sentence: "Economic ___ stagnated.", options: ["active","action","activity","activist"], answer: "activity" },
      { sentence: "___ their regular job, many work evenings.", options: ["by","beside","between","besides"], answer: "besides" },
      { sentence: "These ___ breakdowns waste time.", options: ["continuing","continuous","continuation","continual"], answer: "continual" },
      { sentence: "She was very ___ of our efforts.", options: ["appreciable","appreciative","appreciating","appreciate"], answer: "appreciative" },
      { sentence: "We didn’t stand a ___.", options: ["possibility","probability","chance","opportunity"], answer: "chance" },
      { sentence: "The proposals were excellent. ___, they worked.", options: ["Moreover","However","Nevertheless","Although"], answer: "Moreover" },
      { sentence: "We must remain ___ to customer needs.", options: ["sensible","sensitive","sensitivity","sensibility"], answer: "sensitive" },
      { sentence: "A ___ amount of time is lost.", options: ["considerate","considerable","consistent","convenient"], answer: "considerable" },
      { sentence: "He refused to wear a tie on ___.", options: ["principle","principality","principal","principally"], answer: "principle" },
      { sentence: "Nobody raised any ___.", options: ["criticism","complaints","protests","objections"], answer: "objections" },
      { sentence: "The museum contains ___ works of art.", options: ["worthless","valueless","priceless","useless"], answer: "priceless" },
      { sentence: "Many people are still looking for ___.", options: ["work","job","profession","career"], answer: "work" },
      { sentence: "It is a ___ company.", options: ["respectable","respectful","respecting","respective"], answer: "respectable" },
      { sentence: "We were forced to ___ prices.", options: ["rise","raze","raise","arise"], answer: "raise" },
      { sentence: "The bank agreed to ___ us the money.", options: ["lend","borrow","lease","rent"], answer: "lend" },
      { sentence: "___ me to lock up.", options: ["remembrance","reminisce","remember","remind"], answer: "remind" },
      { sentence: "Because of the ___ situation, stores closed.", options: ["economical","economic","economize","economics"], answer: "economic" },
      { sentence: "Send everyone a ___ before the meeting.", options: ["notify","notice","note","notification"], answer: "note" }
    ]
  }

};
