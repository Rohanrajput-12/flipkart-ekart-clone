

import {Box, Button, Typography, styled } from  '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Wrapper = styled(Box)`
    diaplay: flex;
    margin : 0 3% 0 auto;
    & button {
        margin-right: 40px;
    }

`



const CustomButton = () => {
    return (
        <Wrapper>
            <Button variant="contained">Login</Button>
                <Typography>Become a Seller</Typography>
                <Typography>More</Typography>
            <Box>
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </Box>
        </Wrapper>
    )
}

export default CustomButton;