import "whatwg-fetch"; // Mock fetch
import "raf/polyfill"; // Mock requestAnimationFrame

import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() }); // React 16 Enzyme adapter

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
