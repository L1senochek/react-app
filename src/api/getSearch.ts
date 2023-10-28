import IPlanetsResult from '../model/api/IPlanetsResult';

const getSearch: (searchValue: string) => Promise<IPlanetsResult> = async (
  searchValue
) => {
  return await (
    await fetch(`https://swapi.dev/api/planets/?search=${searchValue}`)
  ).json();
};

export default getSearch;
