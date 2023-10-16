export type Country = {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  cca3: string;
  flags: {
    svg: string;
  };
};
