const initialState = { name: '', price: '', type: 'add', filter: '' }

export default function reducerForm(state = initialState, action) {
  switch (action.type) {
    case 'update': {
      let { name, value } = action.payload
      return { ...state, [name]: value }
    }
    case 'edit': {
      let { name, price } = action.payload
      return {...state, name, price, type: 'edit' }
    }
    case 'cancel': {
      return {...state, name: '', price: '', type: 'add' }
    }
    default:
      return state
  }
}