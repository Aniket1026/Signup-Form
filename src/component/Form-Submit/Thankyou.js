import React from 'react'

import Thank from '../../image/success modal.png'

function Thankyou() {
    const style = {
        width: '550px',
        height:'500px'        
    }
    const Background = {
        backgroundColor: 'white',
        width: '100%',
        height:'100vh'
    }

  return (
      <div style={Background}>
          <img src={Thank} alt='successful' style={style} />
    </div>
  )
}

export default Thankyou