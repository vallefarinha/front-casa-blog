import React from 'react'
import SendBtn from '../buttons/SendBtn'


const SendButtonForm = () => {
  return (
    <div className="mt-6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SendBtn data="ENVIAR" />
    </div>
  )
}

export default SendButtonForm