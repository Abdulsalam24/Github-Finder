import React from 'react'

function Icon({children , color}) {
  return (
    <div className={ `icon ${color}`}>
        {
            children
        }
    </div>
  )
}

export default Icon