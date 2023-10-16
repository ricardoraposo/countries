import { PropsWithChildren, createContext, useState } from 'react';

type FilterContextType = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
};

export const FilterContext = createContext({} as FilterContextType);

function FilterProvider({ children }: PropsWithChildren) {
  const [filter, setFilter] = useState('');
  const [region, setRegion] = useState('');

  return (
    <FilterContext.Provider value={ { filter, setFilter, region, setRegion } }>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
