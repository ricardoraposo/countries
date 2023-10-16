import { useQuery } from '@tanstack/react-query';
import { getAllCountries } from '../services/getCountries';
import { Country } from '../types';

function useGetCountries() {
  const info = useQuery({
    queryKey: ['countries'],
    queryFn: getAllCountries,
    select: ({ data }) => data as Country[],
  });

  return info;
}

export default useGetCountries;
