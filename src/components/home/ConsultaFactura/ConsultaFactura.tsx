"use client"
import styles from "./ConsultaFactura.module.sass"
import { useState } from "react"

export const ConsultaFactura = ({ setConsultationMethod, setInputValue, handleAddClick } :any) => {
  const [selectedOption, setSelectedOption] = useState("reference");
  const [referenceValue, setReferenceValue] = useState("");
  const [cellphoneValue, setCellphoneValue] = useState("");

  const handleReferenceChange = (event:any) => {
    const value = event.target.value;
    setReferenceValue(value);
    setInputValue(value); // Actualiza inputValue directamente
  };

  const handleCellphoneChange = (event:any) => {
    const value = event.target.value;
    setCellphoneValue(value);
    setInputValue(value); // Actualiza inputValue directamente
  };

  const handleOptionChange = (event:any) => {
    const value = event.target.value;
    setSelectedOption(value); // Actualiza el estado local
    setConsultationMethod(value); // Actualiza el método de consulta en el componente padre
  };

  return (
    <section className={styles.ConsultaF}>
      <div className={styles.ConsultaF__title}>
        <h2>02</h2>
        <div className={styles.ConsultaF__title__line}></div>
        <h3>Selecciona el método de consulta de tu factura</h3>
      </div>
      <div className={styles.ConsultaF__form}>
        <div className={styles.ConsultaF__form__option}>
          <input
            type="radio"
            id="reference"
            name="option"
            value="reference"
            checked={selectedOption === "reference"}
            onChange={handleOptionChange}
          />
          <label htmlFor="reference">Número de referencia</label>
          <input
            type="text"
            placeholder="Digita la referencia"
            value={referenceValue}
            onChange={handleReferenceChange}
            disabled={selectedOption !== "reference"}
          />
          <button
            onClick={handleAddClick}
            disabled={selectedOption !== "reference" || !referenceValue.trim()}
          >
            Agregar
          </button>
        </div>

        {/* Opción Número de Celular */}
        <div className={styles.ConsultaF__form__option}>
          <input
            type="radio"
            id="cellphone"
            name="option"
            value="cellphone"
            checked={selectedOption === "cellphone"}
            onChange={handleOptionChange}
          />
          <label htmlFor="cellphone">
            Número de celular
            <br />
            <small>(aplica para TIGO y WOM)</small>
          </label>
          <input
            type="text"
            placeholder="Número celular"
            value={cellphoneValue}
            onChange={handleCellphoneChange}
            disabled={selectedOption !== "cellphone"}
          />
          <button
            onClick={handleAddClick}
            disabled={selectedOption !== "cellphone" || !cellphoneValue.trim()}
          >
            Agregar
          </button>
        </div>
      </div>
    </section>
  );
};