import React, { useState } from "react";

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      logo: e.target.files[0], // Save the selected file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can now send the formData to a server or process it further
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Company Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", width: "300px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", width: "300px", height: "100px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Website:
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", width: "300px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", width: "300px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Logo:
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
