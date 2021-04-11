// import { v5 as uuidv5 } from 'uuid';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

const initialState = {
    index: [],
    // id: "5",
    // name: "micah",
    // email: "micah@micah.com",
    isAdmin: false
  };
  
  export default function usersReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_USERS':
        return {user: action.payload}
      case 'ADD_USER':
        console.log(state)
        console.log(action)
        // history.push(`/users/${action.payload.data.id}/home`)
        return {...state, ...action.payload.data, ...action.payload.data.attributes, index: [...state.index, action.payload]}
      case 'EDIT_USER':
        console.log(state)
        let user;
        if (state.id === action.payload.data.id) {
          user = action.payload
        } else {
          user = {};
        }
        console.log(action.payload)
        console.log(user)
        return Object.assign(state, action.payload.data, action.payload.data.attributes, {index: [...state.index, action.payload.data]})
      // case 'ADD_PROJECT':
      //   console.log(state)
      //   let user2;
      //   if (state.id === action.payload.data.id) {
      //     user2 = action.payload
      //   } else {
      //     user2 = {};
      //   }
      //   console.log(action.payload)
      //   console.log(user2)
      //   return Object.assign(state, user2.data, {index: [...state.index, user2.data]})
      // case 'EDIT_PROJECT':
      //   let usersThree = state.users.map(user => {
      //     if (user.id === action.payload.id) {
      //       return action.payload
      //     } else {
      //       return user
      //     }
      //   })
      //   return {...state, users: usersThree}
      // case 'DELETE_PROJECT':
      //   let usersFour = state.users.map(user => {
      //     if (user.id === action.payload.id) {
      //       return action.payload
      //     } else {
      //       return user
      //     }
      //   })
      //   return {...state, users: usersFour}
      // case 'ADD_WORK':
      //   let usersFive = state.users.map(user => {
      //     if (user.id === action.payload.id) {
      //       return action.payload
      //     } else {
      //       return user
      //     }
      //   })
      //   return {...state, users: usersFive}
      // case 'EDIT_WORK':
      //   let usersSix = state.users.map(user => {
      //     if (user.id === action.payload.id) {
      //       return action.payload
      //     } else {
      //       return user
      //     }
      //   })
      //   return {...state, users: usersSix}
      // case 'DELETE_WORK':
      //   let usersSeven = state.users.map(user => {
      //     if (user.id === action.payload.id) {
      //       return action.payload
      //     } else {
      //       return user
      //     }
      //   })
      //   return {...state, users: usersSeven}
      default:
        return state
    }
  }