const initialState = [
  { name: 'Fix', price: 100 },
  { name: 'Repair', price: 1000 }
]

export default function reducerList(state = initialState, action) {
  switch (action.type) {
    case 'save': {
      let { name, price } = action.payload

      if (state.find(o => o.name === name)) {
        return [...state.map(o => o.name !== name ? o : { ...o, price })]
      }

      return [...state, { name, price }]
    }
    case 'remove': {
      return state.filter(o => o.name !== action.payload)
    }
    default:
      return state
  }
}