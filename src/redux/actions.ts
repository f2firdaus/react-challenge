export const ADD_FAV = 'addFav';
export const REMOVE_FAV = 'removeFav';

export const addFavImages = image => ({
    type: ADD_FAV,
    payload: image
});

export const removeFavImages = image => ({
    type: REMOVE_FAV,
    payload:image
})