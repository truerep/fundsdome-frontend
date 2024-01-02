import React from 'react'
import styled from 'styled-components';
import { Comments } from './components';
import { timeAgo } from '@/utils';

const PostItem = ({organizationName, timeStamp, description, imageUrl}) => {
  return (
    <PostContainer>
        <PostHeader>
            <img class="logo" src="https://pkstatic.imgix.net/media/companyprofile/331/onecause-logo.png" alt="organization-logo" />
            <div>
                <h2>{organizationName}</h2>
                <p> {timeAgo(timeStamp)}</p>
            </div>
        </PostHeader>
        <PostBody>
            <p>{description}</p>
            {
                imageUrl ? (
                    <img src={imageUrl} alt="post-image" />
                ) : ("")
            }
        </PostBody>
        {/* <PostActions>
            <ActionItem>
                <img src="https://ik.imagekit.io/sahildhingra/heart-icon-light.png" alt="like" />
                <span>Like</span>
            </ActionItem>
            <ActionItem>
                <img src="https://ik.imagekit.io/sahildhingra/send-icon-light.png" alt="share" />
                <span>Share</span>
            </ActionItem>
        </PostActions>
        <PostComments>
            <Comments />
        </PostComments> */}
    </PostContainer>
  )
}

const PostContainer = styled.div`
    padding: 22px 26px;
    border-bottom: 1px solid #F5F1FC;

    &:last-child {
        border-bottom: 0;
    }
`;

const PostHeader = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 45px;
        width: 45px;
        object-fit: cover;
        border-radius: 100%;
        flex-shrink: 0;
        margin-right: 9px;
    }

    h2 {
        color: #000;
        font-size: 16px;
        font-weight: 400;
    }

    p {
        margin-top: 4px;
        color: #7D7D7D;
        font-size: 12px;
    }
`;

const PostBody = styled.div`
    p {
        margin-top: 15px;
        color: #464646;
    }

    img {
        width: 100%;
        margin-top: 15px;
        border-radius: 5px;
    }
`;

const PostActions = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
    padding: 5px 0;
`;

const ActionItem = styled.button`
    display: flex;
    align-items: center;
    flex-shring: 0;
    color: #7D7D7D;
    font-size: 14px;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 5px 0;
    cursor: pointer;

    img {
        height: 14px;
        margin-right: 7px;
    }
`;

const PostComments = styled.div`

`;

export default PostItem