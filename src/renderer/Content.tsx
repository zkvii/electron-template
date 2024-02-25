import './Content.scss';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import search from '../../assets/svg/search.svg';


function Libs() {
  const libs = ['lib1'];
  return (
    <div className="main-libs">
      {libs.map((lib) => (
        <div className="menu-item">
          <HomeOutlined />
          <span className="menu-item-text">{lib}</span>

        </div>
      ))}
    </div>
  );
}

export function Content() {


  return (
    <div className="content">
      <div className="left-panel">
        <div className="left-panel__header">
          <input className="left-panel__header__search-input" />
          <img className="left-panel__header__search-icon" src={search} alt="search" />
        </div>
        <div className="left-panel__content">
          <div>
            <Libs />
          </div>

        </div>
      </div>
      <div className="right-panel"></div>
    </div>
  );
}
