import './itemPost.css';

function ItemPost(props) {
    const{item, onBgclick} = props;
    return (
        <div className="item-post">
            <div className="item-post-bg" onClick={onBgclick}/>
            <div className="item-post-content">
                <img src={item.fullUrl} />
                <h4>{item.title}</h4>
            </div>
        </div>
    );
}

export default ItemPost;