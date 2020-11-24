import styled, {css} from 'styled-components'

const Background = styled.div`
width:360px;
height:640px;
i{
    color:black;
    opacity:0.8;
}
@media screen and (min-width:0px) and (max-width:360px) and (max-height: 640px)
{
    a{
        text-decoration:none;
    }
    article{
        padding:20px 30px;
        height:31%;
        a{
            font-size:15px;
            color:black;
        }
        section{
            width:100%;
            height:25%;
            margin-top:6%;
            display:flex;
            div{
                display:flex;
                font-size:13px;
                color:black;
                flex-direction:column;
                a{
                    font-size:15px;
                    color:black;
                    padding:0px 10px;
                    :last-child{
                        font-size:12px;
                        color:rgb(187, 187, 187);
                        margin-top:3px; 
                    }
                }
                :first-child{
                width:45px;
                height:45px;
                border-radius:80%;
                background-color:red;
                display:flex;
                justify-content:center;
                align-items:center;
                color:white;
                font-size:13px;
                }
            }
        }
    }
}
`

const ArriveDiv = styled.div`
height:25%;
padding:0px 30px;
padding-top:40px;
background-color:white;
a{
    font-size:15px;
    color:black;
}
article{
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    section{
        width:1.7%;
        height:80%;
        display:flex;
        flex-direction:column;
        padding:0 30px;
        justify-content:center;
        align-items:center; 
        .graph{
            :first-child{
                border-radius:3px;
                width:100%;
                height:50%;
                background-color:rgb(30, 206, 132);
            }
            :nth-of-type(2){
                border-radius:3px;
                width:100%;
                height:50%;
                background-color:red;
                margin-top:5px;
            }
        }
        a{
            font-size:11px;
            color:gray;
            margin-top:5px;
        }
    }
}

`

const footer = styled.div`
width:80%;
padding: 0 10%;
display:flex;
justify-content:space-between;
background-color:white;
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
    Background,
    ArriveDiv,
    footer
}