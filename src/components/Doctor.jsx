import React from "react";

const Doctor = ({ doctor }) => {
  const {
    DoctorImage,
    Name,
    Speciality,
    Experience,
    Education,
    WorkingPlace,
    RegistrationNumber,
    Fee,
  } = doctor;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={DoctorImage} alt="Doctor" className="rounded-xl" />
      </figure>
      <div className="card-body flex flex-col gap-3 text-left">
        <div className="flex gap-1 text-sm font-medium">
          <p
            className="bg-[rgba(9,152,47,0.1)] border-2 border-[rgba(9,152,47,0.2)] 
        text-[#09982F] rounded-full px-3.5 py-[7px] text-center"
          >
            Available
          </p>
          <p
            className="bg-[rgba(23,106,229,0.1)] border-2 border-[rgba(23,106,229,0.2)] 
        text-[#176AE5] rounded-full px-3.5 py-[7px] text-center"
          >
            {Experience}
          </p>
        </div>
        <h2 className="card-title text-2xl font-extrabold">{Name}</h2>
        <p className="opacity-80 text-[1.1rem] font-medium border-b-2 border-[#00000080] border-dashed pb-3">
          {Education} - {Speciality}
        </p>
        <p className="opacity-80 flex items-center gap-1 text-[1.1rem] font-medium">
         
          Reg No: {RegistrationNumber}
        </p>
        <div className="card-actions">
          <button
            className="btn border-2
      text-xl font-bold border-[#176AE5] text-[#176AE5] rounded-full w-full"
            onClick={() => (window.location.href = `./doctor/${RegistrationNumber}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
