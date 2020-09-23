import React from 'react';
// import logo from '../ ../assets/logo.png';
import { Title, Box, Site, StyledMenu, All} from './styles';

const Fatosmilitares: React.FC = () => {
    return(
    <>
    {/* <img src={ logo } alt='logop' /> */}
    <All className="teste">
    <Title>Google Analystic</Title>
    <Site>www.fatosmilitares.com</Site>
    </All>
    <StyledMenu>
    <nav className="menu">
        <ul>
        <li className="nav-item"><a href="/">Fatos Militares</a></li>
        <li className="nav-item"><a href="/mymeal">MyMeal</a></li>
        </ul>
    </nav>
    </StyledMenu>
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

export default Fatosmilitares;
