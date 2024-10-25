"use client"
import { useState } from "react";
import { Operadores } from "app/components/home/Operadores"
import { ConsultaFactura } from "app/components/home/ConsultaFactura"
import { ResumenFactura } from "app/components/home/ResumenFactura"

export default function Home() {
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
  const [consultationMethod, setConsultationMethod] = useState<string>("reference");
  const [inputValue, setInputValue] = useState<string>("");
  const [facturaData, setFacturaData] = useState<any[]>([]); // Array para almacenar los datos

  const handleAddClick = () => {
    const newEntry = {
      operator: selectedOperator,
      method: consultationMethod,
      value: inputValue,
    };
  
    // Agrega el nuevo objeto al array
    setFacturaData((prevData) => [...prevData, newEntry]);
  
    // Muestra un alert con la información
    alert(`Operador: ${selectedOperator}, Método: ${consultationMethod}, Valor: ${inputValue}`);
    // Limpia los valores después de agregar
    setInputValue(""); // Limpia el input
  };

  const showArrayClick = () =>{
    console.log(facturaData)
  }

  return (
    <main>
      <Operadores setSelectedOperator={setSelectedOperator} />
      <ConsultaFactura 
        setConsultationMethod={setConsultationMethod} 
        setInputValue={setInputValue} 
        handleAddClick={handleAddClick} 
      />
      <button
            onClick={showArrayClick}
          >
            ver
          </button>
      <ResumenFactura data={facturaData} />
    </main>
  )
}