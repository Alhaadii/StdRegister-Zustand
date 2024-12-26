import React, { useEffect, useState } from "react";
import { useStudentStore, useTemStudentStore } from "../store";

const StudentForm = () => {
  const [inputs, setInputs] = useState({});
  const { addStudent, updateStudent } = useStudentStore((state) => state);
  const { setTemStudent, temStudent } = useTemStudentStore((state) => state);

  const { name, email, phone, address } = inputs;

  useEffect(() => {
    if (temStudent) {
      setInputs(temStudent);
    }
  }, [temStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    if (!name || !email || !phone || !address) {
      alert("All fields are required");
      return;
    }

    if (temStudent) {
      console.log(temStudent);
      updateStudent({ id: temStudent.id, ...inputs });
      setTemStudent(null);
      setInputs({});
    } else {
      addStudent({ id: new Date().getTime().toString(), ...inputs });

      alert("Form Submitted Successfully");
      e.target.reset();
      // Reset the state
      setInputs({});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-light shadow-lg p-4">
        <h1 className="text-success text-center fs-3 text-uppercase p-4">
          Student Registeration Form
        </h1>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter your phone number"
            value={phone || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
            className="form-control"
            id="address"
            rows={5}
            cols={20}
            placeholder="Enter your address"
            value={address || ""}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-success w-100 mt-4 btn-lg text-uppercase"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
