import React from 'react';
import Adhigaram from './adhigaram';

const AdhigaramList = (props) => {

  if(!props.adhigarams)
      return <div> Loading .. </div>

  const Adhigarams = props.adhigarams.map((adhigaram)=>{
    return (
      <Adhigaram key={adhigaram} adhigaram={adhigaram} kurals={props.kurals} onSelectOfAdhigaram={props.onSelectOfAdhigaram}/>
    )
  })
  return(
    <ul className="list-two-columns">
        {Adhigarams}
    </ul>
  )

}

export default AdhigaramList;
