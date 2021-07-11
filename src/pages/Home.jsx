import { useAtom } from 'jotai';
import { useHistory } from 'react-router-dom';
import { manhwaAtom } from '../store';

const Home = () => {
  const { push } = useHistory();
  const [state, setState] = useAtom(manhwaAtom);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    push('/profile');
  };

  return (
    <>
      <h2>Lets Get Started</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          placeholder="roman"
          name="roman"
          type="text"
          value={state.roman}
          onChange={handleOnChange}
          required
        />
        <input
          placeholder="format"
          name="format"
          type="text"
          value={state.format}
          onChange={handleOnChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Home;
