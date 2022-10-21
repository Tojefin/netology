import New from './New'
import Popular from './Popular'

export default function WrapAttract(WrapComponent) {
  return function(props) {
    let {views} = props

    if (views > 1000) {
      return (
        <Popular>
          <WrapComponent {...props} />
        </Popular>
      )
    } else if (views > 100) {
      return (
        <New>
          <WrapComponent {...props} />
        </New>
      )
    }

    return <WrapComponent {...props} />
  }
}