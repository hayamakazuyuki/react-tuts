const BlogList = ({ blogs, title, handleDelete }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>作者：{ blog.author }</p>
                    <button onClick={() => handleDelete(blog.id) }>削除</button>
                </div>

            ))}            
        </div>
        
    );
}
 
export default BlogList;