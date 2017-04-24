export const fetchDecks = (subjectId) => {
  return $.ajax({
    url: `/api/subjects/${subjectId}/decks`
  });
};

export const fetchDeck = (deck) => {
  return $.ajax({
    url: `/api/decks/${deck.id}`
  });
};

export const createDeck = (deck) => {
  return $.ajax({
    method: 'POST',
    url: `/api/decks`,
    data: {deck}
  });
};
//
// export const updateSubject = (subject) => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/subjects/${subject.id}`,
//     data: {subject}
//   });
// };
//
export const deleteDeck = (deck) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/decks/${deck.id}`
  });
};
