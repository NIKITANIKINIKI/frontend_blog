import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../../axios'


const initialState={
    posts:{
        items:[],
        status: 'loading'
    },
    tags:{
        items:[],
        status:'loading'
    }
}

export const postsItems=createAsyncThunk(
    'posts/fetchByItems',
    async() =>{
        const data=await axios.get('/posts')
        return data 
    }
)

const postsSlice=createSlice({
    name: 'posts',
    initialState,
    reducer:{

    },
    extraReducers: (builder) =>{
        builder.addCase(postsItems.fulfilled, (state, action) =>{
            state.posts.items=action.payload
            state.status='success'
        })
        .addCase(postsItems.rejected, (state) => {
            state.posts.items=[]
            state.status='loading'
        })
        .addCase(postsItems.pending, (state) =>{
            state.posts.items=[]
            state.status='error'
        })
    }
})

export const postsReducer=postsSlice.reducer