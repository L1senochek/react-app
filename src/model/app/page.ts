interface IHomeProps {
  searchParams: {
    page: string | undefined;
    limit: string | undefined;
    q?: string | undefined;
  };
}

export default IHomeProps;
