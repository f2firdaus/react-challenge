import styled from '@emotion/styled';
import React, { FC } from 'react';
import {icons} from '../assets'
interface Props{
    icon: string
        alt:string
}

const SearchIcon: FC <Props> = ({icon,alt}) => {
    
    return (
        <>
            <Searchicon src={icons[icon]} alt={ alt} />
        </>
    )
}
const Searchicon = styled.img({
    width: '20px',
    height: '20px',
    Top: '129px',
    left:'531px'
})
export default SearchIcon;