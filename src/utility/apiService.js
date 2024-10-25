let baseUrl = 'http://localhost:2023/api/';

//           *************    RoleMenu APIS    *************
export const createRoleMenu = async (body) => {
     const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
     };
     const response = await fetch(`${baseUrl}rolemenu/v2/create`, requestOptions);
     if(!response.ok){
        let data = await response.json()
        return {message:data.message,ok:false}
    }
    const data = await response.json();
    return {message:data.message,ok:true}
};

export const getRoleMenu = async () => {
     const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
     };
     let res = await fetch(`${baseUrl}rolemenu/v2/getAll`, requestOptions);
     let data = res?.json();
     return data;
};
export const getRoleMenuById = async (id) => {
     const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
     };
     let res = await fetch(`${baseUrl}rolemenu/v2/getById/${id}`, requestOptions);
     let data = res?.json();
     return data;
};



export const getRoleMenuAccessById= async(id)=>{
    const requestOptions={
        method:'GET',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json',
        }
      }
      const response=await fetch(`${baseUrl}rolemenu/v2/getByIdForAccess/${id}`,requestOptions )
      let data=response?.json()
      return data
      
   }

export const updateRoleMenuById = async (id, body) => {
     const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
     };
     let res = await fetch(`${baseUrl}rolemenu/v2/update/${id}`, requestOptions);
     let data = res?.json();
     return data;
};


//           *************    Role APIS    *************

export const createRole=async(body)=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    let response=await fetch(`${baseUrl}role/create_role`,requestOptions)
    if(!response.ok){
        let data=await response?.json()
        return {message:data.message,ok:false}
     }
     let data= await response?.json()
     return {message:data.message,ok:true}
}


export const getRole=async()=>{
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    let res=await fetch(`${baseUrl}role/view_role`,requestOptions)
    let data=res?.json()
    
    return data
}
export const getRolebyId = async () => {
     const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
     };
     const response = await fetch(`${baseUrl}role/view_byid/${id}`, requestOptions);
     let data = await response?.json();
     return data;
};

export const updateRole=async(id,body)=>{
     const requestOptions={
     method:'PUT',
     headers:{'Content-Type':'application/json'},
     body: JSON.stringify(body)
     };
     const response= await fetch(`${baseUrl}role/update_role/${id}`,requestOptions)
     if(!response.ok){
          let data=await response?.json()
          return {message:data.message,ok:false}
       } 
     const data = await response.json()
     return {message:data.message,ok:true}
     }
     export const getRoleTable = async () => {
        const requestOptions = {
             method: 'GET',
             headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(`${baseUrl}role/roletable`, requestOptions);
        let data = await response?.json();
        return data;
   };
   export const getDeletedRole = async () => {
        const requestOptions = {
             method: 'GET',
             headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(`${baseUrl}role/roledelete`, requestOptions);
        let data = await response?.json();
        return data;
   };


//           *************    Menu APIS    *************
export const createMenu = async (body) => {
     const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
     };
     const response = await fetch(`${baseUrl}menu/create_menu`, requestOptions);
    //  let data = await response.json();
     if(!response.ok){
        let data=await response?.json()
        return {message:data.message,ok:false}
     }
     let data= await response?.json()
     return {message:data.message,ok:true}
};


export const getMenu=async()=>{
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    let res=await fetch(`${baseUrl}menu/menutable`,requestOptions)
    let data=res?.json()
    return data
} 

export const getMenuTable = async () => {
     const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
     };
     const response = await fetch(`${baseUrl}menu/menutable`, requestOptions);
     let data = await response?.json();
     return data;
};
export const getDeletedMenu = async () => {
     const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
     };
     const response = await fetch(`${baseUrl}menu/menudelete`, requestOptions);
     let data = await response?.json();
     return data;
};

export  const updateMenu=async(id,body)=>{
    // console.log("api", id)
    const requestOptions={
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(body)
    };
    const response= await fetch(`${baseUrl}menu/update_menu/${id}`,requestOptions)
    if(!response.ok){
        let data=await response?.json()
        return {message:data.message,ok:false}
     }
     let data= await response?.json()
     return {message:data.message,ok:true}
}
export  const getMenuById=async(id)=>{
     const requestOptions={
         method:'GET',
         headers:{'Content-Type':'application/json'},
     };
     const response= await fetch(`${baseUrl}menu/view_menu/${id}`,requestOptions)
     let data= await response?.json();
     return data
 }




//           *************    User APIS    *************

export const userLogin=async (email,password)=>{
    const  requestOptions={ 
     method:'POST',
      mode: 'cors',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({email,password})
    }
    const response = await fetch(`${baseUrl}user/login`,requestOptions)
    if(!response.ok){
        let data = await response.json()
        return {message:data.message,ok:false}
       
    }
    let data=await response?.json()
    return {message:data.message,token:data.token,ok:true}
}

export const getProfile= async(token)=>{
  const requestOptions={
      method:'GET',
       mode: 'cors',
      headers:{
          'Content-Type': 'application/json',
          "hrms-auth-token": token
      }
    }
    if(token){
        const response=await fetch(`${baseUrl}user/profile`,requestOptions )
        let data=response?.json()
        return data
    }
 }
export const getUserById= async(id)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
  const requestOptions={
      method:'GET',
      headers:myHeaders
    }
    if(token){
        const response=await fetch(`${baseUrl}user/v2/getbyid/${id}`,requestOptions )
        let data=response?.json()
        return data
    }
 }
 

  //           *************    EDUCATION APIS    *************
export const createEducation=async(id,body)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    let response=await fetch(`${baseUrl}user/v2/educationCreate?userId=${id}`,requestOptions)
    const data = await response.json();
    console.log(data)
    return data
}

export const UpdateEducationById=async(id,body)=>{
    console.log("id",id)
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    let res=await fetch(`${baseUrl}user/v2/educationUpdate?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}  

export const getEducationById=async(id)=>{
    // console.log("api",id);
    const requestOptions = {
    method: 'GET',
    // mode: 'cors',
    headers: { 'Content-Type': 'application/json' }
    };
    let res=await fetch(`${baseUrl}user/v2/educationGetbyid?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
    }

  //           *************    DOCUMENTS APIS    *************
export const createDocuments=async(id,body)=>{
    console.log(id);
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    let response=await fetch(`${baseUrl}user/v2/addDocumentDetails?userId=${id}`,requestOptions)
    const data = await response.json();
    return {message:data.message,ok:true}
}
export const UpdateDocumentsById=async(id,body)=>{
    console.log("id",id)
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    let res=await fetch(`${baseUrl}user/v2/updateDocumentDetails?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}  



export const getAllUsers=async()=>{
    const myHeaders = new Headers();
    let token=JSON.parse(localStorage.getItem("hrms-auth-token"))
    myHeaders.append("hrms-auth-token", token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}user/get`,requestOptions)
    let data=res?.json()
    return data
}

export const getNoOwner=async()=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}user/noOwner`,requestOptions)
    let data=res?.json()
    return data
}

export const currentCompanyView=async(id)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}user/v2/viewCurrentCompany?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}
export const AddressView=async(id)=>{
    // console.log(id);
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}user/v2/getaddress?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}
export const educationView=async(id)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}user/v2/educationGetbyid?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}
export const experienceView=async(id)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}user/v2/viewExperienceDetails?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}
export const documentView=async(id)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}user/v2/viewDocumentDetails?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}
export const userReg=async(body)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    let res=await fetch(`${baseUrl}user/v2/reg`,requestOptions)
    let data=res?.json()
    return data
}
export const userAddress=async(id,body)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    let res=await fetch(`${baseUrl}user/v2/Useraddress?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}
export const userFamily=async(id,body)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    let res=await fetch(`${baseUrl}user/v2/userfamily?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}
export const ViewUserFamily=async(id)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}user/v2/getbyid?id=${id}`,requestOptions)
    let data=res?.json()
    return data
}

export const getUserRole=async(id)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}role/view_byid/${id}`,requestOptions)
    let data=res?.json()
    return data
}
export const documentViewprofile=async(id)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}user/v2/viewDocumentDetailsid?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}
export const experienceViewprofile=async(id)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}user/v2/viewExperienceDetailsid?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}


export const workCurrentCompany=async(id,body)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    let res=await fetch(`${baseUrl}user/v2/addCurrentCompany?userId=${id}`,requestOptions)
    console.log(res);
    if(!res.ok){
        let response=await res.json()
        return {message:response.message,ok:false}
    }
    let data=res?.json()
    return {message:data.message,ok:true}
}
export const userUpdate=async(body)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    let res=await fetch(`${baseUrl}user/v2/update`,requestOptions)
    let data=res?.json()
    return data
}
export const addExperience=async(id,body)=>{
    const myHeaders = new Headers();
    const token=localStorage.getItem("hrms-auth-token")
    myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    };
    let res=await fetch(`${baseUrl}user/v2/addExperienceDetails?userId=${id}`,requestOptions)
    let data=res?.json()
    return data
}
export const getRoles=async()=>{
    const myHeaders = new Headers();
    // const token=localStorage.getItem("hrms-auth-token")
    // myHeaders.append("hrms-auth-token",JSON.parse(token));
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    let res=await fetch(`${baseUrl}role/view_role`,requestOptions)
    let data=res?.json()
    return data
}


