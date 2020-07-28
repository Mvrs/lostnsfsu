import React, { useState, useEffect, useReducer } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { RootState } from '../redux/root-reducer'
import { UserActionTypes } from '../redux/user/types'

interface Props {
  opacity?: number
  setOpacity?: React.Dispatch<React.SetStateAction<number>>
}

type DelayedEffect = {
  timerMs?: number
}

// type SuccessMessage = {
//   readonly type: 'success'
//   message: string[]
// }

// type ErrorMessage = {
//   readonly type: 'error'
//   message: string[]
// }

// type Actions = ErrorMessage | SuccessMessage

// // initial State
// type State = {
//   type: string
//   message: string
//   // messageList:
// }[]

// interface MessageProps {
//   initialMessage: []
// }

/** Simple Reducer Method for login accessibility */
// export const AlertMessageReducer = (state: State, action: Actions): State => {
//   if (action.type === 'success') {
//     return action.message.map((msg: any) => ({ type: 'success', message: msg }))
//   }
//   if (action.type === 'error') {
//     return action.message.map((msg: any) => ({ type: 'error', message: msg }))
//   }

//   return state
// }

const MessageList: React.FC<Props & DelayedEffect> = ({ timerMs = 3000 }) => {
  const dispatch = useDispatch()
  const [opacity, setOpacity] = useState(1)
  const messageState = useSelector((state: RootState) => state.messages)

  console.log('message state: ', messageState)

  useEffect(() => {
    setTimeout(() => {
      setOpacity(0)
    }, timerMs)
  }, [timerMs])

  // this might not work but who cares right now (disptach)
  // dispatch({ type: 'success', message: [] })
  // dispatch()
  return (
    <div>
      {messageState.messages.message.map(
        (msg: any, i: any): UserActionTypes => (
          <p
            key={i}
            style={{
              color: msg.type === 'success' ? 'green' : 'red',
              opacity: opacity,
            }}
          >
            {msg.message}
          </p>
        ),
      )}
    </div>
  )
}

// should be msg props
// replace with useSelector
const mapStateToProps = ({ messages }: any) => ({ messages })

// export default MessageList

export default connect(mapStateToProps)(MessageList)
