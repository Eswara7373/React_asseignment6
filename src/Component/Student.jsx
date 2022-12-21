import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Detail'



const Student = () => {
    const [student]=useContext(store)
  return (
    <div>

<div><Link to="/add-student">
  <button  className='text'>Add Student</button></Link></div>
  <br />
  <br />

<table className="table table-bordered border-primary">
  
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>

    </tr>
  

  <tbody>
      {student.map((student)=>(<tr key={student.id}>

<td>{student.Name}</td>
<td>{student.Age}</td>
<td>{student.Course}</td>
<td>{student.Batch}</td>
<td><Link to="/Update">Edit</Link></td>

</tr>
      ))}
  
  </tbody>
</table>

    </div>
  )
}

export default Student