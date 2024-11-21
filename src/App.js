import React from 'react';
import { Link, Navigate, Route,Routes } from "react-router-dom";

const USER_TYPES ={
  PUBLIC:'public User',
  NORMAL_USER:'Normal User',
  ADMIN_USER:'Admin user'
}

const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER
// const CURRENT_USER_TYPE = USER_TYPES.NORMAL_USER
// const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER

function App(){
  return(
    <div style={{display:"flex",gap:12,padding:8,backgroundColor:"skyblue"}}>
      <Link to={'/'}>Home</Link>
      {(CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER || CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER)?
      <>
       <Link to={'/user'}>User</Link>
      <Link to={'/userProfile'}>User Profile</Link>
      </>:null}
      {( CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER)?
      <>
     <Link to={'/admin'}>Admin</Link>
      </>:null}
      <br></br>
      <div>
        <AppRoutes/>
        </div>
    </div>
  )
}

function AppRoutes(){
  return(
    <div>
      <Routes>
        <Route path='/' element={<PublicElement> <Home/></PublicElement>}></Route>
        <Route path='/user' element={<UserElement><User/></UserElement>}></Route>
        <Route path='/admin' element={<AdminElement><Admin/></AdminElement>}></Route>
        <Route path='*' element={<div>Page is Not Found</div>}></Route>
      </Routes>
    </div>
  )
}

function Home(){
  return <div>Home</div>
}
function User(){
  return <div>User Page</div>
}
function Admin(){
  return <div>Admin Page</div>
}

function PublicElement({children}){
  return (
  <>
  {children}
  </>
  )
}
function UserElement({children}){

    if(CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER || CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER){
      return (
        <>
        {children}
        </>
      )
    }else{
      return(<Navigate to={"/"}/>  
      )
    } 
}
function AdminElement({children}){

  if( CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER){
    return (
      <>
      {children}
      </>
    )
  }else{
    return(<>You Dont Have To Access This Page</> 
    )
  }

}
export default App;

