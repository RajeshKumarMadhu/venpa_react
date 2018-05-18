import React from 'react';

const Kural = ({kural}) =>{
  return (
      <li className="list-group-item box-emphasize">
        <p>{kural[0]}</p>
        <p>{kural[1]}</p>
      </li>
  )
}

export default Kural;
