import React from 'react';

/**
 * Компонент новостная шапка: новостные разделы
 */

export default function NewsHeader({titles}) {
    return (
        <ul>
            {titles.map((el, id) => <li key={id} className='li'>{el}</li>)}
        </ul>
    )
}