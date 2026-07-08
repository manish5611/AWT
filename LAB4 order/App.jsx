import { useState } from 'react';
import './App.css';

function App() {
  const [macQuantity, setMacQuantity] = useState(0);
  const [dellQuantity, setDellQuantity] = useState(0);
  const [hpQuantity, setHpQuantity] = useState(0);

  const macPrice = 90000;
  const dellPrice = 80000;
  const hpPrice = 65000;

  const totalCost = (macQuantity * macPrice) + (dellQuantity * dellPrice) + (hpQuantity * hpPrice);

  const currentDate = new Date();
  const orderDate = currentDate.toLocaleDateString('en-GB');
  
  const deliveryDateObj = new Date(currentDate);
  deliveryDateObj.setDate(deliveryDateObj.getDate() + 3);
  const expectedDeliveryDate = deliveryDateObj.toLocaleDateString('en-GB');

  return (
    <div className="container">
      <h2>Order Summary</h2>
      
      <div className="product-list">
        <div className="product">
          <h4>MAC book</h4>
          <p className="desc">Description: Apple MGN63HNA MacBook Air (Apple M1 Chip/8GB/256GB SSD/macOS Big Sur/Retina) INR</p>
          <p>Price: {macPrice} INR</p>
          <p>Quantity: {macQuantity}</p>
          <button onClick={() => setMacQuantity(macQuantity + 1)}>+</button>
        </div>
        
        <div className="product">
          <h4>Dell core i7</h4>
          <p className="desc">Description: 11th Generation Intel Core i7-11390H Processor Windows 11 Home INR</p>
          <p>Price: {dellPrice} INR</p>
          <p>Quantity: {dellQuantity}</p>
          <button onClick={() => setDellQuantity(dellQuantity + 1)}>+</button>
        </div>
        
        <div className="product">
          <h4>HP</h4>
          <p className="desc">Description: 11th generation INR</p>
          <p>Price: {hpPrice} INR</p>
          <p>Quantity: {hpQuantity}</p>
          <button onClick={() => setHpQuantity(hpQuantity + 1)}>+</button>
        </div>
      </div>

      <div className="summary">
        <p>Total: {totalCost} INR</p>
      </div>
      
      <div className="dates">
        <p>Order Date: {orderDate} (Note - Current date in dd/mm/yyyy)</p>
        <p>Expected Delivery Date: {expectedDeliveryDate} (Note - Current Date + 3 days)</p>
      </div>
    </div>
  );
}

export default App;
