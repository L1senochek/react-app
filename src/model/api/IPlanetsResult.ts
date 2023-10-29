import IPlanets from './IPlanets';

interface IPlanetsResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPlanets[];
}

export default IPlanetsResult;
