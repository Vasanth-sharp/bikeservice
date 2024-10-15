import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', color: '#333', padding: '0', margin: '0' }}>
  {/* Hero Section */}
  <div style={{ backgroundColor: '#000', color: '#fff', padding: '50px 20px', textAlign: 'center' }}>
    <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>Welcome to BikeService</h1>
    <p style={{ fontSize: '18px', marginTop: '20px' }}>Your trusted partner for professional bike maintenance and repairs.</p>
    <Link to="/signup" style={{
      marginTop: '20px',
      padding: '15px 30px',
      backgroundColor: '#28a745',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '16px'
    }}>
      Book a Service
    </Link>
  </div>

  {/* Services Section */}
  <div style={{ padding: '50px 20px', textAlign: 'center' }}>
    <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' }}>Our Services</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <div style={{ width: '300px', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Oil Change</h3>
        <p style={{ fontSize: '16px' }}>Get your bike running smoothly with a fresh oil change. Regular oil changes can extend the life of your engine.</p>
      </div>
      <div style={{ width: '300px', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>General Service</h3>
        <p style={{ fontSize: '16px' }}>Ensure all components of your bike are working properly with our full general service. From brakes to chain maintenance, we cover it all.</p>
      </div>
      <div style={{ width: '300px', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Water Wash</h3>
        <p style={{ fontSize: '16px' }}>Keep your bike clean and shining with our thorough water wash service. We use high-quality products for the best result.</p>
      </div>
    </div>
  </div>

  {/* About Section */}
  <div style={{ backgroundColor: '#f0f0f0', padding: '50px 20px', textAlign: 'center' }}>
    <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' }}>Why Choose Us?</h2>
    <p style={{ fontSize: '18px', marginBottom: '30px' }}>At BikeService, we offer expert maintenance and repairs for all types of bikes. Our team of certified technicians ensures your bike gets the care it deserves, whether it's routine maintenance or a major repair.</p>
    <Link to="login" style={{
      padding: '15px 30px',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '16px'
    }}>
      Login
    </Link>
  </div>
</div>

  )
}

export default Welcome