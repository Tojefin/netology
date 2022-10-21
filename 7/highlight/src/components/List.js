import Video from './Video';
import Article from './Article';
import WrapAttract from './WrapAttract';

export default function List(props) {
  return props.list.map(item => {
      let Wraped
      switch (item.type) {
          case 'video':
              Wraped = WrapAttract(Video)
              break;
          case 'article':
              Wraped = WrapAttract(Article)
              break;
          default:
              break;
      }
      return (
        <Wraped {...item}/>
      );
  });
};