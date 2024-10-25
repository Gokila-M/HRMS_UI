import Select from 'react-select';
import "components/CustomSelect/CustomSelect.css" 
import React from 'react';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';

const CustomSelect = ({option,name,placeholder,widthForSelect,disabled,setSelectedOptions,selectedOptions,isSearchable,isMulti,width,paddingLeft}) => {
    const handleSelect=(data)=>{
        setSelectedOptions(data);
    }
    // console.log(disabled)
    return (
        <div style={{width:width,paddingLeft:paddingLeft}}>
            <MDTypography variant="h6" fontWeight="medium" color="dark" mt={1} sx={{paddingLeft:"20px"}}>{name}  </MDTypography>
            <MDBox sx={{width:widthForSelect}}>
                <Select
                    className='sel'
                    options={option}
                    placeholder={placeholder}
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={isSearchable}
                    isMulti={isMulti}
                    isDisabled={disabled}
                />
            </MDBox>            
        </div>
    );
};

export default CustomSelect;
