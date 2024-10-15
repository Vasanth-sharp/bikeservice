import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const pass = e.target[1].value;
    const customerData = { email, pass };
    try {
      console.log("request sent");
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        body: JSON.stringify(customerData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log("response");
      if (res.status === 200) {
        setTimeout(() => {
          navigate("/services", { state: { email } });
        }, [2000]);
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
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form onSubmit={handleLogin}>
        <div className="email" style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
              color: "#333",
            }}
          >
            Enter your email
          </label>
          <input
            type="email"
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div className="password" style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
              color: "#333",
            }}
          >
            Enter a password
          </label>
          <input
            type="password"
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
