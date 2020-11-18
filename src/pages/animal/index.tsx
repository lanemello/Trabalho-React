import React, { useEffect } from 'react';

// import logo from '../ ../assets/logo.png';
import { Title, Box, Site, StyledMenu, All, Imagem} from './styles';
import { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import apiCat from '../../services/api-cat';
import apiDog from '../../services/api-dog';

interface Params {
    animal: string;
}

interface Animal {
    file: string;
    url: string;
}

const Animal: React.FC = () => {
    const { params } = useRouteMatch<Params>();
    const [animal, setAnimal] = useState<Animal>({
        file: '',
        url: '',
    });

    let confirmaImg = true

    useEffect(() => {
        if (params.animal === 'gato') {
            apiCat.get(`/meow`).then(response => {
            setAnimal(response.data);
            })
        } else if (params.animal === 'cachorro') {
            apiDog.get(`/woof.json`).then(response => {
            setAnimal(response.data);

            });
        }
    }, []);

    console.log(animal.url)
    
    return(
    <>
        <All className="teste">
            <Title>Aprencie com moderação</Title>
        </All>

       <Imagem>
        {animal.file !== '' ? <img src={animal.file} alt="animal"/> : <img src={animal.url} alt="animal"/>}
        <img src={animal.url} alt="animal"/>
       </Imagem>
    </>
    );
};

export default Animal;
