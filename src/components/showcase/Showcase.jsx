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
        <div className='buttonFix'>
          <ButtonReact title="Leer Mas!"></ButtonReact>
        </div>
      </div>
    </div>
    </Section>
    
  )
}

export default Showcase;

const Section = styled.section`
    
    .heroImage{
      border: 1px solid pink;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagen});
      width: 100%;
      height: 310px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin: 5px 5px;
    }
    .heroText{
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      position: relative;
    }
    .buttonFix{
      
    }

    


`
