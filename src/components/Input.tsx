import { useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import Container from './Container';
import Select from './Select';
import { FilterContext } from '../context/Provider';

function Input() {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <Container
      className="justify-between bg-very-dark-blue items-center flex-col
      lg:flex-row"
    >
      <form className="relative">
        <input
          className="bg-dark-blue font-medium text-white text-md py-4 pl-12 rounded-lg
          drop-shadow-lg lg:w-[480px] sm:w-fit hover:cursor-auto"
          placeholder="Search for a country..."
          type="text"
          value={ filter }
          onChange={ (e) => setFilter(e.target.value) }
        />
        <button className="absolute top-2/4 -translate-y-1/2 left-4">
          <BiSearch className="text-white text-2xl" />
        </button>
      </form>
      <Select />
    </Container>
  );
}

export default Input;
