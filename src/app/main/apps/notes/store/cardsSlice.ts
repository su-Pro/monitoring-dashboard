import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { Card } from '../model/schema';
import { createCard, getCards } from './thunks';

// notes: https://redux-toolkit.js.org/api/createEntityAdapter
const notesAdapter = createEntityAdapter<Card>({
  selectId: card => card.card_id
  // S-TODO: card schema base datefields ？？
});

const notesSlice = createSlice({
  name: 'cardNotesApp/card',
  initialState: notesAdapter.getInitialState({ // notes: https://redux-toolkit.js.org/api/createEntityAdapter#getinitialstate
    cardDialogId: null,
    variateDescSize: true
  }),
  reducers: {
    openNoteDialog: (state, action) => {
      state.cardDialogId = action.payload;
    },
    closeNoteDialog: (state, _) => {
      state.cardDialogId = null;
    }
  },
  // S-TODO: 这里的用法不明确 ...
  extraReducers: {
    [getCards.fulfilled]: notesAdapter.setAll,
    [createCard.fulfilled]: notesAdapter.addOne,
  },
});

export const {
  openNoteDialog,
  closeNoteDialog,
} = notesSlice.actions;

// 不太理解下面哪些 notesApp.notes 是如何获取到类型的！！

export const {
  selectAll: selectNotes,
  selectEntities: selectNotesEntities,
} = notesAdapter.getSelectors((state) => state.notesApp.notes);

export const selectVariateDescSize = ({ notesApp }) => notesApp.notes.variateDescSize;

export const selectSearchText = ({ notesApp }) => notesApp.notes.searchText;

export const selectDialogNoteId = ({ notesApp }) => notesApp.notes.cardDialogId;

export const selectDialogNote = createSelector(
  [selectDialogNoteId, selectNotesEntities],
  (noteId, notesEntities) => {
    return notesEntities[noteId];
  }
);

export default notesSlice.reducer;
