import ACTIONS from '../Actions'
import { get } from 'lodash'
const defaultState = {
  components: [],
  users: [],
  sharedData: {},
}

export default (state = defaultState, action) => {
  switch (action.type) {
   case ACTIONS.Types.FETCH_COMPONENTS: {
      return state
    }
    case ACTIONS.Types.RECEIVE_COMPONENTS: {
      return { 
        ...state,
        ...action.data, 
      }
    }
   case ACTIONS.Types.FETCH_USERS: {
      return state
    }
    case ACTIONS.Types.RECEIVE_USERS: {
      return {
        ...state,
        users: action.data
      }
    }
    case ACTIONS.Types.ADD_SHARED_DATA: {
      const newSharedData = { ...get(state, 'sharedData'), ...action.data }
      return {
        ...state,
        sharedData: newSharedData
      }
    }

    default:
      return state
  }
}

