import { createSlice } from "@reduxjs/toolkit";





const jobSlice = createSlice({
  name: "job",
  initialState : {
    name: "",
    description: "",
    website: "",
    location: "",
    logo: null,
  },
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = jobSlice.actions;

export default jobSlice.reducer;