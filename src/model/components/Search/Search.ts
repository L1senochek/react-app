export interface SearchState {
  searchValue: string;
}

export interface SearchProps {
  onSearchChange: (value: string) => void;
}
