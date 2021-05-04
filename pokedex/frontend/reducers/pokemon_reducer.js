import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
  let nextState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = Object.assign({}, state);
      action.pokemon.forEach((pokemon) => {
        nextState[pokemon.id] = pokemon.id;
      });
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
