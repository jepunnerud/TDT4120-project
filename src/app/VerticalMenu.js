import { Button } from '@nextui-org/react';
import LinkableComponent from './components/LinkableComponent';

function VerticalMenu({ menuItems }) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        maxHeight: '100px',
        zIndex: 10,
        fontSize: 16,
      }}
    >
      {menuItems.map((item) => (
        <LinkableComponent
          link="/"
          component={
            <Button>
              {item.item.title == undefined ? item.item.name : item.item.title}
            </Button>
          }
        ></LinkableComponent>
      ))}
    </div>
  );
}

export default VerticalMenu;
