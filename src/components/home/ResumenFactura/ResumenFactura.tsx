import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import styles from "./ResumenFactura.module.sass";

export const ResumenFactura = ({ data, onEdit, onDelete, onAdd }: any) => {
  return (
    <section className={styles.ResumenF}>
      <h2>Resumen de facturas</h2>
      <table>
        <thead>
          <tr>
            <th>Operador</th>
            <th>Método de consulta</th>
            <th>Número de consulta</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((factura: any, index: any) => (
            <tr key={index}>
              <td>{factura.operator}</td>
              <td>{factura.method}</td>
              <td>{factura.value}</td>
              <td>
                <button onClick={() => onEdit(index)}>
                  <FaEdit />
                </button>
              </td>
              <td>
                <button onClick={() => onDelete(index)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.ResumenF__actions}>
        <button onClick={onAdd} className={styles.ResumenF__add}>
          + Adicionar otra factura
        </button>
        <button className={styles.ResumenF__pay}>Pagar</button>
      </div>
    </section>
  );
};
