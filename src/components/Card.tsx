import { Country } from '../types';

type CardProps = {
  country: Country;
};

function Card({ country }: CardProps) {
  const { name, population, flags, region, capital } = country;

  return (
    <div
      className="w-72 h-96 lg:w-64 lg:h-80 bg-dark-blue rounded-lg overflow-hidden
      drop-shadow shadow-xl"
    >
      <img
        className="w-72 lg:w-64"
        src={ flags.svg }
        alt={ `${name.common}'s flag` }
      />
      <div className="text-white px-6">
        <h2 className="py-4 text-xl font-bold break-words">{name.common}</h2>
        <div className="pb-6">
          <div className="flex gap-2">
            <span className="font-bold">{'Population: '}</span>
            <p>{population}</p>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">{'Region: '}</span>
            <p>{region}</p>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">{'Capital: '}</span>
            <p>{capital}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
