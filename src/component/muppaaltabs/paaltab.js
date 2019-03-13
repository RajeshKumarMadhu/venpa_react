import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const PaalTab = ({paal,onSelectedPaal})=> {

  return (
      <Tab label={paal.name} onClick={()=>onSelectedPaal(paal.athigarams)}/>
    );
}

export default PaalTab;
