import React from 'react';

/**
 * Компонент новость: исконка и заголовок.
 */

export default function New({icon, title}) {
    return (
        <li>
            {icon} {title}
        </li>
    )
}