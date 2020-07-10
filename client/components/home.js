import React from 'react'

import Head from './head'
import Sidebar from './sidebar/sidebar'
import Main from './main/main'

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
