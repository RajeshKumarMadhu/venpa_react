import React from 'react';

const Adhigaram = ({adhigaram,kurals,onSelectOfAdhigaram}) =>{

  const fetchKurals=(e,value)=>{
    var filteredKurals = _.where(kurals,{chapter: value});
    //var thirukurals= _.pluck(filteredKurals, 'kural');

    var thirukurals = _.map(filteredKurals, thirukural => _.pick(thirukural, 'kural', 'meaning'))
    onSelectOfAdhigaram(thirukurals);
  }

  return (
      <li className="list-group-item box-emphasize" onClick={(e)=>fetchKurals(e,adhigaram)}>
        {adhigaram}
      </li>
  )
}

export default Adhigaram;
