import React, { FC,  useState } from 'react'
import styled from '@emotion/styled'
import SearchIcon from '../assets/SearchIcon'
import { useDispatch } from 'react-redux'
import { addFavImages } from '../redux/actions'
import Heart from './Heart'

interface Result {
  id: number
  message: string
}

const SearchBox: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const dispatch = useDispatch()
  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      return;
    }
    const api = `https://dog.ceo/api/breed/${searchQuery}/images`
    const fetchData = await fetch(api)
    const response = await fetchData.json()

    setSearchResults((response.message).slice(0, 10)) // Store the array of messages
  }

  const handleFav = (image) => {
    dispatch(addFavImages(image))
  }

  const handleInput = (e: any) => {
    setSearchQuery(e.target.value.toLowerCase())
  }

  return (
    <Container>
      <Section>
        <Searchinput type='text' value={searchQuery} onChange={handleInput} />
        <SearchButton onClick={handleSearch}>
          <SearchIcon icon="searchIcon" alt="search icon" /> <Text> Search</Text>
        </SearchButton>
      </Section>
      <SearchResult>
        {(searchResults).map((img, idx) => (
          <ImageSection>
            <Dogimg key={idx} src={img} alt="dog"></Dogimg>
            <HeartSection onClick={()=>handleFav(img)}>
              <Heart icon="whiteHeartIcon" alt="red heart icon" />
            </HeartSection>
          </ImageSection>
        ))}
      </SearchResult>
    </Container>
  )
}
const HeartSection = styled.span({
  position: 'relative',
  left: '85%',
  bottom: '15%',
  cursor: 'pointer'
  
})
const ImageSection = styled.div({
  width: '160px',
})
const Container = styled.div({
  display: 'flex',
  width: '560px',
  // margin:'0 auto',
  flexDirection: 'column',
})
const Dogimg = styled.img({
  width: '160px',
  height: '160px',
  top: '196px',
  left: '260px',
  borderRadius: '4px',
})
const SearchResult = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  // gap: '12px',
})
const Text = styled.span({
  width: '45px',
  height: '19px',
  fontSize: '14px',
  lineHeight: '19.1px',
  textAlign: 'center',
})

const Searchinput = styled.input({
  width: '530px',
  height: '36px',
  backgroundColor: 'lightgrey',
  border: 'none',
  borderRadius: '4px',
  color: '#000000',
  padding:'5px'
})

const SearchButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  justifyContent: 'center',
  width: '105px',
  backgroundColor: '#0794E3',
  border: 'none',
  color: '#FFF',
  borderRadius: '4px',
  cursor: 'pointer',
})

const Section = styled.div({
  display: 'flex',
  padding: '20px 0',
  width: '100%',

  // gap:'20px'
})

export default SearchBox
