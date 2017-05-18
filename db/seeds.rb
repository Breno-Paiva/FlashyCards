# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Subject.delete_all
User.delete_all
Deck.delete_all
Card.delete_all
Score.delete_all

User.create!(username: "flashyUser", password: "friskyb")

Subject.create!(name: "Civics and History")

  Deck.create!(name: "Principles of American Democracy", subject_id: Subject.find_by_name("Civics and History").id)
    Card.create!(question: "What is the supreme law of the land?", answer:"The constitution", deck_id: Deck.find_by_name("Principles of American Democracy").id)
    Card.create!(question: "What does the Constitution do?", answer:"Defines the government", deck_id: Deck.find_by_name("Principles of American Democracy").id)
    Card.create!(question: "What are the first three words of the Constitution?", answer:"We the People", deck_id: Deck.find_by_name("Principles of American Democracy").id)
    Card.create!(question: "What is an amendment?", answer:"A change or addition to the Constitution", deck_id: Deck.find_by_name("Principles of American Democracy").id)
    Card.create!(question: "What do we call the first ten amendments to the Constitution?", answer:"The Bill of Rights", deck_id: Deck.find_by_name("Principles of American Democracy").id)
    Card.create!(question: "What is are some rights of freedom from the First Amendment?", answer:"Speech, religion, assembly, press, petition the government", deck_id: Deck.find_by_name("Principles of American Democracy").id)
    Card.create!(question: "How many amendments does the Constitution have?", answer:"27", deck_id: Deck.find_by_name("Principles of American Democracy").id)
    Card.create!(question: "What did the Declaration of Independence do?", answer:"Declared independence from Great Britain", deck_id: Deck.find_by_name("Principles of American Democracy").id)
    Card.create!(question: "What are three rights in the Declaration of Independence", answer:"Life, liberty, and pursuit of happiness", deck_id: Deck.find_by_name("Principles of American Democracy").id)
    Card.create!(question: "What is freedom of religion?", answer:"You can practice any religion, or not practice a religion", deck_id: Deck.find_by_name("Principles of American Democracy").id)
    Card.create!(question: "What is the economic system in the United States?", answer:"capitalist economy", deck_id: Deck.find_by_name("Principles of American Democracy").id)
    Card.create!(question: "What is the “rule of law”", answer:"Everyone must follow the law.", deck_id: Deck.find_by_name("Principles of American Democracy").id)

  Deck.create!(name: "System of Government", subject_id: Subject.find_by_name("Civics and History").id)
    Card.create!(question: "Name one branch or part of the government.", answer:"Congress, legislative, President, executive, the courts, judicial", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "What stops one branch of government from becoming too powerful", answer:"checks and balances and separation of powers", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "Who is in charge of the executive branch?", answer:"The President", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "Who makes federal laws?", answer:"Congress, Senate and House (of Representatives), (U.S. or national) legislature", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "What are the two parts of the U.S. Congress?", answer:"the Senate and House (of Representatives)", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "How many U.S. Senators are there?", answer:"one hundred", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "We elect a U.S. Senator for how many years?", answer:"six", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "Who one of your New Jersey's U.S. Senators now?", answer:"Cory Brooker", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "The House of Representatives has how many voting members?", answer:"435", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "We elect a U.S. Representative for how many years?", answer:"two", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "Who does a U.S. Senator represent?", answer:"all people of the state", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "Why do some states have more Representatives than other states?", answer:"because of the state’s population", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "We elect a President for how many years?", answer:"four", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "In what month do we vote for President?", answer:"November", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "What is the name of the President of the United States now?", answer:"Donald Trump", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "What is the name of the Vice President of the United States now?", answer:"Mike Pence", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "If the President can no longer serve, who becomes President?", answer:"the Vice President", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "If both the President and the Vice President can no longer serve, who becomes President?", answer:"the Speaker of the House", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "Who is the Commander in Chief of the military?", answer:"the President", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "Who signs bills to become laws?", answer:"the President", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "Who vetoes bills?", answer:"the President", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "What does the President’s Cabinet do?", answer:"advises the President", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "What does the judicial branch do?", answer:"Reviews laws", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "What is the highest court in the United States?", answer:"the Supreme Court", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "How many justices are on the Supreme Court?", answer:"nine", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "Who is the Chief Justice of the United States now?", answer:"John Roberts (John G. Roberts, Jr.)", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "What are some powers of the federal government?", answer:"to print money, to declare war, to create an army, to make treaties", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "What are the two major political parties in the United States?", answer:"Democratic and Republican", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "Who is the Governor of New Jersey?", answer:"Chris Christie", deck_id: Deck.find_by_name("System of Government").id)
    Card.create!(question: "What is the name of the Speaker of the House of Representatives now?", answer:"Paul D. Ryan", deck_id: Deck.find_by_name("System of Government").id)

  Deck.create!(name: "Rights and Responsibilities", subject_id: Subject.find_by_name("Civics and History").id)
    Card.create!(question: "There are four amendments to the Constitution about who can vote.", answer:"Citizens eighteen (18) and older (can vote). You don’t have to pay (a poll tax) to vote. Any citizen can vote (Women and men can vote). A male citizen of any race (can vote).", deck_id: Deck.find_by_name("Rights and Responsibilities").id)
    Card.create!(question: "What is a responsibility that is only for United States citizens?", answer:"serve on a jury, vote in a federal election", deck_id: Deck.find_by_name("Rights and Responsibilities").id)
    Card.create!(question: "Name a right only for United States citizens.", answer:"vote in a federal election, run for federal office", deck_id: Deck.find_by_name("Rights and Responsibilities").id)
    Card.create!(question: "What are rights of everyone living in the United States?", answer:"freedom of expression, freedom of speech, freedom of assembly, freedom to petition the government, freedom of religion, the right to bear arms", deck_id: Deck.find_by_name("Rights and Responsibilities").id)
    Card.create!(question: "What do we show loyalty to when we say the Pledge of Allegiance?", answer:"the United States, the flag", deck_id: Deck.find_by_name("Rights and Responsibilities").id)
    Card.create!(question: "How old do citizens have to be to vote for President?", answer:"eighteen (18) and older", deck_id: Deck.find_by_name("Rights and Responsibilities").id)
    Card.create!(question: "When is the last day you can send in federal income tax forms?", answer:"April 15", deck_id: Deck.find_by_name("Rights and Responsibilities").id)
    Card.create!(question: "When must all men register for the Selective Service?", answer:"between 18 and 26", deck_id: Deck.find_by_name("Rights and Responsibilities").id)

  Deck.create!(name: "Colonial Period and Independence", subject_id: Subject.find_by_name("Civics and History").id)
    Card.create!(question: "What is a reason colonists came to America", answer:"freedom, political liberty, religious freedom, economic opportunity", deck_id: Deck.find_by_name("Colonial Period and Independence").id)
    Card.create!(question: "Who lived in America before the Europeans arrived?", answer:"Native Americans", deck_id: Deck.find_by_name("Colonial Period and Independence").id)
    Card.create!(question: "What group of people was taken to America and sold as slaves?", answer:"people from Africa", deck_id: Deck.find_by_name("Colonial Period and Independence").id)
    Card.create!(question: "Why did the colonists fight the British?", answer:"because of high taxes (taxation without representation), because the British army stayed in their houses (boarding, quartering), because they didn’t have self-government", deck_id: Deck.find_by_name("Colonial Period and Independence").id)
    Card.create!(question: "Who wrote the Declaration of Independence?", answer:"(Thomas) Jefferson", deck_id: Deck.find_by_name("Colonial Period and Independence").id)
    Card.create!(question: "When was the Declaration of Independence adopted?", answer:"July 4, 1776", deck_id: Deck.find_by_name("Colonial Period and Independence").id)
    Card.create!(question: "What happened at the Constitutional Convention?", answer:"The Founding Fathers wrote the Constitution.", deck_id: Deck.find_by_name("Colonial Period and Independence").id)
    Card.create!(question: "When was the Constitution written?", answer:"1787", deck_id: Deck.find_by_name("Colonial Period and Independence").id)
    Card.create!(question: "What is a thing Benjamin Franklin is famous for?", answer:"U.S. diplomat, oldest member of the Constitutional Convention, first Postmaster General of the United States, writer of “Poor Richard’s Almanac”, started the first free libraries", deck_id: Deck.find_by_name("Colonial Period and Independence").id)
    Card.create!(question: "Who is the “Father of Our Country”?", answer:"(George) Washington", deck_id: Deck.find_by_name("Colonial Period and Independence").id)
    Card.create!(question: "Who was the first President?", answer:"(George) Washington", deck_id: Deck.find_by_name("Colonial Period and Independence").id)

  Deck.create!(name: "1800s", subject_id: Subject.find_by_name("Civics and History").id)
    Card.create!(question: "What territory did the United States buy from France in 1803?", answer:"the Louisiana Territory", deck_id: Deck.find_by_name("1800s").id)
    Card.create!(question: "Name a war fought by the United States in the 1800s.", answer:"War of 1812, Mexican-American War, Civil War, Spanish-American War", deck_id: Deck.find_by_name("1800s").id)
    Card.create!(question: "Name the U.S. war between the North and the South.", answer:"the Civil War", deck_id: Deck.find_by_name("1800s").id)
    Card.create!(question: "Name one problem that led to the Civil War.", answer:"slavery, economic reasons, states’ rights", deck_id: Deck.find_by_name("1800s").id)
    Card.create!(question: "What did the Emancipation Proclamation do?", answer:"freed the slaves", deck_id: Deck.find_by_name("1800s").id)
    Card.create!(question: "What did Susan B. Anthony do?", answer:"fought for women’s rights", deck_id: Deck.find_by_name("1800s").id)

  Deck.create!(name: "Recent American History and Other Important Historical Information", subject_id: Subject.find_by_name("Civics and History").id)
    Card.create!(question: "Name one war fought by the United States in the 1900s.", answer:"World War I, World War II, Korean War, Vietnam War, (Persian) Gulf War", deck_id: Deck.find_by_name("Recent American History and Other Important Historical Information").id)
    Card.create!(question: "Who was President during World War I?", answer:"(Woodrow) Wilson", deck_id: Deck.find_by_name("Recent American History and Other Important Historical Information").id)
    Card.create!(question: "Who was President during the Great Depression and World War II? ", answer:"(Franklin) Roosevelt", deck_id: Deck.find_by_name("Recent American History and Other Important Historical Information").id)
    Card.create!(question: "Who did the United States fight in World War II?", answer:"Japan, Germany, and Italy", deck_id: Deck.find_by_name("Recent American History and Other Important Historical Information").id)
    Card.create!(question: "Before he was President, Eisenhower was a general. What war was he in?", answer:"World War II", deck_id: Deck.find_by_name("Recent American History and Other Important Historical Information").id)
    Card.create!(question: "During the Cold War, what was the main concern of the United States?", answer:"Communism", deck_id: Deck.find_by_name("Recent American History and Other Important Historical Information").id)
    Card.create!(question: "What movement tried to end racial discrimination?", answer:"civil rights (movement)", deck_id: Deck.find_by_name("Recent American History and Other Important Historical Information").id)
    Card.create!(question: "What did Martin Luther King, Jr. do?", answer:"fought for civil rights", deck_id: Deck.find_by_name("Recent American History and Other Important Historical Information").id)
    Card.create!(question: "What major event happened on September 11, 2001, in the United States?", answer:"Terrorists attacked the United States.", deck_id: Deck.find_by_name("Recent American History and Other Important Historical Information").id)

  Deck.create!(name: "Geography", subject_id: Subject.find_by_name("Civics and History").id)
    Card.create!(question: "Name one of the two longest rivers in the United States.", answer:"Missouri (River), Mississippi (River", deck_id: Deck.find_by_name("Geography").id)
    Card.create!(question: "What ocean is on the West Coast of the United States?", answer:"Pacific (Ocean)", deck_id: Deck.find_by_name("Geography").id)
    Card.create!(question: "What ocean is on the East Coast of the United States?", answer:"Atlantic (Ocean)", deck_id: Deck.find_by_name("Geography").id)
    Card.create!(question: "Name one U.S. territory.", answer:"Puerto Rico, U.S. Virgin Islands, American Samoa, Northern Mariana Islands, Guam", deck_id: Deck.find_by_name("Geography").id)
    Card.create!(question: "What is the capital of the United States?", answer:"Washington, D.C.", deck_id: Deck.find_by_name("Geography").id)
    Card.create!(question: "Why does the flag have 13 stripes?", answer:"because there were 13 original colonies", deck_id: Deck.find_by_name("Geography").id)
    Card.create!(question: " Why does the flag have 50 stars?", answer:"because there are 50 states", deck_id: Deck.find_by_name("Geography").id)
    Card.create!(question: "What is the name of the national anthem?", answer:"The Star-Spangled Banner", deck_id: Deck.find_by_name("Geography").id)

 # 
 # Subject.create!(name: "BETA Subject")
 #    Deck.create!(name: "BETA Deck", subject_id: Subject.find_by_name("BETA Subject").id)
 #
 #      Card.create!(question: "BETA Q1", answer:"BETA A1", deck_id: Deck.find_by_name("BETA Deck").id)
 #      Card.create!(question: "BETA Q2", answer:"BETA A2", deck_id: Deck.find_by_name("BETA Deck").id)
 #      Card.create!(question: "BETA Q3", answer:"BETA A3", deck_id: Deck.find_by_name("BETA Deck").id)
 #      Card.create!(question: "BETA Q4", answer:"BETA A4", deck_id: Deck.find_by_name("BETA Deck").id)
 #      Card.create!(question: "BETA Q5", answer:"BETA A5", deck_id: Deck.find_by_name("BETA Deck").id)
 #      Card.create!(question: "BETA Q6", answer:"BETA A6", deck_id: Deck.find_by_name("BETA Deck").id)
 #      Card.create!(question: "BETA Q7", answer:"BETA A7", deck_id: Deck.find_by_name("BETA Deck").id)
 #        Score.create!(user_id: User.find_by_username("flashyUser").id, card_id: Card.find_by_question("BETA Q1").id, score: 1)
 #        Score.create!(user_id: User.find_by_username("flashyUser").id, card_id: Card.find_by_question("BETA Q2").id, score: 2)
 #        Score.create!(user_id: User.find_by_username("flashyUser").id, card_id: Card.find_by_question("BETA Q3").id, score: 3)
 #        Score.create!(user_id: User.find_by_username("flashyUser").id, card_id: Card.find_by_question("BETA Q4").id, score: 4)
 #        Score.create!(user_id: User.find_by_username("flashyUser").id, card_id: Card.find_by_question("BETA Q5").id, score: 5)


 Subject.create!(name: "Random Trivia")
    Deck.create!(name: "Trivia Pack 1", subject_id: Subject.find_by_name("Random Trivia").id)
      Card.create!(question: "What is the world's longest River", answer:"Amazon", deck_id: Deck.find_by_name("Trivia Pack 1").id)
      Card.create!(question: "How many valves does a trumpet have?", answer:"Three", deck_id: Deck.find_by_name("Trivia Pack 1").id)
      Card.create!(question: "In the TV series 'Pokemon', what was Ash's second Pokemon?", answer:"Caterpie", deck_id: Deck.find_by_name("Trivia Pack 1").id)
      Card.create!(question: "What band has a song called 'Under the Bridge'", answer:"Red Hot Chili Peppers", deck_id: Deck.find_by_name("Trivia Pack 1").id)
      Card.create!(question: "What was the last movie ever rented by Blockbuster?", answer:"This Is The End", deck_id: Deck.find_by_name("Trivia Pack 1").id)
      Card.create!(question: "What three notes make a C Major chord?", answer:"C, E, G", deck_id: Deck.find_by_name("Trivia Pack 1").id)
      Card.create!(question: "Lorem Ipsum?", answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", deck_id: Deck.find_by_name("Trivia Pack 1").id)
      Card.create!(question: "In what year was app academy founded?", answer:"2012", deck_id: Deck.find_by_name("Trivia Pack 1").id)
      Card.create!(question: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?", answer:"700 pounds", deck_id: Deck.find_by_name("Trivia Pack 1").id)



  Subject.create!(name: "Portuguese")
    Deck.create!(name: "nouns", subject_id: Subject.find_by_name("Portuguese").id)
      Card.create!(question: "gato", answer:"cat", deck_id: Deck.find_by_name("nouns").id)
      Card.create!(question: "abacaxi", answer:"pineapple", deck_id: Deck.find_by_name("nouns").id)
      Card.create!(question: "porta", answer:"door", deck_id: Deck.find_by_name("nouns").id)
      Card.create!(question: "loja", answer:"store", deck_id: Deck.find_by_name("nouns").id)
      Card.create!(question: "pai", answer:"dad", deck_id: Deck.find_by_name("nouns").id)
      Card.create!(question: "lua", answer:"moon", deck_id: Deck.find_by_name("nouns").id)
      Card.create!(question: "casa", answer:"house", deck_id: Deck.find_by_name("nouns").id)
    Deck.create!(name: "verbs", subject_id: Subject.find_by_name("Portuguese").id)
      Card.create!(question: "prometer", answer:"to promise", deck_id: Deck.find_by_name("verbs").id)
      Card.create!(question: "fabricar", answer:"to manifacture", deck_id: Deck.find_by_name("verbs").id)
      Card.create!(question: "fazer", answer:"to do", deck_id: Deck.find_by_name("verbs").id)
      Card.create!(question: "acabar", answer:"to end", deck_id: Deck.find_by_name("verbs").id)
      Card.create!(question: "corrigir", answer:"to correct", deck_id: Deck.find_by_name("verbs").id)
      Card.create!(question: "dormir", answer:"to sleep", deck_id: Deck.find_by_name("verbs").id)
      Card.create!(question: "implementar", answer:"to implement", deck_id: Deck.find_by_name("verbs").id)
      Card.create!(question: "tocar", answer:"to play / to touch", deck_id: Deck.find_by_name("verbs").id)
      Card.create!(question: "buscar", answer:"to find / to search", deck_id: Deck.find_by_name("verbs").id)
      Card.create!(question: "jogar", answer:"to play", deck_id: Deck.find_by_name("verbs").id)
    Deck.create!(name: "phrases", subject_id: Subject.find_by_name("Portuguese").id)
      Card.create!(question: "Eu nao gosto", answer:"I don't like", deck_id: Deck.find_by_name("phrases").id)
      Card.create!(question: "Feliz aniversario", answer:"Happy birthday", deck_id: Deck.find_by_name("phrases").id)
      Card.create!(question: "Como vai?", answer:"How are things?", deck_id: Deck.find_by_name("phrases").id)
      Card.create!(question: "Vamos jantar?", answer:"Let's have dinner?", deck_id: Deck.find_by_name("phrases").id)
      Card.create!(question: "Eu gosto de voce", answer:"I like you", deck_id: Deck.find_by_name("phrases").id)




    Subject.create!(name: "Astronomy")
      Deck.create!(name: "Mercury", subject_id: Subject.find_by_name("Astronomy").id)
      Deck.create!(name: "Venus", subject_id: Subject.find_by_name("Astronomy").id)
      Deck.create!(name: "Earth", subject_id: Subject.find_by_name("Astronomy").id)
      Deck.create!(name: "Mars", subject_id: Subject.find_by_name("Astronomy").id)
      Deck.create!(name: "Jupiter", subject_id: Subject.find_by_name("Astronomy").id)
      Deck.create!(name: "Saturn", subject_id: Subject.find_by_name("Astronomy").id)
      Deck.create!(name: "Uranus", subject_id: Subject.find_by_name("Astronomy").id)
      Deck.create!(name: "Neptune", subject_id: Subject.find_by_name("Astronomy").id)
      Deck.create!(name: "Pluto?", subject_id: Subject.find_by_name("Astronomy").id)

    Subject.create!(name: "World History")
    # Subject.create!(name: "Vocabulary")
    # Subject.create!(name: "Music History")
    # Subject.create!(name: "CSS")
    # Subject.create!(name: "International Law")
    # Subject.create!(name: "Genetics")
    # Subject.create!(name: "Nutrition")
    # Subject.create!(name: "Spanish")
    # Subject.create!(name: "Personal Finance")
    # Subject.create!(name: "Anatomy")
    # Subject.create!(name: "Cooking")
    # Subject.create!(name: "Algebra")
    # Subject.create!(name: "Statistics")
    # Subject.create!(name: "Horticulture")
    # Subject.create!(name: "Architecture")

    i = 0
    j = 0
    k = 0

    while i < 8
      sub = Faker::Hipster.words(Random.rand(2)+1).join(" ")
      Subject.create!(name: sub)
      while j < 12
        dek = Faker::Hipster.words(Random.rand(2)+1).join(" ")
        Deck.create!(name: dek, subject_id: Subject.find_by_name(sub).id)
        while k < 14
          car_q = Faker::Hipster.words(Random.rand(4)+1).join(" ")
          car_a = Faker::Hipster.sentence(1)
          Card.create!(question: car_q, answer: car_a, deck_id: Deck.find_by_name(dek).id)
          k += 1
        end
        k = 0
        j+=1
      end
      j=0
      i+=1
    end




    #
    Deck.create!(name: "1990s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1980s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1970s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1960s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1950s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1940s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1930s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1920s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1910s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1900s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1890s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1880s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1870s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1860s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1850s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1840s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1830s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1820s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1830s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1820s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1810s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1800s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1790s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1780s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1770s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1760s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1750s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1740s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1730s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1720s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1710s", subject_id: Subject.find_by_name("World History").id)
    Deck.create!(name: "1700s", subject_id: Subject.find_by_name("World History").id)
