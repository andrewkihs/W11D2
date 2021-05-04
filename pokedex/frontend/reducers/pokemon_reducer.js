import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
  let nextState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = Object.assign({}, state);
      // debugger
      for (const [k,v] of Object.entries(action.pokemon) ){
        nextState[k] = v;
      }
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
