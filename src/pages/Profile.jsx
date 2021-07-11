import { useAtom } from 'jotai';
import { useHistory } from 'react-router';
import { manhwaAtom } from '../store';

const Profile = () => {
  const { push } = useHistory();
  const [state, setState] = useAtom(manhwaAtom);
  const handleReset = (e) => {
    e.preventDefault();
    setState({ roman: '', format: '' });
    push('/');
  };
  return (
    <>
      <img src="https://bit.ly/3AfK4Qq" alt="anime gif" />
      <h2>
        <code>{JSON.stringify(state, null, '\t')}</code>
      </h2>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Profile;
