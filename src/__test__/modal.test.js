import React from 'react';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme'; // highlevel enzyme lets us mock react components
import Adapter from 'enzyme-adapter-react-16';
import Modal from './../component/modal/modal';

configureEnzyme({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('simple test for initial state', () => {
    const mountedModal = enzymeShallowMount(<Dashboard />);
    expect(mountedModal.state('notes')).toEqual([]);
  });
  test('Dashboard should display an H1 heading saying blah blah blah', () => {
    const mountedModal = enzymeShallowMount(<Dashboard />);
    expect(mountedModal.find('h1')).toEqual('To-Do App Dashboard');
  });
  test('Dashboard should contain a NoteForm', () => {
    const mountedModal = enzymeShallowMount(<Dashboard />);
    expect(mountedModal.find('NoteForm')).toBeTruthy();
  });
  test('Expenses shoudl be added correctly to the internal state', () => {
    const mountedModal = enzymeShallowMount(<Dashboard />);
    mountedModal.setState({
      expenses: [
        {
          note: 'title',
          content: 'my life story',
        },
        {
          note: 'new day',
          content: 'new digs',
        },
      ],
    });
    expect(mountedModal.find('notes').length).toEqual(2);
    // expect(mountedModal.find('p').text()).toEqual();
  });
});
