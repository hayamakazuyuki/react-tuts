import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:3001/blogs/' + id);
    const navigate = useNavigate();

    const handleClick= () => {
        fetch('http://localhost:3001/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isLoading && <div>読み込み中...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>投稿者：{ blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleClick }>削除</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;