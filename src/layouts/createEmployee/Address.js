import CustomButton from 'components/CustomButton';
import MDButton from 'components/MDButton';
import MDInput from 'components/MDInput';
import React, {useState} from 'react';
export default function Address(props) {
    const [address , setAddress] = useState({
      
        address1: "",
        address2: "",
        city:"",   
        state:"", 
        country: "",
        postalCode:"",
        timestamps:"",    
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setAddress(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    return(
      <form >
        
    <label><h1>Address Details:</h1></label> <br/>
    <label style={styles.label}>Address1:</label><MDInput                      
            id="address1"                        
            placeholder="Enter address1" 
            value={address.address1}
            onChange={handleChange}
                />
      
    <label style={styles.label}>Address2:</label><MDInput            
            id="address2" 
            placeholder="Enter address2"
            value={address.address2}
            onChange={handleChange} 
                    /><br/>
    <label style={styles.label}>City:</label><MDInput            
            id="city" 
            placeholder="Enter city"
            value={address.city}
            onChange={handleChange} 
                    />
    <label style={styles.label}>State:</label> <MDInput            
            id="state" 
            placeholder="Enter state"
            value={address.state}
            onChange={handleChange} 
                    /><br></br>
                   
    <label style={styles.label}>Country:</label><MDInput                        
            id="country"                        
            placeholder="Enter country" 
            value={address.country}
            onChange={handleChange}
                />
      
    <label style={styles.label}>PostalCode:</label><MDInput            
            id="postalCode" 
            placeholder="Enter postalCode"
            value={address.postalCode}
            onChange={handleChange} 
                    /><br/>
        <MDButton  onClick={(e)=>console.log(address)}  >Submit</MDButton>
                    </form>
    
    )}


    const styles={
        label :{
            color: "#3d3d3d",
            display: "block",            
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 5
          },
          
        

    }