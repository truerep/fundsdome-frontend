import React from 'react'

import PostItem from './PostItem'

const PostItemContainer = ({organizationName, timeStamp, description, imageUrl}) => {
  return (
    <PostItem 
      organizationName={organizationName}
      timeStamp={timeStamp}
      description={description}
      imageUrl={imageUrl}
    />
  )
}

export default PostItemContainer