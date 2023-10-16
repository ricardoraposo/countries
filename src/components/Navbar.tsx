import { BsMoonFill } from 'react-icons/bs';
import Container from './Container';

function Navbar() {
  return (
    <Container className="justify-between bg-dark-blue drop-shadow shadow-lg">
      <h1 className="text-white font-bold text-2xl">Where in the world?</h1>
      <div className="flex items-center text-white gap-3">
        <BsMoonFill />
        <p>Dark mode</p>
      </div>
    </Container>
  );
}

export default Navbar;
