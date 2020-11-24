import styled from 'styled-components';

const Background = styled.div`
    width:360px;
    height:640px;
    @media screen and (min-width:0px) and (max-width:360px) and (max-height: 640px)
    {
        .MapAPI {
            position: absolute;
            top: 2rem;
            margin-left: 1rem;
        }
    }
`

export {
    Background
}