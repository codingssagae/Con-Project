import styled, { css } from "styled-components";

const ProfileButton = styled.button`
  background-color: #ffc000;
  height: 100px;
  width: 100px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
`;

const Button = ({ children, isActive, isFollowed, ...props }) => {
  return <button {...props}>{children}</button>;
};

// 팔로우 버튼 이렇게 사용하시면 됩니다!
// const [followed, setFollowed] = useState(false);
//  <StyledFollowButton
// onClick={() => setFollowed((state) => !state)}
// isFollowed={followed === false}
// >
// {followed === false ? "팔로우" : "팔로잉"}
// </StyledFollowButton>
//
const StyledFollowButton = styled(Button)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;

  ${(props) =>
    props.isFollowed
      ? css`
          background-color: black;
          color: white;
        `
      : css`
          background-color: "#b1b1b1";
          color: black;
        `}
`;

export { StyledFollowButton };
export default ProfileButton;
