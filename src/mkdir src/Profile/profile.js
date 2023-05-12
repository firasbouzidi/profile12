import PropTypes from 'prop-types';

function Profile(props) {
  const { fullName, bio, profession, children, handleName } = props;
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, Helvetica, sans-serif',
      backgroundColor: '#f2f2f2',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    image: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '20px',
    },
    name: {
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    profession: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    bio: {
      fontSize: '18px',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <img src={children} alt="Profile" style={styles.image} />
      <h1 style={styles.name} onClick={() => handleName(fullName)}>
        {fullName}
      </h1>
      <h2 style={styles.profession}>{profession}</h2>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
}

Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'No bio available',
  profession: 'No profession specified',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
