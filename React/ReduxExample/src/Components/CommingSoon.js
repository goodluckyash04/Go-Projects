import React from 'react'
import Details from './Details'

export default function CommingSoon() {
  return (
    <div className="container-fluid mt-2">
    <div className="row">
      <div className="col-2">
        <Details/>
      </div>
      <div className="col-10 overflow-auto" style={{maxHeight:"90vh"}}>
      <h2 className='text-center p-5 ' >Comming Soon........</h2>
      </div>
    </div>
   </div>
   
  )
}
