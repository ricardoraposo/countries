import { useContext, useState } from 'react';
import { FilterContext } from '../context/Provider';

type Hidden = 'hidden' | '';

function Select() {
  const { setRegion } = useContext(FilterContext);
  const [hidden, setHidden] = useState<Hidden>('hidden');

  const handleClick = (region: string) => {
    setRegion(region);
    setHidden('');
  };

  return (
    <div className="relative lg:mt-4">
      <button
        className="text-white bg-dark-blue font-medium rounded-lg text-md px-4 py-3 w-44
        text-center inline-flex items-center hover:bg-dark-gray"
        type="button"
        onClick={ () => setHidden(hidden === 'hidden' ? '' : 'hidden') }
      >
        Filter by region
      </button>

      <div className={ `z-10 ${hidden} bg-dark-blue rounded-lg shadow w-44 absolute` }>
        <ul className="py-2 text-sm text-gray-700 text-white">
          <li className="block px-4 py-2 hover:bg-dark-gray">
            <button onClick={ () => handleClick('Africa') } className="w-full text-start">
              Africa
            </button>
          </li>
          <li className="block px-4 py-2 hover:bg-dark-gray">
            <button
              onClick={ () => handleClick('Americas') }
              className="w-full text-start"
            >
              America
            </button>
          </li>
          <li className="block px-4 py-2 hover:bg-dark-gray">
            <button onClick={ () => handleClick('Asia') } className="w-full text-start">
              Asia
            </button>
          </li>
          <li className="block px-4 py-2 hover:bg-dark-gray">
            <button onClick={ () => handleClick('Europe') } className="w-full text-start">
              Europe
            </button>
          </li>
          <li className="block px-4 py-2 hover:bg-dark-gray">
            <button
              onClick={ () => handleClick('Oceania') }
              className="w-full text-start"
            >
              Oceani
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Select;
