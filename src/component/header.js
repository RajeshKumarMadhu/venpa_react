import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const HeaderContent = ({title}) => {
      return(
        <AppBar position="static">
          <div className="header-content">
            <h1> { title }</h1>
          </div>
        </AppBar>
      )
}

export default HeaderContent;
