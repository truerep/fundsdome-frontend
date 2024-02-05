import React, { useState, useEffect, useRef } from 'react'

import Posts from './Posts'
import { getAllPosts } from '@/api';

let allPostsList = []

const PostsContainer = () => {
    const [allNewPostsList, setAllNewPostsList] = useState([])
    const sectionRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false)

    let postsList = {}

    const fetchInitialPosts = async () => {
        let res = await getAllPosts(1)
        postsList = res;
        postsList?.posts.forEach(newObj => {
            if (!allPostsList.some(existingObj => existingObj._id === newObj._id)) {
              allPostsList.push(newObj);
            }
          });
          setAllNewPostsList(allPostsList)
    }

    useEffect(() => {
        fetchInitialPosts()
    }, [])
    // postsList?.groups.forEach(newObj => {
    //     if (!allPostsList.some(existingObj => existingObj._id === newObj._id)) {
    //       allPostsList.push(newObj);
    //     }
    //   });

      const isSectionVisible = () => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          return rect.bottom <= window.innerHeight;
        }
        return false;
      };
    
      const handleScroll = async () => {
        if (isSectionVisible()) {
          if(postsList?.currentPage !== postsList?.totalPages) {
            setIsLoading(true)
            let res = await getAllPosts(postsList?.currentPage + 1)
            postsList = res
            postsList?.posts.forEach(newObj => {
              if (!allPostsList.some(existingObj => existingObj._id === newObj._id)) {
                allPostsList.push(newObj);
              }
            });
            setIsLoading(false)
          }
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <Posts 
    sectionRef={sectionRef} 
    isLoading={isLoading}
    postsList={allPostsList} 
    />
  )
}

export default PostsContainer