import React from 'react'

import ChatField from './chat-field'
import TextInput from './text-input'

const Main = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-col">
        <div className="border-b flex px-6 py-2 items-center">
          <div className="flex flex-col">
            <h3 className="text-grey-900 text-md mb-1 font-extrabold">#general</h3>
            <div className="text-grey-700 font-thin text-sm">
              Chit-chattin about ugly HTML and mixing of concerns.
            </div>
          </div>
          <div className="ml-auto hidden md:block">
            <input
              type="search"
              placeholder="Search"
              className="appearance-none border border-grey rounded-lg pl-8 pr-4 py-2"
            />
          </div>
        </div>
        <ChatField />

        <TextInput />
      </div>
    </div>
  )
}

export default Main
