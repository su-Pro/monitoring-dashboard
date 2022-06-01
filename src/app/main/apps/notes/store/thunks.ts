import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCards = createAsyncThunk('cardNotesApp/card/getCards', async () => {

    let url = `/api/notes`;

    const response = await axios.get(url);
    return await response.data;
});

export const createCard = createAsyncThunk('cardNotesApp/card/createCard', async (note) => {
    const response = await axios.post('/api/notes', note);
    const data = await response.data;

    return data;
});
