import React from 'react';
import ButtonReact from '../button/Button';
import styled from 'styled-components';

export const Showcase = () => {
  return (
    <Section className='showcase'>
        
        <h2>Que es leete la vida</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quasi! Ipsa esse enim velit modi eveniet, ex similique mollitia necessitatibus odio! Cum officia iste qui laboriosam soluta rerum explicabo vitae!</p>
        <a href="/">
            <ButtonReact buttonText="Quiero saber mas!"/>
        </a>
    </Section>
  )
}

export default Showcase;

const Section = styled.section`

`
