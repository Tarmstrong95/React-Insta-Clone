// All styled components
import styled, { css } from 'styled-components';
import camera from '../../Icons/instagram-line-icon.png'
import compass from '../../Icons/instagram-line-compass.png'
import heart from '../../Icons/instagram-line-heart.png'
import person from '../../Icons/instagram-line-person.png'
import name from '../../Icons/instagram.png'
import comment from '../../Icons/instagram-line-comment.png'


// =========== variables ===========
let greyColor = "rgba(0, 0, 0, 0.144)";
//============ Nav styles ============
export const Nav = styled.div`
    display: flex;
    width: 100%;
    max-width: 1010px;
    padding: 26px 20px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    border-bottom: 1px solid rgba(0,0,0,.0975);
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SmIcon = styled.div`
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    margin-right: 20px;

${props => props.camera && css`background-image: url(${camera});`}
${props => props.compass && css`background-image: url(${compass});`}
${props => props.heart && css`background-image: url(${heart});`}
${props => props.person && css`background-image: url(${person});`}
${props => props.comment && css`background-image: url(${comment})`}
`;

export const NmIcon = styled.div`
    background-image: url(${name});
    width: 103px;
    height: 29px;
    background-repeat: no-repeat;
`

export const Search = styled.input`
    border-radius: 4px;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.377);
    margin: auto;
`

// =========== Post container styles ===========

export const App = styled.section`
    width: 100%;
`
export const MainCont = styled.main`
    margin: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
`
export const MainSec = styled.section`
    padding-top: 60px;
`
export const PostArticle = styled.article`
    border: 1px solid ${greyColor};
    margin-bottom: 60px;
`
export const PostCont = styled.div`
    max-width: 614px;
    width: 100%;
`
export const PostHeader = styled.header`
    height: 60px;
    padding: 16px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`
export const UserImgCont = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    overflow: hidden;
    top: -5px;
    left: -5px;
`
export const PostusernameCont = styled.span`
    margin-left: 5px;
`
export const PostImgCont = styled.div`
    box-sizing: border-box;
    width: 100%;
`
export const PostImg = styled.img`
    width: 100%;
`
export const PostCommCont = styled.div`
    padding: 0 16px;
`
export const PostIconSec = styled.section`
    display: flex;
`
// =========== comment section ===========
export const FormCont = styled.div`
    width: 100%;
    border-top: 1px solid ${greyColor};
    padding: 20px 0;
`
export const FormMain = styled.form`
    display: flex;
    width: 100%;
    margin: 0;
`
export const FormMainInput = styled.input`
    border: none;
    flex: 4;
    border-right: 1px solid ${greyColor};
    padding-left: 16px;
    font-size: 1.2rem;

    :focus{
        outline: none;
    }
`
export const FormMainButton = styled.button`
    border: none;
    font-size: 1.2rem;
`
// ========== login ==========
export const LoginForm = styled.form`
display: flex;
flex-flow: column;
align-items: center;
`



















const Notarealcomponent = () => {
    return (null)
}
export default Notarealcomponent;