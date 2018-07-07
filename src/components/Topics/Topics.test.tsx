import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Topics from './index';

const adapter = new Adapter();
configure({ adapter });

describe('Topics suite', () => {
  it('should match snapshot', () => {
    const tree = shallow(<Topics />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should be selectable by .Topics', () => {
    expect(shallow(<Topics />).is('.Topics')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Topics />).find('.Topics').length).toBe(1);
  });
});
