import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createChannel } from '../../redux/reducers/channels'

const ModalAddNew = ({ isOpen, onCancel, onSubmit }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  return (
    <>
      {isOpen && (
        <div className="w-screen h-screen flex justify-center items-center bg-indigo-900 bg-opacity-50 z-50">
          <div className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md rounded z-50 overflow-y-auto">
            <div className="py-4 text-left px-6">
              <div class="flex justify-between items-center pb-3">
                <p class="text-2xl font-bold">Add Channel</p>
                <div class="modal-close cursor-pointer z-50">
                  <span className="text-xl" onClick={onCancel}>
                    x
                  </span>
                </div>
              </div>

              <div class="my-5 flex flex-col">
                <input
                  class="py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  id="channelName"
                  type="text"
                  placeholder="Channel name"
                  aria-label="Channel name"
                  required
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />

                <textarea
                  class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  id="channelDesc"
                  type="text"
                  placeholder="Channel description"
                  aria-label="Channel description"
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                />
              </div>

              <div class="flex justify-center pt-2">
                <button
                  type="button"
                  class="focus:outline-none modal-close bg-gray-400 p-2 rounded-md text-black hover:bg-gray-300"
                  onClick={onCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="focus:outline-none bg-teal-500 p-2 ml-3 rounded-md text-white hover:bg-teal-400"
                  onClick={() => {
                    dispatch(createChannel(name, description))
                    onSubmit()
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalAddNew
