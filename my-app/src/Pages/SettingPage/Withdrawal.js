import { Link } from "react-router-dom";
import { useState } from "react";
import { styled } from "styled-components";

const Modal = ({ isOpen, onClose, message }) => {
    
    return (
      <ModalOverlay isOpen={isOpen ? 1 : 0} onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalBigWrap>
                <Message><h4 style={{fontSize:'17px'}}>{message}</h4></Message>
                <ConfirmButton><button onClick={onClose}
                style={{width:'100%', height:'100%', cursor:'pointer',
                backgroundColor:'#FFC000', border:'none',
                fontWeight:'500', fontSize:'15px'}}>확인</button></ConfirmButton>
            </ModalBigWrap>
        
        </ModalContent>
      </ModalOverlay>
    );
  };
  
  const ModalOverlay = styled.div`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    
  `;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 330px; /* 너비 조정 */
  height: 150px; /* 높이 조정 */
`;
const ModalBigWrap = styled.div`
    display: flex;
    flex-direction: column;
`;
const Message = styled.div`
    width: 330px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`; 
const ConfirmButton = styled.div`
    width: 370px;
    height: 50px;
    margin-left: -20px;
    padding-top: 20px;
    overflow: hidden; /* 내부 콘텐츠를 영역 밖으로 넘치지 않도록 처리 */
    border-bottom-left-radius: 8px; /* 아래 왼쪽 모서리를 둥글게 처리 */
    border-bottom-right-radius: 8px; /* 아래 오른쪽 모서리를 둥글게 처리 */
`;


const Withdrawal = ()=>{

    const [settingpage, setSettingPage] = useState("SettingFollower");
    const clickHandler = (e) => {
        console.log(e.target.id);
        setSettingPage(e.target.id);
    };

    const [isChecked, setIsChecked] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
      });

    const checkboxList = [
        { id: "checkbox1", label: "콘을 작성하기 불편해요." },
        { id: "checkbox2", label: "사용을 잘 안하게 돼요." },
        { id: "checkbox3", label: "서비스가 부족해요." },
        { id: "checkbox4", label: "다른 아이디로 가입하고자" },
        { id: "checkbox5", label: "기타 (직접 작성)" },
      ];
    
    
      const handleCheckboxChange = (checkboxName) => () => {
        setIsChecked((prevChecked) => ({
          ...checkboxList.reduce((acc, checkbox) => {
            acc[checkbox.id] = checkbox.id === checkboxName;
            return acc;
          }, {}),
        }));
      };

      const [withdrawalReason, setWithdrawalReason] = useState("");

      const handleInputChange = (e) => {
        setWithdrawalReason(e.target.value);
      };

      
      const [isOpenModal, setIsOpenModal] = useState(false);
      const [modalMessage, setModalMessage] = useState('');
    
      const handleWithdraw = () => {
        // 하나 이상의 체크박스가 선택되어 있는지 확인
        const isAnyCheckboxChecked = Object.values(isChecked).some((value) => value);
    
        if (!isAnyCheckboxChecked) {
          // 체크박스가 선택되지 않은 경우 모달 띄우기
          setModalMessage(
            <>
              사유가 선택되지 않았습니다.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              사유를 선택해주세요.
            </>
          );
          setIsOpenModal(true);
        } else {
          // 체크박스가 선택된 경우 탈퇴 완료 모달 띄우기
          setModalMessage('탈퇴가 완료되었습니다.');
          setIsOpenModal(true);
        }
      };
    
      const closeModal = () => {
        setIsOpenModal(false);
      };
    return(
        <div style={{fontFamily:'NanumSquareNeo'}}>
            <header className="MI_Header">
                <Link to="/myinformation" style={{textDecoration:'none', cursor: 'pointer', color:"black", marginLeft:"10%"}}>
                    <div className="MI_Header_1" to={'/myinformation'} id="backToMyinformation" onClick={clickHandler} settingpage={settingpage}>
                        <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</h2></div></Link>
                    <div className="MI_Header_2"><h4>&nbsp;&nbsp;&nbsp;회원탈퇴</h4></div>
            </header>
            <BigWraper>
                <Wrapper1><h2>서비스 <span style={{ color: 'red' }}>탈퇴 사유</span>가 무엇인가요?</h2></Wrapper1>
                <Wrapper2>
                {checkboxList.map((checkbox) => (
            <Reason key={checkbox.id}>
              <label style={{ fontSize: "18px", display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={isChecked[checkbox.id]}
                  onChange={handleCheckboxChange(checkbox.id)}
                  style={{ width: "20px", height: "20px", marginRight: "15px" }}
                />
                {checkbox.label}
              </label>
            </Reason>
          ))}
                </Wrapper2>
                <Wrapper3>
                    <textarea
                        value={withdrawalReason}
                        onChange={handleInputChange}
                        placeholder="탈퇴 사유 입력"
                        style={{
                        fontSize: "15px",
                        padding: "5px",
                        marginTop: "10px",
                        width: "585px",
                        height: "200px",
                        borderRadius: "12px",
                        border: "2px solid #E6E6E6", // 테두리 색을 빨간색(#ff0000)으로 설정합니다.
                        outline: "none", // 입력 시 강조 효과를 없앱니다.
                        verticalAlign: "top",
                        fontFamily:'NanumSquareNeo' // 입력된 텍스트가 입력란의 상단에 정렬되도록 합니다.
                        }}
                />
                </Wrapper3>
                <Wrapper4>
                    <WithdrawlBtn>
                        <CancelButton to="/myinformation">취소하기</CancelButton>
                    </WithdrawlBtn>
                    <WithdrawlBtn>
                        <WithdrawButton  onClick={handleWithdraw}>탈퇴하기</WithdrawButton>
                    </WithdrawlBtn>
                </Wrapper4>
                <Modal isOpen={isOpenModal} onClose={closeModal} message={modalMessage} />
            </BigWraper>
        </div>
    );

}

export default Withdrawal;

const BigWraper = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 1000px;
    margin-left: 31%;
    margin-top: 50px;
`
const Wrapper1 = styled.div`
    width: 600px;
    height: 100px;
    text-align: center;
`
const Wrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 300px;
`
const Wrapper3 = styled.div`
    width: 600px;
    height: 300px;
`
const Wrapper4 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 600px;
    height: 100px;
`
const Reason = styled.div`
    width: 600px;
    height: 60px;
`
const WithdrawlBtn = styled.div`
    width: 300px;
    height: 100px;
`
const CancelButton = styled(Link)`
  display: inline-block;
  background-color: #f2f2f2;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: #000;
  margin-top: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  width: 245px;
  text-align: center;
  font-weight: 700;

  &:hover {
    background-color: #d9d9d9;
  }
`;
const WithdrawButton = styled(Link)`
  /* 버튼 스타일 */
  display: inline-block;
  margin-left: 10px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: #E61A1A;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  height: 18px;
  width: 250px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #be2e22;
  }

`;
