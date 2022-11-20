import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            name: "",
            age: 0,
            email: "",
        },
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        logOut: (state, action) => {
            state.value = action.payload;
        },
    },
});
// here we export the login action from userSlice.actions objrct
export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
