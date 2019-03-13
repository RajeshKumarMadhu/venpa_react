import React from 'react';
import Paal from './paal';
const Muppaal = ({muppaal,onSelectedPaal}) =>{

  const paalElement = muppaal.map((paal)=>{
    return(
      <Paal key={paal.name} paal={paal} onSelectedPaal={onSelectedPaal}/>
    )
  })
  return (
      <ul className="muppaal-list">
        <dl>
          {paalElement}
        </dl>
      </ul>
  )
}
export default Muppaal;
