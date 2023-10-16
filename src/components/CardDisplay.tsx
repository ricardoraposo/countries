import { useContext } from 'react';
import useGetCountries from '../hooks/useGetCountries';
import Card from './Card';
import Container from './Container';
import { FilterContext } from '../context/Provider';
import Loading from './Loading';

function CardDisplay() {
  const { data, isLoading } = useGetCountries();
  const { filter, region } = useContext(FilterContext);

  const filteredByName = data ? data.filter((country) => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase());
  }) : [];

  const finalFilter = region ? filteredByName.filter((country) => {
    return country.region === region;
  }) : filteredByName;

  return (
    <Container
      className="h-full min-h-screen justify-center items-start gap-20
      bg-very-dark-blue flex-wrap"
    >
      {isLoading ? <Loading /> : finalFilter.map((country) => (
        <Card key={ country.cca3 } country={ country } />
      ))}
    </Container>
  );
}

export default CardDisplay;
