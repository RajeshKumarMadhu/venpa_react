import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Adhigaram = ({adhigaram,kurals,onSelectOfAdhigaram,value}) =>{

  const fetchKurals=(e,value)=>{
    var filteredKurals = _.where(kurals,{chapter: value});
    //var thirukurals= _.pluck(filteredKurals, 'kural');

    var thirukurals = _.map(filteredKurals, thirukural => _.pick(thirukural, 'kural', 'meaning'))
    onSelectOfAdhigaram(thirukurals);
  }

  return (
      <Tab label={adhigaram} onClick={(e)=>fetchKurals(e,adhigaram)} value={value}/>
  )
}

export default Adhigaram;
