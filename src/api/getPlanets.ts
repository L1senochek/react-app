import IPlanetsResult from '../model/api/IPlanetsResult';

const getPlanets: (pageUrl?: string) => Promise<IPlanetsResult> = async (
  pageUrl = 'https://swapi.dev/api/planets/'
) => {
  return await (await fetch(pageUrl)).json();
};

export default getPlanets;
