import React, { useState } from 'react';
import "./Checkout.css"
function Checkout() {
  const [contactInfo, setContactInfo] = useState({ email: '' });
  const [deliveryInfo, setDeliveryInfo] = useState({ fullName: '', address: '', country: '', city: '', governorate: '', postalCode: '', phone: '' });
  const [paymentInfo, setPaymentInfo] = useState({ paymentMethod: '', cardNumber: '', expiryDate: '', cvv: '' });

  const handleContactChange = (e) => {
    setContactInfo({ email: e.target.value });
  };

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', { contactInfo, deliveryInfo, paymentInfo });
  };

  
  const renderPaymentDetails = () => {
    if (paymentInfo.paymentMethod === 'Cash on Delivery') {
      return <button type="submit" className='completebutton'>Complete Order</button>;
    } else if (paymentInfo.paymentMethod === 'Visa Card') {
      return (
        <div className='carddetails'>
          <label>Card Number:</label>
          <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handlePaymentChange} required className='input'/>
          <label>Expiry Date:</label>
          <input type="text" name="expiryDate" value={paymentInfo.expiryDate} onChange={handlePaymentChange} required className='input'/>
          <label>CVV:</label>
          <input type="text" name="cvv" value={paymentInfo.cvv} onChange={handlePaymentChange} required className='input'/>
          <button type="submit"  className='completebutton'>Complete Order</button>
        </div>
      );
    } else {
      return null; 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
      <h2>Contact Information</h2>

        <label>Email:</label>
        <input type="email" value={contactInfo.email} onChange={handleContactChange} required className='input'/>
        
        <h2>Delivery Information</h2>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={deliveryInfo.fullName} onChange={handleDeliveryChange} required className='input' />
        <label>Address:</label>
        <input type="text" name="address" value={deliveryInfo.address} onChange={handleDeliveryChange} required className='input'/>
        <label>Country:</label>
        <input type="text" name="country" value={deliveryInfo.country} onChange={handleDeliveryChange} required  className='input' placeholder='Egypt'/>
        <label>City:</label>
        <input type="text" name="city" value={deliveryInfo.city} onChange={handleDeliveryChange} required className='input'/>
        <label>Governorate:</label>
        <input type="text" name="governorate" value={deliveryInfo.governorate} onChange={handleDeliveryChange} required  className='input'/>
        <label>Postal Code:</label>
        <input type="text" name="postalCode" value={deliveryInfo.postalCode} onChange={handleDeliveryChange} required className='input'/>
        <label>Phone:</label>
        <input type="tel" name="phone" value={deliveryInfo.phone} onChange={handleDeliveryChange} required className='input'/>
        
        <h2>Payment Information</h2>
        <p>All transactions are secure and encrypted.</p>
        <div>
          <input type="radio" id="cashOnDelivery" name="paymentMethod" value="Cash on Delivery" onChange={handlePaymentChange} />
          <label htmlFor="cashOnDelivery">Cash on Delivery</label>
        </div>
        <div>
          <input type="radio" id="visaCard" name="paymentMethod" value="Visa Card" onChange={handlePaymentChange} />
          <label htmlFor="visaCard">Visa Card</label>
        </div>

        
        {renderPaymentDetails()}
        
      </form>
    </div>
  );
}

export default Checkout;

