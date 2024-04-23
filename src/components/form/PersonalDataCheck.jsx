import React from 'react';

const PersonalDataCheck = () => {
    return (
      <div>
        <label htmlFor="personaldata" className="ml-3"> Acepto el{' '}
          <a 
            href="#personal_data" 
            className="hover:text-gray-500 transition-opacity">
             tratamiento de datos personales *
          </a> 
        </label>
        <input
          type="checkbox"
          id="personaldata"
          name="personaldata"
          required
          value="SI"
          className="ml-3"
        />
      </div>
    );
  }
export default PersonalDataCheck