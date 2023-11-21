import PropTypes from "prop-types";

export const bookPropTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  imageUrl: PropTypes.string,
  removeVisible: PropTypes.bool.isRequired,
  detailVisible: PropTypes.bool.isRequired,
  favoriteVisible: PropTypes.bool,
  addToFavorites: PropTypes.func,
  removeToFavorites: PropTypes.func,
};

export const bookDefaultProps = {
  detailVisible: true,
  removeVisible: true,
  favoriteVisible: true,
};
