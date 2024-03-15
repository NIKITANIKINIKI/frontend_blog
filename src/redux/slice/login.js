import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../../axios'


const initialState={
    data:null,
    status: 'loading'
}

export const fetchUser=createAsyncThunk('user/fetchByData',async (params) =>{
    const {data}= await axios.post('/auth/login', params)
    return data
})

export const fetchGetMe=createAsyncThunk('me/fetchByToken', async() =>{
    const {data}= await axios.get('/auth/me')
    return data
} )

const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        logout:(state) =>{
            state.data=null
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchUser.fulfilled, (state, action) =>{
            state.data=action.payload
            state.status='loaded'
        })
        .addCase(fetchUser.rejected, (state) =>{
            state.data=null
            state.status='loading'
        })
        .addCase(fetchUser.pending, (state) =>{
            state.data=null
            state.status='error'
        })
        .addCase(fetchGetMe.fulfilled, (state, action) =>{
            state.data=action.payload
            state.status='loaded'
        })
        .addCase(fetchGetMe.rejected, (state) =>{
            state.data=null
            state.status='loading'
        })
        .addCase(fetchGetMe.pending, (state) =>{
            state.data=null
            state.status='error'
        })
    }
})

export const selectIsAuth=(state) => Boolean(state.auth.data)

export const {logout}=loginSlice.actions

export const userReducer=loginSlice.reducer