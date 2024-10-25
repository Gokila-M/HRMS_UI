/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import React from 'react';
import "components/CustomButton/CustomButton.css"

const CustomButton = ({name ,onClick ,type ,color ,backgroundColor  ,cursor="pointer" ,...rest }) => {
     
     return (
          <div>
               <button type={type} onClick={onClick} className="btn"
                    style={{color:color,backgroundColor:backgroundColor,cursor:cursor, ...rest}}
               >
                    {name}
               </button>
          </div>
     );
};

export default CustomButton;