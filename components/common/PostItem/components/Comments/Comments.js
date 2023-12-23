import React from 'react'
import styled from 'styled-components'

import { AddComment, CommentItem } from './components'

const Comments = () => {
  return (
    <CommentsWrapper>
      <CommentItem />
      <AddComment />
    </CommentsWrapper>
  )
}

const CommentsWrapper = styled.div`
  padding: 5px 0;
`;

export default Comments