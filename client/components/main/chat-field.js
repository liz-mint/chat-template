import React from 'react'
import { useSelector } from 'react-redux'

const ChatField = () => {
  const { current, list: channels } = useSelector((s) => s.channels)
  const currentChannel = channels.find((channel) => channel.name === current)
  const users = useSelector((s) => s.users.list)
  return (
    <div className="px-6 py-4 flex-1 overflow-y-scroll">
      {currentChannel.messages.map((message) => {
        const user = users.find((it) => it.id === message.userId)
        return (
          <div className="flex items-start mb-4 text-sm" key={message.id}>
            <img src={user.image} className="w-10 h-10 rounded mr-3" alt="avatar" />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold mr-2">{user.name}</span>
                <span className="text-gray-500 text-xs">{message.time.toLocaleTimeString()}</span>
              </div>
              <p className="text-black leading-normal">{message.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ChatField
