import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artId: 5000,
  artData: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    incrementArtId(state) {
      state.artId++
    },
    decrementArtId(state) {
      state.artId--
    },
    setArtId(state, action) {
      state.artId = action.payload
    },
    setArtData(state, action) {
      state.artData = action.payload
    }
  },
});

export const fetchData = () => async (dispatch, getState) => {
  const state = getState()
  const artId = state.data.artId
  const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
  const json = await response.json()
  dispatch(setArtData(json))
};

export const { incrementArtId, decrementArtId, setArtId, setArtData} = dataSlice.actions;

export default dataSlice.reducer;
