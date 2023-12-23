import React from 'react'
import styled from 'styled-components';

const AddComment = () => {
  return (
    <CommentInputBox>
      <input type="text" placeholder='Add a comment...' />
      <button>
        <img src="https://ik.imagekit.io/sahildhingra/send-icon-white.png" alt="comment" />
      </button>
    </CommentInputBox>
  )
}

const CommentInputBox = styled.div`
  display: flex;
  border: 1px solid #9F85F7;
  border-radius: 6px;
  margin-top: 15px;

  input {
    flex: 1;
    padding: 8px 14px;
    color: #000;
    font-size: 15px;
    outline: 0;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #9F85F7;
      font-size: 15px;
    }
  }

  button {
    background: #9F85F7;
    border: 0;
    outline: 0;
    padding: 0 8px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    cursor: pointer;

    img {
      height: 17px;
    }
  }
`;

export default AddComment