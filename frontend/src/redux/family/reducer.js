import { 
  REQ_LIST_FAMILY, LIST_FAMILY_SUCCESS, ERROR, 
  REQ_ADD_FAMILY, ADD_FAMILY_SUCCESS, 
  REQ_DELETE_FAMILY, DELETE_FAMILY_SUCCESS 
} from '../../utils/actions';

const initState = {
  loading: false,
  list: [],
  error: null,
}
export default (state = initState, action) => {
  switch (action.type) {
    case REQ_LIST_FAMILY:
      return {
        ...state,
        loading: true,
      }
    case LIST_FAMILY_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, ...action.data]
      }
    case REQ_ADD_FAMILY:
      return {
        ...state,
        loading: true
      }
    case ADD_FAMILY_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list].push(action.data)
      }
    case REQ_DELETE_FAMILY:
      return {
        ...state,
        loading: true
      }
    case DELETE_FAMILY_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list].filter(d => d._id !== action.data),
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}