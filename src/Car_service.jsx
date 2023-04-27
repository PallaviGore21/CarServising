import React, { useState } from 'react';

const carServices = {
  BS01: { service: 'Basic Servicing', hatchback: 2000, sedan: 4000, suv: 5000 },
  EF01: { service: 'Engine Fixing', hatchback: 5000, sedan: 8000, suv: 10000 },
  CF01: { service: 'Clutch Fixing', hatchback: 2000, sedan: 4000, suv: 6000 },
  BF01: { service: 'Brake Fixing', hatchback: 1000, sedan: 1500, suv: 2500 },
  GF01: { service: 'Gear Fixing', hatchback: 3000, sedan: 6000, suv: 8000 },
};

function getServiceCharge(serviceCode, carType) {
  const service = carServices[serviceCode];
  if (!service) return 0;
  const charge = service[carType.toLowerCase()];
  if (!charge) return 0;
  return charge;
}

function Car_services() {
  const [carType, setCarType] = useState('hatchback');
  const [services, setServices] = useState([]);

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
  };

  const handleServiceChange = (event) => {
    const serviceCode = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      setServices([...services, serviceCode]);
    } else {
      setServices(services.filter((service) => service !== serviceCode));
    }
  };

  const getTotalBill = () => {
    let total = 0;
    services.forEach((service) => {
      total += getServiceCharge(service, carType);
    });
    return total;
  };

  const handleReset = () => {
    setCarType('hatchback');
    setServices([]);
  };

  return <>

    
     {
     getTotalBill() > 10000 && (
        <div>
             <div class="alert alert-primary">
          <alert>Complimentary Cleaning Included!🎉</alert>
        </div>
        </div>
      )}         
<div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div class="card m-5">
            <div class="card-header bg-info d-flex justify-content-center">Car Servicing Center</div>
            <div class="card-body">
              <div>
                <label for="email" class="form-label">Car type</label>
                <select class="form-select"  value={carType} onChange={handleCarTypeChange}>
         <option selected>Select Category</option>
         <option value="hatchback">Hatchback</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
       </select>
              </div>
              <div class="mt-2">
                <label for="password" class="form-label mt-3" >services</label>
                <div>
        <ol type='1'>
          {Object.entries(carServices).map(([serviceCode, { service }]) => (
            <li key={serviceCode}>
              <label>
                <input
                  type="checkbox"
                  value={serviceCode}
                  onChange={handleServiceChange}
                  checked={services.includes(serviceCode)}
                />
                {`${service} (₹${getServiceCharge(serviceCode, carType)})`}
              </label>
            </li>
          ))}
        </ol>
      </div>
     
     
     
              <button type="button" class="btn btn-warning w-100 mt-3">
              <label>Total Bill: ₹{getTotalBill()}</label>              </button>
              <button type='button' onClick={handleReset} className='btn btn-danger w-100 mt-3'>Reset</button>
              <p class="text-center mt-3">
                       </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    </>
        }
        export default Car_services