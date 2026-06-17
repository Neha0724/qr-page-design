import React from 'react'

const App = () => {
  return (
    <div className='p-10 bg-blue-300 h-screen w-full flex justify-center items-center'>
      <div className='h-105 w-70 bg-white rounded-xl'>
        <img
        className='p-2 h-65 w-70 rounded-2xl' 
        src="assets/image-qr-code.png" alt="QR Code" />
        <div className='p-2 text-center'>
          <h2 className='text-lg font-bold'>Improve your front-end skills by building projects</h2>
          <p className='text-gray-500 text-sm p-2'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  )
}

export default App
