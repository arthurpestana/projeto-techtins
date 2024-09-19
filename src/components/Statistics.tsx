import styles from './Statistics.module.css';

const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <div className={styles.statItem}>
        <h3>Total de Usuários</h3>
        <p>50.000</p>
        <span>Update: 10 de Setembro de 2024</span>
      </div>
      <div className={styles.statItem}>
        <h3>Usuários Ativos</h3>
        <p>48.587</p>
        <span>Update: 10 de Setembro de 2024</span>
      </div>
      <div className={styles.statItem}>
        <h3>Usuários Inativos</h3>
        <p>1.413</p>
        <span>Update: 10 de Setembro de 2024</span>
      </div>
    </section>
  );
};

export default Statistics;
