import DefaultTemplate from '../templates/DefaultTemplate.jsx';

const NoMatch = () => {
  const styles = {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '40px',
  };

  return <DefaultTemplate style={styles}>Page not found</DefaultTemplate>;
};

export default NoMatch;
