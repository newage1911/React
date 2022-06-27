import React, { useState } from 'react';
import './App.css';
import Appheader from './components/Appheader';
import AppSearch from './components/AppSearch';
import Item from './components/item';
import ItemPost from './components/itemPost';
import items from './data/items';


function App() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onItemOpenclick(theItem) {
        setSelectedItem(theItem);
    }

    function OnItemCloseclick() {
        setSelectedItem(null);
    }

    const itemElements = items.filter((item) => {
        return item.title.includes(searchText);
    }).map((item, index) => {
        return <Item key={index} item={item} onItemclick={onItemOpenclick} />;
    });

    let itempost = null;
    if (!!selectedItem) {
        itempost = <ItemPost item={selectedItem} onBgclick={OnItemCloseclick} />
    }
    return (
        <div className="app">
            <Appheader />
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {itemElements}
                    </div>
                </div>
            </section>
            {itempost}
        </div>
    );
}

export default App;

