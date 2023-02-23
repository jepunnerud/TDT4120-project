import { display } from '@mui/system';
import LinkableComponent from './components/LinkableComponent';
import './globals.css';

function SearchView({ menuItems }) {
  return (
    <div
      id="div"
      style={{
        overflowY: 'scroll',
        maxHeight: '100px',
        zIndex: 10,
        fontSize: 16,
        display: 'block',
      }}
    >
      {menuItems.length > 0 && (
        <ul className="suggestion-list">
          {menuItems.map((item) => (
            <LinkableComponent
              className="suggestion-item Link"
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
                  onClick={() =>
                    (document.getElementById('div').style.display = 'none')
                  }
                >
                  <text>
                    {item.item.title == undefined
                      ? item.item.name
                      : item.item.title}
                  </text>
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
