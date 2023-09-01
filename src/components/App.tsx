import React, { FC } from 'react'
import { Provider } from 'react-redux'
import styled from '@emotion/styled'
import Header from './Header'
import SearchBox from './SearchBox'
import store from '../redux/store'

import FavouriteDogs from './FavouriteDogs'
const App: FC = () => {
  return (
    <Provider store={store}>
    <Container>
      <Header />
      {/* Happy coding! */}
        <SearchBox />
        <FavouriteDogs/>
      </Container>
      </Provider>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

export default App
