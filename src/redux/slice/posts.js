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

export const tagsItems=createAsyncThunk(
    'tags/fetchByItems',
    async() =>{
        const data=await axios.get('/tags')
        return data 
    }
)

export const deleteItem=createAsyncThunk(
    'post/fetchByItems',
    async(id) =>{
        const data=await axios.delete(`/posts/${id}`)
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
            state.posts.items=action.payload.data
            state.posts.status='success'
        })
        .addCase(postsItems.rejected, (state) => {
            state.posts.items=[]
            state.posts.status='loading'
        })
        .addCase(postsItems.pending, (state) =>{
            state.posts.items=[]
            state.posts.status='error'
        })

        .addCase(tagsItems.fulfilled, (state, action) =>{
            state.tags.items=action.payload.data
            state.tags.status='success'
        })
        .addCase(tagsItems.rejected, (state) => {
            state.tags.items=[]
            state.tags.status='loading'
        })
        .addCase(tagsItems.pending, (state) =>{
            state.tags.items=[]
            state.tags.status='error'
        })

        .addCase(deleteItem.fulfilled, (state, action) =>{
            state.posts.items=state.posts.items.filter((el) => el._id!==action.meta.arg) 
        })
    }
})

export const postsReducer=postsSlice.reducer