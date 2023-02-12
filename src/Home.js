import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: '日本語のタイトル', body: 'lorem ipsum...', author: '羽山', id: 4 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('useEffect ran');
        console.log(name);
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="ブログ一覧!" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="マリオのブログ" />
            <button onClick={() => setName('hayama')}>名前変更</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;