import { Loader, PostItem } from '@/components/common';
import React from 'react'
import styled from 'styled-components'

const Posts = ({
    sectionRef,
	postsList,
	isLoading
}) => {
  return (
    <Wrapper ref={sectionRef}>
        {
          postsList.length && postsList.map((postItem) => (
            <PostItem 
              organizationName={postItem?.title}
              key={postItem?._id}
              timeStamp={postItem?.createdAt}
              description={postItem?.description}
              imageUrl={postItem?.image}
            />
          ))
        }
        {
            isLoading ? (
                <Loader />
            ) : ("")
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 200vh;
  width: 560px;
`;

export default Posts