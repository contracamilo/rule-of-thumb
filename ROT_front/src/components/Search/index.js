import React from 'react';
import { ReactComponent as Tool } from '../../assets/icons/search.svg';

/**
 * Ui component for user interaction.
 *
 * @return {JSX} Search button
 */
const Search = () => {
  return (
    <div className="navigation__search">
      <Tool />
    </div>
  );
};

export default Search;
