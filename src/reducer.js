export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null,

    // for debugging only and remove after finished coding
    token: 'BQBQY5FjBNAJW896CNSzXEoG-TiP4VqTiaIojERFEj_6tUSniPJb71vcEIdGQH3UU1XJmBENPv3K-HNNLb4oo48WMbiVatKPz3s5dPO7UErDuSGKL_QvFGYZPiKKeXJuHefBXWtG_uxWhjRjMUb86YZBWkGEtil9ToTfuM4NjYqy42vV12W7'
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS': 
            return {
                ...state,
                playlists: action.playlists
            }

        default:
            return state;
    }
};

export default reducer;