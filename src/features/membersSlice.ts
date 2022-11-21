import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeAllListeners } from "process";

interface MembersState {
  value: Team[]
}

interface Team {
  id: string
  name: string
  members: string[]
}

interface AddMembersPayload {
  id: string;
  member: string;
}

const initialState: MembersState = {
  value: []
}

export const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    addWholeTeam: (state, action: PayloadAction<Team>) => {
      state.value.push(action.payload);
    },
    addMember: (state, action: PayloadAction<AddMembersPayload>) => {
      state.value.forEach((team => {
        if (team.id === action.payload.id) {
          team.members.push(action.payload.member)
        }
      }))
    }
  }  
})

export const { addWholeTeam, addMember } = membersSlice.actions

export default membersSlice.reducer;