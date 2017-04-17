# FresherNote

[FlashyCards live][heroku]

[heroku]: http://www.herokuapp.com

FlashyCards is a full-stack web application that uses the layout and concepts of Brainscape.  It uses Ruby on Rails on the backend, with a PostgreSQL database, and React.js with Redux for the frontend.

## Features & Implementation

### Creating and Deleting Decks

  Users can create subjects and subsequent decks on the library page once logged in.  Forms appear on the page once the `add` button is clicked.  New items are rendered as soon as they're added.  Subjects are fetched and rendered in the `SubscribedSubjectsContainer`.  Likewise decks are rendered in the `SubjectDecksContainer`.

  ![image of user library page](wireframes/Library.png)

  In order to create new cards, the user is redirected to a new cards page.  On this page they can manage all cards belonging to a deck by either creating new ones, editing existing ones, or deleting them.  Changes made on this page are only persisted once the user hits `save`.  This allows them to `reset` the changes made during an editing session in case a card is accidentally deleted or the user decides they no longer want to commit changes.  All of this is rendered in a `NewCardsContainer`

  ![image of new cards page](wireframes/New-Cards.png)

  The subjects table in the database holds information regarding the `name`, `description`, and `subject picture`.  The decks table only hold information about the `name` and `description`.  The cards table only holds information about the `question` and `answer`.  Additionally the tables hold the appropriate associations between the three.

### Study Decks

The study deck page is broken down into two components, `StudyCardContainer` and `StudyScoreContainer`.  In the StudyCardContainer, the user is shown a question.  When they think they know the answer they click on the card to reveal it.  They are then asked how well they knew the answer on a scale between one and five.  After giving the card a `score`, the StudyScoreContainer is updated.  This component keeps track of all the card scores in a deck.  The card's score is stored in a card-scores table which hold associations between a user and a card and a score.

![image of study deck page](wireframes/Study-Deck.png)

### Tags and Categories

  Tags and Categories are how subjects are organized.  This is done through associations by creating a `taggings` and `categories` table. These relationships can be seen through the browse page which lists all subjects nested under a category header.  This is the first way a user can search for a subject.

  ![tag screenshot](wireframes/Search-Category.png)

### Search

  Detailed searches are done through a search bar which renders in a few pages.  An autocomplete list shows up and updates as each letter is typed into the search bar.  The search looks through tags and subject names and renders a list of all subjects that match.

![tag screenshot](wireframes/Search-Result.png)

## Future Directions for the Project

Once the above features are completed and working bug-free, the next steps would be to improve user experience.  The features below would add another dimension to the apps experience which hopefully would motivate the user to study more

### Badges associated with progress

As a user completes more decks and gives score of 5, they are awarded badges.  These can serve as motivators to get users to study more and aim for learning.

### Animation

The `StudyCardContainer` will contain animations that update as a user gives cards scores.  Additionally an animation with positive reinforcement can pop up once the user has gone through a certain number of cards and given them all a score of 5.
