import React from 'react';
import './Style.css';
import Ellipse from '../../assets/image/Ellipse.svg';
import Telephone from '../../assets/image/Telephone.svg';
import CoordinatesBox from './CoordinatesBox';
import Mail from '../../assets/image/Mail.svg';
import DesktopTelephone from '../../assets/image/DesktopTelephone.svg';
import Customizable from '../../assets/image/Customizable.svg';
import Billing from '../../assets/image/Billing.svg';
import DriversAndVehicle from '../../assets/image/DriversAndVehicles.svg';

const CoordinatePage = () => {
  return (
    <section className='coordinate-container'>
        <div className ='coordinate-content'>
            <div className="telephone">
               
                    <img src={Telephone} alt="" />
                
            </div>
            <div className='coordinate-header'>
                <h3>
                    Coordinate from one place
                </h3>
                <img src={Ellipse} alt=""/>
            </div>
            <div className='coordinate-dispatch'>
                <div className='auto-dispatch'>
                    <div style={{  width:'90%', height:'45%'}}>
                        <CoordinatesBox Image={Mail} header="AutoDispatch" content="Efficiently manage your NEMT business. Our smart dispatching system uses real-time data to automatically assign drivers to trips, 
                        reducing waiting times and ensuring timely pickups and drop-offs for your clients"
                        />
                    </div>
                    <div style={{  width:'90%', height:'45%'}}>
                    <CoordinatesBox Image={Billing} header="Billing and invoicing" content="Generate invoices for completed rides and ensure timely payment from clients. Keep track of billing history all in one place and save time for your business."
                    />
                    
                    </div>
                </div>
                <div className="desktop-telephone">
                    <img src={DesktopTelephone} alt=""/>
                </div>
                <div className='manage-drivers'>
                    <div style={{  width:'90%', height:'45%'}}>
                    <CoordinatesBox Image={DriversAndVehicle}
                                    header="Manage Drivers and Vehicles" 
                                    content="Manage and keep track of your drivers and vehicles all in one place to avoid the hassle of switching between multiple platforms. Stay on top of vehicle maintenance schedules, to maximize efficiency and minimize downtime."
                                />
                    
                    </div>
                    <div style={{ width:'90%', height:'45%'}}>
                    <CoordinatesBox Image={Customizable}
                                    header="Customizable reporting:" 
                                    content="Generate reports on everything from vehicle usage to driver performance, and tailor them to your unique needs. Make data-driven decisions and optimize your operations"
                                    />
                                
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CoordinatePage;