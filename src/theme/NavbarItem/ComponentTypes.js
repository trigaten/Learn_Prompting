import React from "react";

import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import MyAwesomeNavbarItem from '@site/src/subsections/landingpage/Navbar.js';

function MyAwesomeNavbarItemForDocs(props) {
  return <MyAwesomeNavbarItem {...props} forDocs={true} />;
}

export default {
  ...ComponentTypes,
  'custom-myAwesomeNavbarItem': MyAwesomeNavbarItemForDocs,
  
};
