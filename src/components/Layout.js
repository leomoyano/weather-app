import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0">
        {children}
    </div>
  )
}

export default Layout