import React from 'react';
import NewsHeader from './NewsHeader';
import NewsBlock from './NewsBlock';

const titles = ['Сейчас в СМИ', 'Москва и область', 'Рекомендуем']
const list = [
  {icon: '🎯', title: 'Крутая новость'},
  {icon: '⚙️', title: 'Новостная новость из новостей'},
]

/**
 * Компонент новости: разделы новостных категорий и список новостей.
 */

export default function News() {
    return (
        <>
            <NewsHeader titles={titles} />
            <NewsBlock blocks={list} />
        </>
    )
}