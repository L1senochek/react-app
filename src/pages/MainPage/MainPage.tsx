import React, { Component } from 'react';
import TopSection from '../../components/TopSection/TopSection';
import './main-page.scss';
import MainSection from '../../components/MainSection/MainSection';
import { SearchState } from '../../model/components/Search/Search';

class MainPage extends Component<Record<string, never>, SearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  handleSearchChange = (value: string) => {
    this.setState({ searchValue: value }, () => {
      console.log(222, this.state.searchValue);
    });
  };

  render(): JSX.Element {
    return (
      <main className="main-page">
        <TopSection onSearchChange={this.handleSearchChange} />
        <MainSection />
      </main>
    );
  }
}

export default MainPage;
