import React, { useEffect, useState } from 'react';
import { Collection } from './Collection';
import './style.scss';

export const PHOTO_GALLERY = () => {
    const [collection, setCollection] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    const cats = [
        { "name": "All" },
        { "name": "Sea" },
        { "name": "Mountains" },
        { "name": "Architecture" },
        { "name": "Cities" }
    ]

    const createPaginationItems = cat => {
        let count;
        switch(cat) {
        case 1: count = 1; break;
        case 2: count = 1; break;
        case 3: count = 2; break;
        case 4: count = 2; break;
        default: count = 5;
        }
        return count;
    };

    useEffect(() => {
        setIsLoading(true);

        const category = categoryId ? `category=${categoryId}` : '';

        fetch(`https://63f60f7259c944921f6c2a54.mockapi.io/photo_gallery/photo_collections?page=${page}&limit=3&${category}`)
        .then(res => res.json())
        .then(json => {
            setCollection(json);
        })
        .catch(err => {
            console.error(err);
            alert('An error occurred while receiving data from the server.');
        })
        .finally(() => setIsLoading(false));
    }, [categoryId, page]);

    return (
        <section className="gallery-wrapper section-padding">
            <div className='container'>
                <h1 className='gallery-title top-title'>Photo gallery</h1>
                <div className="gallery-top">
                    <ul className="gallery-tags">
                        {
                            cats.map((item, i) => 
                            <li 
                                key={item.name} 
                                className={categoryId === i ? "active" : ''}
                                onClick={() => {
                                setCategoryId(i);
                                setPage(1);
                                }}>
                                    {item.name}
                            </li>
                            )
                        }
                    </ul>
                    <input 
                        value={searchValue} 
                        onChange={(e) => setSearchValue(e.target.value)} 
                        className="gallery-search-input" 
                        placeholder="Search by name" />
                </div>
                <div className="gallery-content">
                    {
                        isLoading ? <h2 className='gallery-h2'>Loading ...</h2> :
                        collection
                            .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((item, index)=> <Collection key={index} name={item.name} images={item.photos}/>)
                    }
                </div>
                <ul className="pagination">
                    {
                        [...Array(createPaginationItems(categoryId))].map((_, i) => 
                            <li 
                                key={i}
                                className={page === i + 1 ? 'active' : ''}
                                onClick={() => setPage(i + 1)}>
                                    {i + 1}
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
    );
};