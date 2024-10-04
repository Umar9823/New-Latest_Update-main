import React, { useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from "../../Pages/firebase/firebaseConfig";

// Initialize Firebase app
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    time: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add schedule data to Firestore
      await db.collection("NCschedules").add(formData);
      alert("Schedule added successfully!");
      setFormData({
        time: "",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
      }); // Reset form fields
    } catch (error) {
      console.error("Error adding schedule: ", error);
      alert("Failed to add schedule");
    }
  };

  return (
    <div className="px-4 py-8 max-w-lg mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Add Schedule Data
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Time</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Enter class time (e.g., 06:30 AM)"
            required
          />
        </div>

        {/* Monday Class */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Monday Class</label>
          <input
            type="text"
            name="monday"
            value={formData.monday}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Enter Monday's class (e.g., Bending & Twisting)"
            required
          />
        </div>

        {/* Tuesday Class */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Tuesday Class</label>
          <input
            type="text"
            name="tuesday"
            value={formData.tuesday}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Enter Tuesday's class"
            required
          />
        </div>

        {/* Wednesday Class */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Wednesday Class</label>
          <input
            type="text"
            name="wednesday"
            value={formData.wednesday}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Enter Wednesday's class"
            required
          />
        </div>

        {/* Thursday Class */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Thursday Class</label>
          <input
            type="text"
            name="thursday"
            value={formData.thursday}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Enter Thursday's class"
            required
          />
        </div>

        {/* Friday Class */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Friday Class</label>
          <input
            type="text"
            name="friday"
            value={formData.friday}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Enter Friday's class"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition-all shadow-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleForm;
