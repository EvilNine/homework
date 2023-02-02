const initState = {
    themeId: 1,
}

type ChangeThemeIdActionType = {
    type:'SET_THEME_ID'
    id: number
}
type ThemeReducerActionType = {
    type: 'SET_THEME_ID'
    id: number
}
type StateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ThemeReducerActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
