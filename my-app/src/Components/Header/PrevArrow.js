import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 뒤로 이동하는 헤더 내의 화살표 컴포넌트입니다!

const PrevArrow = ({path}) => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(path);
    }

    return(
        <Image src="imgs/navigate_next.png" onClick={clickHandler}/>
    );
};

export default PrevArrow;

const Image = styled.img`
    color: #2e2e2e;
    cursor: pointer;
`;