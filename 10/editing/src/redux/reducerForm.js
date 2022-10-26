const initialState = { name: '', price: '', type: 'add' }

export default function reducerForm(state = initialState, action) {
  switch (action.type) {
    case 'update': {
      let { name, value } = action.payload
      return { ...state, [name]: value }
    }
    case 'edit': {
      let { name, price } = action.payload
      return { name, price, type: 'edit' }
    }
    case 'cancel': {
      return initialState
    }
    default:
      return state
  }
}