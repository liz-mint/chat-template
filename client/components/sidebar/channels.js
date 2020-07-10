import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import classnames from 'classnames'
import { setCurrentChannel, createChannel } from '../../redux/reducers/channels'
import FormAddChannel from './form-add-channel'
import PlusSVG from './plus-icon-svg'

const Channels = () => {
  const [showAddChannelInput, changeShowAddChannelInput] = useState(false)

  const dispatch = useDispatch()
  const { currentChannel, list } = useSelector((s) => s.channels)

  const onAddChannel = () => {
    dispatch(createChannel())
    changeShowAddChannelInput(showAddChannelInput)
  }

  return (
    <div className="mb-8">
      <div className="px-4 mb-2 text-white flex justify-between items-center">
        <div className="opacity-75">Channels</div>
        <button type="button" onClick={() => changeShowAddChannelInput(true)}>
          <PlusSVG />
          {/* <ModalAddNew isOpen={isModalOpen} onCancel={onModalClose} onSubmit={onAddNew} /> */}
        </button>
      </div>
      <FormAddChannel onAddChannel={onAddChannel} isShow={showAddChannelInput} />

      <ul>
        {list.map((channel) => {
          return (
            <li
              className={classnames('mb-6 py-1 px-4 text-white font-semi-bold', {
                'bg-teal-600': channel.name === currentChannel
              })}
              key={channel.name}
            >
              <Link
                to={`/${channel.name}`}
                onClick={() => {
                  dispatch(setCurrentChannel(channel.name))
                }}
              >
                <span className="pr-1 text-grey-200">#</span>
                {channel.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Channels
