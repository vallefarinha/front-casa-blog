import React from 'react'
import BoxBlue from "./BoxBlueAtom";
import PersonalDataCheck from './PersonalDataCheck';


const FormBlue = () => {
  return (
    <div className="flex items-center justify-center mt-[-10px]">
      <div className="relative w-auto h-1/2 flex flex-wrap mt-5 mb-1" style={{ backgroundColor: 'rgba(17, 138, 178, 0.6)', borderRadius: '20px' }}>
        <div className="w-full p-4 sm:w-1/2  z-15">
          <div className="flex flex-col md:flex-row z-15">
            <BoxBlue titleBox="Nombre *" name="name" squareBlue="Ingrese su nombre" type="text" />
            <BoxBlue titleBox="Apellidos *" name="secondname" squareBlue="Ingrese sus apellidos" type="text" />
          </div>
          <div className="flex flex-col md:flex-row">
            <BoxBlue titleBox="DNI/NIE *" name="dni" squareBlue="Ingrese su DNI/NIE" type="text" pattern="^([0-9]{8}[A-Za-z]|[XYZ][0-9]{7}[A-Za-z])$" />
            <BoxBlue titleBox="Teléfono" name="phone" squareBlue="Ingrese su número de teléfono" type="text" pattern="^[0-9]{9}$" />
          </div>
          <div className="flex flex-col md:flex-row">
            <BoxBlue titleBox="Email *" name="email" squareBlue="Ingrese su correo electrónico" type="email" />
            <BoxBlue titleBox="Dirección" name="address" squareBlue="Ingrese su dirección" type="text" />
          </div>
          <div className="flex flex-col md:flex-row z-10" >
            <BoxBlue titleBox="Ciudad" name="city" squareBlue="Ingrese su ciudad" type="text" />
            <BoxBlue titleBox="Código Postal" name="zipcode" squareBlue="Ingrese su código postal" type="text" pattern="^[0-9]{5}$" />
          </div>
          <div className="flex md:flex-row flex-col">
            <BoxBlue titleBox="Provincia" name="province" squareBlue="Ingrese su provincia" type="text" />
            <BoxBlue titleBox="País" name="country" squareBlue="Ingrese su país" type="text" />
          </div>
          <div className="flex md:flex-row flex-col text-LetterColor">
            <PersonalDataCheck />
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default FormBlue;


