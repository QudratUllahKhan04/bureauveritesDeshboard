import React, { useState } from "react";
import "./App.css";

function Form() {
  const [formData, setFormData] = useState({
    userId: "",
    deliverableId: "",
    publishedOn: "",
    qrCodeStatus: "",
    name: "",
    id: "",
    issuedOn: "",
    validUntil: "",
    type: "",
    model: "",
    company: "",
    trainingLocation: "",
    trainer: "",
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://deshboard-backend-omega.vercel.app/api/userdatas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("Response:", data);

    if (data.success) {
      alert("✅ Data Saved Successfully!");
      setFormData({
        userId: "",
        deliverableId: "",
        publishedOn: "",
        qrCodeStatus: "",
        name: "",
        id: "",
        issuedOn: "",
        validUntil: "",
        type: "",
        model: "",
        company: "",
        trainingLocation: "",
        trainer: "",
      });
    } else {
      alert("❌ Failed to save data");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("⚠️ Error submitting form");
  }
};

  return (
    <div className="form-wrapper">
      <div className="form-decoration">
        <div className="decoration-content">
          <h1>Deliverable Management</h1>
          <p>Submit and manage all your deliverable information in one secure place.</p>
          <div className="features-list">
            <div className="feature">
              <i className="fas fa-shield-alt"></i>
              <span>Secure Data Storage</span>
            </div>
            <div className="feature">
              <i className="fas fa-bolt"></i>
              <span>Quick Processing</span>
            </div>
            <div className="feature">
              <i className="fas fa-qrcode"></i>
              <span>QR Code Integration</span>
            </div>
          </div>
        </div>
      </div>

      <div className="form-container">
        <div className="form-header">
          <h2>Deliverable Form</h2>
          <p>Please fill in all the required information</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="userId">
                <i className="fas fa-user"></i> User ID *
              </label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder="Enter user ID"
                  required
                />
                <i className="fas fa-user"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="deliverableId">
                <i className="fas fa-id-card"></i> Deliverable ID
              </label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="deliverableId"
                  name="deliverableId"
                  value={formData.deliverableId}
                  onChange={handleChange}
                  placeholder="Enter deliverable ID"
                />
                <i className="fas fa-id-card"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="publishedOn">
                <i className="fas fa-calendar"></i> Published On
              </label>
              <div className="input-with-icon">
                <input
                  type="date"
                  id="publishedOn"
                  name="publishedOn"
                  value={formData.publishedOn}
                  onChange={handleChange}
                />
                <i className="fas fa-calendar"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="qrCodeStatus">
                <i className="fas fa-qrcode"></i> QR Code Status
              </label>
              <div className="input-with-icon">
                <select
                  id="qrCodeStatus"
                  name="qrCodeStatus"
                  value={formData.qrCodeStatus}
                  onChange={handleChange}
                >
                  <option value="">Select status</option>
                  <option value="Validated">Validated</option>
               
                </select>
                <i className="fas fa-qrcode"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="name">
                <i className="fas fa-signature"></i> Name
              </label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                />
                <i className="fas fa-signature"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="id">
                <i className="fas fa-fingerprint"></i> ID
              </label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="Enter ID number"
                />
                <i className="fas fa-fingerprint"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="issuedOn">
                <i className="fas fa-calendar-check"></i> Issued On
              </label>
              <div className="input-with-icon">
                <input
                  type="date"
                  id="issuedOn"
                  name="issuedOn"
                  value={formData.issuedOn}
                  onChange={handleChange}
                />
                <i className="fas fa-calendar-check"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="validUntil">
                <i className="fas fa-calendar-times"></i> Valid Until
              </label>
              <div className="input-with-icon">
                <input
                  type="date"
                  id="validUntil"
                  name="validUntil"
                  value={formData.validUntil}
                  onChange={handleChange}
                />
                <i className="fas fa-calendar-times"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="type">
                <i className="fas fa-tag"></i> Type
              </label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  placeholder="Enter type"
                />
                <i className="fas fa-tag"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="model">
                <i className="fas fa-cube"></i> Model
              </label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="Enter model"
                />
                <i className="fas fa-cube"></i>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="company">
                <i className="fas fa-building"></i> Company
              </label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                />
                <i className="fas fa-building"></i>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="trainingLocation">
                <i className="fas fa-map-marker-alt"></i> Training Location
              </label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="trainingLocation"
                  name="trainingLocation"
                  value={formData.trainingLocation}
                  onChange={handleChange}
                  placeholder="Enter training location"
                />
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="trainer">
                <i className="fas fa-chalkboard-teacher"></i> Trainer
              </label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="trainer"
                  name="trainer"
                  value={formData.trainer}
                  onChange={handleChange}
                  placeholder="Enter trainer name"
                />
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            <i className="fas fa-paper-plane"></i> Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
