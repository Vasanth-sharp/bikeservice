import React from "react";
import { useLocation } from "react-router-dom";

function Services() {
  const location = useLocation();
  const email = location.state?.email;
  // console.log(email)
  const handleService = async (e) => {
    e.preventDefault();
    const servicename = e.target[0].value;
    const info = { email, servicename };
    try {
      console.log("request sent");
      const res = await fetch("http://localhost:4000/api/service", {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log("response");
      if (res.status === 200) {
        console.log("Mail is sended to Mechanic");
      } else {
        const msg = await res.json();
        console.log(msg);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form onSubmit={handleService}>
        <label
          style={{
            display: "block",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#333",
          }}
        >
          Select the Service
        </label>
        <select
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          <option value="">--select--</option>
          <option value="oil change">Oil Change</option>
          <option value="general service">General Service</option>
          <option value="water wash">Water Wash</option>
        </select>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>
      <div
        className="status"
        style={{
          marginTop: "20px",
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ color: "#007bff", fontWeight: "bold" }}>
          Selcect your services
        </p>
      </div>
    </div>
  );
}

export default Services;
