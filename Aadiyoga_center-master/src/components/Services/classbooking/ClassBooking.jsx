import React, { useState, useEffect } from "react";
import { TailSpin } from 'react-loader-spinner';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import firebaseConfig from "../../../Pages/firebase/firebaseConfig";
import './Class.css'

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const storage = firebase.storage();

const ClassBooking = () => {
  const [scheduleByDay, setScheduleByDay] = useState({});
  const [bookedClasses, setBookedClasses] = useState({});
  const [bookingData, setBookingData] = useState({});
  const [timeSlots, setTimeSlots] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    fetchYogaSchedule();
  }, []);

  const convertTo24Hour = (time) => {
    const [t, modifier] = time.split(/(\s+)/);
    let [hours, minutes] = t.split(":").map(Number);
    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const fetchYogaSchedule = async () => {
    const timeSet = new Set();
    let schedule = {};
    let booked = {};

    try {
      const scheduleSnapshot = await db.collection("yoga-schedule").get();
      scheduleSnapshot.forEach((doc) => {
        const day = doc.id;
        const slots = doc.data().slots;
        schedule[day] = {};
        slots.forEach((slot) => {
          timeSet.add(slot.time);
          schedule[day][slot.time] = {
            class: slot.class,
            booked: false,
          };
        });
      });

      const bookedSnapshot = await db.collection("booked-classes").get();
      bookedSnapshot.forEach((doc) => {
          const data = doc.data();
          const day = data.day;
          const time = data.time;
          const paymentStatus = data.paymentStatus; // Get paymentStatus
      
          // Only mark as booked if the payment status is confirmed
          if (paymentStatus === "Confirmed") {
              if (schedule[day] && schedule[day][time]) {
                  schedule[day][time].booked = true;
                  booked[`${day}-${time}`] = true;
              }
          }
      });
      

      // Sort the time slots with AM first and PM later, still in order
      const sortedTimeSlots = Array.from(timeSet).sort((a, b) => {
        const aIsAM = a.includes("AM");
        const bIsAM = b.includes("AM");

        // If one is AM and the other is PM, prioritize AM
        if (aIsAM && !bIsAM) return -1;
        if (!aIsAM && bIsAM) return 1;

        // If both are AM or both are PM, sort by time using the 24-hour format
        return convertTo24Hour(a) - convertTo24Hour(b);
      });

      setTimeSlots(sortedTimeSlots);
      setScheduleByDay(schedule);
      setBookedClasses(booked);
    } catch (error) {
      console.error("Error fetching schedule:", error);
    }
  };


 
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const day = form.day.value;
    const time = form.time.value;
    const className = form.className.value;

    if (!name || !email || !phone || !address || !day || !time || !className) {
      alert("Please fill all fields before submitting.");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const response = await fetch("https://paymentbackend-iysk.onrender.com/api/book-class", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          day,
          time,
          className,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        // Store booking data and bookingId in state for later use
        setBookingData({
          name,
          email,
          phone,
          address,
          day,
          time,
          className,
          bookingId: data.bookingId, // Save bookingId from the server
        });
        alert("Class booked successfully, please proceed with payment.");
        setShowQRCode(true); // Show QR code for payment after booking
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error booking class:", error);
      alert("An error occurred while booking the class. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handlePaymentConfirmation = async () => {
    const paymentReceipt = document.getElementById("paymentReceipt").files[0];
    if (!paymentReceipt) {
      alert("Please upload the payment receipt.");
      return;
    }

    const formData = new FormData();
    formData.append("paymentReceipt", paymentReceipt);

    if (!bookingData || !bookingData.bookingId) {
      alert("No booking found. Please book a class before confirming payment.");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const response = await fetch(`https://paymentbackend-iysk.onrender.com/api/confirm-payment/${bookingData.bookingId}`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.status === 200) {
        alert(data.message);
        window.location.reload(); // Reload the page to reflect changes
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error confirming payment:", error);
      alert("An error occurred while confirming the payment. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
  
  
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto mt-[120px]">
      <div className="yoga-app">
        <h2 style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>Yoga Schedule and Booking</h2>
        <Legend />
        <div className="flex justify-end">
          <button className="btn-book-class" onClick={() => setShowModal(true)}>
            Book a Class
          </button>
        </div>

        {isLoading ? (
          <div className="loading-spinner">
            <TailSpin color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <ScheduleTable
            timeSlots={timeSlots}
            scheduleByDay={scheduleByDay}
            bookedClasses={bookedClasses}
          />
        )}

        {showModal && (
          <BookingModal
            onClose={() => setShowModal(false)}
            handleSubmit={handleBookingSubmit}
            showQRCode={showQRCode}
            handlePaymentConfirmation={handlePaymentConfirmation}
            scheduleByDay={scheduleByDay}
          />
        )}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="legend">
      <div>
        <div className="legend-color-box available-box"></div>Available
      </div>
      <div>
        <div className="legend-color-box booked-box"></div>Booked
      </div>
    </div>
  );
}

// Function to return days in the correct order starting from Monday
function getOrderedDays(scheduleByDay) {
  const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return dayOrder.filter(day => scheduleByDay[day]);
}

function ScheduleTable({ timeSlots, scheduleByDay, bookedClasses }) {
  const orderedDays = getOrderedDays(scheduleByDay);

  // Separate weekdays and weekend days
  const weekdays = orderedDays.filter((day) => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(day));
  const weekends = orderedDays.filter((day) => ["Saturday", "Sunday"].includes(day));

  // Filter out "7:30 AM" from the timeSlots for weekdays
  const filteredWeekdayTimeSlots = timeSlots.filter((time) => time !== "7:30 AM");

  // Filter out specific time slots for the weekends
  const filteredWeekendTimeSlots = timeSlots.filter(
    (time) => !["6:30 AM", "7:45 AM", "11:30 AM", "5:15 PM", "7:40 PM"].includes(time)
  );

  return (
    <div className="schedule-tables">
      {/* Weekdays Table */}
      {weekdays.length > 0 && (
        <div className="weekdays-table">
          <h3 className="schedule-heading" style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" }}>Weekdays Schedule (Monday to Friday)</h3>
          <div className="overflow-x-auto">
            <table className="yoga-schedule-table min-w-full border-collapse border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th>Day / Time</th>
                  {filteredWeekdayTimeSlots.map((time) => (
                    <th key={time}>{time}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weekdays.map((day) => (
                  <tr key={day}>
                    <td>{day}</td>
                    {filteredWeekdayTimeSlots.map((time) => {
                      const classData = scheduleByDay[day][time];
                      const isBooked = classData && classData.booked;

                      return (
                        <td
                          key={`${day}-${time}`}
                          className={isBooked ? "booked-slot" : "available-slot"}
                        >
                          {/* Removed teacher name from display */}
                          {classData
                            ? classData.class
                            : "Nothing there"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Weekend Table */}
      {weekends.length > 0 && (
        <div className="weekends-table mt-8">
          <h3 className="schedule-heading" style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" }}>Weekend Schedule (Saturday and Sunday)</h3>
          <div className="overflow-x-auto">
            <table className="yoga-schedule-table min-w-full border-collapse border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th>Day / Time</th>
                  {filteredWeekendTimeSlots.map((time) => (
                    <th key={time}>{time}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weekends.map((day) => (
                  <tr key={day}>
                    <td>{day}</td>
                    {filteredWeekendTimeSlots.map((time) => {
                      const classData = scheduleByDay[day][time];
                      const isBooked = classData && classData.booked;

                      return (
                        <td
                          key={`${day}-${time}`}
                          className={isBooked ? "booked-slot" : "available-slot"}
                        >
                          {/* Removed teacher name from display */}
                          {classData
                            ? classData.class
                            : "Nothing there"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}



function BookingModal({ onClose, handleSubmit, showQRCode, handlePaymentConfirmation, scheduleByDay }) {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [availableClasses, setAvailableClasses] = useState([]);

  const handleDayChange = (e) => {
    const selectedDay = e.target.value;
    if (scheduleByDay[selectedDay]) {
      const times = Object.keys(scheduleByDay[selectedDay]).filter(
        (time) => !scheduleByDay[selectedDay][time].booked
      );
      setAvailableTimes(times);
      setAvailableClasses([]);
    }
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    const selectedDay = document.querySelector("[name='day']").value;
    if (scheduleByDay[selectedDay] && scheduleByDay[selectedDay][selectedTime]) {
      const classData = scheduleByDay[selectedDay][selectedTime];
      setAvailableClasses([classData.class]);
    }
  };

  return (
    <div className="yoga-modal">
      <div className="yoga-modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h2 style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" }}>Book a Class</h2>
        <form id="yoga-booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="tel" name="phone" required />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input type="text" name="address" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Day:</label>
              <select name="day" required onChange={handleDayChange}>
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>
            <div className="form-group">
              <label>Time:</label>
              <select name="time" required onChange={handleTimeChange}>
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Class Name:</label>
            <select name="className" required>
              <option value="">Select a class</option>
              {availableClasses.map((className) => (
                <option key={className} value={className}>{className}</option>
              ))}
            </select>
          </div>

          <button className="bookingBtn" type="submit">Book Class</button>
        </form>

        {showQRCode && (
          <div id="qrcode-container">
            <h2>Complete Payment</h2>
            <p>Scan the QR code below to complete the payment:</p>
            <div className="qrimg">
            <img id="qrcode" src="/src/assets/img/qrcode/QRCode.jpeg" alt="UPI QR Code" />
            </div>
            <label htmlFor="paymentReceipt">Upload Payment Receipt:</label>
            <input type="file" id="paymentReceipt" name="paymentReceipt" accept="image/*" required />
            <button className="paymentBtn" onClick={handlePaymentConfirmation}>Confirm Payment</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassBooking;
