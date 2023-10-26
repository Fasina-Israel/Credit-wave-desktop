import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    programDetails: [{}]
};
export const programSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {
        saveProgram: (state, { payload }) => {
            Object.assign(state, { isLoggedIn: true, programDetails: payload });
        },
        clearProgram: (state, action) => {
            Object.assign(state, { isLoggedIn: false, programDetails: [{}] });
        }
    }
});

export const { saveProgram, clearProgram } = programSlice.actions;
export default programSlice.reducer;
