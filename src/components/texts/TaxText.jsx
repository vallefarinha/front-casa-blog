import React from 'react';

const TaxText = () => {
  return (
    <div className="font-poppinsRegular text-justify mb-4 w-full text-LetterColor text-md lg:text-lg sm:text-xs">
      <p>Tras la entrada en vigor el 1 de enero de 2024 del Real Decreto-ley  6/2023, de 19 de diciembre, de los primeros 250€ que dones, te deduces  200€. Si eres donante particular, existen deducciones fiscales por  donativos a ONG que pueden ir del 40% al 80% en el Impuesto sobre la  Renta de las Personas Físicas (IRPF). Los nuevos porcentajes de deducción son los siguientes:</p>
      <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
        <li>Deducción del 80% para los primeros 250 euros donados.</li> 
        <li>A partir de ese importe, es decir para el importe donado por encima de los primeros 250 euros:
          <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
            <li>Deducción del 40%.</li>
            <li>Deducción  del 45% siempre que en los dos años anteriores se haya realizado una  donación a la misma entidad al menos por el mismo importe.</li>
          </ul>
        </li>
      </ul>
      <p>Las deducciones fiscales para personas jurídicas en el Impuesto de Sociedades son: Deducción del 40% (con el límite del 15% de la base imponible). La  deducción pasa al 50% siempre que en los dos años anteriores se haya  realizado una donación a la misma entidad al menos por el mismo importe. Para  incluir el donativo en la Desgravación Fiscal (Declaración de la Renta)  es necesario que nos facilite la siguiente información: Nombre y  apellidos, dirección postal, DNI e email. Si tiene cualquier duda  estamos a su disposición en casadeacogidaguia@hotmail.es</p>
    </div>
  );
};

export default TaxText;