import { configureStore } from '@reduxjs/toolkit';
import { heroesSlice } from './slices/favoritesHeroes';
import { authSlice } from './slices/auth';
import { heroesApi } from './services/heroesApi';

export const store = configureStore({
  reducer: {
    heroes: heroesSlice.reducer,
    auth: authSlice.reducer,
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(heroesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
