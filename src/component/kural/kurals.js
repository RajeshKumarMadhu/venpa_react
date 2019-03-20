import React from 'react';
import Kural from './kural';
import AlertDialogSlide from '../socialsharemodal/ssmodal';

const Kurals = ({kurals}) =>{

  if(!kurals)
    return <div> Loading kural ...</div>

  const kuralElement = kurals.map((kural,key)=>{
    return(
      <Kural key={key} kural={kural} id={key}/>
    )
  })
  return (
    <div className="main-list">
      <ul className="kural-list">
        {kuralElement}
      </ul>
      <div className="pull-right fixed-menu">
          <AlertDialogSlide divId='k0'/>
      </div>
    </div>
  )
}
export default Kurals;
