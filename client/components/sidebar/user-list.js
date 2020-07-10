import React from 'react'

const Users = () => {
  return (
    <ul>
      <li className="flex items-center mb-3 px-4 hover:opacity-75">
        <span className="bg-green-500 rounded-full block w-2 h-2 mr-2" />
        <span className="text-white opacity-75">
          Adam Wathan <span className="text-grey text-sm">(you)</span>
        </span>
      </li>
      <li className="flex items-center mb-3 px-4">
        <span className="bg-green-500 rounded-full block w-2 h-2 mr-2" />
        <span className="text-white opacity-75">David Hemphill</span>
      </li>
      <li className="flex items-center px-4 mb-6 opacity-50">
        <span className="border border-white rounded-full w-2 h-2 mr-2" />
        <span className="text-white">Steve Schoger</span>
      </li>
    </ul>
  )
}

export default Users
