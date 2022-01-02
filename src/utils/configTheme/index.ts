import { reactLocalStorage as ls } from 'reactjs-localstorage'

import { setTheme, Theme } from '../../redux/reducers/theme/themeReducer'

export default function configTheme(props: {dispatch: Function, match?: boolean}){

    const localTheme = ls.get('theme') as Theme | undefined
    const matchTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.Dark : Theme.Light

    props.dispatch(setTheme(!!localTheme ? localTheme : !!props.match ? matchTheme : Theme.Dark))

}