import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ResponsiveContainer,BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { ToastContainer, toast } from "react-toastify";

const Bookings = () => {
  const data = useLoaderData();

  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  const handleCancel = (RegistrationNumber) => {
    toast.error(`Cancelled Booking`, { autoClose: 3000 });
    const savedBookings = JSON.parse(localStorage.getItem("bookings"));
    const remainingBookings = savedBookings.filter(
      (booking) => booking !== RegistrationNumber
    );
    localStorage.setItem("bookings", JSON.stringify(remainingBookings));

    const updatedDoctors = bookings.filter(
        (doctor) => doctor.RegistrationNumber !== RegistrationNumber
      );
      setBookings(updatedDoctors);

      if (updatedDoctors.length === 0) {
        navigate("/");
      }

  };

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings"));


    const doctors = data.filter((doctor) =>
      savedBookings.includes(doctor.RegistrationNumber)
    );

    setBookings(doctors);
  }, []);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  return (
    <div className="w-3/4 mx-auto mt-10">
      <div>
        {
          bookings.length === 0 ? (
            <></>
          ) : (<>
          <ResponsiveContainer width="100%" height={300}>
          <BarChart width={1000} height={300} data={bookings}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name" />
          <YAxis />
          <Bar
            dataKey="FeeInt"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {bookings.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
        </ResponsiveContainer>
          </>)
        }
      </div>
      <div>
        {bookings.length === 0 ? (
          <div className="w-3/4 mx-auto flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-extrabold text-center mt-10">You don't have any appointments</h1>
            <button onClick={() => navigate("/")} className="btn bg-[#176AE5] text-white rounded-full">Go Home</button>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-extrabold text-center mt-10">
              My Appointments
            </h1>
            <p className="font-medium opacity-80 text-center">
              Our platform connects you with verified, experienced doctors across
              various specialties — all at your convenience.
            </p>
          </>
        )}
      </div>
      <div className="mt-10">
        {bookings.map((doctor) => (
          <div className="bg-white px-12 py-10 rounded-2xl flex flex-col gap-4 text-left mb-5">
            <h1>{doctor.Name}</h1>
            <div className="flex justify-between border-b-2 border-[#00000080] border-dashed pb-5">
              <p>
                {doctor.Education} - {doctor.Speciality}
              </p>
              <p>Appointment: {doctor.Fee} + Vat</p>
            </div>
            <button
              onClick={() => handleCancel(doctor.RegistrationNumber)}
              className="btn text-[#FF0000] bg-white border-2 border-[#FF0000] rounded-full"
            >
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
