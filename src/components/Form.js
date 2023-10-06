import React,{useState} from 'react'
import Table from './Table';
export default function Form() {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    fname: '',
    email: '',
    pswd: '',
    remember: false,
  });
  const [editIndex, setEditIndex] = useState(null);
  const [validationMessages, setValidationMessages] = useState({
    pswd: '', // Initial empty message for the password field
  });
  
  const [canSubmit, setCanSubmit] = useState(true); // Initially, allow submission
  
   const handleChange = (e) => {
     const { name, value } = e.target;
    const regPswd = /^[A-Za-z0-9!@#$-_*&%]{4,10}$/;
    const regEmail = /^[A-Za-z0-9.]{3,20}@[a-z]{3,5}.[a-z]{2,3}$/;
    const regName = /^[A-Za-z]{3,15}/;
    const regfName = /^[A-Za-z]{3,15}$/;


  
    // Check if the name is 'pswd'
    if (name === 'pswd') {
      if (!regPswd.test(value)) {
        setValidationMessages({
          ...validationMessages,
          pswd: 'Enter a valid password', // Set the validation message
        });
        setCanSubmit(false); // Disable submission
      } 
      
      else {
        setValidationMessages({
          ...validationMessages,
          pswd: '', // Reset the validation message
        });
        setCanSubmit(true); // Allow submission
      }
    }

     // Check if the name is 'email'
     if (name === 'email') {
      if (!regEmail.test(value)) {
        setValidationMessages({
          ...validationMessages,
          email: 'Enter a valid email', // Set the validation message
        });
        setCanSubmit(false); // Disable submission
      } 
      
      else {
        setValidationMessages({
          ...validationMessages,
          email: '', // Reset the validation message
        });
        setCanSubmit(true); // Allow submission
      }
    }
  
     // Check if the name is 'name'
     if (name === 'name') {
      if (!regName.test(value)) {
        setValidationMessages({
          ...validationMessages,
          name: 'Enter a valid name', // Set the validation message
        });
        setCanSubmit(false); // Disable submission
      } 
      
      else {
        setValidationMessages({
          ...validationMessages,
          name: '', // Reset the validation message
        });
        setCanSubmit(true); // Allow submission
      }
    }

     // Check if the name is 'fname'

    if (name === 'fname') {
      if (!regfName.test(value)) {
        setValidationMessages({
          ...validationMessages,
          fname: 'Enter a valid name', // Set the validation message
        });
        setCanSubmit(false); // Disable submission
      } 
      
      else {
        setValidationMessages({
          ...validationMessages,
          fname: '', // Reset the validation message
        });
        setCanSubmit(true); // Allow submission
      }
    }
  //   // Update formData regardless of validation status
     setFormData({
       ...formData,
       [name]: value,
     });
   };
  


  const handleClick = (data) => {
    data.preventDefault();
    if (editIndex !== null) {
//Update the existing user data if editing
      userData[editIndex] = formData;
      setEditIndex(null); // Clear the edit index
    } else {
//       Add new user data
      setUserData([...userData, formData]);
    }

    setFormData({
      name: '',
      fname: '',
      email: '',
      pswd: '',
      
    });
  };

  const deleted = (index) => {
    const updatedData = [...userData];
    updatedData.splice(index, 1);
    setUserData(updatedData);
  };

  const editUser = (index) => {
    setEditIndex(index);
    setFormData(userData[index]);
  };

  return (
    <>
    <div className=' container mt-5'>
        <h1 className='text-center mt-5'>Sign Up</h1>
        <form action="/action_page.php" className="was-validated row" onSubmit={handleClick}>
  <div className="mb-3 col-md-6">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} name="name" required onChange={handleChange}/>
    {validationMessages.name && (
    <div className="text-danger">{validationMessages.name}</div>
  )}
    {/* <div className="valid-feedback">Valid.</div> */}
    <div className="invalid-feedback">Please enter your name.</div>
  </div>




  <div className="mb-3 col-md-6">
    <label htmlFor="fname" className="form-label">Father's name</label>
    <input type="text" className="form-control" id="fname" placeholder="Enter your father's name" value={formData.fname} name="fname" required onChange ={handleChange}/>
    {validationMessages.fname && (
    <div className="text-danger">{validationMessages.fname}</div>
  )}
    {/* <div className="valid-feedback">Valid.</div> */}
    <div className="invalid-feedback">Please enter your father's name.</div>
  </div>
 
  <div className="mb-3 col-md-6">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} name="email" required onChange={handleChange}/>
    {validationMessages.email && (
    <div className="text-danger">{validationMessages.email}</div>
  )}
    {/* <div className="valid-feedback">Valid.</div> */}
    <div className="invalid-feedback">Please enter a email here.</div>
  </div>


  <div className="mb-3 col-md-6">
    <label htmlFor="pswd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pswd" placeholder="Enter password" value={formData.pswd} name="pswd" required onChange={handleChange}/>
    {validationMessages.pswd && (
    <div className="text-danger">{validationMessages.pswd}</div>
  )}
    {/* <div className="valid-feedback" >Valid.</div>  */}
    <div className="invalid-feedback">Please enter password.</div>
  </div>
  <div className="form-check mb-3 col-md-6">
    <input className="form-check-input" type="checkbox" id="myCheck" checked={formData.remember}  name="remember" required onChange={handleChange}/>
    <label className="form-check-label" htmlFor="myCheck">I agree on blabla.</label>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Check this checkbox to continue.</div>
  </div>
  <div className='col-12'>
    
  <button type="submit" className="btn btn-primary" disabled={!canSubmit}>
    {editIndex !== null?"Update":"Submit"}
  </button>
  </div>
</form>
    </div>
    
     <Table userData={userData} deleted={deleted} edited={editUser}/>
    </>
                )
}
