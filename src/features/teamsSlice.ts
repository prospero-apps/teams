import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TeamsState {
  value: string[]
}

const initialState: TeamsState = {
  value: []
}

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    addTeam: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
    removeTeam: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1)
    }
  }  
})

export const { addTeam, removeTeam } = teamsSlice.actions

export default teamsSlice.reducer;