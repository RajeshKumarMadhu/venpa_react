import React from 'react';

const Kural = ({kural,id}) =>{
  var kuralObj = kural;
  return (
      <li className="list-group-item box-emphasize">
        <div className="kural-container">
        <p>{kuralObj.kural[0]}</p>
        <p>{kuralObj.kural[1]}</p>
        </div>
        <div id={'O'+id}>{kuralObj.meaning.ta_mu_va}</div>
      </li>
  )
}

export default Kural;
