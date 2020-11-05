import React from 'react';
import './PostContainer.scss';
import dummyPost from './../../../assets/DummyPosts';
import Post from './../Post/Post';

const PostContainer = () => {
    return (
        <div className="post-container">
            {
                dummyPost.map(post => <Post
                    key={post.postId}
                    postData={post}
                />)
            }
        </div>
    );
};

export default PostContainer;