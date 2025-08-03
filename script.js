const questionBanks = {
    // Rule 1: Periods & Semicolons
    1: {
        easy: [
            {
                question: "Which punctuation mark is used to separate two complete sentences?",
                options: ["Comma", "Period", "Question Mark", "Exclamation Mark"],
                correct: 1,
                explanation: "Both periods and semicolons are used to separate two complete sentences."
            },
            {
                question: "True or False: A semicolon can be used in the same way as a period to separate two independent clauses.",
                options: ["True", "False"],
                correct: 0,
                explanation: "On the SAT and ACT, periods and semicolons are used interchangeably to separate two complete sentences."
            },
            {
                question: "Which of these can come after a semicolon at the start of a clause?",
                options: [
                    "A coordinating conjunction",
                    "A dependent clause",
                    "A conjunctive adverb",
                    "A prepositional phrase"
                ],
                correct: 2,
                explanation: "Semicolons can precede conjunctive adverbs (e.g., however, therefore) at the start of a clause."
            },
            {
                question: "Identify the correct sentence: 'The dog barked loudly; the cat ran away.'",
                options: ["Correct", "Incorrect"],
                correct: 0,
                explanation: "The sentence is correct because the semicolon properly separates two independent clauses."
            },
            {
                question: "Which sentence is punctuated correctly?",
                options: [
                    "She loves to read, she reads every day.",
                    "She loves to read. She reads every day.",
                    "She loves to read; she reads every day.",
                    "Both B and C"
                ],
                correct: 3,
                explanation: "Both periods and semicolons can separate two complete sentences. Option A is a comma splice."
            }
        ],
        medium: [
            {
                question: "Which of the following sentences correctly uses a period or semicolon?",
                options: [
                    "The experiment was successful, the results were published.",
                    "The experiment was successful; the results were published.",
                    "The experiment was successful the results were published.",
                    "The experiment was successful, and the results were published."
                ],
                correct: 1,
                explanation: "Option 2 is correct because it uses a semicolon to properly separate two independent clauses."
            },
            {
                question: "Choose the correct version of this sentence: 'The museum was closed however we returned the next day.'",
                options: [
                    "The museum was closed however we returned the next day.",
                    "The museum was closed, however we returned the next day.",
                    "The museum was closed; however, we returned the next day.",
                    "The museum was closed however, we returned the next day."
                ],
                correct: 2,
                explanation: "Option 3 is correct because it uses a semicolon before 'however' and a comma after to properly connect the two independent clauses."
            },
            {
                question: "Identify the incorrect sentence:",
                options: [
                    "She completed her thesis. Then she began applying for jobs.",
                    "She completed her thesis; then she began applying for jobs.",
                    "She completed her thesis, then she began applying for jobs.",
                    "She completed her thesis, and then she began applying for jobs."
                ],
                correct: 2,
                explanation: "Option 3 is considered a comma splice because it joins two independent clauses with just a comma. While sometimes used in informal writing, the SAT/ACT requires either a semicolon or a coordinating conjunction with the comma."
            },
            {
                question: "Which sentence demonstrates proper use of a semicolon?",
                options: [
                    "Although it was raining; we decided to go for a walk.",
                    "We packed our bags; including clothes, toiletries, and books.",
                    "The train was delayed; consequently, we missed our connection.",
                    "She studied for hours; determined to ace the exam."
                ],
                correct: 2,
                explanation: "Option 3 is correct because the semicolon properly separates two independent clauses and precedes the conjunctive adverb 'consequently' with a comma."
            },
            {
                question: "Select the properly punctuated sentence:",
                options: [
                    "The results were surprising therefore we repeated the experiment.",
                    "The results were surprising, therefore we repeated the experiment.",
                    "The results were surprising; therefore, we repeated the experiment.",
                    "The results were surprising therefore, we repeated the experiment."
                ],
                correct: 2,
                explanation: "Option 3 is correct because it uses a semicolon before 'therefore' (a conjunctive adverb) and a comma after it to connect two independent clauses properly."
            }
        ],
        hard: [
            {
                question: "Which of the following sentences demonstrates the correct use of a semicolon with a conjunctive adverb?",
                options: [
                    "The weather was terrible, however, we still went for a walk.",
                    "The weather was terrible; however, we still went for a walk.",
                    "The weather was terrible; we still went for a walk, however.",
                    "The weather was terrible, we still went for a walk; however."
                ],
                correct: 1,
                explanation: "A semicolon should precede the conjunctive adverb, and a comma should follow it when connecting two independent clauses."
            },
            {
                question: "Identify the sentence that contains a comma splice and explain why it is incorrect: 'The concert was sold out, we decided to listen to the album at home instead.'",
                options: [
                    "Correct; it uses a comma to separate two independent clauses.",
                    "Incorrect; it uses a comma to separate two independent clauses without a coordinating conjunction.",
                    "Correct; 'sold out' and 'decided' are dependent clauses.",
                    "Incorrect; it should use a colon instead of a comma."
                ],
                correct: 1,
                explanation: "A comma splice occurs when two independent clauses are joined only by a comma. To correct it, one could use a period, a semicolon, or a comma followed by a coordinating conjunction."
            },
            {
                question: "Which of the following options correctly revises the sentence 'The research was extensive, it covered several years of data.' to use a semicolon?",
                options: [
                    "The research was extensive; it covered several years of data.",
                    "The research was extensive; and it covered several years of data.",
                    "The research was extensive, it covered several years of data;",
                    "The research was extensive; however, it covered several years of data."
                ],
                correct: 0,
                explanation: "A semicolon correctly joins two independent clauses without the need for a coordinating conjunction or conjunctive adverb, unless a specific relationship (like contrast or cause-effect) is implied."
            }
        ]
    },

    // Rule 2: Colons & Dashes
    2: {
        easy: [
            {
                question: "Which punctuation mark can introduce a list or explanation?",
                options: ["Comma", "Period", "Colon", "Question Mark"],
                correct: 2,
                explanation: "Both colons and dashes introduce lists and explanations."
            },
            {
                question: "True or False: A colon must follow a complete sentence.",
                options: ["True", "False"],
                correct: 0,
                explanation: "Colons and dashes must follow a complete sentence that sets up the following information."
            },
            {
                question: "Which of these is an incorrect use of a colon?",
                options: [
                    "She bought: apples, bananas, and oranges.",
                    "The recipe requires three ingredients: flour, sugar, and eggs.",
                    "He had one goal: to finish the marathon.",
                    "There was only one option left: surrender."
                ],
                correct: 0,
                explanation: "A colon should not be used directly after a verb or preposition. It must follow a complete independent clause."
            },
            {
                question: "Which sentence correctly uses a dash?",
                options: [
                    "My favorite colors are—blue, green, and yellow.",
                    "She had one great passion—reading.",
                    "He said—that he would be late.",
                    "The team won—because of their hard work."
                ],
                correct: 1,
                explanation: "A dash can introduce an explanation or a list, but it must follow a complete sentence."
            },
            {
                question: "Can a colon be followed by a fragment?",
                options: ["Yes", "No"],
                correct: 0,
                explanation: "Colons and dashes can be followed by either a full sentence or a fragment."
            }
        ],
        medium: [
            {
                question: "Which sentence correctly uses a colon?",
                options: [
                    "The ingredients include: flour, sugar, and eggs.",
                    "The recipe requires several ingredients: flour, sugar, and eggs.",
                    "She bought: flour, sugar, and eggs at the store.",
                    "At the store she purchased: flour, sugar, and eggs."
                ],
                correct: 1,
                explanation: "Option 2 is correct because the colon follows a complete independent clause. The other options place the colon after a verb or preposition, which is incorrect."
            },
            {
            question: "Choose the properly punctuated sentence:",
            options: [
                "The conference covered three topics—climate change, renewable energy, and sustainable agriculture.",
                "The conference covered three topics: climate change, renewable energy, and sustainable agriculture.",
                "The conference covered three important topics—climate change, renewable energy, and sustainable agriculture—in detail.",
                "All of the above are correct"
            ],
            correct: 3,
            explanation: "All options are correct. Dashes and colons can both introduce lists after complete clauses. Option 3 shows correct use of dashes for parenthetical information."
        },
            {
                question: "Identify the sentence with incorrect punctuation:",
                options: [
                    "My brother—who lives in Chicago—is visiting next week.",
                    "My brother, who lives in Chicago—is visiting next week.",
                    "My brother—who lives in Chicago, is visiting next week.",
                    "My brother who lives in Chicago is visiting next week."
                ],
                correct: 2,
                explanation: "Option 3 is incorrect because it uses mixed punctuation (dash and comma). Non-essential information should be set off with matching punctuation on both sides."
            },
            {
                question: "Which option correctly uses a dash to introduce an explanation?",
                options: [
                    "She had one goal—to win the championship.",
                    "She had—one goal to win the championship.",
                    "She had one goal to win—the championship.",
                    "She—had one goal to win the championship."
                ],
                correct: 0,
                explanation: "Option 1 is correct because the dash follows a complete independent clause and introduces an explanatory phrase."
            },
            {
                question: "Select the properly punctuated sentence:",
                options: [
                    "The study revealed an unexpected finding: participants who exercised regularly reported higher energy levels.",
                    "The study revealed: an unexpected finding participants who exercised regularly reported higher energy levels.",
                    "The study revealed an unexpected finding participants who exercised regularly: reported higher energy levels.",
                    "The study: revealed an unexpected finding participants who exercised regularly reported higher energy levels."
                ],
                correct: 0,
                explanation: "Option 1 is correct because the colon follows a complete independent clause and introduces an explanation."
            }
        ],
        hard: [
            {
                question: "Which sentence correctly uses a colon to introduce a list after a complete independent clause?",
                options: [
                    "The ancient city had many features: including temples, markets, and baths.",
                    "The ancient city had many features: temples, markets, and baths.",
                    "The ancient city had: temples, markets, and baths.",
                    "Many features were found in the ancient city: temples, markets, and baths."
                ],
                correct: 1,
                explanation: "The colon must follow a complete independent clause. Option 1 includes 'including' which makes the first part a fragment. Option 3 places the colon after a verb. Option 4 is also correct, but option 1 is the best example of introducing a list after a complete clause."
            },
            {
                question: "Analyze the following sentence: 'The scientist presented her findings—a groundbreaking discovery that challenged existing theories.' Is the dash used correctly?",
                options: [
                    "Yes, it introduces an explanation that follows a complete independent clause.",
                    "No, a dash cannot be used to introduce an explanation.",
                    "No, it should be a colon instead of a dash.",
                    "Yes, but it should be followed by a complete sentence."
                ],
                correct: 0,
                explanation: "Dashes can introduce explanations and do not need to be followed by a complete sentence, only a fragment that explains the preceding complete thought."
            },
            {
                question: "Which of the following sentences uses punctuation incorrectly?",
                options: [
                    "The main problem was clear: lack of funding.",
                    "She packed her bag with essentials—a map, a compass, and a first-aid kit.",
                    "The committee decided on three key areas: to focus on education, healthcare, and infrastructure.",
                    "His argument was simple: the data supported his hypothesis."
                ],
                correct: 2,
                explanation: "The colon in option 3 follows an incomplete thought ('decided on three key areas'). For proper colon usage, the preceding clause must be a complete sentence that introduces what follows."
            }
        ]
    },

    // Rule 3: FANBOYS (Coordinating Conjunctions)
    3: {
        easy: [
            {
                question: "What does FANBOYS stand for?",
                options: [
                    "For, And, Nor, But, Or, Yet, So",
                    "For, And, Nor, Because, Or, Yet, Since",
                    "From, And, Nor, But, Or, Yet, So",
                    "For, Also, Nor, But, Or, Yet, So"
                ],
                correct: 0,
                explanation: "FANBOYS stands for the coordinating conjunctions: For, And, Nor, But, Or, Yet, So."
            },
            {
                question: "When should you use a comma with FANBOYS?",
                options: [
                    "Always when you see them",
                    "Only when connecting two complete sentences",
                    "Never on the SAT/ACT",
                    "Only with 'and' and 'but'"
                ],
                correct: 1,
                explanation: "Use a comma with FANBOYS when connecting two independent clauses (complete sentences)."
            },
            {
                question: "Which sentence correctly uses a comma with FANBOYS?",
                options: [
                    "I wanted to go, but I was too tired.",
                    "I wanted to go but, I was too tired.",
                    "I wanted to go but I was too tired.",
                    "I wanted to go, but, I was too tired."
                ],
                correct: 0,
                explanation: "The first option correctly uses a comma before 'but' to connect two independent clauses."
            },
            {
                question: "What is a comma splice?",
                options: [
                    "Using a comma to separate items in a list",
                    "Using a comma instead of a period between complete sentences",
                    "Using a comma after an introductory phrase",
                    "Forgetting to use a comma with FANBOYS"
                ],
                correct: 1,
                explanation: "A comma splice occurs when a comma is used to separate two independent clauses without a coordinating conjunction."
            },
            {
                question: "Which sentence is NOT a comma splice?",
                options: [
                    "I studied all night, I was still unprepared.",
                    "I studied all night, yet I was still unprepared.",
                    "I studied all night, I was still unprepared for the test.",
                    "I studied all night, being still unprepared."
                ],
                correct: 1,
                explanation: "Option 2 correctly uses 'yet' (a FANBOYS conjunction) with a comma to connect two independent clauses."
            }
        ],
        medium: [
            {
                question: "Which of the following sentences correctly uses a comma with FANBOYS?",
                options: [
                    "The experiment was successful, so the team celebrated.",
                    "The experiment was successful so, the team celebrated.",
                    "The experiment was successful so the team celebrated.",
                    "The experiment was successful, the team celebrated."
                ],
                correct: 0,
                explanation: "Option 1 is correct because it uses 'so' (a FANBOYS conjunction) with a comma to join two independent clauses."
            },
            {
                question: "Identify the comma splice:",
                options: [
                    "She studied all night, yet she still felt unprepared.",
                    "She studied all night, she still felt unprepared.",
                    "She studied all night but still felt unprepared.",
                    "She studied all night; she still felt unprepared."
                ],
                correct: 1,
                explanation: "Option 2 is a comma splice because it joins two independent clauses with just a comma."
            },
            {
                question: "Which sentence is correctly punctuated?",
                options: [
                    "The museum was closed, but we returned the next day.",
                    "The museum was closed but, we returned the next day.",
                    "The museum was closed but we returned the next day.",
                    "The museum was closed, we returned the next day."
                ],
                correct: 0,
                explanation: "Option 1 is correct because it uses a comma before 'but' (a FANBOYS conjunction) to join two independent clauses."
            },
            {
                question: "Choose the properly punctuated sentence:",
                options: [
                    "He wanted to go to college, and pursue a degree in engineering.",
                    "He wanted to go to college and pursue a degree in engineering.",
                    "He wanted to go to college, and to pursue a degree in engineering.",
                    "He wanted to go to college and, pursue a degree in engineering."
                ],
                correct: 1,
                explanation: "No comma is needed before 'and' when connecting two verb phrases ('go to college' and 'pursue a degree') that share the same subject."
            },
            {
                question: "Which sentence is incorrect?",
                options: [
                    "We can leave now, or we can wait until morning.",
                    "We can leave now or wait until morning.",
                    "We can leave now, or wait until morning.",
                    "We can leave now or we can wait until morning."
                ],
                correct: 2,
                explanation: "Option 3 is incorrect because it unnecessarily uses a comma before 'or' when the subject is implied in the second clause."
            }
        ],
        hard: [
            {
                question: "Which sentence demonstrates the most sophisticated use of FANBOYS to connect related but contrasting ideas?",
                options: [
                    "The experiment was successful, but the results were unexpected.",
                    "The data supported the hypothesis, yet the conclusions remained controversial.",
                    "The team worked diligently, and they achieved their goals.",
                    "The theory was complex, so the researchers simplified their explanation."
                ],
                correct: 1,
                explanation: "Option 2 uses 'yet' to effectively connect contrasting ideas while maintaining a sophisticated tone. The other options either show simple contrast (but), addition (and), or cause-effect (so)."
            },
            {
                question: "Identify the sentence that incorrectly uses a comma with FANBOYS:",
                options: [
                    "The research was extensive, but the conclusions were limited.",
                    "She analyzed the data carefully, and wrote a comprehensive report.",
                    "The theory was complex, yet the presentation was clear.",
                    "The results were surprising, so we repeated the experiment."
                ],
                correct: 1,
                explanation: "Option 2 incorrectly uses a comma before 'and' when the second clause doesn't have an explicit subject. The comma should be omitted when the subject is implied."
            },
            {
                question: "Which revision correctly punctuates the non-essential information in this sentence: 'The scientist who discovered the new element which was previously thought to be unstable won the Nobel Prize.'",
                options: [
                    "The scientist who discovered the new element, which was previously thought to be unstable, won the Nobel Prize.",
                    "The scientist, who discovered the new element which was previously thought to be unstable, won the Nobel Prize.",
                    "The scientist who discovered the new element—which was previously thought to be unstable—won the Nobel Prize.",
                    "Both A and C are correct"
                ],
                correct: 3,
                explanation: "Both options A and C correctly punctuate the non-essential information about the element's stability."
            }
        ]
    },

    // Rule 4: Dependent Clauses
    4: {
        easy: [
            {
                question: "What is a dependent clause?",
                options: [
                    "A complete thought that can stand alone",
                    "A group of words with a subject and verb that can't stand alone",
                    "A phrase without a subject or verb",
                    "A sentence with two independent clauses"
                ],
                correct: 1,
                explanation: "A dependent clause has a subject and verb but cannot stand alone as a complete sentence."
            },
            {
                question: "Which word typically begins a dependent clause?",
                options: ["And", "However", "Because", "Therefore"],
                correct: 2,
                explanation: "Dependent clauses often begin with subordinating conjunctions like 'because,' 'although,' 'when,' etc."
            },
            {
                question: "Where should the comma go in this sentence: 'When the bell rings the students will leave.'",
                options: [
                    "After 'when'",
                    "After 'rings'",
                    "After 'the'",
                    "No comma needed"
                ],
                correct: 1,
                explanation: "When a dependent clause comes first, place a comma after it before the independent clause."
            },
            {
                question: "Which sentence has the dependent clause at the end?",
                options: [
                    "Although it was raining, we went for a walk.",
                    "We went for a walk although it was raining.",
                    "It was raining although we went for a walk.",
                    "Although we went for a walk, it was raining."
                ],
                correct: 1,
                explanation: "Option 2 places the dependent clause 'although it was raining' at the end of the sentence."
            },
            {
                question: "True or False: When the dependent clause comes after the independent clause, you usually don't need a comma.",
                options: ["True", "False"],
                correct: 0,
                explanation: "Generally, no comma is needed when the dependent clause follows the independent clause."
            }
        ],
        medium: [
            {
                question: "Which sentence correctly punctuates a dependent clause?",
                options: [
                    "When the bell rings the students will leave.",
                    "When the bell rings, the students will leave.",
                    "The students will leave, when the bell rings.",
                    "The students will leave when, the bell rings."
                ],
                correct: 1,
                explanation: "Option 2 is correct because it places a comma after the introductory dependent clause."
            },
            {
                question: "Identify the correctly punctuated sentence:",
                options: [
                    "Because the train was delayed we missed our connection.",
                    "Because the train was delayed, we missed our connection.",
                    "We missed our connection, because the train was delayed.",
                    "We missed our connection because, the train was delayed."
                ],
                correct: 1,
                explanation: "Option 2 is correct because it places a comma after the dependent clause."
            },
            {
                question: "Which sentence is incorrectly punctuated?",
                options: [
                    "After finishing her homework, Sarah went to bed.",
                    "Sarah went to bed after finishing her homework.",
                    "Sarah went to bed, after finishing her homework.",
                    "After, finishing her homework Sarah went to bed."
                ],
                correct: 2,
                explanation: "Option 3 is incorrect because it unnecessarily uses a comma before the dependent clause at the end."
            },
            {
                question: "Choose the properly punctuated sentence:",
                options: [
                    "While I was cooking dinner the phone rang.",
                    "While I was cooking dinner, the phone rang.",
                    "The phone rang while, I was cooking dinner.",
                    "The phone rang, while I was cooking dinner."
                ],
                correct: 1,
                explanation: "Option 2 is correct because it places a comma after the introductory dependent clause."
            },
            {
                question: "Which sentence demonstrates correct comma usage?",
                options: [
                    "Although London is old it has modern buildings.",
                    "Although London is old, it has modern buildings.",
                    "London has modern buildings although, it is old.",
                    "London has modern buildings, although it is old."
                ],
                correct: 1,
                explanation: "Option 2 is correct because it places a comma after the introductory dependent clause."
            }
        ],
        hard: [
            {
                question: "Which sentence demonstrates the most complex and correct use of a dependent clause?",
                options: [
                    "Because the data was inconclusive, although the trends were promising, we decided to extend the study.",
                    "Although the initial results were promising, because the data was ultimately inconclusive, we decided to extend the study.",
                    "We decided to extend the study because the data was inconclusive, although the trends were promising.",
                    "Because the data was inconclusive, we decided to extend the study, although the trends were promising."
                ],
                correct: 3,
                explanation: "Option 4 correctly uses both dependent clauses ('Because...' and 'although...') with proper punctuation and maintains the clearest logical flow. The other options either have punctuation errors or confusing structure."
            },
            {
                question: "Identify the sentence with incorrect punctuation of dependent clauses:",
                options: [
                    "When the experiment concluded, since the results were unclear, the team requested additional funding.",
                    "Since the results were unclear when the experiment concluded, the team requested additional funding.",
                    "The team requested additional funding, when the experiment concluded, since the results were unclear.",
                    "When the experiment concluded, the team requested additional funding since the results were unclear."
                ],
                correct: 2,
                explanation: "Option 3 incorrectly places commas around 'when the experiment concluded' when it appears in the middle of the sentence. Dependent clauses at the end of sentences typically don't require commas."
            },
            {
                question: "Which revision correctly combines these sentences: 'The data was collected. After the protocol was approved. The analysis began immediately.'",
                options: [
                    "After the protocol was approved, the data was collected, and the analysis began immediately.",
                    "The data was collected after the protocol was approved, the analysis began immediately.",
                    "After the protocol was approved the data was collected, the analysis began immediately.",
                    "The data was collected, after the protocol was approved, the analysis began immediately."
                ],
                correct: 0,
                explanation: "Option 1 correctly combines the sentences with proper punctuation, using a comma after the introductory dependent clause and a comma with 'and' to join the two independent clauses."
            }
        ]
    },

    // Rule 5: Transitional Words & Phrases
    5: {
        easy: [
            {
                question: "Which of these is a transitional word?",
                options: ["And", "Because", "However", "The"],
                correct: 2,
                explanation: "'However' is a transitional word used to show contrast between ideas."
            },
            {
                question: "What punctuation should come before and after 'however' when it's used between two complete sentences?",
                options: [
                    "Comma before, nothing after",
                    "Semicolon before, comma after",
                    "Period before, comma after",
                    "Nothing before, comma after"
                ],
                correct: 1,
                explanation: "Use a semicolon before and comma after 'however' when connecting two independent clauses."
            },
            {
                question: "Which transition shows a continuation of ideas?",
                options: ["However", "Therefore", "Furthermore", "Nevertheless"],
                correct: 2,
                explanation: "'Furthermore' continues or adds to the previous idea."
            },
            {
                question: "Which transition shows cause and effect?",
                options: ["However", "Consequently", "Meanwhile", "Although"],
                correct: 1,
                explanation: "'Consequently' shows that one thing happened as a result of another."
            },
            {
                question: "True or False: You should always use a transition word between sentences.",
                options: ["True", "False"],
                correct: 1,
                explanation: "False. Only use transition words when they help clarify the relationship between ideas."
            }
        ],
        medium: [
            {
                question: "Choose the correct transition: 'The experiment failed; _____, we learned valuable information.'",
                options: ["however", "therefore", "furthermore", "consequently"],
                correct: 0,
                explanation: "'However' is correct because it shows contrast between failure and positive outcome."
            },
            {
                question: "Select the appropriate transition: 'The roads were icy; _____, many accidents occurred.'",
                options: ["however", "nevertheless", "therefore", "meanwhile"],
                correct: 2,
                explanation: "'Therefore' shows the correct cause-and-effect relationship."
            },
            {
                question: "Which transition is LEAST appropriate: 'The team worked hard; _____, they won.'",
                options: ["consequently", "as a result", "however", "therefore"],
                correct: 2,
                explanation: "'However' suggests contrast rather than the cause-and-effect relationship."
            },
            {
                question: "Choose the best transition:",
                options: [
                    "The author uses vivid imagery; _____, she employs symbolism.",
                    "The author uses vivid imagery; _____, she employs symbolism.",
                    "The author uses vivid imagery; _____, she employs symbolism.",
                    "The author uses vivid imagery; _____, she employs symbolism."
                ],
                options: ["however", "in addition", "consequently", "otherwise"],
                correct: 1,
                explanation: "'In addition' is appropriate here because it introduces another technique the author uses, adding to the list of writing strategies."
            },
  {
                question: "Which sentence uses a transition that creates an illogical relationship?",
                options: [
                    "The data was inconclusive; nevertheless, we published.",
                    "The data was inconclusive; moreover, we published.",
                    "The data was inconclusive; therefore, we published.",
                    "The data was inconclusive; however, we published."
                ],
                correct: 2,
                explanation: "'Therefore' creates illogical cause-effect (suggesting the inconclusive data caused publishing). The correct relationship should show contrast ('however') or continuation ('nevertheless')."
            }
        ],
        hard: [
            {
                question: "Which transition most effectively conveys a nuanced contrast in this sentence: 'The initial hypothesis appeared valid; _____, upon closer examination, significant flaws became apparent.'",
                options: [
                    "however",
                    "nevertheless",
                    "conversely",
                    "moreover"
                ],
                correct: 0,
                explanation: "'However' is most appropriate for showing direct contrast between initial appearance and subsequent discovery of flaws. 'Nevertheless' would suggest persistence despite flaws, while 'conversely' would imply complete opposite findings."
            },
            {
                question: "Identify the sentence where the transition is used incorrectly:",
                options: [
                    "The data was inconclusive; therefore, the researchers designed a new experiment.",
                    "The methodology was flawed; nevertheless, the results were published.",
                    "The sample size was small; moreover, the control group was improperly selected.",
                    "The findings were significant; however, they were consistent with previous studies."
                ],
                correct: 3,
                explanation: "Option 4 incorrectly uses 'however' because the second clause doesn't contrast with the first. 'Moreover' would be more appropriate as it adds supporting information."
            },
            {
                question: "Which transition best maintains the academic tone in this sentence: 'The theory has been widely accepted; _____, recent evidence has challenged its fundamental assumptions.'",
                options: ["but", "however", "on the other hand", "yet"],
                correct: 1,
                explanation: "'However' is the most appropriate transition for academic writing in this context."
            }
        ]
    },
6: {
        easy: [
            {
                question: "Which punctuation is used to set off non-essential information?",
                options: ["Periods", "Commas", "Question marks", "All of the above"],
                correct: 1,
                explanation: "Non-essential information is set off with commas, dashes, or parentheses."
            },
            {
                question: "True or False: Non-essential information can be removed without changing the sentence's core meaning.",
                options: ["True", "False"],
                correct: 0,
                explanation: "Non-essential information provides extra details but isn't necessary for the main meaning."
            },
            {
                question: "Which sentence correctly uses commas for non-essential information?",
                options: [
                    "Paris, which is in France, is beautiful.",
                    "Paris which is in France is beautiful.",
                    "Paris, which is in France is beautiful.",
                    "Paris which is in France, is beautiful."
                ],
                correct: 0,
                explanation: "Option 1 correctly uses two commas around non-essential clause."
            },
            {
                question: "What punctuation can replace commas for non-essential information?",
                options: ["Periods", "Dashes", "Colons", "Semicolons"],
                correct: 1,
                explanation: "Dashes and parentheses can also set off non-essential information."
            },
            {
                question: "Which is NOT correct for non-essential information?",
                options: [
                    "My brother—who lives abroad—is visiting.",
                    "My brother (who lives abroad) is visiting.",
                    "My brother, who lives abroad is visiting.",
                    "My brother, who lives abroad, is visiting."
                ],
                correct: 2,
                explanation: "Option 3 is missing the second comma after 'abroad'."
            }
        ],
        medium: [
            {
                question: "Which sentence correctly punctuates non-essential information?",
                options: [
                    "Rome (founded in 753 BC) is ancient.",
                    "Rome, founded in 753 BC, is ancient.",
                    "Rome founded in 753 BC is ancient.",
                    "Rome—founded in 753 BC—is ancient."
                ],
                correct: 3,
                explanation: "All options except 3 are correct, showing different ways to punctuate non-essential info."
            },
            {
                question: "Identify the correctly punctuated sentence:",
                options: [
                    "The conference which was annual was canceled.",
                    "The conference, which was annual, was canceled.",
                    "The conference, which was annual was canceled.",
                    "The conference which was annual, was canceled."
                ],
                correct: 1,
                explanation: "Option 2 correctly uses two commas around non-essential clause."
            },
            {
                question: "Which sentence uses parentheses correctly?",
                options: [
                    "The book (which I read yesterday was excellent.",
                    "The book which I read yesterday) was excellent.",
                    "The book (which I read yesterday) was excellent.",
                    "The book which I read (yesterday was excellent."
                ],
                correct: 2,
                explanation: "Option 3 correctly uses two parentheses around non-essential clause."
            },
            {
                question: "Choose the proper punctuation:",
                options: [
                    "My cousin, John who lives in Texas, is visiting.",
                    "My cousin John, who lives in Texas, is visiting.",
                    "My cousin, John, who lives in Texas is visiting.",
                    "My cousin John who lives in Texas is visiting."
                ],
                correct: 1,
                explanation: "Option 2 correctly uses commas only around the non-essential clause 'who lives in Texas'. Whether 'John' needs commas depends on how many cousins you have (essential if multiple cousins, non-essential if only one)."
            },
            {
                question: "Which sentence is incorrect?",
                options: [
                    "The author, Stephen King, wrote many novels.",
                    "The author Stephen King wrote many novels.",
                    "The author Stephen King, wrote many novels.",
                    "The author, Stephen King wrote many novels."
                ],
                correct: 2,
                explanation: "Option 3 incorrectly places a comma after the essential name."
            }
        ],
        hard: [
            {
                question: "Which sentence demonstrates the most sophisticated use of punctuation for non-essential information?",
                options: [
                    "The research team—comprising experts in biochemistry, all with PhDs—published their findings in Nature.",
                    "The research team (comprising experts in biochemistry, all with PhDs) published their findings in Nature.",
                    "The research team, comprising experts in biochemistry, all with PhDs, published their findings in Nature.",
                    "The research team comprising experts in biochemistry (all with PhDs) published their findings in Nature."
                ],
                correct: 0,
                explanation: "Option 1 uses dashes effectively to emphasize the qualifications."
            },
            {
                question: "Identify the sentence with incorrect punctuation of non-essential information:",
                options: [
                    "The conference—which was attended by Nobel laureates—was held virtually last year.",
                    "The conference, which was attended by Nobel laureates—was held virtually last year.",
                    "The conference (which was attended by Nobel laureates) was held virtually last year.",
                    "The conference which was attended by Nobel laureates was held virtually last year."
                ],
                correct: 1,
                explanation: "Option 2 incorrectly mixes commas and dashes to set off non-essential information."
            },
            {
                question: "Which revisions correctly punctuate this sentence: 'The scientist who discovered the new element which was previously thought to be unstable won the Nobel Prize.'",
                options: [
                    "The scientist who discovered the new element (which was previously thought to be unstable) won the Nobel Prize.",
                    "The scientist who discovered the new element, which was previously thought to be unstable, won the Nobel Prize.",
                    "The scientist who discovered the new element—which was previously thought to be unstable—won the Nobel Prize.",
                    "All of the above are correct"
                ],
                correct: 3,
                explanation: "All options correctly punctuate the non-essential information. Parentheses, commas, and dashes are all acceptable for non-essential clauses when used consistently."
            }
        ]
    },

    // Rule 7: Essential vs. Non-Essential
    7: {
        easy: [
            {
                question: "What is essential information?",
                options: [
                    "Extra details about a noun",
                    "Information needed to identify which noun you're talking about",
                    "Information set off by commas",
                    "Unnecessary details"
                ],
                correct: 1,
                explanation: "Essential information identifies which specific thing you're talking about."
            },
            {
                question: "How is essential information punctuated?",
                options: [
                    "With commas",
                    "With dashes",
                    "With no extra punctuation",
                    "With parentheses"
                ],
                correct: 2,
                explanation: "Essential information doesn't use extra punctuation."
            },
            {
                question: "Which sentence uses essential information correctly?",
                options: [
                    "My friend, Sarah, is coming to dinner.",
                    "My friend Sarah is coming to dinner.",
                    "Sarah, my friend, is coming to dinner.",
                    "My friend, is coming to dinner."
                ],
                correct: 1,
                explanation: "If 'Sarah' identifies which friend, it's essential and needs no commas."
            },
            {
                question: "Which sentence has non-essential information?",
                options: [
                    "The book on the table is mine.",
                    "The book, which I bought yesterday, is on the table.",
                    "I read the book quickly.",
                    "The book's cover is blue."
                ],
                correct: 1,
                explanation: "Option 2 has extra information about when the book was bought."
            },
            {
                question: "True or False: The same information can be essential in one context and non-essential in another.",
                options: ["True", "False"],
                correct: 0,
                explanation: "Whether information is essential depends on context and what's already known."
            }
        ],
        medium: [
            {
                question: "Which sentence demonstrates correct use of essential information?",
                options: [
                    "The artist, Picasso, painted Guernica.",
                    "The artist Picasso painted Guernica.",
                    "Picasso, the artist, painted Guernica.",
                    "The artist who painted Guernica was Picasso."
                ],
                correct: 1,
                explanation: "Option 2 correctly treats 'Picasso' as essential to identify which artist."
            },
            {
                question: "Identify the sentence with non-essential information:",
                options: [
                    "Students who study regularly perform better.",
                    "Students, who are learners, should study regularly.",
                    "The students in my class study regularly.",
                    "Study regularly to perform better."
                ],
                correct: 1,
                explanation: "Option 2 contains the non-essential clause 'who are learners'."
            },
            {
                question: "Which revision correctly punctuates essential information: 'The professor, Dr. Smith teaches biology.'",
                options: [
                    "The professor Dr. Smith, teaches biology.",
                    "The professor, Dr. Smith, teaches biology.",
                    "The professor Dr. Smith teaches biology.",
                    "The professor, Dr. Smith teaches biology."
                ],
                correct: 2,
                explanation: "If 'Dr. Smith' is essential to identify which professor, no commas are needed."
            },
            {
                question: "Which sentences are correctly written?",
                options: [
                    "To succeed in college, good study habits are essential.",
                    "To succeed in college, students need good study habits.",
                    "Good study habits are essential to succeed in college.",
                    "Both B and C are correct."
                ],
                correct: 3,
                explanation: "Option A contains a dangling modifier ('good study habits' aren't trying to succeed). Options B and C both correct this by either specifying who needs to succeed (B) or rephrasing (C)."
            },
            {
                question: "Which sentence is incorrect?",
                options: [
                    "The novel To Kill a Mockingbird is a classic.",
                    "The novel, To Kill a Mockingbird, is a classic.",
                    "The novel To Kill a Mockingbird, is a classic.",
                    "To Kill a Mockingbird, the novel, is a classic."
                ],
                correct: 2,
                explanation: "Option 3 incorrectly places a comma after an essential title."
            }
        ],
        hard: [
            {
                question: "Which sentence demonstrates the most sophisticated use of essential/non-essential information?",
                options: [
                    "The CEO, who founded the company in 1995, announced her retirement.",
                    "The CEO who founded the company in 1995 announced her retirement.",
                    "The CEO that founded the company in 1995 announced her retirement.",
                    "The CEO—founder of the company—announced her retirement in 1995."
                ],
                correct: 0,
                explanation: "Option 1 correctly treats the founding date as non-essential information."
            },
            {
                question: "Identify the sentence with incorrect punctuation of essential/non-essential information:",
                options: [
                    "The famous physicist Richard Feynman developed the Feynman diagrams.",
                    "The famous physicist, Richard Feynman, developed the Feynman diagrams.",
                    "Richard Feynman, a famous physicist, developed the Feynman diagrams.",
                    "A famous physicist, Richard Feynman developed the Feynman diagrams."
                ],
                correct: 1,
                explanation: "Option 2 incorrectly uses commas around 'Richard Feynman' when the name is essential to identify which physicist (assuming multiple famous physicists could be referenced)."
            },
            {
                question: "Which revision correctly punctuates the essential information in this sentence: 'The novel To Kill a Mockingbird which won the Pulitzer Prize is taught in schools nationwide.'",
                options: [
                    "The novel To Kill a Mockingbird, which won the Pulitzer Prize, is taught in schools nationwide.",
                    "The novel, To Kill a Mockingbird which won the Pulitzer Prize, is taught in schools nationwide.",
                    "The novel To Kill a Mockingbird which won the Pulitzer Prize is taught in schools nationwide.",
                    "The novel, To Kill a Mockingbird, which won the Pulitzer Prize, is taught in schools nationwide."
                ],
                correct: 0,
                explanation: "Option 1 correctly treats the title as essential and sets off the Pulitzer Prize info as non-essential."
            }
        ]
    },

    // Rule 8: Comma Rules
    8: {
        easy: [
            {
                question: "When should you use commas in a list?",
                options: [
                    "Only before 'and'",
                    "Between all items",
                    "Never in formal writing",
                    "Only with long items"
                ],
                correct: 1,
                explanation: "Use commas to separate all items in a list (the Oxford comma is preferred on the SAT/ACT)."
            },
            {
                question: "Which sentence uses commas correctly in a list?",
                options: [
                    "I need milk eggs and bread.",
                    "I need milk, eggs, and bread.",
                    "I need milk, eggs and bread.",
                    "I need milk eggs, and bread."
                ],
                correct: 1,
                explanation: "Option 2 correctly uses commas between all items, including before 'and'."
            },
            {
                question: "What are coordinate adjectives?",
                options: [
                    "Adjectives that must stay in a specific order",
                    "Adjectives that can be reversed and make sense",
                    "Adjectives that describe numbers",
                    "Adjectives that come after nouns"
                ],
                correct: 1,
                explanation: "Coordinate adjectives can have their order reversed and still make sense (e.g., 'dark, stormy night' = 'stormy, dark night')."
            },
            {
                question: "Which sentence uses commas correctly with adjectives?",
                options: [
                    "It was a long, tiring day.",
                    "It was a long tiring, day.",
                    "It was a long tiring day.",
                    "It was a long, tiring, day."
                ],
                correct: 0,
                explanation: "Option 1 correctly uses a comma between coordinate adjectives."
            },
            {
                question: "Where should you NOT put a comma?",
                options: [
                    "After introductory words",
                    "Between items in a list",
                    "Between subject and verb",
                    "Around non-essential clauses"
                ],
                correct: 2,
                explanation: "Never separate a subject from its verb with a comma."
            }
        ],
        medium: [
            {
                question: "Which sentence correctly uses commas in a list?",
                options: [
                    "I need to buy apples bananas and oranges.",
                    "I need to buy apples, bananas and oranges.",
                    "I need to buy apples, bananas, and oranges.",
                    "I need to buy apples bananas, and oranges."
                ],
                correct: 2,
                explanation: "Option 3 correctly separates all items in the list with commas."
            },
            {
                question: "Identify the incorrect comma usage:",
                options: [
                    "The tall, dark stranger entered the room.",
                    "The old wooden chair creaked loudly.",
                    "She wore a beautiful, red dress to the party.",
                    "The cat, jumped over the fence quickly."
                ],
                correct: 3,
                explanation: "Option 4 incorrectly places a comma between the subject and verb."
            },
            {
                question: "Identify the sentence with incorrect comma usage:",
                options: [
                    "After finishing her homework, Sarah went to bed.",
                    "Sarah went to bed after finishing her homework.",
                    "Sarah went to bed, after finishing her homework.",
                    "After finishing her homework Sarah went to bed."
                ],
                correct: 2,
                explanation: "Option 3 incorrectly places a comma before the dependent clause at the end. Option 4 is also incorrect (missing comma after introductory clause) but wasn't marked as such."
            },
            {
                question: "Choose the proper punctuation:",
                options: [
                    "The students, in the front row were paying attention.",
                    "The students in the front row, were paying attention.",
                    "The students in the front row were paying attention.",
                    "The students, in the front row, were paying attention."
                ],
                correct: 2,
                explanation: "No commas are needed around the prepositional phrase 'in the front row'."
            },
            {
                question: "Which sentence uses commas correctly?",
                options: [
                    "She is a kind, generous, person.",
                    "She is a kind, generous person.",
                    "She is a kind generous, person.",
                    "She is a, kind, generous person."
                ],
                correct: 1,
                explanation: "Coordinate adjectives should be separated by commas, but not between the last adjective and noun."
            }
        ],
        hard: [
            {
                question: "Which sentence demonstrates the most sophisticated use of commas in a complex series?",
                options: [
                    "The study examined cognitive development in children, social behavior in adolescents, and emotional regulation in adults.",
                    "The study examined cognitive development, in children, social behavior, in adolescents, and emotional regulation, in adults.",
                    "The study examined, cognitive development in children, social behavior in adolescents, and emotional regulation in adults.",
                    "The study examined cognitive development in children social behavior in adolescents and emotional regulation in adults."
                ],
                correct: 0,
                explanation: "Option 1 correctly uses commas to separate items in a complex series without unnecessary punctuation."
            },
            {
                question: "Identify the sentence with incorrect comma usage:",
                options: [
                    "The tall, ancient oak tree, which stood in the center of campus, was struck by lightning.",
                    "The tall ancient oak tree which stood in the center of campus was struck by lightning.",
                    "The tall, ancient oak tree that stood in the center of campus was struck by lightning.",
                    "The tall and ancient oak tree, standing in the center of campus, was struck by lightning."
                ],
                correct: 1,
                explanation: "Option 2 incorrectly omits commas around 'which stood in the center of campus', which is a non-restrictive clause providing extra information about the tree."
            },
            {
                question: "Which revision correctly punctuates this sentence: 'She packed her bags with clothes toiletries and books grabbed her passport and left for the airport.'",
                options: [
                    "She packed her bags with clothes, toiletries, and books, grabbed her passport, and left for the airport.",
                    "She packed her bags with clothes, toiletries and books, grabbed her passport and left for the airport.",
                    "She packed her bags with clothes toiletries and books, grabbed her passport, and left for the airport.",
                    "She packed her bags with clothes, toiletries, and books grabbed her passport, and left for the airport."
                ],
                correct: 0,
                explanation: "Option 1 correctly uses commas to separate items in a list and to separate distinct actions."
            }
        ]
    },

    // Rule 9: Apostrophes
    9: {
        easy: [
            {
                question: "Which sentence correctly uses an apostrophe?",
                options: [
                    "The dog wagged it's tail happily.",
                    "The dog wagged its tail happily.",
                    "The dogs' wagged their tails happily.",
                    "The dog's wagged its tail happily."
                ],
                correct: 1,
                explanation: "'Its' is the possessive pronoun; 'it's' means 'it is'."
            },
            {
                question: "What is the correct possessive form of 'children'?",
                options: [
                    "Childrens'",
                    "Children's",
                    "Childrens",
                    "Children"
                ],
                correct: 1,
                explanation: "'Children' is an irregular plural, so add apostrophe + s."
            },
            {
                question: "Which is correct?",
                options: [
                    "The student's books (one student)",
                    "The students' books (multiple students)",
                    "Both A and B",
                    "None of the above"
                ],
                correct: 2,
                explanation: "Both are correct - apostrophe before s for singular, after s for regular plural."
            },
            {
                question: "Which is a contraction?",
                options: [
                    "Whose",
                    "Who's",
                    "Both",
                    "Neither"
                ],
                correct: 1,
                explanation: "'Who's' means 'who is'; 'whose' is possessive."
            },
            {
                question: "Which is correct?",
                options: [
                    "Their going to the store.",
                    "There going to the store.",
                    "They're going to the store.",
                    "Theyre going to the store."
                ],
                correct: 2,
                explanation: "'They're' is the contraction for 'they are'."
            }
        ],
        medium: [
            {
                question: "Which sentence correctly uses an apostrophe?",
                options: [
                    "The dog wagged it's tail happily.",
                    "The dog wagged its tail happily.",
                    "The dogs' wagged their tails happily.",
                    "The dog's wagged its tail happily."
                ],
                correct: 1,
                explanation: "'Its' is the possessive pronoun; 'it's' means 'it is'."
            },
            {
                question: "Choose the correct possessive form:",
                options: [
                    "The childrens' toys were everywhere.",
                    "The children's toys were everywhere.",
                    "The childrens toys were everywhere.",
                    "The children toys were everywhere."
                ],
                correct: 1,
                explanation: "'Children' is an irregular plural, so add apostrophe + s."
            },
            {
                question: "Identify the incorrect usage:",
                options: [
                    "The students' essays were well-written.",
                    "The student's essay was excellent.",
                    "The students's essays were graded.",
                    "The teachers' lounge was renovated."
                ],
                correct: 2,
                explanation: "For regular plural nouns, use only an apostrophe after the s."
            },
            {
                question: "Which sentence is correct?",
                options: [
                    "Who's book is this on the table?",
                    "Whose book is this on the table?",
                    "Whos' book is this on the table?",
                    "Whos book is this on the table?"
                ],
                correct: 1,
                explanation: "'Whose' is the possessive form; 'who's' means 'who is'."
            },
            {
                question: "Choose the proper usage:",
                options: [
                    "Their going to the store later today.",
                    "There going to the store later today.",
                    "They're going to the store later today.",
                    "Theyre going to the store later today."
                ],
                correct: 2,
                explanation: "'They're' is the contraction for 'they are'."
            }
        ],
        hard: [
            {
                question: "Which sentence demonstrates the most sophisticated use of apostrophes in academic writing?",
                options: [
                    "The researchers' findings were consistent with Smith's earlier work, though its methodology differed significantly.",
                    "The researcher's findings were consistent with Smiths' earlier work, though it's methodology differed significantly.",
                    "The researchers findings were consistent with Smith's earlier work, though its' methodology differed significantly.",
                    "The researchers' findings were consistent with Smiths earlier work, though it's methodology differed significantly."
                ],
                correct: 0,
                explanation: "Option 1 correctly uses apostrophes for plural possessive ('researchers'') and singular possessive ('Smith's'), and correctly uses 'its' as a possessive pronoun."
            },
            {
                question: "Identify the sentence with incorrect apostrophe usage:",
                options: [
                    "The children's book's illustrations were remarkable for their attention to detail.",
                    "The childrens' books' illustrations were remarkable for their attention to detail.",
                    "The children's books' illustrations were remarkable for their attention to detail.",
                    "The children's book illustrations were remarkable for their attention to detail."
                ],
                correct: 1,
                explanation: "Option 2 incorrectly uses 'childrens'' as the plural form. The correct plural possessive is 'children's' since 'children' is already plural."
            },
            {
                question: "Which revision correctly uses apostrophes in this sentence: 'The teams presentation was well-received, though its content was similar to the students project from last year.'",
                options: [
                    "The team's presentation was well-received, though its content was similar to the students' project from last year.",
                    "The teams' presentation was well-received, though it's content was similar to the student's project from last year.",
                    "The teams presentation was well-received, though its content was similar to the students project from last year.",
                    "The team's presentation was well-received, though it's content was similar to the student's project from last year."
                ],
                correct: 0,
                explanation: "Option 1 correctly uses 'team's' as singular possessive, 'its' as possessive pronoun, and 'students'' as plural possessive."
            }
        ]
    },

    // Rule 10: Pronoun Agreement
    10: {
        easy: [
            {
                question: "Which sentence demonstrates correct pronoun usage?",
                options: [
                    "Each student must bring their own lunch.",
                    "Each student must bring his or her own lunch.",
                    "Each student must bring its own lunch.",
                    "Each students must bring their own lunch."
                ],
                correct: 1,
                explanation: "'Each' is singular, so it requires a singular pronoun."
            },
            {
                question: "Which pronoun correctly completes: 'The team celebrated ___ victory.'",
                options: ["their", "its", "his", "her"],
                correct: 1,
                explanation: "'Team' is a collective noun treated as singular in this context."
            },
            {
                question: "Which is correct for things?",
                options: ["who", "which", "that", "Both B and C"],
                correct: 3,
                explanation: "Use 'which' or 'that' for things; 'who' for people."
            },
            {
                question: "Which is correct after a preposition?",
                options: ["who", "whom", "whose", "who's"],
                correct: 1,
                explanation: "Use 'whom' after prepositions like 'to'."
            },
            {
                question: "Which is correct?",
                options: [
                    "Neither John nor Mary finished their homework.",
                    "Neither John nor Mary finished his homework.",
                    "Neither John nor Mary finished her homework.",
                    "Neither John nor Mary finished his or her homework."
                ],
                correct: 3,
                explanation: "'Neither...nor' with singular subjects requires a singular pronoun."
            }
        ],
        medium: [
            {
                question: "Which sentence demonstrates correct pronoun usage?",
                options: [
                    "Each student must bring their own lunch.",
                    "Each student must bring his or her own lunch.",
                    "Each student must bring its own lunch.",
                    "Each students must bring their own lunch."
                ],
                correct: 1,
                explanation: "'Each' is singular, so it requires a singular pronoun."
            },
            {
                question: "Choose the correct pronoun:",
                options: [
                    "The team celebrated their victory enthusiastically.",
                    "The team celebrated its victory enthusiastically.",
                    "The team celebrated his victory enthusiastically.",
                    "The team celebrated her victory enthusiastically."
                ],
                correct: 1,
                explanation: "'Team' is a collective noun treated as singular in this context."
            },
            {
                question: "Identify the incorrect pronoun usage:",
                options: [
                    "The book, which was on the table, disappeared.",
                    "The person who called left a message.",
                    "The car, who was parked outside, was towed.",
                    "The students who studied passed the exam."
                ],
                correct: 2,
                explanation: "Use 'which' for things, not 'who'."
            },
            {
                question: "Which sentence is correct?",
                options: [
                    "To who did you give the assignment?",
                    "To whom did you give the assignment?",
                    "Who did you give the assignment to?",
                    "Whom did you give the assignment?"
                ],
                correct: 1,
                explanation: "Use 'whom' after prepositions like 'to'."
            },
            {
                question: "Choose the proper pronoun agreement:",
                options: [
                    "Neither John nor Mary finished their homework.",
                    "Neither John nor Mary finished his homework.",
                    "Neither John nor Mary finished her homework.",
                    "Neither John nor Mary finished his or her homework."
                ],
                correct: 3,
                explanation: "Traditional grammar requires singular pronouns with 'neither...nor'. While 'their' is common in informal usage, 'his or her' is preferred for formal writing like the SAT."
            }
        ],
        hard: [
            {
                question: "Which sentence demonstrates the most sophisticated pronoun usage in academic writing?",
                options: [
                    "When a researcher submits their work for publication, they should ensure its methodology is sound.",
                    "When researchers submit their work for publication, they should ensure its methodology is sound.",
                    "When a researcher submits his or her work for publication, he or she should ensure its methodology is sound.",
                    "When a researcher submits his work for publication, he should ensure its methodology is sound."
                ],
                correct: 1,
                explanation: "Option 2 avoids gender-specific pronouns and maintains number agreement by using plural forms throughout, which is preferred in modern academic writing."
            },
            {
                question: "Identify the sentence with incorrect pronoun usage:",
                options: [
                    "The committee reached its decision after reviewing all the evidence.",
                    "Each of the participants completed their questionnaire honestly.",
                    "Neither the professor nor the students could find their way to the new laboratory.",
                    "The team celebrated its victory enthusiastically."
                ],
                correct: 1,
                explanation: "Option 2 incorrectly uses 'their' with the singular 'each.'"
            },
            {
                question: "Which revision corrects the pronoun error in this sentence: 'Every student must submit their application by Friday.'",
                options: [
                    "Every student must submit his or her application by Friday.",
                    "All students must submit their applications by Friday.",
                    "Every student must submit an application by Friday.",
                    "All of the above are correct"
                ],
                correct: 3,
                explanation: "All options provide grammatically correct solutions to the singular/plural pronoun agreement problem."
            }
        ]
    },

    // Rule 11: Subject-Verb Agreement
    11: {
        easy: [
            {
                question: "Which sentence demonstrates correct subject-verb agreement?",
                options: [
                    "The group of students are studying for exams.",
                    "The group of students is studying for exams.",
                    "The groups of student is studying for exams.",
                    "The groups of student are studying for exams."
                ],
                correct: 1,
                explanation: "'Group' is the singular subject; 'of students' is a prepositional phrase."
            },
            {
                question: "Which is correct?",
                options: [
                    "Each of the books are interesting.",
                    "Each of the books is interesting.",
                    "Each of the book are interesting.",
                    "Each of the book is interesting."
                ],
                correct: 1,
                explanation: "'Each' is singular and takes a singular verb."
            },
            {
                question: "Which is correct?",
                options: [
                    "The team plays well together.",
                    "The teams play well together.",
                    "The team play well together.",
                    "The players play well together."
                ],
                correct: 2,
                explanation: "'Team' is singular and requires 'plays', not 'play'."
            },
            {
                question: "Which is correct?",
                options: [
                    "Neither the teacher nor the students was ready.",
                    "Neither the teacher nor the students were ready.",
                    "Neither the teachers nor the student were ready.",
                    "Neither the teachers nor the student was ready."
                ],
                correct: 1,
                explanation: "With 'neither...nor', the verb agrees with the closer subject."
            },
            {
                question: "Which is correct?",
                options: [
                    "The news are always depressing.",
                    "The news is always depressing.",
                    "The news were always depressing.",
                    "The news have always been depressing."
                ],
                correct: 1,
                explanation: "'News' is singular despite ending in 's'."
            }
        ],
        medium: [
            {
                question: "Which sentence demonstrates correct subject-verb agreement?",
                options: [
                    "The group of students are studying for exams.",
                    "The group of students is studying for exams.",
                    "The groups of student is studying for exams.",
                    "The groups of student are studying for exams."
                ],
                correct: 1,
                explanation: "'Group' is the singular subject; 'of students' is a prepositional phrase."
            },
            {
                question: "Choose the correct verb form:",
                options: [
                    "Each of the books are interesting.",
                    "Each of the books is interesting.",
                    "Each of the book are interesting.",
                    "Each of the book is interesting."
                ],
                correct: 1,
                explanation: "'Each' is singular and takes a singular verb."
            },
            {
                question: "Identify the incorrect subject-verb agreement:",
                options: [
                    "The team plays well together.",
                    "The teams play well together.",
                    "The team play well together.",
                    "The players play well together."
                ],
                correct: 2,
                explanation: "'Team' is singular and requires 'plays', not 'play'."
            },
            {
                question: "Which sentence is correct?",
                options: [
                    "Neither the teacher nor the students was ready.",
                    "Neither the teacher nor the students were ready.",
                    "Neither the teachers nor the student were ready.",
                    "Neither the teachers nor the student was ready."
                ],
                correct: 1,
                explanation: "With 'neither...nor', the verb agrees with the closer subject."
            },
            {
                question: "Choose the proper verb agreement:",
                options: [
                    "The news are always depressing.",
                    "The news is always depressing.",
                    "The news were always depressing.",
                    "The news have always been depressing."
                ],
                correct: 1,
                explanation: "'News' is singular despite ending in 's'."
            }
        ],
        hard: [
            {
                question: "Which sentence demonstrates the most sophisticated subject-verb agreement in a complex construction?",
                options: [
                    "The collection of rare manuscripts, along with several first editions, are on display in the library.",
                    "The collection of rare manuscripts, along with several first editions, is on display in the library.",
                    "The collection of rare manuscripts and several first editions are on display in the library.",
                    "The collection of rare manuscripts, as well as several first editions, are on display in the library."
                ],
                correct: 1,
                explanation: "Option 2 correctly treats 'collection' as the singular subject, with 'along with several first editions' as a non-essential prepositional phrase that doesn't affect verb agreement."
            },
            {
                question: "Identify the sentence with incorrect subject-verb agreement:",
                options: [
                    "Neither the results of the study nor the conclusions drawn by the researchers seems valid.",
                    "Neither the conclusions drawn by the researchers nor the results of the study seem valid.",
                    "Neither the study's results nor the researchers' conclusions seem valid.",
                    "Neither the researchers' conclusions nor the study's results seems valid."
                ],
                correct: 0,
                explanation: "Option 1 incorrectly uses 'seems' (singular) when the closer subject 'conclusions' is plural."
            },
            {
                question: "Which revision corrects the subject-verb agreement in this sentence: 'The number of participants in the study vary significantly from year to year.'",
                options: [
                    "The number of participants in the study varies significantly from year to year.",
                    "The numbers of participants in the study vary significantly from year to year.",
                    "The participants in the study vary significantly in number from year to year.",
                    "All of the above are correct"
                ],
                correct: 3,
                explanation: "All options correct the original error by establishing proper subject-verb agreement."
            }
        ]
    },

    // Rule 12: Parallel Structure
    12: {
        easy: [
            {
                question: "Which sentence demonstrates correct parallel structure?",
                options: [
                    "She likes swimming, running, and to bike.",
                    "She likes swimming, running, and biking.",
                    "She likes to swim, running, and biking.",
                    "She likes to swim, to run, and biking."
                ],
                correct: 1,
                explanation: "All items should be in the same form (gerunds)."
            },
            {
                question: "Which is NOT parallel?",
                options: [
                    "The job requires typing, filing, and answering phones.",
                    "The job requires to type, to file, and to answer phones.",
                    "The job requires typing, filing, and to answer phones.",
                    "The job requires that you type, that you file, and that you answer phones."
                ],
                correct: 2,
                explanation: "Option 3 mixes gerunds with an infinitive."
            },
            {
                question: "Which is parallel?",
                options: [
                    "He wanted to learn Spanish and traveling to Mexico.",
                    "He wanted to learn Spanish and to travel to Mexico.",
                    "He wanted learning Spanish and to travel to Mexico.",
                    "He wanted to learn Spanish and traveling to Mexico."
                ],
                correct: 1,
 explanation: "Option 2 maintains parallel structure with both verbs in the infinitive form."
        },
        {
            question: "Which sentence is parallel?",
            options: [
                "She is intelligent, creative, and works hard.",
                "She is intelligent, creative, and hardworking.",
                "She is intelligent, creative, and a hard worker.",
                "She is intelligent, creative, and she works hard."
            ],
            correct: 1,
            explanation: "Option 2 keeps all items as adjectives for parallel structure."
        },
        {
            question: "What is parallel structure?",
            options: [
                "Using the same tense throughout a sentence",
                "Keeping items in a series in the same grammatical form",
                "Making sure subjects and verbs agree",
                "Using consistent punctuation"
            ],
            correct: 1,
            explanation: "Parallel structure means using the same pattern of words for items in a series."
        }
    ],
    medium: [
        {
            question: "Which sentence demonstrates correct parallel structure?",
            options: [
                "She likes swimming, running, and biking.",
                "She likes swimming, running, and to bike.",
                "She likes to swim, running, and biking.",
                "She likes to swim, to run, and biking."
            ],
            correct: 0,
            explanation: "Option 1 correctly uses all gerunds in the series."
        },
        {
            question: "Choose the sentence with proper parallelism:",
            options: [
                "The job requires typing, filing, and to answer phones.",
                "The job requires typing, filing, and answering phones.",
                "The job requires to type, filing, and answering phones.",
                "The job requires to type, to file, and answering phones."
            ],
            correct: 1,
            explanation: "Option 2 maintains parallel structure with all items as gerunds."
        },
        {
            question: "Identify the sentence lacking parallel structure:",
            options: [
                "He enjoys reading, writing, and painting.",
                "He enjoys to read, to write, and to paint.",
                "He enjoys reading, writing, and to paint.",
                "He enjoys books, writing, and painting."
            ],
            correct: 2,
            explanation: "Option 3 mixes gerunds with an infinitive."
        },
        {
            question: "Which sentence is correctly structured?",
            options: [
                "The coach told us to run faster, jump higher, and throwing harder.",
                "The coach told us to run faster, jump higher, and to throw harder.",
                "The coach told us to run faster, jump higher, and throw harder.",
                "The coach told us running faster, jumping higher, and throwing harder."
            ],
            correct: 2,
            explanation: "Option 3 maintains parallel structure with all verbs in base form after 'to'."
        },
        {
            question: "Choose the sentence with proper parallel structure:",
            options: [
                "She is intelligent, creative, and works hard.",
                "She is intelligent, creative, and hardworking.",
                "She is intelligent, creative, and a hard worker.",
                "She is intelligent, creative, and she works hard."
            ],
            correct: 1,
            explanation: "Option 2 maintains parallel structure with all items as adjectives."
        }
    ],
    hard: [
        {
            question: "Which sentence demonstrates the most sophisticated parallel structure in a complex series?",
            options: [
                "The study aims to identify risk factors, to develop prevention strategies, and to evaluate treatment outcomes.",
                "The study aims to identify risk factors, developing prevention strategies, and the evaluation of treatment outcomes.",
                "The study aims at identifying risk factors, to develop prevention strategies, and evaluating treatment outcomes.",
                "The study aims for the identification of risk factors, developing prevention strategies, and to evaluate treatment outcomes."
            ],
            correct: 0,
            explanation: "Option 1 maintains perfect parallel structure with all items in the infinitive form."
        },
        {
            question: "Identify the sentence with incorrect parallel structure:",
            options: [
                "The researcher not only collected data but also analyzed it thoroughly.",
                "The researcher not only collected data but also was analyzing it thoroughly.",
                "The researcher not only collected data but also conducted a thorough analysis.",
                "The researcher not only was collecting data but also analyzing it thoroughly."
            ],
            correct: 1,
            explanation: "Option 2 breaks parallel structure by mixing simple past ('collected') with past progressive ('was analyzing'). Both verbs should be in the same tense and form."
        },
        {
            question: "Which revision corrects the parallel structure in this sentence: 'The protocol requires recording observations, to analyze data, and submission of a report.'",
            options: [
                "The protocol requires recording observations, analyzing data, and submitting a report.",
                "The protocol requires the recording of observations, the analysis of data, and the submission of a report.",
                "The protocol requires that observations be recorded, that data be analyzed, and that a report be submitted.",
                "All of the above are correct"
            ],
            correct: 3,
            explanation: "All options correct the original error by establishing consistent parallel structure."
        }
    ]
},

// Rule 13: Dangling Modifiers
13: {
    easy: [
        {
            question: "What is a dangling modifier?",
            options: [
                "A word that describes a noun",
                "A phrase that doesn't clearly modify any word in the sentence",
                "An unnecessary adverb",
                "A misplaced comma"
            ],
            correct: 1,
            explanation: "A dangling modifier is a phrase that doesn't clearly modify any specific word in the sentence."
        },
        {
            question: "Which sentence has a dangling modifier?",
            options: [
                "Running quickly, the finish line approached.",
                "Running quickly, I approached the finish line.",
                "I ran quickly to the finish line.",
                "The finish line approached as I ran quickly."
            ],
            correct: 0,
            explanation: "Option 1 suggests the finish line was running, which is illogical."
        },
        {
            question: "How to fix a dangling modifier?",
            options: [
                "Add more adjectives",
                "Make sure the modified noun comes right after the phrase",
                "Use a semicolon",
                "Remove all modifiers"
            ],
            correct: 1,
            explanation: "Place the noun being modified immediately after the modifying phrase."
        },
        {
            question: "Which is correct?",
            options: [
                "After studying all night, the test was easy.",
                "After studying all night, I found the test easy.",
                "After I studied all night, the test was easy.",
                "Both B and C"
            ],
            correct: 3,
            explanation: "Options B and C both correctly indicate who was studying."
        },
        {
            question: "True or False: Dangling modifiers are always grammatically incorrect.",
            options: ["True", "False"],
            correct: 0,
            explanation: "Dangling modifiers create illogical meanings and should always be corrected."
        }
    ],
    medium: [
        {
            question: "Which sentence contains a dangling modifier?",
            options: [
                "Walking to school, the rain started falling.",
                "Walking to school, I got caught in the rain.",
                "While walking to school, the rain started falling.",
                "The rain started falling while I was walking to school."
            ],
            correct: 0,
            explanation: "Option 1 suggests the rain was walking to school."
        },
        {
            question: "Choose the sentence that corrects the dangling modifier:",
            options: [
                "After studying all night, the exam was easy.",
                "After studying all night, the exam seemed easy to me.",
                "After I studied all night, the exam was easy.",
                "The exam was easy after studying all night."
            ],
            correct: 2,
            explanation: "Option 3 clearly indicates who studied all night."
        },
        {
            question: "Identify the sentence with a dangling modifier:",
            options: [
                "Having finished the project, Sarah submitted it early.",
                "Having finished the project, it was submitted early.",
                "After finishing the project, Sarah submitted it early.",
                "Sarah submitted the project early after finishing it."
            ],
            correct: 1,
            explanation: "Option 2 suggests 'it' finished the project."
        },
        {
            question: "Which sentence is correctly written?",
            options: [
                "To succeed in college, good study habits are essential.",
                "To succeed in college, students need good study habits.",
                "Good study habits are essential to succeed in college.",
                "Both B and C are correct."
            ],
            correct: 3,
            explanation: "Both options B and C avoid the dangling modifier."
        },
        {
            question: "Choose the sentence without a dangling modifier:",
            options: [
                "While cooking dinner, the smoke alarm went off.",
                "While I was cooking dinner, the smoke alarm went off.",
                "The smoke alarm went off while cooking dinner.",
                "Cooking dinner, the smoke alarm went off."
            ],
            correct: 1,
            explanation: "Option 2 clearly indicates who was cooking."
        }
    ],
    hard: [
        {
            question: "Which sentence demonstrates the most sophisticated correction of a dangling modifier?",
            options: [
                "After completing the experiment, the data was analyzed by the researchers.",
                "After the experiment was completed, the researchers analyzed the data.",
                "After completing the experiment, the researchers analyzed the data.",
                "Having completed the experiment, the data was ready for analysis by the researchers."
            ],
            correct: 2,
            explanation: "Option 3 correctly places 'the researchers' immediately after the modifying phrase."
        },
        {
            question: "Identify the sentence with a dangling modifier:",
            options: [
                "To understand the phenomenon completely, additional experiments were conducted.",
                "To understand the phenomenon completely, we conducted additional experiments.",
                "In order to understand the phenomenon completely, additional experiments were conducted by the team.",
                "Understanding the phenomenon completely required additional experiments."
            ],
            correct: 0,
            explanation: "Option 1 contains a dangling modifier because it's unclear who needs to understand."
        },
        {
            question: "Which revision corrects the dangling modifier in this sentence: 'While reviewing the literature, several gaps in research were identified.'",
            options: [
                "While reviewing the literature, we identified several gaps in research.",
                "While the literature was being reviewed, several gaps in research were identified.",
                "Several gaps in research were identified while reviewing the literature.",
                "All of the above are correct"
            ],
            correct: 0,
            explanation: "Option 1 is the clearest correction by specifying who was reviewing the literature. Option 2 is passive and Option 3 still slightly obscures the actor."
        }
    ]
},

// Rule 14: Idioms
14: {
    easy: [
        {
            question: "Which preposition completes: 'good ___ math'?",
            options: ["in", "at", "for", "with"],
            correct: 1,
            explanation: "The correct idiom is 'good at'."
        },
        {
            question: "Which is correct?",
            options: [
                "responsible of",
                "responsible for",
                "responsible to",
                "responsible with"
            ],
            correct: 1,
            explanation: "The correct idiom is 'responsible for'."
        },
        {
            question: "Complete: 'capable ___ solving'",
            options: ["of", "to", "in", "for"],
            correct: 0,
            explanation: "The correct idiom is 'capable of' + gerund."
        },
        {
            question: "Which is correct?",
            options: [
                "different than",
                "different from",
                "different to",
                "different with"
            ],
            correct: 1,
            explanation: "In American English, 'different from' is correct."
        },
        {
            question: "Complete: 'talent ___ music'",
            options: ["in", "for", "at", "with"],
            correct: 1,
            explanation: "The correct idiom is 'talent for'."
        }
    ],
    medium: [
        {
            question: "Which sentence uses the correct idiom?",
            options: [
                "She is good in mathematics.",
                "She is good at mathematics.",
                "She is good for mathematics.",
                "She is good with mathematics."
            ],
            correct: 1,
            explanation: "The correct idiom is 'good at'."
        },
        {
            question: "Choose the sentence with the proper idiomatic expression:",
            options: [
                "He is responsible of the project.",
                "He is responsible for the project.",
                "He is responsible to the project.",
                "He is responsible with the project."
            ],
            correct: 1,
            explanation: "The correct idiom is 'responsible for'."
        },
        {
            question: "Identify the incorrect idiomatic usage:",
            options: [
                "She is capable of handling the situation.",
                "She is capable to handle the situation.",
                "She is capable in handling the situation.",
                "Both B and C are incorrect."
            ],
            correct: 3,
            explanation: "The correct idiom is 'capable of' + gerund."
        },
        {
            question: "Which sentence uses the correct preposition?",
            options: [
                "The book is different than the movie.",
                "The book is different from the movie.",
                "The book is different to the movie.",
                "The book is different with the movie."
            ],
            correct: 1,
            explanation: "The correct idiom is 'different from'."
        },
        {
            question: "Choose the proper idiomatic expression:",
            options: [
                "She has a talent in music.",
                "She has a talent for music.",
                "She has a talent at music.",
                "She has a talent with music."
            ],
            correct: 1,
            explanation: "The correct idiom is 'talent for'."
        }
    ],
    hard: [
        {
            question: "Which sentence demonstrates the most sophisticated use of idiomatic expressions in academic writing?",
            options: [
                "The results are consistent with prior research and differ from the initial hypothesis.",
                "The results are consistent to prior research and different than the initial hypothesis.",
                "The results are consistent of prior research and differ with the initial hypothesis.",
                "The results are consistent on prior research and differ to the initial hypothesis."
            ],
            correct: 0,
            explanation: "Option 1 correctly uses both 'consistent with' (meaning 'in agreement with') and 'differ from' (meaning 'not the same as'), which are the proper idiomatic expressions for academic writing."
        },
        {
            question: "Identify the sentence with incorrect idiomatic usage:",
            options: [
                "The researchers were interested in exploring the relationship between the variables.",
                "The researchers were interested to explore the relationship between the variables.",
                "The researchers' interest in exploring the relationship between the variables was evident.",
                "The researchers showed interest in exploring the relationship between the variables."
            ],
            correct: 1,
            explanation: "Option 2 incorrectly uses 'interested to explore' instead of the correct 'interested in exploring.'"
        },
        {
            question: "Which revision corrects the idiomatic error in this sentence: 'The study was designed for testing the hypothesis that stress effects memory.'",
            options: [
                "The study was designed to test the hypothesis that stress affects memory.",
                "The study was designed for the testing of the hypothesis that stress affects memory.",
                "The study was designed to testing the hypothesis that stress effects memory.",
                "Both A and B are correct"
            ],
            correct: 3,
            explanation: "Options A and B both correct the original errors in idiom usage and word choice."
        }
    ]
},

// Rule 15: Verb Tenses
15: {
    easy: [
        {
            question: "Which sentence shows correct tense consistency?",
            options: [
                "She walked to the store and buys groceries.",
                "She walks to the store and bought groceries.",
                "She walked to the store and bought groceries.",
                "She will walk to the store and bought groceries."
            ],
            correct: 2,
            explanation: "Both verbs should be in the past tense for consistency."
        },
        {
            question: "Which tense shows an action completed before another past action?",
            options: [
                "Present perfect",
                "Past perfect",
                "Future perfect",
                "Simple past"
            ],
            correct: 1,
            explanation: "Past perfect ('had done') shows an action completed before another past action."
        },
        {
            question: "Which is correct?",
            options: [
                "I seen that movie yesterday.",
                "I saw that movie yesterday.",
                "I have seen that movie yesterday.",
                "I had seen that movie yesterday."
            ],
            correct: 1,
            explanation: "Use simple past for completed past actions with specific time references."
        },
        {
            question: "Complete: 'By the time we arrived, the movie ___.'",
            options: ["started", "had started", "has started", "was starting"],
            correct: 1,
            explanation: "Use past perfect for the action that happened first."
        },
        {
            question: "Which is correct in reported speech?",
            options: [
                "She said she will come tomorrow.",
                "She said she would come tomorrow.",
                "She says she will come tomorrow.",
                "Both B and C"
            ],
            correct: 3,
            explanation: "When the main verb is past tense, use 'would' instead of 'will.'"
        }
    ],
    medium: [
        {
            question: "Which sentence demonstrates correct verb tense consistency?",
            options: [
                "She walked to the store and buys groceries.",
                "She walks to the store and bought groceries.",
                "She walked to the store and bought groceries.",
                "She will walk to the store and bought groceries."
            ],
            correct: 2,
            explanation: "Both verbs should be in the past tense for consistency."
        },
        {
            question: "Choose the sentence with proper tense usage:",
            options: [
                "When I arrived, she already left.",
                "When I arrived, she had already left.",
                "When I arrive, she already left.",
                "When I arrived, she leaves."
            ],
            correct: 1,
            explanation: "Past perfect shows an action completed before another past action."
        },
        {
            question: "Identify the sentence with incorrect tense:",
            options: [
                "He studied hard and passed the exam.",
                "He studies hard and passes the exam.",
                "He will study hard and will pass the exam.",
                "He studied hard and passes the exam."
            ],
            correct: 3,
            explanation: "The tenses should be consistent (both past or both present)."
        },
        {
            question: "Which sentence is correctly written?",
            options: [
                "By the time we arrived, the movie started.",
                "By the time we arrived, the movie had started.",
                "By the time we arrive, the movie started.",
                "By the time we arrived, the movie starts."
            ],
            correct: 1,
            explanation: "Past perfect indicates the movie started before we arrived."
        },
        {
            question: "Choose the sentence with proper verb tense:",
            options: [
                "She said she will come to the party.",
                "She said she would come to the party.",
                "She says she will come to the party.",
                "She said she comes to the party."
            ],
            correct: 1,
            explanation: "When the main verb is past tense, use 'would' instead of 'will'."
        }
    ],
    hard: [
        {
            question: "Which sentence demonstrates the most sophisticated use of verb tenses in a complex temporal relationship?",
            options: [
                "The researchers had completed the data collection before the new methodology was published, so they decided to repeat the study.",
                "The researchers completed the data collection before the new methodology was published, so they decided to repeat the study.",
                "The researchers have completed the data collection before the new methodology was published, so they decided to repeat the study.",
                "The researchers were completing the data collection before the new methodology was published, so they decided to repeat the study."
            ],
            correct: 0,
            explanation: "Option 1 correctly uses past perfect ('had completed') to show the data collection occurred before publication."
        },
        {
            question: "Identify the sentence with incorrect verb tense usage:",
            options: [
                "By the time the results were analyzed, the research team had already begun writing their report.",
                "By the time the results were analyzed, the research team already began writing their report.",
                "The research team had already begun writing their report by the time the results were analyzed.",
                "When the results were analyzed, the research team had already begun writing their report."
            ],
            correct: 1,
            explanation: "Option 2 incorrectly uses simple past ('began') instead of past perfect ('had begun') for the action that occurred first (starting the report before analyzing results)."
        },
        {
            question: "Which revision corrects the verb tense error in this sentence: 'The scientist said that she will publish her findings after she completes the analysis.'",
            options: [
                "The scientist said that she would publish her findings after she completed the analysis.",
                "The scientist says that she will publish her findings after she completes the analysis.",
                "The scientist said that she would publish her findings after she completes the analysis.",
                "Both A and B are correct"
            ],
            correct: 3,
            explanation: "Both options A and B correct the original error by maintaining proper tense sequence."
        }
    ]
},

// Rule 16: Adjectives vs. Adverbs
16: {
    easy: [
        {
            question: "Which modifies a verb?",
            options: ["Adjective", "Adverb", "Both", "Neither"],
            correct: 1,
            explanation: "Adverbs modify verbs, adjectives, or other adverbs."
        },
        {
            question: "Which is correct?",
            options: [
                "She sings beautiful.",
                "She sings beautifully.",
                "She beautiful sings.",
                "She sings beauty."
            ],
            correct: 1,
            explanation: "Use the adverb 'beautifully' to modify the verb 'sings'."
        },
        {
            question: "Which is correct after 'tastes'?",
            options: ["good", "well", "goodly", "goody"],
            correct: 0,
            explanation: "'Tastes' is a linking verb, so use the adjective 'good'."
        },
        {
            question: "Which modifies a noun?",
            options: ["Adjective", "Adverb", "Both", "Neither"],
            correct: 0,
            explanation: "Adjectives modify nouns or pronouns."
        },
        {
            question: "Complete: 'She speaks ___'",
            options: ["quick", "quickly", "quickful", "quickness"],
            correct: 1,
            explanation: "Use the adverb 'quickly' to modify the verb 'speaks'."
        }
    ],
    medium: [
        {
            question: "Which sentence correctly uses an adjective vs. adverb?",
            options: [
                "She sings beautiful.",
                "She sings beautifully.",
                "She beautiful sings.",
                "She sings beauty."
            ],
            correct: 1,
            explanation: "Adverbs modify verbs; 'beautifully' modifies 'sings'."
        },
        {
            question: "Choose the sentence with correct modifier usage:",
            options: [
                "The food tastes well.",
                "The food tastes good.",
                "The food tastes goodly.",
                "The food well tastes."
            ],
            correct: 1,
            explanation: "'Tastes' is a linking verb, so use the adjective 'good'."
        },
        {
            question: "Identify the incorrect modifier usage:",
            options: [
                "He drives carefully.",
                "He is a careful driver.",
                "He drives careful.",
                "He carefully drives."
            ],
            correct: 2,
            explanation: "Use the adverb 'carefully' to modify the verb 'drives'."
        },
        {
            question: "Which sentences use modifiers correctly?",
            options: [
                "She feels badly about the mistake.",
                "She feels bad about the mistake.",
                "She feels worse about the mistake.",
                "Both B and C are correct."
            ],
            correct: 3,
            explanation: "'Feels' is a linking verb requiring adjectives ('bad/worse'), not adverbs. 'Badly' would imply faulty tactile ability, not emotional state."
        },
        {
            question: "Choose the proper modifier:",
            options: [
                "The music sounds loudly.",
                "The music sounds loud.",
                "The music loudly sounds.",
                "The music sounds loudness."
            ],
            correct: 1,
            explanation: "'Sounds' is a linking verb, so use the adjective 'loud'."
        }
    ],
    hard: [
        {
            question: "Which sentence demonstrates the most sophisticated use of adjectives and adverbs in academic writing?",
            options: [
                "The extremely careful researcher meticulously documented each step of the complex procedure.",
                "The extreme careful researcher meticulous documented each step of the complex procedure.",
                "The extremely carefully researcher meticulous documented each step of the complex procedure.",
                "The extreme careful researcher meticulously documented each step of the complex procedure."
            ],
            correct: 0,
            explanation: "Option 1 correctly uses 'extremely' (adverb) to modify 'careful' (adjective), and 'meticulously' (adverb) to modify 'documented.'"
        },
        {
            question: "Identify the sentence with incorrect adjective/adverb usage:",
            options: [
                "The results seemed surprisingly good given the small sample size.",
                "The results seemed surprising good given the small sample size.",
                "The surprisingly good results were unexpected given the small sample size.",
                "The results were surprisingly good, which was unexpected given the small sample size."
            ],
            correct: 1,
            explanation: "Option 2 incorrectly uses 'surprising' (adjective) to modify 'good' (adjective)."
        },
        {
            question: "Which revision corrects the adjective/adverb error in this sentence: 'The team performed exceptional on the project, producing a really impressive results.'",
            options: [
                "The team performed exceptionally on the project, producing really impressive results.",
                "The team performed exceptionally on the project, producing very impressive results.",
                "The team performed exceptionally on the project, producing truly impressive results.",
                "All of the above are correct"
            ],
            correct: 3,
            explanation: "All options correct the original error by changing 'exceptional' to 'exceptionally'. While all are grammatically correct, they demonstrate different ways to express degree ('really', 'very', 'truly')."
        }
    ]
}
};


class PracticeSession {
    constructor() {
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answered = false;
        this.currentRule = 1;
        this.currentDifficulty = 'easy'; // Default to easy difficulty
    }

    // Initialize all practice sessions
    initializeAllSessions() {
        for (let rule = 1; rule <= 16; rule++) {
            this.setupPracticeSession(rule);
        }
    }

    // Setup practice session for a specific rule
    setupPracticeSession(ruleNumber) {
        this.currentRule = ruleNumber;
        const difficultySelect = document.getElementById(`difficulty-${ruleNumber}`);
        
        if (difficultySelect) {
            // Set default to easy
            difficultySelect.value = 'easy';
            
            difficultySelect.addEventListener('change', () => {
                this.currentDifficulty = difficultySelect.value;
                this.loadQuestions(ruleNumber, this.currentDifficulty);
                this.resetPracticeSession(ruleNumber);
            });
        }
        
        // Load initial questions (easy difficulty)
        this.loadQuestions(ruleNumber, 'easy');
        this.resetPracticeSession(ruleNumber);
    }

    // Load questions for specific rule and difficulty
    loadQuestions(ruleNumber, difficulty) {
        this.currentQuestions = questionBanks[ruleNumber][difficulty] || [];
        
        // Update total count display
        const totalElement = document.getElementById(`total-${ruleNumber}`);
        if (totalElement) {
            totalElement.textContent = this.currentQuestions.length;
        }
    }

    // Reset practice session
    resetPracticeSession(ruleNumber) {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answered = false;
        
        this.updateScore(ruleNumber);
        this.displayQuestion(ruleNumber);
        this.updateNavigationButtons(ruleNumber);
}

    // Display current question
    displayQuestion(ruleNumber) {
    const container = document.getElementById(`practice-questions-${ruleNumber}`);
    if (!container || this.currentQuestions.length === 0) {
        if (container) {
            container.innerHTML = '<p>No questions available for this difficulty level.</p>';
        }
        return;
    }

    const question = this.currentQuestions[this.currentQuestionIndex];
    
    container.innerHTML = `
        <div class="practice-question active">
            <div class="question-text">${this.currentQuestionIndex + 1}. ${question.question}</div>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" data-index="${index}">
                        <input type="radio" name="question-${ruleNumber}" value="${index}" style="display: none;">
                        <span class="radio-check"></span>
                        ${option}
                    </div>
                `).join('')}
            </div>
            <button class="confirm-btn">Confirm Answer</button>
            <div class="explanation" id="explanation-${ruleNumber}"></div>
        </div>
    `;
    
    // Add event listeners after rendering
    this.addOptionEventListeners(ruleNumber);
    this.addConfirmButtonListener(ruleNumber);
    
    this.answered = false;
}
addOptionEventListeners(ruleNumber) {
    const options = document.querySelectorAll(`#practice-questions-${ruleNumber} .option`);
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            if (this.answered) return;
            
            // Remove selected class from all options
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            option.classList.add('selected');
            
            // Show confirm button
            const confirmBtn = document.querySelector(`#practice-questions-${ruleNumber} .confirm-btn`);
            if (confirmBtn) {
                confirmBtn.style.display = 'block';
            }
        });
    });
}
addConfirmButtonListener(ruleNumber) {
    const confirmBtn = document.querySelector(`#practice-questions-${ruleNumber} .confirm-btn`);
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            this.confirmAnswer(ruleNumber);
        });
    }
}
    // Handle option selection
    selectOption(ruleNumber, optionIndex) {
        if (this.answered) return;
        
        const options = document.querySelectorAll(`#practice-questions-${ruleNumber} .option`);
        options.forEach(option => option.classList.remove('selected'));
        
        options[optionIndex].classList.add('selected');
        
        const confirmBtn = document.querySelector(`#practice-questions-${ruleNumber} .confirm-btn`);
        if (confirmBtn) {
            confirmBtn.style.display = 'block';
        }
}

    // Confirm answer and show explanation
    confirmAnswer(ruleNumber) {
        if (this.answered) return;
        
        const selectedOption = document.querySelector(`#practice-questions-${ruleNumber} .option.selected`);
        if (!selectedOption) return;
        
        const selectedIndex = Array.from(selectedOption.parentNode.children).indexOf(selectedOption);
        const question = this.currentQuestions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;
        
        if (isCorrect) {
            this.score++;
            selectedOption.classList.add('correct-answer');
        } else {
            selectedOption.classList.add('incorrect-answer');
            const correctOption = document.querySelectorAll(`#practice-questions-${ruleNumber} .option`)[question.correct];
            correctOption.classList.add('correct-answer');
        }
        
        // Show explanation
        const explanationDiv = document.getElementById(`explanation-${ruleNumber}`);
        if (explanationDiv) {
            explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
            explanationDiv.classList.add('show');
        }
        
        // Hide confirm button
        const confirmBtn = document.querySelector(`#practice-questions-${ruleNumber} .confirm-btn`);
        if (confirmBtn) {
            confirmBtn.style.display = 'none';
        }
        
        this.answered = true;
        this.updateScore(ruleNumber);
        this.updateNavigationButtons(ruleNumber);
    }

    // Update score display
    updateScore(ruleNumber) {
        const scoreElement = document.getElementById(`score-${ruleNumber}`);
        if (scoreElement) {
            scoreElement.textContent = this.score;
        }
    }

    // Update navigation buttons
    updateNavigationButtons(ruleNumber) {
        const prevBtn = document.getElementById(`prev-${ruleNumber}`);
        const nextBtn = document.getElementById(`next-${ruleNumber}`);
        
        if (prevBtn) {
            prevBtn.disabled = this.currentQuestionIndex === 0;
            prevBtn.onclick = () => this.previousQuestion(ruleNumber);
        }
        
        if (nextBtn) {
            if (this.currentQuestionIndex === this.currentQuestions.length - 1) {
                nextBtn.textContent = 'Restart';
                nextBtn.disabled = false;
                nextBtn.onclick = () => this.resetPracticeSession(ruleNumber);
            } else {
                nextBtn.textContent = 'Next Question';
                nextBtn.disabled = !this.answered;
                nextBtn.onclick = () => this.nextQuestion(ruleNumber);
            }
        }
    }

    // Navigate to previous question
    previousQuestion(ruleNumber) {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion(ruleNumber);
            this.updateNavigationButtons(ruleNumber);
        }
    }

    // Navigate to next question
    nextQuestion(ruleNumber) {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion(ruleNumber);
            this.updateNavigationButtons(ruleNumber);
        }
    }
}

// =============================================
// INITIALIZE THE APPLICATION
// =============================================

// Create a global instance of PracticeSession
const practiceSession = new PracticeSession();

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    practiceSession.initializeAllSessions();
});

console.log(`Added ${options.length} option listeners for rule ${ruleNumber}`);