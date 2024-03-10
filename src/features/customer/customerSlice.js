import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  nationalId: "",
  createAt: "",
};

const costumerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullname, nationalId) {
        return {
          payload: {
            fullname,
            nationalId,
          },
        };
      },
      reducer(state, action) {
        state.fullname = action.payload.fullname;
        state.nationalId = action.payload.nationalId;
        state.createAt = new Date().toString();
      },
    },
    updateFullname(state, action) {
      state.fullname = action.payload.fullname;
    },
  },
});
export default costumerSlice.reducer;

export const { createCustomer, updateFullname } = costumerSlice.actions;

// const costumerReducer = (state = initialStateCustomer, action) => {
//   switch (action.type) {
//     case "customer/create":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         nationalId: action.payload.nationalId,
//         createAt: action.payload.createAt,
//       };
//     case "customer/updateFullname":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//       };
//     default:
//       return state;
//   }
// };

// export const createCustomer = (fullname, nationalId) => {
//   return {
//     type: "customer/create",
//     payload: {
//       fullname: "Muhammad Subhan R",
//       nationalId: "123456789",
//       createAt: new Date().toString(),
//     },
//   };
// };
// export const updateFullname = (fullname) => {
//   return {
//     type: "customer/updateFullname",
//     payload: {
//       fullname: "Muhammad Subhan Ramdhani",
//       nationalId: "123456789",
//       createAt: new Date().toString(),
//     },
//   };
// };

// export default costumerReducer;
