import React from 'react'

function CloudBG({children}:{children:React.ReactNode}) {
  return (
    <div>
      <video src="/video2.mp4" loop muted playsInline autoPlay className="fixed blur-xl  inset-0 object-cover w-full h-screen -z-10" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default CloudBG;