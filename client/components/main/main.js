import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ChatField from './chat-field'
import LoupeSVG from './loupe-icon-svg'
import InputField from './text-input'

const Main = () => {
  const { channelName } = useParams()
  const channels = useSelector((s) => s.channels.list)
  const currentChannel = channels.find((channel) => channel.name === channelName)
  return (
    <div className="w-full">
      {channelName && (
        <div className="flex-1 flex flex-col justify-between h-screen bg-white overflow-hidden">
          <div className="border-b flex px-6 py-2 items-center flex-none">
            <div className="flex flex-col">
              <h3 className="text-gray-800 mb-1 font-extrabold">#{currentChannel.name}</h3>
              <div className="text-gray-600 text-sm truncate">{currentChannel.description}</div>
            </div>
            <div className="ml-auto hidden md:block">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="appearance-none border border-gray-500 rounded-lg pl-8 pr-4 py-2"
                />
                <div className="absolute top-0 left-0 pl-3 pt-3 flex items-center justify-center">
                  <LoupeSVG />
                </div>
              </div>
            </div>
          </div>

          {currentChannel.messages && <ChatField />}

          <div className="pb-6 px-4 flex-none">
            <InputField />
          </div>
        </div>
      )}
    </div>
  )
}

export default Main
