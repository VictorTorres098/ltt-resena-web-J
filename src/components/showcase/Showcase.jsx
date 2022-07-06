import React from 'react';
import ButtonReact from '../button/Button';
import styled from 'styled-components';
import imagen from '../../img/showcaseImg.jpg';

export const Showcase = () => {
  return (
    <Section>
      <div className='heroImage'>
      <div className='heroText'>
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum, dolor sit amet consectetur a? dolor sit amet consectetur</p>
        <ButtonReact>Login</ButtonReact>
      </div>
    </div>
    </Section>
    
  )
}

export default Showcase;

const Section = styled.section`
    position: relative;
    
    .heroImage{
      border: 1px solid pink;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagen});
      width: 100%;
      height: 310px;

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      margin: 5px 5px;
    }
    .heroText{
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }
    


`
