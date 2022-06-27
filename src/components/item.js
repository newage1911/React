import './item.css';

function Item(props) {
    const { item, onItemclick} = props;
    return (
        <div className="item-image">
            <img src={item.thumnailUrl} onClick = {()=>{onItemclick(item)}} />
            <h4>{item.title}</h4>
        </div>
        
    );
}

export default Item;