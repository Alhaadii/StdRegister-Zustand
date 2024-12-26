import React from "react";
import StudentForm from "./components/StudentForm";
import StudentLists from "./components/StudentLists";
import StudentPerson from "./components/StudentPerson";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        {/* <div className="row">
       <div className="col-md-8 col-lg-5 col-sm-8 mx-auto mt-2">
         <StudentForm />
       </div>
       <StudentLists />
     </div> */}

        {/* Using with Modal */}
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <StudentLists />
          <div className="col-lg-8 mx-auto">
            <StudentPerson />
          </div>
        </div>
      </div>
    </>
  );
}
