import React from 'react';
import User from './User';
import UserClass from './UserClass'

const About = () => {
  return (
    <div >
      <h1 className='font-bold m-3'>About</h1>
      <h2 className='font-medium m-3'>This is an about page.</h2>
      <div className='flex'>
        <User 
          name={"Athira Rose John - Functional Component"} 
          location={" - Perinthalmanna "} 
          contact={"-athirarosejohn@gmail.com "} 
        />  

        <UserClass 
          name={"Athira Rose John - Class Component"}
          location={" - Perinthalmanna "} 
          contact={"-athirarosejohn@gmail.com "} 
        />
      </div>
      
    </div>
  );
}

export default About;
