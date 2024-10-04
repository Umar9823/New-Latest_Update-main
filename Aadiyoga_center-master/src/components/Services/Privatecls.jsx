import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Schedule = () => {
  const [showForm, setShowForm] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [slotName, setSlotName] = useState('');
  const [slotTiming, setSlotTiming] = useState('');

  const weekendScheduleData = [
    { time: "07:30 AM (100 mins)", saturday: "Advanced Backbending", sunday: "Arm Balance & Core" },
    { time: "09:30 AM (75 mins)", saturday: "Full Body Opening", sunday: "Gentle Stretching" },
    { time: "06:30 PM (60 mins)", saturday: "Gentle Stretching", sunday: "Full Body Opening" }
  ];

  const slotNames = weekendScheduleData.map(item => item.saturday || item.sunday);

  const handleBookClassClick = () => {
    setShowForm(!showForm); // Toggle form visibility
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log({ name, email, phone, address, slotName, slotTiming });
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setSlotName('');
    setSlotTiming('');
    setShowForm(false); // Hide the form after submission
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto mt-[120px]">
      {/* Weekend Classes Schedule */}
      <h2 className="text-2xl font-semibold text-center mt-8 mb-4">Weekend Classes Schedule</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Saturday</th>
              <th className="border border-gray-300 px-4 py-2">Sunday</th>
            </tr>
          </thead>
          <tbody>
            {weekendScheduleData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.time}</td>
                <td className={`border border-gray-300 px-4 py-2 ${item.saturday ? "bg-green-100" : "bg-red-100"}`}>{item.saturday || "Not Available"}</td>
                <td className={`border border-gray-300 px-4 py-2 ${item.sunday ? "bg-green-100" : "bg-red-100"}`}>{item.sunday || "Not Available"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="text-center mt-8">
        <button
          onClick={handleBookClassClick}
          className="bg-teal-500 text-white bg-green-300 py-2 px-4 rounded-lg hover:bg-teal-600 transition-all shadow-md"
        >
          Book Private Class
        </button>
      </div>

      {/* Booking Form: visible when "Book Private Class" is clicked */}
      {showForm && (
        <div className="mt-10 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Book Your Class</h3>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number with Country Code and Flags */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <PhoneInput
                country={"us"} // Default country
                value={phone}
                onChange={setPhone}
                enableSearch={true}
                containerClass="w-full"
                inputClass="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                buttonClass="bg-white border-gray-300"
                dropdownClass="border-gray-300"
                required
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Address</label>
              <textarea
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 resize-none"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                rows="4" // Adjust the number of rows as needed
                required
              />
            </div>

            {/* Slot Name Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Slot Name</label>
              <select
                value={slotName}
                onChange={(e) => setSlotName(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              >
                <option value="" disabled>Select a slot</option>
                {slotNames.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Slot Timing Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Slot Timing</label>
              <select
                value={slotTiming}
                onChange={(e) => setSlotTiming(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              >
                <option value="" disabled>Select a time</option>
                {weekendScheduleData.map((item, index) => (
                  <option key={index} value={item.time}>
                    {item.time}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition-all shadow-md"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancelClick}
                style={{ backgroundColor: 'red', color: 'white' }}
                className="py-2 px-4 rounded-lg hover:bg-red-400 transition-all"
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
