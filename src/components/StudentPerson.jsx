import React, { useState, useRef, useEffect } from "react";
import { useStudentStore, useTemStudentStore } from "../store";

function StudentPerson() {
  const [inputs, setInputs] = useState({});
  const { addStudent, updateStudent } = useStudentStore((state) => state);
  const { setTemStudent, temStudent } = useTemStudentStore((state) => state);
  const modalRef = useRef(null);

  const { name, email, phone, address } = inputs;

  useEffect(() => {
    const modalElement = modalRef.current;
    const modal = new window.bootstrap.Modal(modalElement);

    if (temStudent) {
      setInputs(temStudent);
      modal.show();
    }

    const handleHidden = () => {
      setInputs({});
      setTemStudent(null);
    };

    modalElement.addEventListener("hidden.bs.modal", handleHidden);

    return () => {
      modalElement.removeEventListener("hidden.bs.modal", handleHidden);
    };
  }, [temStudent, setTemStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    if (!name || !email || !phone || !address) {
      alert("All fields are required");
      return;
    }

    if (temStudent) {
      updateStudent({ id: temStudent.id, ...inputs });
      alert("Form updated Successfully");
      setTemStudent(null);
      setInputs({});
      const modal = window.bootstrap.Modal.getInstance(modalRef.current);
      modal.hide();
    } else {
      addStudent({ id: new Date().getTime().toString(), ...inputs });

      alert("Form Submitted Successfully");
      e.target.reset();
      // Reset the state
      setInputs({});
      // Hide the modal
      const modal = window.bootstrap.Modal.getInstance(modalRef.current);
      modal.hide();
    }
  };

  return (
    <div>
      <div className="text-end m-3">
        <button
          type="button"
          className="btn btn-primary  rounded-circle"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          +
        </button>{" "}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Student Registration Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
                    value={name || ""}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    onChange={(e) =>
                      setInputs({ ...inputs, email: e.target.value })
                    }
                    value={email || ""}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    onChange={(e) =>
                      setInputs({ ...inputs, phone: e.target.value })
                    }
                    value={phone || ""}
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <textarea
                    onChange={(e) =>
                      setInputs({ ...inputs, address: e.target.value })
                    }
                    value={address || ""}
                    className="form-control"
                    id="address"
                    placeholder="Enter your address"
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPerson;
