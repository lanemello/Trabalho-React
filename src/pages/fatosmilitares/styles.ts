import styled from 'styled-components';

export const Title = styled.h1 `
font-size: 48px;
color: #fff;
text-align: center;

`;

export const Site = styled.p `
margin-top: 25px;
font-size: 22px;
color: #fff;
text-align: center;

`;
export const All = styled.div`
    background: linear-gradient(87deg,#11cdef,#1171ef);

`;
export const Box = styled.div`
    text-align: center; /* centraliza na horizontal */

a{
    margin-top: 50px;
    float: left;
    width: 210px;
    height: 150px;
    padding: 0 10px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 24;
    display: block;
    margin-left: 33px;
    text-decoration: none;
}
p{
    color: #000;
    font-size: 1.10rem;
}
h5{
    color: #8898aa!important;
    font-size: 1.25rem;
    text-transform: uppercase!important;
    display: block;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
`;
export const StyledMenu = styled.div`

.menu{
    float:  left;
    text-align: center; /* centraliza na horizontal */
}

ul {
    display:flex;
}

.nav-tem{
    float:  left;
}

a{
    text-align: center;
    margin-top: 25px;
    width: 25%;
    padding: 0 10px;
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 24;
    margin-left: 50px;
    text-decoration: none;
}
p, strong{
    color: #000;
}
`;
