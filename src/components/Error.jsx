import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError();



  return (
    <div>
      <h1>Opps!</h1>
      <h1>{err.data}</h1>
      <h1>{err.status}</h1>
      <h1>{err.statusText}</h1>
    </div>
  )
}

export default Error
