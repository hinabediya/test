import axios from "axios";
import React, { useEffect, useState } from "react";

function Home({}) {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/details")
      .then((res) => {
        debugger;
        setUsers(res.data);
        if (users.length === 0) {
          setShow(false);
        } else {
          setShow(true);
        }
        // const base64String = btoa(String.fromCharCode(...new Uint8Array(users[0].document.data)));
        console.log(users);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <section className="intro pt-5">
        <div className="gradient-custom-2 h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-white table-bordered mb-0">
                      <thead className="table-dark">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Last Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Address</th>
                          <th scope="col">D.O.B</th>
                          <th scope="col">Contact No</th>
                          <th scope="col">Document</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((item) => (
                          <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.firstname ?? "N/A"}</td>
                            <td>{item.lastname ?? "N/A"}</td>
                            <td>{item.email ?? "N/A"}</td>
                            <td>{item.address ?? "N/A"}</td>
                            <td>{item.dob ?? "N/A"}</td>
                            <td>{item.contact ?? "N/A"}</td>
                            <td>
                              <img src={`data:image/jpg;base64,${item.document}`} alt="" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
