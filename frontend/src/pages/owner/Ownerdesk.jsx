import React, { useState } from "react";

function Ownerdesk() {
  const [customers, setCustomers] = useState([
    {
      name: "abc",
      email: "abc@gmail.com",
      service: "oil",
      status: "incomplete",
    },
    {
      name: "cde",
      email: "cde@gmail.com",
      service: "water",
      status: "incomplete",
    },
  ]);
  return (
    <div>
      <h1>Ownerdesk</h1>
      {customers.length > 0 &&
        customers.map((customer, index) => (
          <div key={index}>
            <h3>{customer.name}</h3>
            <h3>{customer.service}</h3>
            <h3>{customer.email}</h3>
            <h3>{customer.status}</h3>
            <br />
            <button
              onClick={() => {
                setCustomers(
                  customers.map((cust) => {
                    return cust.email == customer.email
                      ? { ...cust, status: "progress" }
                      : cust;
                  })
                );
              }}
            >
              Progress
            </button>
            <button
              onClick={() => {
                setCustomers(
                  customers.map((cust) => {
                    return cust.email === customer.email
                      ? { ...cust, status: "completed" }
                      : cust;
                  })
                );
              }}
            >
              Completed
            </button>
          </div>
        ))}
    </div>
  );
}

export default Ownerdesk;
   