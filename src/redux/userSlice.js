import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export const login = createAsyncThunk('user/login', async ({email, password}) => {
     try {
          const auth = getAuth()
          const userCredential = await signInWithEmailAndPassword(auth, email, password)
          const user = userCredential.user
          const token = user.stsTokenManager.accessToken
          const userData={
               token,
               user: user,
          }
          return userData
     } catch (error) {
          console.log("userSlice 21 lines:", error)
          throw error
     }
})

const initialState = {
     isLoading: false,
     isAuth: false,
     token: null,
     user: null,
     error: null,
}

export const userSlice = createSlice({
     name: 'user',
     initialState,
     reducers:{
          setEmail: (state, action) => {
               const loverCaseEmail = action.payload.toLowerCase() //payload işlemi sırasında hepsini küçük harfe çevirme komudunu veriyoruz.
               state.email = loverCaseEmail //sonrasında lowerCase ile güncellediğimiz değişkeni buraya çağırıyoruz. Yukarıda payload yaptığımız için burada yapmıyoruz
          },
          setPassword: (state, action) => {
               state.password = action.payload
          },
          setLoading: (state, action) => {
               state.isLoading = action.payload
          },
     },
     extraReducers: (builder) => {
          builder
               //istek gönderilip cevap alınana kadar olan süreç
               .addCase(login.pending, (state)=>{
                    state.isLoading = true
                    state.isAuth = false
               })
               //istek başarılı olursa
               .addCase(login.fulfilled, (state, action)=>{
                    state.isLoading = false
                    state.isAuth = true
                    state.user = action.payload.user
                    state.token = action.payload.token
               })
               //istek başarısız olursa
               .addCase(login.rejected, (state, action)=>{
                    state.isLoading = false
                    state.isAuth = false
                    state.error = action.error.message
               })
     }
})

export const { setEmail, setPassword, setLoading } = userSlice.actions
export default userSlice.reducer