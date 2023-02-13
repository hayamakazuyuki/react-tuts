import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isLoading, error} = useFetch('http://localhost:3001/blogs')
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isLoading && <div>読み込み中...</div> }
            { blogs && <BlogList blogs={blogs} title="ブログ一覧!" /> }
        </div>
     );
}
 
export default Home;