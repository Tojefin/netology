import {createStore, combineReducers} from 'redux'
import reducerForm from '../redux/reducerForm'
import reducerList from '../redux/reducerList'

const reducer = combineReducers({
  'reducerForm': reducerForm,
  'reducerList': reducerList
})

const store = createStore(reducer)
export default store