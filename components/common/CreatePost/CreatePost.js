import React from 'react'
import styled from 'styled-components';

const CreatePost = () => {
  return (
    <CreatePostWrapper>
      <PostInputWrapper>
        <UserImage src="https://pbs.twimg.com/profile_images/1273515780173205504/B6bWH3m5_bigger.jpg" alt="profile-image" />
        <PostText placeholder="Share happenings!" />
      </PostInputWrapper>
    </CreatePostWrapper>
  )
}

const CreatePostWrapper = styled.div`
  padding: 22px 26px;
  margin-bottom: 45px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
  width: 100%;
`;

const PostInputWrapper = styled.div`
  display: flex;
`;

const UserImage = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 100%;
`;

const PostText = styled.textarea`
`;

export default CreatePost