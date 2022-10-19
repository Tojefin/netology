import React from 'react';
import SearchMenu from './SearchMenu';
import Prompt from './Prompt';

const filtres = [
  'Видео',
  'Картинки',
  'Новости',
  'Карты',
  'Маркет',
  'Переводчик'
]

/**
 * Компонент поискоя строка: меню поиска, строка, реклмендации
 */

export default function Search() {
    return (
        <>
          <SearchMenu filtres={filtres}/>
          <input type='text' name='search' className='search'></input>
          <Prompt />
        </>
    )
}