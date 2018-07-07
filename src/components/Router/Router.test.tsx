import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Router from './index';

const adapter = new Adapter();
configure({ adapter });

describe('Router suite', () => {
  it('should match snapshot', () => {
    const tree = shallow(<Router />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should be selectable by .Router', () => {
    expect(shallow(<Router />).is('.Router')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Router />).find('.Router').length).toBe(1);
  });
});
