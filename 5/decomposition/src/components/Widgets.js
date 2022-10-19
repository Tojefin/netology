import React from 'react';

const widgetList = [
  {
      title: 'Title',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sint praesentium, ut repellat nobis, molestiae voluptatibus ipsam provident fuga eius deserunt voluptatum sequi deleniti? Aut dolorum iste velit nostrum explicabo!'
  },
  {
      title: 'Title',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sint praesentium, ut repellat nobis, molestiae voluptatibus ipsam provident fuga eius deserunt voluptatum sequi deleniti? Aut dolorum iste velit nostrum explicabo!'
  },
  {
      title: 'Title',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sint praesentium, ut repellat nobis, molestiae voluptatibus ipsam provident fuga eius deserunt voluptatum sequi deleniti? Aut dolorum iste velit nostrum explicabo!'
  },
  {
      title: 'Title',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sint praesentium, ut repellat nobis, molestiae voluptatibus ipsam provident fuga eius deserunt voluptatum sequi deleniti? Aut dolorum iste velit nostrum explicabo!'
  }
]

/**
 * Компонент виджеты: дополнительные разделы
 */

export default function Widgets() {
    return (
        <div className='block'>
          {widgetList.map(el => 
            <div>
                  <h2>{el.title}</h2>
                  <p>{el.text}</p>
            </div>)
          }
        </div>
    )
}