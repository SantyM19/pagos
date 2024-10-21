import styles from './HomeLayout.module.sass'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.Container}>
      <h2>Paga tu factura todo operador</h2>
      {children}
    </div>
  )
}