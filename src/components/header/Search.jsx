

import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
background: white;
width: 38%;
border-radius: 2px;
margin-left : 10px;
display : flex;

`;

const InputSearchBase = styled(InputBase)`
padding-left: 20px;
width: 100%

`;

const SearchWrapper = styled(Box)`
color: blue;
padding: 5px;

`



const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase
                placeholder='Search for products, brands and more...'
            />
            <SearchWrapper >
                <SearchIcon />
            </SearchWrapper>
        </SearchContainer>

    )

}

export default Search;