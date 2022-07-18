import React from 'react';
import ButtonReact from '../button/Button';
import styled from 'styled-components';
import imgShowcase from '../../assets/img/showcaseImg.jpg'

export const Showcase = () => {
  return (
    <Section className='showcase'>
        
        <div className='heroImage' />

        <div className='showcaseInfo'>
          <h2>Que es leete la vida</h2>
          <p>icia iste qui laboriosam soluta rerum explicabo vitae!</p>
           <a href="/">
              <ButtonReact title={"Quiero saber mas"}/>
          </a> 
        </div> 
    </Section>
    
  )
}

export default Showcase;

const Section = styled.div`
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgShowcase});
    background-size: cover; */
    background: url(${imgShowcase}) 50% no-repeat; 
    background-size: cover;
    height: 40vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

  /* .heroImage{
      border: 1px solid pink;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgShowcase});
      height: 350px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      margin: 5px 5px;
    } */
    .showcaseInfo{
      text-align: center;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      position: absolute;
    }
    .buttonFix{
      position: absolute;
    }

/*   .heroImage{
    border: 1px solid pink;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgShowcase});
    width: 100%;
   
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
     margin: 5px 5px; 
     
    height: 350px;

  
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: inherit;

  } */
/*   .showcaseInfo{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 1;
} */
`;

