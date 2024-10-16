import React, { useEffect, useState } from "react";

function Ownerdesk() {
  const [customersData, setCustomersData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api");
      const jsonResponse = await response.json();
      setCustomersData(jsonResponse);
    };
    fetchData();
  }, []);

  const handleChange = async (e, email, sname) => {
    const status = e.target.value;
    console.log(status, email, sname);
    const response = await fetch("http://localhost:4000/api/updateStatus", {
      method: "PATCH",
      body: JSON.stringify({
        email,
        status,
        sname,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  };
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <h1 style={{ color: "#333", textAlign: "center", marginBottom: "20px" }}>
        Ownerdesk
      </h1>
      {customersData.length > 0 &&
        customersData.map((customer, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ color: "#007bff", margin: "5px 0" }}>
              {customer.name}
            </h3>
            <h3 style={{ color: "#555", margin: "5px 0" }}>{customer.email}</h3>
            {customer.services &&
              customer.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    
                    marginBottom: "10px",
                  }}
                >
                  <p style={{ margin: "5px 0", fontWeight: "bold" }}>
                    {service.sname}
                  </p>
                  <p style={{ margin: "5px 0", color: "#555" }}>
                    {service.status}
                  </p>
                  <select
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      backgroundColor: "#fafafa",
                    }}
                    onChange={(e) =>
                      handleChange(e, customer.email, service.sname)
                    }
                  >
                    <option value="">--select--</option>
                    <option value="booking accepted">Booking Accepted</option>
                    <option value="vehicle received">Vehicle recived</option>
                    <option value="service completed">Service Completed</option>
                    <option value="vehicle delivered">Vehicle Delivered</option>
                  </select>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}

export default Ownerdesk;
