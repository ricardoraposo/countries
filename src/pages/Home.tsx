import CardDisplay from '../components/CardDisplay';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import FilterProvider from '../context/Provider';

function Home() {
  return (
    <div>
      <Navbar />
      <FilterProvider>
        <Input />
        <CardDisplay />
      </FilterProvider>
    </div>
  );
}

export default Home;
