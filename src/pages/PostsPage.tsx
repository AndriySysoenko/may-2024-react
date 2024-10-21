import React, {useEffect, useState } from 'react';
import PaginationComponent from '../components/paginations/PaginationComponent';
import { useSearchParams } from 'react-router-dom';
import { getPosts } from '../services/api.service';
import Posts from '../components/posts/Posts';
import { IPost } from '../models/IPost';

const PostsPage = () => {
    const [query] = useSearchParams ({page:'1'});
    const [posts, setPosts] = useState<IPost[]>([])
    const [marker, setMarker] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page')
        if(page){
            getPosts(+page)
                .then((value: {posts:IPost[]} & {marker: boolean}) => {
                setPosts(value.posts); setMarker(value.marker);
            })}
    }, [query]);
    return (
        <div>
            <Posts posts={posts}/>
            <PaginationComponent marker={marker}/>
        </div>
    );
}

export default PostsPage;