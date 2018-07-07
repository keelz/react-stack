import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Home from './index';

const adapter = new Adapter();
configure({ adapter });

describe('Home suite', () => {
  it('should match snapshot', () => {
    const tree = shallow(<Home />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should be selectable by .Home', () => {
    expect(shallow(<Home />).is('.Home')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Home />).find('.Home').length).toBe(1);
  });
});
