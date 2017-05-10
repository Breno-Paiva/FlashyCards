import { connect } from 'react-redux';
import { fetchDecks, fetchDeck, createDeck, deleteDeck } from '../../actions/deck_actions';
import { fetchSubjects, deleteSubject } from '../../actions/subject_actions';

import Deck from './deck';


const mapStateToProps = (state, { currentSubjectId } ) => {
  return {
    subject: state.subject[currentSubjectId],
    decks: Object.keys(state.deck).map(id => state.deck[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDecks: subjectId => dispatch(fetchDecks(subjectId)),
    fetchDeck: id => dispatch(fetchDeck(id)),
    createDeck: deck => dispatch(createDeck(deck)),
    deleteDeck: deck => dispatch(deleteDeck(deck)),
    deleteSubject: subject => dispatch(deleteSubject(subject)),
    fetchSubjects: subject => dispatch(fetchSubjects())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
