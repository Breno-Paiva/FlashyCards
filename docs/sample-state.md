```js
{
  currentUser: {
    id: 1,
    username: "friskyB",
    user_pic_url: "http://profile.com/myspacepicture.jpg"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createCard: {errors: ["body can't be blank"]}
    createDeck: {errors: ["name can't be blank"]}
    createSubject: {errors: ["name can't be blank"]}
  },
  categories: {
    1: {
      id: 1,
      name: "History"
    }
  },
  subjects: {
    1: {
      id: 1,
      name: "U.S. History",
      description: "A review of American history",
      subject_pic_url: "http://images.com/ushistory.jpg",
      category_id: 1,
      tags: {
        1: {
          id: 1
          name: "United States"
        }
      }
    }
  },
  decks: {
    1: {
      id: 1,
      name: "1800's",
      description: "",
      author_id: 1,
      subject_id: 1,
    }
  },
  cards: {
    1: {
      id: 1,
      question: "Who is Uncle Sam?",
      answer: "A personification of the American government.",
      deck_id: 1,
      score: 4
    }
  }
}
```
