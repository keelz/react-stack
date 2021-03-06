import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './index';

configure({ adapter: new Adapter() });

describe('App suite', () => {
  it('should match snapshot', () => {
    const tree = shallow(<App />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should be selectable by class .App', () => {
    expect(shallow(<App />).is('.App')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<App />).find('.App').length).toBe(1);
  });
});
