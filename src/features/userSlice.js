import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     user_info: {
          name: 'june',
          age: 23
     }
}

const userSlice = createSlice({
     name: 'user',
     initialState,
     reducers: {
          fetchUserInfo: (state, action) => {
               state.user_info = action.payload
          }
     }
})

export const { fetchUserInfo } = userSlice.actions

export const user = state => state.user.user_info

export default userSlice.reducer