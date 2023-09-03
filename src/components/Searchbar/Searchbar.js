import {
  Input,
  SearchButton,
  SearchForm,
  SearchbarHeader,
  SvgSearch,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader onSubmit={onSubmit}>
      <SearchForm>
        <SearchButton type="submit" class="button">
          <SvgSearch />
        </SearchButton>

        <Input
          name="query"
          type="text"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
