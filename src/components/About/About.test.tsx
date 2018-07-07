import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import About from './index';

const adapter = new Adapter();
configure({ adapter });

describe('AppHeader suite', () => {
  it('should match snapshot', () => {
    const tree = shallow(<About />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should be selectable by class .About', () => {
    expect(shallow(<About />).is('.About')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<About />).find('.About').length).toBe(1);
  });
});
