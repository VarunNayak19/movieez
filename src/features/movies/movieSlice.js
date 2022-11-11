import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi"
import { ApiKey } from "../../common/api/movieApiKey"



export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = "fast";
    const response = await movieApi.get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
        .catch((err) => {
            console.log("error", err);

        });
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    const seriesText = "friends";
    const response = await movieApi.get(`?apiKey=${ApiKey}&s=${seriesText}&type=series`)
    return response.data;
})

export const fetchAsyncMovieOrShowDetails = createAsyncThunk('movies/fetchAsyncMovieOrShowDetails', async (id) => {
    const response = await movieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`)
        .catch((err) => {
            console.log("error", err);

        });
    return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fetch success")
            return { ...state, movies: payload };
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("fetch success")
            return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
            console.log("fetch success")
            return { ...state, selectMovieOrShow: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected")
        }
    }
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieOrShowDetails = (state) => state.movies.selectMovieOrShow;