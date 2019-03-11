import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details';

// const getDetailsWithContext = (context = {
//   messages: [{
//     title: 'test',
//     message: 'This is a test'
//   }]
// }) => {
//   jest.doMock('context/context', () => {
//     return {
//       MessageContext: {
//         Consumer: (props) => props.children(context)
//       }
//     }
//   });

//   return require('./Details').Details;
// }

describe('Details', () => {
  it('renders without crashing', () => {
    const context = {
      messages: [{
          title: 'test',
          message: 'This is a test'
        }]
    }
    // const wrapper = shallow(<Details match={{params: 'test'}} />, { context });
    const wrapper = shallow(<Details match={{params: 'test'}} />);
    // expect(wrapper.find('MessageConsumer')).to.have.lengthOf(1);
  });
});