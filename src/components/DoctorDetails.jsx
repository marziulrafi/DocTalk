import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import R from "../assets/r.png";


const DoctorDetails = () => {
    const doctor = useLoaderData();

    const navigate = useNavigate();

    const handleBooking = () => {
        const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        if (!savedBookings.includes(doctor.RegistrationNumber)) {
            toast.success(`Booking Confirmed for ${doctor.Name}`, { autoClose: 3000 });
            savedBookings.push(doctor.RegistrationNumber);

            navigate("/bookings");
        }
        else {
            toast.error(`Already Booked for ${doctor.Name}`, { autoClose: 3000 });
        }
        localStorage.setItem("bookings", JSON.stringify(savedBookings));
    };

    return (
        <div className="bg-[#EFEFEF]">
            <div className="w-3/4 mx-auto">
            <div className="text-center rounded-3xl bg-white p-10">
                <h1 className="text-[2.5rem] font-extrabold">
                    Doctor's Profile Details
                </h1>
                <p className="font-medium opacity-80 text-[1.1rem]">
                    Details of your chosen doctor
                </p>
            </div>
            <div className="text-center rounded-3xl bg-white p-10 mt-10">
                <div className="md:flex md:flex-row md:gap-4 flex flex-col gap-4">
                    <figure>
                        <img
                            src={doctor.DoctorImage}
                            alt="Doctor"
                            className="rounded-xl w-96"
                        />
                    </figure>
                    <div className="card-body flex flex-col gap-5 text-left">
                        <div>
                            <h2 className="card-title text-2xl font-extrabold">
                                {doctor.Name}
                            </h2>
                            <p className="opacity-80 text-[1.1rem] font-medium">
                                {doctor.Education} <br />
                                {doctor.Speciality}
                            </p>
                        </div>
                        <div>
                            <p className="opacity-80 text-[1.1rem] font-medium ">
                                Working At
                            </p>
                            <h2 className="text-xl font-extrabold">{doctor.WorkingPlace}</h2>
                        </div>
                        <div>
                            <p className="opacity-80 py-3 flex items-center gap-1 text-[1.1rem] font-medium border-t-2 border-b-2 border-[#00000080] border-dashed">
                                <img src={R} alt="" />
                                Reg No: {doctor.RegistrationNumber}
                            </p>
                        </div>
                        <div className="md:flex md:flex-row md:gap-4 flex flex-col items-center gap-4">
                            <p className="font-bold">Available</p>
                            {
                                doctor.AvailabilityDays.map(day => <p key={day} className="bg-[#ffa00010] border-2 border-[#ffa00020] text-[#ffa000] rounded-full px-3.5 py-[7px] text-center">{day}</p>)
                            }
                        </div>
                        <div>
                            <p className="flex items-center">
                                <span className="font-extrabold mr-1">Consultation Fee:</span>
                                <span className="font-extrabold text-[#176AE5] mr-1">{doctor.Fee}</span>
                                <span className="text-[#00000080] mr-1 font-medium">(incl. Vat)</span>
                                <span className="text-[#176AE5] font-medium">Per consultation</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center rounded-3xl flex flex-col gap-4 bg-white p-10 mt-10">
                <h1 className="text-2xl font-extrabold">
                    Book an Appointment
                </h1>
                <div className="flex justify-between border-t-2 border-b-2 border-[#00000080] border-dashed py-3">
                    <p>Available</p>
                    <p>Monday - Friday</p>
                </div>
                <button onClick={() => handleBooking()} className="btn bg-[#176AE5] text-white rounded-full w-full">
                    Book Appoinment Now
                </button>
            </div>
        </div>
        </div>
    );
};

export default DoctorDetails;
