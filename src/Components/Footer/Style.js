import styled, {css} from 'styled-components'

const footer = styled.div`
width:80%;
padding: 12px 10%;
display:flex;
justify-content:space-between;
background-color:white;
margin-top:315px;
position: fixed;
.a{
    text-decoration:none;
    font-weight:bold;
    font-size:19px;
    transition:1s;

    color:gray;
    :hover{
        opacity:0.8;
    }
}
`

export{
    footer
}