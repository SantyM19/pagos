import Image from "next/image";
import Link from "next/link";
import styles from 'app/sass/not-found.module.sass'

export default function NotFound() {
  return (
    <main className={styles.NotFound}>
      <h2 className={styles.NotFound__title}>404</h2>
      <Image
        src="/images/404.png"
        alt="404"
        width={300}
        height={300}
      />
      <h2 className={styles.NotFound__subtitle}>
        ¡Uy, parece que el enlace se escondió!
      </h2>
      <p className={styles.NotFound__description}>Pero nuestros servicios siguen funcionando 24/7</p>
      <Link className={styles.NotFound__link} href="/">
        ¡Retomemos!
      </Link>
    </main>
  );
}