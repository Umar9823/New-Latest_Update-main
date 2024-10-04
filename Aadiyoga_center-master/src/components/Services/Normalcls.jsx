import React, { useState, useEffect, useRef } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from "../../Pages/firebase/firebaseConfig";

// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const Schedule = () => {
  const [showForm, setShowForm] = useState(false); // Show/hide form
  const [phone, setPhone] = useState(""); // Store phone number with country code
  const [scheduleData, setScheduleData] = useState([]); // Store schedule data
  const [loading, setLoading] = useState(true); // Loading state for data fetch
  const [selectedDay, setSelectedDay] = useState(""); // Store selected day
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const formRef = useRef(null); // Form reference

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const scheduleRef = db.collection('NCschedules');
        const snapshot = await scheduleRef.get();

        // Map through Firestore documents and structure them for the table
        const data = snapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            time: docData.time, // e.g. "06:30 AM (60 mins)"
            timeID: docData.timeID, // Optional: If you want to use timeID
            schedule: {
              monday: docData.monday || "Not Available",
              tuesday: docData.tuesday || "Not Available",
              wednesday: docData.wednesday || "Not Available",
              thursday: docData.thursday || "Not Available",
              friday: docData.friday || "Not Available",
            }
          };
        });

        // Sort data by timeID in ascending order
        const sortedData = data.sort((a, b) => a.timeID - b.timeID);

        setScheduleData(sortedData); // Store sorted data in state
      } catch (error) {
        console.error("Error fetching schedule data: ", error);
        setErrorMessage("Error fetching schedule data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchScheduleData();
  }, []);

  const slotNames = [
    "Bending & Twisting",
    "Hip & Shoulder Opening",
    "Backbending & Shoulder",
    "Hatha & Core",
    "Inversion & Core",
  ];

  const timeSlots = [
    "06:30AM(60 mins)",
    "07:45AM(60 mins)",
    "09:30AM(60 mins)",
    "11:30AM(60 mins)",
    "05:15PM(60 mins)",
    "06:30PM(60 mins)",
    "07:45PM(60 mins)"
  ];

  const handleBookNowClick = () => {
    setShowForm(true);
    setErrorMessage(""); // Reset error message when opening form
  };

  // Hide the form on cancel click
  const handleCancelClick = () => {
    setShowForm(false);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare form data
    const formData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      phone: phone, // Get phone from state
      address: formRef.current.address.value,
      slotName: formRef.current.slotName.value,
      day: selectedDay,
      slotTiming: formRef.current.slotTiming.value,
    };

    try {
      const response = await fetch('http://localhost:5000/schedule/NCBook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Booking successfully added!');
        setShowForm(false); // Hide form after successful submission
      } else {
        alert('Error adding booking');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage("There was an error processing your request. Please try again.");
    }
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto mt-[120px]">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Daily Classes Schedule
      </h2>

      {/* Legend for color codes */}
      <div className="text-center mb-4">
      <span className="inline-block w-4 h-4 bg-green-300 mr-2"></span> Available
        <span
          style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#dc2626', marginLeft: '16px', marginRight: '16px' }}
        ></span> Booked {/* Changed to a more visible red */}
      </div>


      {loading ? (
        <div className="text-center">Loading schedule...</div>
      ) : errorMessage ? (
        <div className="text-red-500 text-center">{errorMessage}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 rounded-lg shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Time</th>
                {daysOfWeek.map((day, index) => (
                  <th key={index} className="border border-gray-300 px-4 py-2">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((slot, slotIndex) => (
                <tr key={slotIndex} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {slot.time} {/* Display time as row header */}
                  </td>
                  {daysOfWeek.map((day) => (
                    <td
                      key={day}
                      className={`border border-gray-300 px-4 py-2 ${slot.schedule[day.toLowerCase()] !== "Not Available"
                        ? "bg-green-100"
                        : "bg-red-100"
                        }`}
                    >
                      {slot.schedule[day.toLowerCase()]} {/* Display class for the day */}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={handleBookNowClick}
          className="bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition-all shadow-md"
        >
          Book Classes
        </button>
      </div>

      {showForm && (
        <div className="mt-10 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Book Your Class</h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={setPhone}
                enableSearch={true}
                containerClass="w-full"
                inputClass="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Address</label>
              <textarea
                name="address"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 resize-none"
                placeholder="Enter your address"
                rows="4"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Slot Name</label>
              <select name="slotName" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300" required>
                {slotNames.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Day</label>
              <select
                name="day"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                onChange={(e) => setSelectedDay(e.target.value)} // Set selected day
                required
              >
                <option value="">Select a day</option>
                {daysOfWeek.map((day, index) => (
                  <option key={index} value={day}>{day}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Slot Timing</label>
              <select name="slotTiming" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300" required>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition-all"
              >
                Book Now
              </button>
              <button
                type="button"
                onClick={handleCancelClick}
                className="bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Schedule;
