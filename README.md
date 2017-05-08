# FlashyCards

## Overview

[FlashyCards][flashycards] is a full-stack web application inspired by brainscape.  It allows users to create decks of flashcards and study them. The application keeps track of the users progress and how well they know the cards they've studied.

## Features

#### login / Sign up

![login pic][./docs/screenshots/login_code_pic.png]

Users can create accounts with a username and password.  This password is then handled in the database as a hashed valued using BCrypt.  This way, the users actual password is always protected and never saved in the database.  The user's session is then managed through cookies stored on their browser.

#### Create and Browse Subjects/decks

![manage decks pic][./docs/screenshots/manage_decks_picg.png]

Upon signing in, Users are directed to the library page where they are shown all the available subkects to study.  Subsequently, each subject can have multiple decks of cards to study.  The user is able to delete, or create new subjects or decks to their liking.

#### Create, Edit and Delete cards

![edit card pic][./docs/screenshots/edit_card_pic.png]

Users can manage all the cards in a deck simultaneously.  The edit deck page shows all cards as questions and answers.  Users can remove cards, edit existing ones and add new ones all in the same page.  Once they click "Save Deck", all changes are then persisted to the database and the deck is updated.  If the user chooses they don't want to make the changes they began working on, they can simply click "Reset" and all the changes and canceled and the list of cards is reverted to it's original state.

#### Study cards

![study pic][./docs/screenshots/study_pic.png]

The main feature of the app is the ability to study cards and keep track of the user progress.  As the user clicks through the flash cards and reveal answers, they are asked how well they knew the answer on a scale of 1-5.  The goal is to know each card in the deck at a score of 5.  Once that goal is reached, the mastery percentage is shown as 100%.  Subsequently, the number of cards for each score is also shown as a progress bar on the side.

[flashycards]: http://www.flashycards.club/
