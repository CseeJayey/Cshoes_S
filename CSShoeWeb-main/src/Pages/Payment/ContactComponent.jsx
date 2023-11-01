import React, { useState } from 'react';
import vietnamCities from './vietnamCities ';
import './ContactComponent.css';
import { Link } from 'react-router-dom';

export default function ContactComponent() {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [district, setDistrict] = useState("");
    const [apartment, setApartment] = useState("");

    const [isEmailValid, setEmailValid] = useState(true);
    const [isPhoneValid, setPhoneValid] = useState(true);

    const [isFirstNameEmpty, setFirstNameEmpty] = useState(false);
    const [isLastNameEmpty, setLastNameEmpty] = useState(false);
    const [isDistrictEmpty, setDistrictEmpty] = useState(false);
    const [isApartmentEmpty, setApartmentEmpty] = useState(false);
    const [isCityEmpty, setSelectedCityEmpty] = useState(false);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value));
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        // console.log(value.length);
        if(value.length <10 || value.length >11 || value % 1 !== 0)
        {
            setPhoneValid(false);
        }
        else setPhoneValid(true)
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const hasError = validateFields();
        if (!hasError) {

        }
    };

    const handleFirstNameChange = (e) => {
        e.preventDefault(e.target.value);
        setFirstName(e.target.value);
        if(e.target.value !== "")
        {
            setFirstNameEmpty(false);
        }
        else
            setFirstNameEmpty(true)
    }

    const handleLastNameChange = (e) => {
        e.preventDefault(e.target.value);
        setLastName(e.target.value);
        if(e.target.value !== "")
        {
            setLastNameEmpty(false);
        }
        else
            setLastNameEmpty(true)
    }

    const handleDistrictChange = (e) =>{
        e.preventDefault(e.target.value);
        setDistrict(e.target.value);
        if(e.target.value !== "")
        {
            setDistrictEmpty(false);
        }
        else
            setDistrictEmpty(true)
    }

    const handelApartmentChange = (e) => {
        e.preventDefault(e.target.value);
        setApartment(e.target.value);
        if(e.target.value !== "")
        {
            setApartmentEmpty(false);
        }
        else
        setApartmentEmpty(true)
    }

    const validateFields = () => {
        let hasError = false;

        if (email === "") {
            setEmailValid(false);
            hasError = true;
        }

        if (phone === "" || (phone.length <10 || phone.length >11 || phone % 1 !== 0)) {
            console.log(phone.length);
            setPhoneValid(true);
            hasError = true;
        }

        if (selectedCity === "") {
            setSelectedCityEmpty(true);
            hasError = true;
        }

        if (firstName === "" ) {
            setFirstNameEmpty(true);
            hasError = true;
        }

        if (lastName === "" ) {
            setLastNameEmpty(true);
            hasError = true;
        }

        if (district === "" || apartment === "") {
            setDistrictEmpty(true);
            setApartmentEmpty(true);
            hasError = true;
        }

        return hasError;
    };

    return (
        <div className='contact-infor'>
            <div className='contact'>
                <h1>Contact</h1>
                <div className={`email padding-form ${!isEmailValid ? "error" : ""}`}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {!isEmailValid && <div className="error-message">Invalid email format</div>}
                </div>
                <div className={`phone-number padding-form ${!isPhoneValid ? "error" : ""}`}>
                    <div className="phone-input">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                        {!isPhoneValid && <div className="error-message">Invalid phone number</div>}
                    </div>
                </div>
            </div>
            <div className='shipping-address'>
                <h1>Shipping Address</h1>
                <div className='consignee-name padding-form'>
                    <div className='first-name'>
                        <input
                            type="text"
                            placeholder="First Name"
                            className={`${isFirstNameEmpty ? "error" : ""}`}
                            onChange={handleFirstNameChange}
                        />
                        {isFirstNameEmpty && <div className="error-message">First Name is required</div>}
                    </div>
                    <div className='last-name'>
                        <input
                            type="text"
                            placeholder="Last Name"
                            onChange={handleLastNameChange}
                            className={`${isLastNameEmpty ? "error" : ""}`}
                        />
                        {isLastNameEmpty && <div className="error-message">Last Name is required</div>}
                    </div>
                </div>
                <div className='address'>
                    <div className={`city padding-form ${isCityEmpty ? "error" : ""}`}>
                        <select
                            id="city"
                            value={selectedCity}
                            onChange={(e) => 
                                setSelectedCity(e.target.value)
                            }
                        >
                            <option value="">Select a City</option>
                            {vietnamCities.map((city, index) => (
                                <option key={index} value={city.city}>
                                    {city.city}
                                </option>
                            ))}
                        </select>
                        {selectedCity ==="Select a City" && <div className="error-message">Please select a city</div>}
                    </div>
                    <div className={`district padding-form ${isDistrictEmpty ? "error" : ""}`}>
                        <input
                            type="text"
                            onChange={handleDistrictChange}
                            placeholder="District"
                        />
                        {isDistrictEmpty && <div className="error-message">District is required</div>}
                    </div>
                    <div className={`apartment padding-form ${isApartmentEmpty ? "error" : ""}`}>
                        <input
                            type="text"
                            onChange={handelApartmentChange}
                            placeholder="Apartment"
                        />
                        {isApartmentEmpty && <div className="error-message">Apartment is required</div>}
                    </div>
                </div>
            </div>

            <div className='data-footer'>
                <div className='return-to-infor'>
                    <Link to='/CartContent'>
                        <button type='submit' className='return-btn'>
                            {"< "} Return to information
                        </button>
                    </Link>

                </div>

                <div className='submit-btn'>
                    <button type="submit" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div>
            </div>

        </div>
    );
}
