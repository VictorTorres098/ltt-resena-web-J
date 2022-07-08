import React from 'react';
import ButtonReact from '../button/Button';
import styled from 'styled-components';
import imgShowcase from '../../assets/img/showcaseImg.jpg'

export const Showcase = () => {
  return (
    <Section className='showcase'>
        <div className='showcaseInfo'>
          <h2>Que es leete la vida</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quasi! Ipsa esse enim velit modi eveniet, ex similique mollitia necessitatibus odio! Cum officia iste qui laboriosam soluta rerum explicabo vitae!</p>
          <a href="/">
              <ButtonReact buttonText="Quiero saber mas!"/>
          </a>
        </div> 
    </Section>
  )
}

export default Showcase;

const Section = styled.section`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fdcae1;
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
