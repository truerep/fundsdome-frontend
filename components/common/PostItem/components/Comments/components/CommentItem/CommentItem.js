import React from 'react'
import styled from 'styled-components';

const CommentItem = () => {
  return (
    <>
    <Comment>
      <p>
        <a href="#">John D.</a>
        <span>Superb Work</span>
      </p>
    </Comment>
    <Comment>
      <p>
        <a href="#">Karon</a>
        <span>Good to see this</span>
      </p>
    </Comment>
    <Comment className='reply'>
      <p>
        <a href="#">William</a>
        <span>Absolutely true</span>
      </p>
    </Comment>
    </>
  )
}

const Comment = styled.div`
  color: #464646;
  padding: 3px 0;
  font-size: 15px;

  &.reply {
    padding-left: 15px;
  }

  a {
    color: #000;
    text-decoration: none;
    margin-right: 10px;
  }
`;

export default CommentItem