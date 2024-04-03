import React, { useState } from "react";

function SignUpInfo({form,setForm}) {

 
  return (
    <div className="sign-up-container">
      <div className="pt-2">
        <input className="form-control w-100" type="text" value={form.firstName} onChange={(e)=>setForm({...form,firstName:e.target.value})} placeholder="First Name" required />
      </div>
      <div className="pt-2">
        <input className="form-control w-100" value={form.lastName} onChange={(e)=>setForm({...form,lastName:e.target.value})} type="text" placeholder="Last Name" />
      </div>

      <div className="pt-2">
        <input className="form-control w-100" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} type="email" placeholder="Email Address" />
      </div>
      {/* <div className="pt-2">
        <input className="form-control w-100" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
      </div> */}
    </div>
  );
}

export default SignUpInfo;
