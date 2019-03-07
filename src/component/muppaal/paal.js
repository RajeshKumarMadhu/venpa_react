import React from 'react';

const Paal = ({paal,onSelectedPaal}) =>{
  return (
      <li className="list-group-item box-emphasize" onClick={()=>onSelectedPaal(paal.athigarams)}>
        {paal.name}
      </li>
  )
}

export default Paal;
