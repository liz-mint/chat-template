import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { createChannel } from '../../redux/reducers/channels'

const FormAddChannel = ({ isShow, onAddChannel }) => {
  // const dispatch = useDispatch()
  const [name, setName] = useState('')
  return (
    isShow && (
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Channel Name"
          aria-label="Channel Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <Link to={`/${name}`} onClick={onAddChannel}>
          Add
        </Link>
      </div>
    )
  )
}

export default FormAddChannel
