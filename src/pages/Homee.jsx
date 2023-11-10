import React, { useState } from 'react'
import Foooter from '../components/Foooter'
import Homeee from '../components/Homeee'
import View from '../components/View'
import Category from '../components/Category'


function Homee() {
  const [uploadVideoStatus,setuploadVideoStatus]=useState({})
  return (
   <div>
      <div>
        <Homeee setuploadVideoStatus={setuploadVideoStatus}/></div>
      <div className='d-flex justify-content-between mb-5 '>
        <View uploadVideoStatus={uploadVideoStatus}/>

   <div>  <Category/></div>
      </div>
   </div>
  )
 
}

<Foooter/>
export default Homee