import React from 'react';
import PropTypes from 'prop-types';

import Menu from '@components/Menu';

function MenuList(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap justify-around -mx-2">
        {props.menus.map(({ subTitle, title, menu }) => (
          <Menu
            key={subTitle + title}
            subTitle={subTitle}
            title={title}
            menu={menu}
          />
        ))}
      </div>
    </section>
  );
}

MenuList.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      subTitle: PropTypes.string,
      title: PropTypes.string,
      menu: PropTypes.string,
    })
  ),
};
MenuList.defaultProps = {
  menus: [],
};

export default MenuList;
