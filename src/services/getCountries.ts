import instance from './api';

export function getAllCountries() {
  const data = instance.get('all');
  return data;
}
