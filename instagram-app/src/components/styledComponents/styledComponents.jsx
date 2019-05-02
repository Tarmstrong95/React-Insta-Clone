// All styled components
import styled, { css } from 'styled-components';
import camera from '../../Icons/instagram-line-icon.png'
import compass from '../../Icons/instagram-line-compass.png'
import heart from '../../Icons/instagram-line-heart.png'
import person from '../../Icons/instagram-line-person.png'
import name from '../../Icons/instagram.png'

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

























const Notarealcomponent = () => {
    return (null)
}
export default Notarealcomponent;