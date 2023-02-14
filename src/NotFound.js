import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>そのページは存在しません。</p>
            <Link to="/">ホームへ戻る</Link>
        </div>
     );
}
 
export default NotFound;