import React from 'react';
import Kural from './kural';
import AlertDialogSlide from '../socialsharemodal/ssmodal';
import ReactGA from 'react-ga';

const Kurals = ({kurals}) =>{

  if(!kurals)
    return <div> Loading kural ...</div>

  ReactGA.event({
          category: 'Navigation',
          action: 'Loading kural'
  });

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

    </div>
  )
}
export default Kurals;

/* <div className="pull-right fixed-menu">
    <AlertDialogSlide divId='k0'/>
</div>
*/
