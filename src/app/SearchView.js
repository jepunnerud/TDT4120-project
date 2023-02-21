import LinkableComponent from './components/LinkableComponent';
import './globals.css';

function SearchView({ menuItems }) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        maxHeight: '100px',
        zIndex: 10,
        fontSize: 16,
      }}
    >
      {menuItems.length > 0 && (
        <ul className="suggestion-list">
          {menuItems.map((item) => (
            <LinkableComponent
              className="suggestion-item"
              link={
                item.item.title == undefined
                  ? '/authorpage/' + item.item.id
                  : '/bookpage/' + item.item.id
              }
              component={
                <div
                  className="suggestion-item"
                  key={
                    item.item.title == undefined
                      ? item.item.name
                      : item.item.title
                  }
                >
                  <a
                    href={
                      item.item.title == undefined
                        ? '/authorpage/' + item.item.id
                        : '/bookpage/' + item.item.id
                    }
                  >
                    {item.item.title == undefined
                      ? item.item.name
                      : item.item.title}
                  </a>
                </div>
              }
            ></LinkableComponent>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchView;
