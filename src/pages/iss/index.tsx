import React, {} from 'react';
import { Link } from 'react-router-dom';

import { Title, Box, Site, StyledMenu, All, Options} from './styles';

const Fatosmilitares: React.FC = () => {
    return(
    <>
    {/* <img src={ logo } alt='logop' /> */}
    <All className="teste">
        
    <Title>AnimaSelfs</Title>
    <Site>Veja foto de animais aleatorias, para alegrar seu dia.</Site>
    </All>
    {/* <StyledMenu>
    <nav className="menu">
        <ul>
        <li className="nav-item"><a href="/">Localização atual da ISS</a></li>
        <li className="nav-item"><a href="/pessoas">Pessoas no espaço</a></li>
        </ul>
    </nav>
    </StyledMenu> */}

    <Options>  
     <Link to={`/animal/gato`}>
     <strong>Gato ↘</strong>
    <div>
     <img 
        src="https://pa1.narvii.com/6908/e1ea68668239d41258556a0c03d875424c57ca85r1-315-209_00.gif" 
        alt="Gato"
     />
    </div>
    </Link>
    <Link to={`/animal/cachorro`}>
    <strong>↙ Cachorro</strong>
        <div>
        <img 
           src="https://media1.tenor.com/images/8c67a2751c82eadcb0e7cd451c84a7e0/tenor.gif?itemid=8916217" 
            alt="Cachorro"
         />  
        </div>      
    </Link>
 
    </Options>
    </>
    );
};

export default Fatosmilitares;
