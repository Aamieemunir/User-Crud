import React from 'react'

export default function Table(props) {
    const a = props.userData
    const b= props.edited
    const c = props.deleted
  return (
    <>
      <div className='container mt-5'>
        <table className='table table-striped text-center text-align-center'>
            <thead className=' table-dark'>
                <tr>
                    <th>Name</th>
                    <th>Father's Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {a.map((user,index)=>(
                      <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.fname}</td>
                      <td>{user.email}</td>
                      <td>{user.pswd}</td>
                      <td>
                        <button className='btn btn-primary' onClick={()=>{b(index)}}>Edit</button>
                        <button className='btn btn-danger mx-1' onClick={()=>{c(index)}}>Delete</button>

                      </td>
  
                  </tr>
                 
                ))}
              
            </tbody>
        </table>
    </div>
    </>
  )
}
