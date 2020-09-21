import { SHOW_MODEL, HIDE_MODEL } from '../../utils/actions';

const initState = {
  show: false
}
export default (state = initState, action) => {
  switch (action.type) {
    case SHOW_MODEL:
      return {
        ...state,
        show: true,
      } 
    case HIDE_MODEL:
      return {
        ...state,
        show: false,
      } 
    default:
      return state;
  }
}