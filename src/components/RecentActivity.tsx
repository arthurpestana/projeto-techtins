import styles from './RecentActivity.module.css';

const RecentActivity = () => {
  const activities = [
    { admin: 'Soares Souza', email: 'soares.souza@gmail.com', user: 'João Barreira', date: '11/09/2024' },
    // Adicione mais atividades conforme necessário
  ];

  return (
    <section className={styles.recentActivity}>
      <h2>Atividades Recentes</h2>
      <table>
        <thead>
          <tr>
            <th>Administrador</th>
            <th>E-mail Administrador</th>
            <th>Usuário Cadastrado</th>
            <th>Data de Cadastro</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.admin}</td>
              <td>{activity.email}</td>
              <td>{activity.user}</td>
              <td>{activity.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RecentActivity;
