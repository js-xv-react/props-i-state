import React, {Component} from 'react'

// class Counter extends Component {    

//     render() {
//         return (
//             <div>
//                 <span>{this.props.count}</span>
//                 <button
//                   className='btn-primary'
//                   onClick={() => this.props.onIncrement(this.props.id)}>
//                     Increment
//                 </button>
//                 <button
//                   className='btn-secondary'
//                   >
//                     Decrement
//                 </button>
//             </div>
//         )
//     }
// }

// const Counter = (props) => {
  // destructuring

  // statless function component
const Counter = ({count, id, onIncrement, onDecrement, onDelete }) => {
  return (
      <div>
          <span>{count}</span>
          <button
            className='btn-primary'
            onClick={() => onIncrement(id)}>
              Increment
          </button>
          <button
            className='btn-secondary'
            onClick={() => onDecrement(id)}
            >
              Decrement
          </button>
          <button
          className='btn-danger'
          onClick={()=> onDelete(id)}
          >Delete </button>
      </div>
  )
}

export default Counter