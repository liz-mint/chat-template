import React from 'react'

import Head from './head'
import Sidebar from './sidebar'
import Main from './main'

const Home = () => {
  return (
    <div className="w-full h-screen border shadow">
      <Head title="Hello" />
      <div className="flex h-full font-sans antialiased">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
