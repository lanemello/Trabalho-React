import React from 'react';
// import logo from '../ ../assets/logo.png';
import { Title, Box, Site, StyledMenu, All} from './styles';

const Mymeal: React.FC = () => {
    return(
    <>
    <All className="teste">
    {/* <img src={ logo } alt='logop' /> */}
    <Title>Google Analystic</Title>
    <Site>www.mymeal.com</Site>
    <StyledMenu>
    <nav className="menu">
        <ul>
        <li><a href="/">Fatos Militares</a></li>
        <li><a href="/mymeal">MyMeal</a></li>
        </ul>
    </nav>
    </StyledMenu>
    </All>
    <Box>
        <Box>
        <div>
            <a>
            <h5>Ao vivo:</h5>
            <p> 10</p>
            </a>
        </div>
        </Box>
        <Box>
        <div>
             <a>
            <h5>Pageviews:</h5>
            <p>10</p>
            </a>
        </div>
        </Box>
        <Box>
        <div>
            <a>
            <h5>Taxa de Rejeição:</h5>
            <p>76</p>
            </a>
        </div>
        </Box>
    </Box>
    </>
    );
};

export default Mymeal;
