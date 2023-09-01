import { ADD_FAV, REMOVE_FAV } from "./actions";

export interface RootState {
  addFavImage: string[];
}

const initialState: RootState = {
  addFavImage: [],
};

const reducer = (state: RootState = initialState, action: any) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        addFavImage: [...state.addFavImage, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        addFavImage: state.addFavImage.filter(image => image !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
