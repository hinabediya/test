import React from "react";
import { useState } from "react";
import axios from "axios";

function OtherInfo({ form, setForm }) {
  const [file, setfile] = useState(null);
  const handleFile = (e) => {
    setForm({ ...form, file: e.target.files[0] });
    console.log(form.file);
    // setfile(e.target.files[0]);
  };
  const handleUpload = () => {
    debugger;
    const formdata = new FormData();
    formdata.append("image", file);
    console.log(formdata, "formdata");
    axios
      .post("http://localhost:3000/upload", formdata)
      .then((res) => {
        if (res.data.Status === "success") {
          console.log("success");
        } else {
          console.log("fail");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="other-info-container">
      <div className="pt-2">
        <input type="date" className="form-control w-100" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="Date of Birth" required />
      </div>
      <div className="pt-2">
        <input type="file" className="form-control w-100" onChange={handleFile} placeholder="Upload Document" required />
      </div>
      <div className="pt-2 ps-2">{form.file && <p>Selected file: {form.file.name}</p>}</div>
    </div>
  );
}

export default OtherInfo;
