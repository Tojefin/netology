import React from 'react';

/**
 * Компонент меню поиска: меню над поисковой строкой.
 */

export default function SearchMenu({filtres}) {
    return (
        <ul>
            {filtres.map((el, id) => <li className='li' key={id}>{el}</li>)}
        </ul>     
    )
}