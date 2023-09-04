import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { dataQuery } from './api';
import { Loader } from './Loader/Loader';
import { Button } from './ButtonLoadMore/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    error: false,
    isModalOpen: false,
    selectedItem: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      try {
        this.setState({ isLoading: true, error: false });
        const userQuery = await dataQuery(this.state.query, this.state.page);
        this.setState({ images: [...prevState.images, ...userQuery.hits] });
        console.log(userQuery);
        if (this.state.page === 1) {
          toast.success('Here is was we found for your request.');
        }
      } catch (error) {
        this.setState({ error: true });
        toast.error('Oops! Something went wrong. Please reload the page.');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const userSearch = evt.target.elements.query.value;
    this.setState({
      query: userSearch,
      image: [],
      page: 1,
    });
    evt.target.reset();
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = image => {
    this.setState({ isModalOpen: true, selectedImage: image });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, selectedImage: null });
  };

  render() {
    const { images, isLoading, isModalOpen, selectedImage } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.openModal} />
        )}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        <Toaster />
        {isModalOpen && (
          <Modal closeModal={this.closeModal} selectedImage={selectedImage} />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
