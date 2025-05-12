import React from 'react'
import './Coaching.css'

const Coaching_card = ({ tittle, data, background }) => {
  return (
    <>
     <div
      className="coaching_mainCard"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="coaching_overlay">
        <div className="coaching_upperTextDiv">
          <div className="coaching_upperHead">{tittle}</div>
          <div className="coaching_uppersub">{data}</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Coaching_card