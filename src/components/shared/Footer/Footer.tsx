import styles from './Footer.module.sass';
export const Footer = () => {
  return(
    <footer className={styles.Footer}>
      <h2>Pagos de facturas</h2>
      <div>
        <p>megapagosco@gmail.com</p>
        <p>3100000000</p>
        <p>Medellin, Antioquia</p>
      </div>
      <div> 
        <p>Termino y condiciones</p>
        <p>Politacas de privacidad</p>
      </div>
    </footer>
  )
};