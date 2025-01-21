// import { RootState } from "@/redux/store";
// import { IUser } from "@/types";
// import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

// interface InitialState {
//   users: IUser[];
  
// }


// type draftUser = Pick<IUser, "name" >;

// const createUser = (userData: draftUser): IUser => {
//   return {
//     id: nanoid(),
//     ...userData,
//   };
// };

// const initialState: InitialState = {
//   users: [
//     {
//       id: "hjklsdfghjks",
//    name:"Rayhan"
//     },
//     {
//       id: "asdfghjks",
//       name:"Tripty"
//     },
//     {
//       id: "sdfghjkhghjs",
//       name:"Satu"
//     },
//   ],
 
// };
// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     addUser: (state, action: PayloadAction<IUser>) => {
//       const userData = createUser(action.payload);
//       state.users.push(userData);
//     },
//    removeUser: (state, action: PayloadAction<string>) => {
//       state.users = state.users.filter((user) => user.id !== action.payload);
//     },
//   },
// });
// export const selectUsers = (state: RootState) => {
// return state.user.users
  
// };

// export const { addUser,removeUser } =
//   userSlice.actions;
// export default userSlice.reducer;
