import React from 'react'
import Channels from './channels'
import Users from './user-list'

import RingSVG from './ring-icon-svg'
import PlusSVG from './plus-icon-svg'

const Sidebar = () => {
  return (
    <div className="overflow-hidden flex items-center justify-start content-start w-64">
      <div className="bg-indigo-800  pb-6 hidden md:block h-screen w-full">
        <div className="text-white mb-2 mt-3 px-4 flex justify-between">
          <div className="flex-auto">
            <h1 className="font-semibold text-xl leading-tight mb-1 truncate">Tailwind CSS</h1>
            <div className="flex items-center mb-6">
              <span className="bg-green-500 rounded-full block w-2 h-2 mr-2" />
              <span className="text-white opacity-50 text-sm">Adam Wathan</span>
            </div>
          </div>
          <div>
            <RingSVG />
          </div>
        </div>

        <Channels />

        <div className="mb-8">
          <div className="px-4 mb-2 text-white flex justify-between items-center">
            <div className="opacity-75">Direct Messages</div>
            <div>
              <PlusSVG />
            </div>
          </div>
          <Users />
        </div>

        <div>
          <div className="px-4 mb-2 text-white flex justify-between items-center">
            <div className="opacity-75">Apps</div>
            <div>
              <PlusSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
