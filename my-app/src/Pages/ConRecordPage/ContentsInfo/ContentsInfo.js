import { useState, useRef } from "react";
import styled from "styled-components";
import ShowStars from "../ShowStars";
import AddImage from "../AddImage";
import SelectTime from "../SelectTime";
import MovieTextAreaContainer from "./MovieTextAreaContainer";
import DramaTextAreaContainer from "./DramaTextAreaContainer";

const ContentsInfo = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const [title, setTitle] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  // 이미지 추가
  const [imgSrc, setImgSrc] = useState("");
  const imgRef = useRef();

  const changeAddImgHandler = (e) => {
    const file = imgRef.current.files[0];
    if (!file) {
      return;
    }
    else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgSrc(reader.result);
      };
    }

    // onChange는 실질적 데이터가 바뀔 때만 반응하므로, 기존의 파일을 재업로드할 때는 이벤트가 작동하지 않으므로 value를 reset 해준다.
    e.target.value = '';
  };

  const deleteImgHandler = () => {
    setImgSrc("");
  };

  return (
    <div>
        <Form onSubmit={submitHandler}>
          <TitleInput
            placeholder="콘텐츠 제목을 입력해주세요"
            value={title}
            onChange={titleChangeHandler}
          />
          <Hr />
          <AddImage changeAddImgHandler={changeAddImgHandler} imgRef={imgRef} />
          <Hr />
          <SelectTime/>
          <Hr/>
          <RatingContainer>
            <Span>별점</Span>
            <ShowStars />
          </RatingContainer>
          <Hr />
          <MovieTextAreaContainer imgSrc={imgSrc} deleteImgHandler={deleteImgHandler}/>
          {/* 영화인지 드라마인지 구분짓는 props를 받고 삼항 연산자로 나눠주면 될듯? */}
          {/* <DramaTextAreaContainer imgSrc={imgSrc} deleteImgHandler={deleteImgHandler}/> */}
          <SaveBtn>저장하기</SaveBtn>
        </Form>
    </div>
  );
};

export default ContentsInfo;

const Span = styled.span`
  padding: 0 1rem 0 0;
`;
const RatingContainer = styled.div`
  padding: 0.25rem;
  display: flex;
  align-items: center;
`;
const SaveBtn = styled.button`
  background-color: #FFC000;
  width: 380px;
  height: 48px;
  border-radius: 4px;
  padding: 16px 130px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10rem auto 0;
  cursor: pointer;
`;
const TitleInput = styled.input`
  font-size: 28px;
  font-weight: 800;
  border: none;
  color: #242424;
  outline: none;
  width: 100%;
  padding: 1.75rem 0;
`;
const Hr = styled.hr`
  border: 1px solid #e6e6e6;
`;
const Form = styled.form`
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;
