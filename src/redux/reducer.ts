import { ADD_FAV, REMOVE_FAV } from "./actions";

export interface RootState {
  addFavImage: string[];
}

const initialState: RootState = {
  addFavImage: [],
};

const reducer = (state: RootState = initialState, action: any) => {
  if (action.type === ADD_FAV) {
    // Check if the image is not already in the state
    if (!state.addFavImage.includes(action.payload)) {
      return {
        ...state,
        addFavImage: [...state.addFavImage, action.payload],
      };
    }
  } else if (action.type === REMOVE_FAV) {
    return {
      ...state,
      addFavImage: state.addFavImage.filter(image => image !== action.payload),
    };
  }
  
  return state;
};

export default reducer;
