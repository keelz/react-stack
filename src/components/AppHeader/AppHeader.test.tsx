import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Router from '../Router';
import AppHeader from './index';

const adapter = new Adapter();
configure({ adapter });

describe('AppHeader suite', () => {
  it('should match snapshot', () => {
    const tree = shallow(<AppHeader />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should be selectable by class .App-header', () => {
    expect(shallow(<AppHeader />).is('.App-header')).toBe(true);
  });

  it('should mount within a Router component', () => {
    expect(mount(<Router><AppHeader /></Router>).find('.App-header').length).toBe(1);
  });
});
