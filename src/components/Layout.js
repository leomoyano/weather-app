import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="w-full h-screen overscroll-y-auto bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 py-5 lg:px-0" style={{height: '100%'}}>
        {children}
    </div>
  )
}

export default Layout