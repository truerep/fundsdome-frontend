import React from 'react'
import styled from 'styled-components'

import { 
  CreatePost, 
  PostItem 
} from '@/components';

const Posts = ({
  isAdmin, 
  organizationData
}) => {
  return (
    <>
      {/* {
        isAdmin ? (
          <>
            <CreatePost />
          </>
        ) : ("")
      } */}
      <PostsWrapper>
        {
          organizationData?.posts.map((postItem) => (
            <PostItem 
              organizationName={organizationData?.chat?.chatName}
              key={postItem?._id}
              timeStamp={postItem?.createdAt}
              description={postItem?.description}
              imageUrl={postItem?.image}
            />
          ))
        }
      </PostsWrapper>
    </>
  )
}

const PostsWrapper = styled.div`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    width: 700px;
    flex-shrink: 0;
    height: fit-content;
`;

export default Posts