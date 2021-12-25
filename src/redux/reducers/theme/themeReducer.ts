import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { reactLocalStorage as ls } from 'reactjs-localstorage'

export enum Theme {
    Dark = 'dark-mode',
    Light = 'light-mode',
}

interface State {
    theme: Theme
}

const initialState: State = {
    theme: Theme.Dark
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
            ls.set('theme', action.payload)
        },
        toggleTheme: (state) => {
            state.theme = state.theme === Theme.Dark ? Theme.Light : Theme.Dark
            ls.set('theme', state.theme)
        },
    }
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer