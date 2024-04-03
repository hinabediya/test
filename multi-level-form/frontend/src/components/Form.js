import { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import axios from "axios";
function Form() {
  const [page, setPage] = useState(0);
  const FormTitles = ["Sign Up", "Personal Information", "Other"];
  const [file, setfile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contact: "",
    date: "",
    file: file,
  });
  const handleSubmt = () => {
    const formVal = new FormData();
    //formData.append("image", formdata.file);
    for (const key in formData) {
      formVal.append(key, formData[key]);
    }
    axios
      .post("http://localhost:3000/upload", formVal)
      .then((res) => {
        if (res.data.Status === "success") {
          alert("submitted successfully");
          window.location.reload();
          console.log("success");
        } else {
          console.log("fail");
        }
      })
      .catch((err) => console.log(err));
  };
  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo form={formData} setForm={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo form={formData} setForm={setFormData} />;
    } else {
      return <OtherInfo form={formData} setForm={setFormData} />;
    }
  };

  return (
    <div className="App">
      <div className="main-container pt-5 ps-5 " style={{ width: "100%" }}>
        <div className="page-container d-flex justify-content-center">
          <div className="part-one pt-4 ps-2 pe-3" style={{ width: "30%", paddingBottom: "3rem" }}>
            <div className="ps-3 pe-2">
              <h6>Get in touch</h6>
              <p style={{ fontSize: "10px" }}>We' love to hear from you. Our friendly team is always here to chat.</p>
              <div className="d-flex">
                <div className="d-flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                  </div>
                </div>
                <div className=" p-content ps-2 pt-1 pe-2">
                  <p>
                    <span>Chat with us.</span> <br />
                    Our friendly team is here to help. <br />
                    hi@contactus.com
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                </div>
                <div className=" p-content pt-1 ps-1 pe-2">
                  <p>
                    <span>Office</span>
                    <br />
                    Come say hello at our office HQ. <br />
                    100 Smith Street <br />
                    Collingwood VIC 3066 AU
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </div>

                <div className=" p-content pt-1 ps-1 pe-2">
                  <p>
                    <span>Phone</span> <br />
                    +91 96357 23456
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* second half */}
          <div className="part-two" style={{ width: "55%", paddingBottom: "3rem" }}>
            <div className="ps-5 pt-4">
              <h2>Register</h2>
              {/* progress bar */}
              <div>
                <div className="progressbar ps-3 pt-3 d-flex">
                  <div className="progress-bar-dev" style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%", backgroundColor: page === 0 ? "red" : page == 1 ? "yellow" : "rgb(98, 0, 255)" }}></div>
                </div>
              </div>
            </div>

            {/* For the fleids */}
            <div>
              <div className="form-container  d-flex justify-content-center">
                <div className="body col-8">{PageDisplay()}</div>
              </div>
              <div className="footer pt-3 d-flex justify-content-center">
                <div className="w-25">
                  <button
                    type="button"
                    className="prev-button"
                    disabled={page == 0}
                    onClick={() => {
                      setPage((currPage) => currPage - 1);
                    }}
                  >
                    Prev
                  </button>
                </div>
                <div className="ps-3 w-25">
                  {page === FormTitles.length - 1 ? (
                    <button type="button" className="next-button" onClick={handleSubmt}>
                      Submit
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="next-button"
                      disabled={page == FormTitles.length - 1}
                      onClick={() => {
                        setPage((currPage) => currPage + 1);
                      }}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
