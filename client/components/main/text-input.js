import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sendMessage } from '../../redux/reducers/channels'
import PlusBigSVG from './plus-big-icon-svg'

const TextInput = () => {
  const dispatch = useDispatch()
  const currentChannel = useSelector((s) => s.channels.current)
  const [text, setText] = useState('')

  return (
    <div className="flex rounded-lg border-2 border-gray-500 overflow-hidden">
      <span className="text-3xl text-gray-500 border-r-2 border-gray-500 p-2">
        <PlusBigSVG />
      </span>
      <input
        type="text"
        className="w-full px-4"
        placeholder={`Message #${currentChannel}`}
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            dispatch(sendMessage(text))
            setText('')
          }
        }}
      />
    </div>
  )
}

export default TextInput
