import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { dataQuery } from './api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    )
      try {
        this.setState({ isLoading: true });
        const userQuery = await dataQuery(this.state.query, this.state.page);
        this.setState({ images: userQuery.hits });
        console.log(userQuery);
      } catch (error) {
      } finally {
        this.setState({ isLoading: false });
      }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: evt.target.elements.query.value,
      image: [],
      page: 1,
    });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <div>LOADING</div>}
        <ImageGallery images={images} />
        <GlobalStyle />
      </Layout>
    );
  }
}
