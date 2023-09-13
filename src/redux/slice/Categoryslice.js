import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
    subCategoryItem: [],
    subStudent: []
}
const categorySlice = createSlice({
    name: 'categoryState',
    initialState,
    reducers: {
        setSubCategoryItem: (state, action) => {
            console.log('redux',action.payload)
            state.subCategoryItem = action.payload;
        },
        setSubStudent: (state, action) => {
            console.log('reduxstudent',action.payload)
            state.subStudent = action.payload;
        },
    },
});


export const { setSubCategoryItem,setSubStudent } = categorySlice.actions;
export default categorySlice.reducer;

