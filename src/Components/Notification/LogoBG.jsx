
import React from 'react'

const LogoBG = ({color, logo}) => {
  return (
    <div className={`${color} w-10 h-10 rounded-full flex items-center justify-center `}>
      {logo}
    </div>
  )
}

export default LogoBG
