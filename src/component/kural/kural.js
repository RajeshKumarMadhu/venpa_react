import React from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import AlertDialogSlide from '../socialsharemodal/ssmodal';

const Kural = ({kural,id}) =>{
  var kuralObj = kural;
  var title = 'Thirukural';
  var divId = 'k'+id;

  return (
      <li id={'k'+id} className="list-group-item box-emphasize">
        <div className="kural-container">
        <p>{kuralObj.kural[0]}</p>
        <p>{kuralObj.kural[1]}</p>
        </div>
        <div id={'O'+id} dangerouslySetInnerHTML={{__html: kuralObj.meaning.ta_mu_va}} />
        <div className="hidden-sm-down" id={'O'+id}>{kuralObj.meaning.ta_salamon}</div>
      </li>
  )
}

export default Kural;
