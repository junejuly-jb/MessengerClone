import { createSlice } from '@reduxjs/toolkit'
import auth from '../auth/auth'

const initialState = {
     isLoggedIn: auth.isAuthenticated(),
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
export const isLoggedIn = state => state.user.isLoggedIn

export default userSlice.reducer