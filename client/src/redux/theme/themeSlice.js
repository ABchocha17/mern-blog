// import { createSlice } from "@reduxjs/toolkit";

// const initialState ={
//     theme:'light',
// };

// const themeSlice = createSlice({
//     name:'theme',
//     initialState,
//     reducer:{
//         toggleTheme: (state)=>{
//             state.theme = state.theme === "light" ? "dark":"light";
//         }
//     }
// })

// export const {toggleTheme} = themeSlice.actions;

// export default themeSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    theme:'light',
};

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers: { // Note the correct key name here
        toggleTheme: (state)=>{
            state.theme = state.theme === "light" ? "dark":"light";
        }
    }
})

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;
