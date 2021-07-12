import logo from './logo.svg';
import './styleForm.css';
import { useState } from 'react';

function App() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailDirty,setEmailDirty] = useState(false);
  const [passwordDirty,setPasswordDirty] = useState(false);
  const [emailError,setEmailError] = useState("Email error");
  const [passwordError,setPasswordError] = useState("Password error");
  const [emailSuccess,setEmailSucces] = useState("Email success");
  // const [passwordESuccess,setPasswordSucces] = useState("Password success");
  const blurHandler = (e) =>{
    switch(e.target.name){
      case 'email':
        setEmailDirty (true)
        break;
      case 'password':
      setPasswordDirty(true)
      break;
    }
  };
  const emailHandler = (e) =>{
   setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(e.target.value).toLowerCase())){
       setEmailError("Неккоректный имейл");
    }
    else{
      setEmailError("");
    }
}
const passwordHandler = (e) =>{
  setPassword(e.target.value);
  console.log(e.target.value);
  if(e.target.value.length<3 || e.target.value.length>8){
    setPasswordError("Password must be longer than 3 and less than 8");
    if(!e.target.value){
      setPasswordError("Пароль не может быть пустым");
    }
  }
  else{
    setPasswordError("");
  }
}
  return (
    <div className="App">
    <div className="container">
                <h1>Bank <span className="header__span">Support Portal</span></h1>
                <form className="form">
                    <div className="inputBlock">
                    {(emailDirty &&emailError) &&<div className ="close"></div>}
                    {(emailDirty &&emailError) &&<div className="wrong">Invalid username</div>}
                    {/* {(setEmailError=="") &&<div>Yes</div>} */}
                    <input onChange={e=>(emailHandler(e))} onBlur ={e=>blurHandler(e)} value ={email} name="email" id="input__email" type="text" placeholder="E-mail" />
                    </div>
                    <div className="inputBlock inputBlockPassword">
                    {(passwordDirty &&passwordError) &&<div className ="close"></div>}
                    {(passwordDirty &&passwordError) &&<div className="wrong">{passwordError}</div>}
               <input onChange={e=>(passwordHandler(e))} value ={password} onBlur ={e=>blurHandler(e)} name="password" id="input__password" type="password" placeholder="Password"/>
                    </div>
               <button type='submit'>Login</button>
               <p className="title__attention">Forgot your password? <a href="#" className="title__link">Reset it here.</a></p>
                </form>
            </div>
    </div>
  );
}

export default App;
