import React, {  Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// this method uses a context consumer instead of the ".Provider" 
// method as shown in the "OldNavbar" component below.
// The former can be used on both class and functional components 
// whereas the latter only works for class components
class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context)
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

// this is one way to consume context by using the static property called 'contextType',
// and setting it equal to whatever context we want to use (ThemeContext)
// this only works with class components 
class OldNavbar extends Component {
  static contextType = ThemeContext;
  render() {
    // console.log(this.context)
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;