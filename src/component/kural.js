import React from 'react';

const Kural = ({kural,id}) =>{
  var kuralObj = kural;
  return (
      <li className="list-group-item box-emphasize">
        <a data-toggle="collapse" data-target={'#O'+id} aria-expanded="false" aria-controls="{'O'+id}">
        <p>{kuralObj.kural[0]}</p>
        <p>{kuralObj.kural[1]}</p>
        </a>
        <div id={'O'+id}>{kuralObj.meaning.ta_mu_va}</div>
      </li>
  )
}

export default Kural;
