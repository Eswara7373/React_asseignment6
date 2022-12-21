import React, { useContext } from 'react'
import { store } from './Detail'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Update = () => {

const[Name,setName]=useState("")
const[Age,setAge]=useState("")
const[Course,setCourse]=useState("")
const[Batch,setBatch]=useState("")
const[students,setStudents]=useContext(store)

const ChangeHandler1=(e)=>
{
setName(e.target.value)
}
const ChangeHandler2=(e)=>
{
setAge(e.target.value)
}
const ChangeHandler3=(e)=>
{
setCourse(e.target.value)

}
const ChangeHandler4=(e)=>
{
setBatch(e.target.value)

}

const SubmitHandler=()=>{


setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch}])

}
  return (
    <div className='box'>

<br/>
<div>
<form className='flex'>

<label>Name: <input id="name" type="text" placeholder='update ur name' name='name' value={Name} onChange={ChangeHandler1} /> </label>


<label>Age: <input id="age" type="text" placeholder='update ur age' name='age' value={Age} onChange={ChangeHandler2} /></label>


<label>Course: <input id="course" type="text" placeholder='update ur course' name='course' value={Course} onChange={ChangeHandler3} /></label>


<label>Batch: <input id="batch" type="text" placeholder='update ur batch' name='batch' value={Batch} onChange={ChangeHandler4} /></label>


</form>

</div>

<div  className='btn1'>

<Link to="/student"><button className='btn btn-primary'>Cancel</button></Link>
<Link to="/student" onClick={SubmitHandler}><button className='btn btn-primary' style={{margin:'30px'}}>Update</button></Link>

</div>



    </div>
  )
}

export default Update