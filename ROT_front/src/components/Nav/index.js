import React from 'react';
import PropTypes from 'prop-types';

/**
 * Ui component for user interaction.
 *
 * @param {object} props passed properties, check prop-types for details.
 * @return {JSX} Header ui component.
 */
const Nav = ({ aria, items, additionalAction, children }) => {
  return (
    <nav aria-label={aria} className="navigation">
      <ul aria-label={aria} role="menubar" className="navigation__list">
        {(items || []) &&
          items.map((item, index) => (
            <li role="none" key={index} className="navigation__item">
              <a role="menuitem" href={item.url || null} tabIndex="0">
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        {additionalAction && (
          <li role="none" key={items.length} className="navigation__item">
            {children}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  aria: PropTypes.string,
  items: PropTypes.array,
};

Nav.defaultProps = {
  aria: 'rule of thumb',
  items: [],
};
