import React from 'react'
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer'

import Heart from './Heart';
const FavouriteDogs = () => {

    const favImage = useSelector((state:RootState) => state.addFavImage);
    console.log(favImage)
  return (
      <Container>
          <Section>
              <Heart icon='redHeartIcon' alt='red heart icon' />
              <Heading>Favourite</Heading>
          </Section>
    <Favourite>
          {favImage.map((img,idx) => (
            
                  <ImageSection key={idx}>
                  <ImageContainer src={img} alt="fav image" />
                  <ImgCont>
          <Heart icon='redHeartIcon' alt='red heart icon' />
                      </ImgCont>
                      </ImageSection>
            
          ))}
              </Favourite>
         
    </Container>
  )
}

export default FavouriteDogs;

const Container = styled.div({
    borderTop: '1px solid lightgrey'
});
const ImgCont = styled.span({
    position: 'relative',
    left:'85%',
    bottom: '16%',
    cursor:'pointer'
})
const Heading = styled.h4({
    
})
const ImageContainer = styled.img({
    width: '128px',
    height: '128px',
    top: '1091px',
    left: '60px',
    borderRadius:'4px'
})
const Section = styled.div({
    display: 'flex',
    
    alignItems:'center'
})
const Favourite = styled.div({
    display: 'flex',
    gap:'26px',
    flexWrap: 'wrap'

})
const ImageSection = styled.div({
width:'120px'
})