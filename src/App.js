import React from 'react';
import './App.css';

const App = () => <PersonList />;

const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `http://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className='person'>
      <img src={url} alt='Person' />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  );
};

const PersonList = () => {
  const people = [
    {
      name: 'Cole',
      img: 22,
      job: 'Web Dev'
    },
    {
      name: 'Simon',
      img: 56,
      job: 'Web Designer'
    },
    {
      name: 'Jill',
      img: 34,
      job: 'Analyst'
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, est
        quas odio dolores deleniti in?
      </Person>
      <Person person={people[2]} />
    </section>
  );
};

export default App;
