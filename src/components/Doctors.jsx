import React, { useState } from "react";
import Doctor from "./Doctor";


const Doctors = ({doctors}) => {

  const [showAll, setShowAll] = useState(false);

  const displayedDoctors = showAll ? doctors : doctors.slice(0, 6);

  return (
    <div className="text-center mt-10 flex flex-col items-center">
      <div>
      <h1 className="text-[2.5rem] font-extrabold">Our Best Doctors</h1>
      <p className="font-medium opacity-80">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br /> routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-10 md:grid md:grid-cols-2 md:gap-4 md:mt-10 flex flex-col gap-4 mt-10">
        {
          displayedDoctors.map(doctor => <Doctor key={doctor.RegistrationNumber} doctor={doctor}></Doctor>)
        }
      </div>
      {!showAll && doctors.length > 6 && (
        <div className="flex justify-center mt-6">
          <button 
            className="px-6 cursor-pointer py-2 text-xl font-bold bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            onClick={() => setShowAll(true)}
          >
            View All Doctors
          </button>
        </div>
      )}
    </div>
  );
};

export default Doctors;
