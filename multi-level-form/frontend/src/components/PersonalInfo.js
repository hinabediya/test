import React from "react";

function PersonalInfo({form,setForm}) {
  return (
    <div className="personal-info-container">
      <div className='pt-2'> <input type="text" className="form-control w-100" value={form.contact} onChange={(e)=>setForm({...form,contact:e.target.value})} placeholder="Contact Number" /></div>
      <div className='pt-2'><input type="text" className="form-control w-100" value={form.address} onChange={(e)=>setForm({...form,address:e.target.value})} placeholder="Address" /></div>
    </div>
  );
}

export default PersonalInfo;
