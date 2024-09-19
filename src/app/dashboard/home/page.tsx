import Head from 'next/head';
import styles from './Home.module.css';
import RecentActivity from '../../../components/RecentActivity';
import Statistics from '../../../components/Statistics';

const Home = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Sistema de Gerenciamento de Usuários</title>
        <meta name="description" content="Dashboard de gerenciamento de usuários" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.header}>
        <div className={styles.headerText}>
          <h1>Sistema de Gerenciamento de Usuários</h1>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </div>
        <div className={styles.headerImage}>
          {/* Você pode adicionar uma imagem ou componente de imagem aqui */}
          <img src="/image.jpg" alt="header" />
        </div>
      </section>

      <Statistics />

      <RecentActivity />
    </main>
  );
};

export default Home;