import React from 'react';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme'; // highlevel enzyme lets us mock react components
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './../component/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('simple test for initial state', () => {
    const mountedDashBoard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashBoard.state('notes')).toEqual([]);
  });
  test('Dashboard should display an H1 heading saying blah blah blah', () => {
    const mountedDashBoard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashBoard.find('h1')).toEqual('To-Do App Dashboard');
  });
  test('Dashboard should contain a NoteForm', () => {
    const mountedDashBoard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashBoard.find('NoteForm')).toBeTruthy();
  });
  test('Expenses shoudl be added correctly to the internal state', () => {
    const mountedDashBoard = enzymeShallowMount(<Dashboard />);
    mountedDashBoard.setState({
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
    expect(mountedDashBoard.find('notes').length).toEqual(2);
    // expect(mountedDashBoard.find('p').text()).toEqual();
  });
});
