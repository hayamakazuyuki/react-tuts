import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new</h2>
            <form onSubmit={ handleSubmit }>
                <label>ブログ タイトル：</label>
                <input
                    type="text"
                    required
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>ブログ 本体：</label>
                <textarea
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                    >
                </textarea>
                <label>投稿者：</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>追加する</button> }
                { isPending && <button>追加...</button> }
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
     );
}
 
export default Create;