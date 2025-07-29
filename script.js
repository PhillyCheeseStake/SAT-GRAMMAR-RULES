const questionBanks = {
    1: [
        {
            question: "Which of the following sentences correctly uses a period or semicolon?",
            options: [
                "The experiment was successful, the results were published.",
                "The experiment was successful; the results were published.",
                "The experiment was successful the results were published.",
                "The experiment was successful, and the results were published."
            ],
            correct: 1,
            explanation: "Option 2 is correct because it uses a semicolon to properly separate two independent clauses. Option 1 is a comma splice, option 3 is a run-on sentence, and option 4 uses 'and' which makes it a different structure."
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
            explanation: "Option 3 is incorrect because it's a comma splice. 'Then' is not a coordinating conjunction (FANBOYS), so it can't be used with just a comma to join two independent clauses."
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
    2: [
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
                "The conference covered—three topics: climate change, renewable energy, and sustainable agriculture.",
                "The conference covered three topics: climate change—renewable energy, and sustainable agriculture.",
                "The conference: covered three topics—climate change, renewable energy, and sustainable agriculture."
            ],
            correct: 0,
            explanation: "Option 1 is correct because the dash properly introduces the list after a complete independent clause."
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
    3: [
        {
            question: "Which sentence correctly uses a comma with FANBOYS?",
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
            explanation: "Option 2 is correct because when the subject is implied in the second clause, no comma is needed before 'and'."
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
    4: [
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
    5: [
        {
            question: "Choose the correct transition: 'The experiment failed; _____, we learned valuable information.'",
            options: [
                "however",
                "therefore",
                "furthermore",
                "consequently"
            ],
            correct: 0,
            explanation: "'However' is correct because it shows contrast between failure and positive outcome."
        },
        {
            question: "Select the appropriate transition: 'The roads were icy; _____, many accidents occurred.'",
            options: [
                "however",
                "nevertheless",
                "therefore",
                "meanwhile"
            ],
            correct: 2,
            explanation: "'Therefore' shows the correct cause-and-effect relationship."
        },
        {
            question: "Which transition is LEAST appropriate: 'The team worked hard; _____, they won.'",
            options: [
                "consequently",
                "as a result",
                "however",
                "therefore"
            ],
            correct: 2,
            explanation: "'However' suggests contrast rather than the cause-and-effect relationship."
        },
        {
            question: "Choose the best transition: 'The author uses vivid imagery; _____, she employs symbolism.'",
            options: [
                "however",
                "in addition",
                "consequently",
                "otherwise"
            ],
            correct: 1,
            explanation: "'In addition' continues the idea of listing techniques."
        },
        {
            question: "Which sentence uses a transition incorrectly?",
            options: [
                "The data was inconclusive; nevertheless, we published.",
                "The data was inconclusive; moreover, we published.",
                "The data was inconclusive; therefore, we published.",
                "The data was inconclusive; however, we published."
            ],
            correct: 2,
            explanation: "'Therefore' incorrectly suggests publishing BECAUSE data was inconclusive."
        }
    ],
    6: [
        {
            question: "Which sentence correctly punctuates non-essential information?",
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
            question: "Identify the correctly punctuated sentence:",
            options: [
                "My brother—who lives abroad—is visiting.",
                "My brother, who lives abroad—is visiting.",
                "My brother—who lives abroad, is visiting.",
                "My brother who lives abroad is visiting."
            ],
            correct: 0,
            explanation: "Option 1 correctly uses two dashes around non-essential clause."
        },
        {
            question: "Which sentence incorrectly punctuates non-essential info?",
            options: [
                "Rome (founded in 753 BC) is ancient.",
                "Rome, founded in 753 BC, is ancient.",
                "Rome founded in 753 BC is ancient.",
                "Rome—founded in 753 BC—is ancient."
            ],
            correct: 2,
            explanation: "Option 3 fails to punctuate the non-essential information."
        },
        {
            question: "Choose the properly punctuated sentence:",
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
            question: "Which demonstrates correct punctuation?",
            options: [
                "Einstein—known for relativity—was brilliant.",
                "Einstein, known for relativity—was brilliant.",
                "Einstein—known for relativity, was brilliant.",
                "Einstein known for relativity was brilliant."
            ],
            correct: 0,
            explanation: "Option 1 correctly uses two dashes around non-essential info."
        }
    ],
    7: [
        {
            question: "Which sentence correctly punctuates the name?",
            options: [
                "My friend, Alice is coming over.",
                "My friend Alice, is coming over.",
                "My friend Alice is coming over.",
                "My friend, Alice, is coming over."
            ],
            correct: 2,
            explanation: "Option 3 is correct when the name is essential (no commas)."
        },
        {
            question: "Identify the correctly punctuated title:",
            options: [
                "Director, James Cameron, spoke.",
                "Director James Cameron spoke.",
                "The director, James Cameron spoke.",
                "The director James Cameron, spoke."
            ],
            correct: 1,
            explanation: "Option 2 is correct when the title and name form one essential unit."
        },
        {
            question: "Which sentence is incorrect?",
            options: [
                "Author J.K. Rowling wrote Harry Potter.",
                "The author, J.K. Rowling, wrote Harry Potter.",
                "The author J.K. Rowling wrote Harry Potter.",
                "Author, J.K. Rowling wrote Harry Potter."
            ],
            correct: 3,
            explanation: "Option 4 incorrectly uses a single comma before the name."
        },
        {
            question: "Choose the properly punctuated sentence:",
            options: [
                "Professor Smith will lecture today.",
                "The professor, Smith will lecture today.",
                "The professor Smith, will lecture today.",
                "Professor, Smith will lecture today."
            ],
            correct: 0,
            explanation: "Option 1 is correct when the title and name form one essential unit."
        },
        {
            question: "Which demonstrates correct punctuation?",
            options: [
                "The artist, Monet, painted water lilies.",
                "The artist Monet painted water lilies.",
                "Artist Monet painted water lilies.",
                "Artist, Monet painted water lilies."
            ],
            correct: 0,
            explanation: "Option 1 is correct when the name is non-essential (two commas)."
        }
    ],
    8: [
        {
            question: "Which sentence correctly uses commas in a list?",
            options: [
                "She bought apples, oranges and bananas.",
                "She bought apples, oranges, and bananas.",
                "She bought apples oranges, and bananas.",
                "She bought apples oranges and bananas."
            ],
            correct: 1,
            explanation: "Option 2 correctly uses the Oxford comma before 'and'."
        },
        {
            question: "Identify the correctly punctuated sentence:",
            options: [
                "The old, wooden chair creaked.",
                "The old wooden, chair creaked.",
                "The old wooden chair, creaked.",
                "The old, wooden, chair creaked."
            ],
            correct: 0,
            explanation: "Option 1 correctly uses a comma between reversible adjectives."
        },
        {
            question: "Which sentence is incorrect?",
            options: [
                "She traveled to Paris, France and Rome, Italy.",
                "She traveled to Paris, France, and Rome, Italy.",
                "She traveled to Paris France and Rome Italy.",
                "She traveled to Paris, France, Rome, Italy."
            ],
            correct: 2,
            explanation: "Option 3 fails to use commas between city/country pairs."
        },
        {
            question: "Choose the properly punctuated sentence:",
            options: [
                "The quick brown fox jumped.",
                "The quick, brown fox jumped.",
                "The quick brown, fox jumped.",
                "The quick, brown, fox jumped."
            ],
            correct: 0,
            explanation: "No comma needed between non-reversible adjectives."
        },
        {
            question: "Which demonstrates correct comma usage?",
            options: [
                "Students who study regularly, perform better.",
                "Students, who study regularly perform better.",
                "Students who study regularly perform better.",
                "Students, who study regularly, perform better."
            ],
            correct: 2,
            explanation: "No commas needed around essential clause."
        }
    ],
    9: [
        {
            question: "Which sentence uses apostrophes correctly?",
            options: [
                "The dogs bowl is empty.",
                "The dog's bowl is empty.",
                "The dogs' bowl is empty.",
                "The dogs's bowl is empty."
            ],
            correct: 1,
            explanation: "Option 2 is correct for singular possessive ('dog's')."
        },
        {
            question: "Identify the correct plural possessive:",
            options: [
                "The childrens toys were everywhere.",
                "The children's toys were everywhere.",
                "The childrens' toys were everywhere.",
                "The childrens's toys were everywhere."
            ],
            correct: 1,
            explanation: "Option 2 is correct for irregular plural possessive ('children's')."
        },
        {
            question: "Which sentence is incorrect?",
            options: [
                "Its time to go.",
                "It's time to go.",
                "The cat licked its paws.",
                "It's been raining all day."
            ],
            correct: 0,
            explanation: "Option 1 incorrectly uses 'its' instead of the contraction 'it's'."
        },
        {
            question: "Choose the properly punctuated sentence:",
            options: [
                "The Jones' car is new.",
                "The Jones's car is new.",
                "The Joneses car is new.",
                "The Joneses' car is new."
            ],
            correct: 3,
            explanation: "Option 4 is correct for plural family name possessive ('Joneses')."
        },
        {
            question: "Which demonstrates correct apostrophe usage?",
            options: [
                "Who's book is this?",
                "Whose book is this?",
                "Who'se book is this?",
                "Whose's book is this?"
            ],
            correct: 1,
            explanation: "'Whose' is the possessive form; 'who's' means 'who is'."
        }
    ],
    10: [
        {
            question: "Which sentence uses pronouns correctly?",
            options: [
                "Each student must bring their textbook.",
                "Each student must bring his or her textbook.",
                "Each student must bring they're textbook.",
                "Each student must bring its textbook."
            ],
            correct: 1,
            explanation: "Option 2 correctly uses singular 'his or her' with 'each'."
        },
        {
            question: "Identify the correct pronoun reference:",
            options: [
                "When the car hit the tree, it was destroyed.",
                "The tree was destroyed when the car hit it.",
                "The car was destroyed when it hit the tree.",
                "Both the car and tree were destroyed when it crashed."
            ],
            correct: 2,
            explanation: "Option 3 has clear pronoun reference ('it' clearly refers to 'car')."
        },
        {
            question: "Which sentence is incorrect?",
            options: [
                "The team celebrated its victory.",
                "The team celebrated their victory.",
                "The team members celebrated their victory.",
                "The team celebrated it's victory."
            ],
            correct: 3,
            explanation: "Option 4 incorrectly uses the contraction 'it's' instead of possessive 'its'."
        },
        {
            question: "Choose the proper pronoun case:",
            options: [
                "Between you and I, this is easy.",
                "Between you and me, this is easy.",
                "Between you and myself, this is easy.",
                "Between you and mine, this is easy."
            ],
            correct: 1,
            explanation: "Objective case 'me' is correct after preposition 'between'."
        },
        {
            question: "Which demonstrates correct pronoun usage?",
            options: [
                "Whom is going to the party?",
                "Who is going to the party?",
                "To who should I give this?",
                "Who should I give this to?"
            ],
            correct: 1,
            explanation: "'Who' is correct as the subject of the verb 'is going'."
        }
    ],
    11: [
        {
            question: "Which sentence has proper subject-verb agreement?",
            options: [
                "The list of items are on the desk.",
                "The list of items is on the desk.",
                "The items on the list is on the desk.",
                "The items on the list belongs on the desk."
            ],
            correct: 1,
            explanation: "Option 2 is correct - the singular subject 'list' takes singular verb 'is'."
        },
        {
            question: "Identify the correct verb form:",
            options: [
                "Neither the teacher nor the students was ready.",
                "Neither the teacher nor the students were ready.",
                "Neither the teacher or the students were ready.",
                "Neither the teacher nor the students is ready."
            ],
            correct: 1,
            explanation: "Option 2 is correct - with 'nor', the verb agrees with the closer subject ('students')."
        },
        {
            question: "Which sentence is incorrect?",
            options: [
                "The committee meets every Tuesday.",
                "The committee are divided in their opinions.",
                "The committee meet every Tuesday.",
                "The committee members are divided."
            ],
            correct: 2,
            explanation: "Option 3 incorrectly uses plural verb with collective noun 'committee'."
        },
        {
            question: "Choose the proper verb form:",
            options: [
                "Each of the students have a textbook.",
                "Each of the students has a textbook.",
                "Each of the students having a textbook.",
                "Each of the students are having a textbook."
            ],
            correct: 1,
            explanation: "Option 2 is correct - 'each' takes singular verb 'has'."
        },
        {
            question: "Which demonstrates correct agreement?",
            options: [
                "The number of applicants are increasing.",
                "A number of applicants is increasing.",
                "The number of applicants is increasing.",
                "A number of applicants are increasing."
            ],
            correct: 2,
            explanation: "'The number' takes singular verb; 'a number' takes plural."
        }
    ],
    12: [
        {
            question: "Which sentence maintains consistent verb tense?",
            options: [
                "She walks to school and ate lunch there.",
                "She walked to school and eats lunch there.",
                "She walks to school and eats lunch there.",
                "She walked to school and ate lunch there."
            ],
            correct: 3,
            explanation: "Option 4 maintains consistent past tense."
        },
        {
            question: "Identify the correct perfect tense:",
            options: [
                "She has been studying since morning.",
                "She was studying since morning.",
                "She is studying since morning.",
                "She studied since morning."
            ],
            correct: 0,
            explanation: "Option 1 correctly uses present perfect for ongoing action."
        },
        {
            question: "Which sentence is incorrect?",
            options: [
                "By the time we arrived, the movie had started.",
                "After she finished her homework, she went to bed.",
                "Before he left, he has said goodbye.",
                "When I saw her, she was crying."
            ],
            correct: 2,
            explanation: "Option 3 incorrectly mixes past perfect with simple past."
        },
        {
            question: "Choose the proper tense sequence:",
            options: [
                "I will call you when I will arrive.",
                "I will call you when I arrive.",
                "I call you when I will arrive.",
                "I called you when I arrive."
            ],
            correct: 1,
            explanation: "Option 2 correctly uses present tense in time clause with future main verb."
        },
        {
            question: "Which demonstrates correct tense usage?",
            options: [
                "She said she is tired.",
                "She said she was tired.",
                "She says she was tired.",
                "She has said she is tired."
            ],
            correct: 1,
            explanation: "Option 2 correctly backshifts tense in reported speech."
        }
    ],
    13: [
        {
            question: "Which sentence has parallel structure?",
            options: [
                "She likes hiking, swimming, and to ride bicycles.",
                "She likes hiking, swimming, and riding bicycles.",
                "She likes to hike, swimming, and riding bicycles.",
                "She likes to hike, to swim, and riding bicycles."
            ],
            correct: 1,
            explanation: "Option 2 maintains parallel gerund forms."
        },
        {
            question: "Identify the correct parallel construction:",
            options: [
                "The plan is simple, effective, and it won't cost much.",
                "The plan is simple, effective, and inexpensive.",
                "The plan is simple, it's effective, and inexpensive.",
                "The plan is simplicity, effective, and low-cost."
            ],
            correct: 1,
            explanation: "Option 2 maintains parallel adjective forms."
        },
        {
            question: "Which sentence is incorrect?",
            options: [
                "He not only plays guitar but also sings.",
                "He plays not only guitar but also sings.",
                "Not only does he play guitar, but he also sings.",
                "He not only plays guitar but also writes songs."
            ],
            correct: 1,
            explanation: "Option 2 breaks parallelism by mixing verb and noun after 'not only/but also'."
        },
        {
            question: "Choose the properly parallel sentence:",
            options: [
                "To be or not being, that is the question.",
                "To be or not to be, that is the question.",
                "Being or not to be, that is the question.",
                "To be or not being, that was the question."
            ],
            correct: 1,
            explanation: "Option 2 maintains parallel infinitive forms."
        },
        {
            question: "Which demonstrates correct parallelism?",
            options: [
                "She was praised for her intelligence and being diligent.",
                "She was praised for being intelligent and diligence.",
                "She was praised for her intelligence and diligence.",
                "She was praised for intelligent and being diligent."
            ],
            correct: 2,
            explanation: "Option 3 maintains parallel noun forms."
        }
    ],
    14: [
        {
            question: "Which sentence has a dangling modifier?",
            options: [
                "Running down the street, my hat blew off.",
                "As I ran down the street, my hat blew off.",
                "My hat blew off as I ran down the street.",
                "While running down the street, I lost my hat."
            ],
            correct: 0,
            explanation: "Option 1 implies the hat was running down the street."
        },
        {
            question: "Identify the corrected sentence:",
            options: [
                "After finishing the book, the movie was watched.",
                "After finishing the book, we watched the movie.",
                "After the book was finished, the movie was watched.",
                "Having finished the book, the movie was next."
            ],
            correct: 1,
            explanation: "Option 2 clearly shows who finished the book."
        },
        {
            question: "Which sentence is incorrect?",
            options: [
                "Born in 1907, Frida Kahlo painted self-portraits.",
                "Born in 1907, self-portraits were Frida Kahlo's specialty.",
                "Frida Kahlo, born in 1907, painted self-portraits.",
                "Born in 1907, the artist Frida Kahlo painted self-portraits."
            ],
            correct: 1,
            explanation: "Option 2 implies self-portraits were born in 1907."
        },
        {
            question: "Choose the properly structured sentence:",
            options: [
                "While cooking dinner, the phone rang.",
                "While I was cooking dinner, the phone rang.",
                "While cooking dinner, the phone was ringing.",
                "The phone rang while cooking dinner."
            ],
            correct: 1,
            explanation: "Option 2 clearly shows who was cooking."
        },
        {
            question: "Which demonstrates correct modifier placement?",
            options: [
                "I saw a car driving home that was red.",
                "Driving home, I saw a red car.",
                "I saw a red car driving home.",
                "A red car was seen by me driving home."
            ],
            correct: 1,
            explanation: "Option 2 clearly shows who was driving."
        }
    ],
    15: [
        {
            question: "Which sentence has a faulty comparison?",
            options: [
                "Her salary is higher than her assistant.",
                "Her salary is higher than her assistant's.",
                "Her salary is higher than that of her assistant.",
                "She earns more than her assistant does."
            ],
            correct: 0,
            explanation: "Option 1 incorrectly compares salary to a person."
        },
        {
            question: "Identify the correct comparison:",
            options: [
                "Seattle's climate is milder than Chicago.",
                "Seattle's climate is milder than Chicago's.",
                "Seattle's climate is milder than in Chicago.",
                "Seattle is milder than Chicago's climate."
            ],
            correct: 1,
            explanation: "Option 2 correctly compares climates."
        },
        {
            question: "Which sentence is incorrect?",
            options: [
                "The results were better than expected.",
                "The results were better then we expected.",
                "The results were better than we expected.",
                "We expected worse results than we got."
            ],
            correct: 1,
            explanation: "Option 2 incorrectly uses 'then' instead of 'than'."
        },
        {
            question: "Choose the proper comparison:",
            options: [
                "She has less books than I do.",
                "She has fewer books than I do.",
                "She has lesser books than I do.",
                "She has few books than I do."
            ],
            correct: 1,
            explanation: "Option 2 correctly uses 'fewer' with countable nouns."
        },
        {
            question: "Which demonstrates correct comparison?",
            options: [
                "This car's mileage is better than that car.",
                "This car's mileage is better than that car's.",
                "This car gets better mileage than that car.",
                "This car's mileage is better than that one."
            ],
            correct: 1,
            explanation: "Option 2 correctly compares mileages."
        }
    ],
    16: [
        {
            question: "Which sentence correctly uses a question mark?",
            options: [
                "She asked how old I was?",
                "How old are you.",
                "How old are you?",
                "I wonder how old you are?"
            ],
            correct: 2,
            explanation: "Option 3 is correct for a direct question."
        },
        {
            question: "Identify the correctly punctuated sentence:",
            options: [
                "The question is: who will be elected?",
                "The question is who will be elected?",
                "The question is, who will be elected.",
                "The question is who will be elected."
            ],
            correct: 0,
            explanation: "Option 1 correctly uses colon and question mark for direct question."
        },
        {
            question: "Which sentence is incorrect?",
            options: [
                "Do you know when the train arrives?",
                "I wonder when the train arrives.",
                "Could you tell me when the train arrives?",
                "When does the train arrive."
            ],
            correct: 3,
            explanation: "Option 4 needs a question mark for direct question."
        },
        {
            question: "Choose the properly punctuated sentence:",
            options: [
                "She asked, 'What time is it?'",
                "She asked what time it was?",
                "She asked 'what time is it.'",
                "She asked, what time is it?"
            ],
            correct: 0,
            explanation: "Option 1 correctly punctuates the quoted question."
        },
        {
            question: "Which demonstrates correct punctuation?",
            options: [
                "The main question is how much will it cost?",
                "The main question is how much will it cost.",
                "The main question is: how much will it cost?",
                "The main question is, how much will it cost."
            ],
            correct: 2,
            explanation: "Option 3 correctly uses colon and question mark for direct question."
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    for (const ruleNum in questionBanks) {
        initPracticeSection(ruleNum);
    }

    for (const ruleNum in questionBanks) {
        const nextBtn = document.getElementById(`next-${ruleNum}`);
        const prevBtn = document.getElementById(`prev-${ruleNum}`);
        
        nextBtn.addEventListener('click', () => navigateQuestions(ruleNum, 1));
        prevBtn.addEventListener('click', () => navigateQuestions(ruleNum, -1));
    }
});

function initPracticeSection(ruleNum) {
    const container = document.getElementById(`practice-questions-${ruleNum}`);
    const questions = questionBanks[ruleNum]; // Keep original order

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = `practice-question ${index === 0 ? 'active' : ''}`;
        questionDiv.dataset.index = index;

        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = q.question;
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        q.options.forEach((opt, optIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = opt;
            optionDiv.dataset.optIndex = optIndex;
            optionDiv.addEventListener('click', () => selectOption(ruleNum, index, optIndex));
            optionsDiv.appendChild(optionDiv);
        });

        questionDiv.appendChild(optionsDiv);

        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation';
        explanationDiv.textContent = q.explanation;
        questionDiv.appendChild(explanationDiv);

        container.appendChild(questionDiv);
    });
}

function selectOption(ruleNum, qIndex, optIndex) {
    const questions = document.querySelectorAll(`#practice-questions-${ruleNum} .practice-question`);
    const question = questions[qIndex];
    const options = question.querySelectorAll('.option');
    const correctIndex = questionBanks[ruleNum][qIndex].correct;
    const explanation = question.querySelector('.explanation');

    options.forEach(opt => {
        opt.classList.remove('selected', 'correct-answer', 'incorrect-answer');
    });

    options[optIndex].classList.add('selected');

    if (optIndex === correctIndex) {
        options[optIndex].classList.add('correct-answer');
        if (!question.dataset.answered) {
            const scoreEl = document.getElementById(`score-${ruleNum}`);
            scoreEl.textContent = parseInt(scoreEl.textContent) + 1;
            question.dataset.answered = 'true';
        }
    } else {
        options[optIndex].classList.add('incorrect-answer');
        options[correctIndex].classList.add('correct-answer');
    }

    explanation.classList.add('show');
    
    const prevBtn = document.getElementById(`prev-${ruleNum}`);
    const nextBtn = document.getElementById(`next-${ruleNum}`);
    const totalQuestions = questionBanks[ruleNum].length;
    
    prevBtn.disabled = qIndex === 0;
    nextBtn.disabled = qIndex === totalQuestions - 1;
}

function navigateQuestions(ruleNum, direction) {
    const questions = document.querySelectorAll(`#practice-questions-${ruleNum} .practice-question`);
    const prevBtn = document.getElementById(`prev-${ruleNum}`);
    const nextBtn = document.getElementById(`next-${ruleNum}`);
    
    let currentIndex = -1;
    questions.forEach((q, index) => {
        if (q.classList.contains('active')) {
            currentIndex = index;
            q.classList.remove('active');
        }
    });
    
    const newIndex = currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < questions.length) {
        questions[newIndex].classList.add('active');
        prevBtn.disabled = newIndex === 0;
        nextBtn.disabled = newIndex === questions.length - 1;
    }
}
