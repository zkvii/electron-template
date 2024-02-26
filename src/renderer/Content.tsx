import './Content.scss';
import { RightOutlined, FilePdfOutlined, FolderOutlined, HomeOutlined, DownOutlined } from '@ant-design/icons';
import search from '../../assets/svg/search.svg';

function Files() {
  const files = ['file1', 'file2', 'file3'];
  return (
    <div className="main-files">
      {files.map((file) => (
        <div className="item-container" key={file}>
          <div className="item">
            <FilePdfOutlined />
            <span className="item-text">
              -{file}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Folders({ LibName }: { LibName: string }) {
  const folders = ['folder1', 'folder2', 'folder3'];
  return (
    <div className="main-folders">
      {folders.map((folder) => (
        <div className="item-container" key={folder}>
          <div className="item">
            <FolderOutlined />
            <span className="item-text">
              {LibName}-{folder}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Libs() {
  const [ExpandFolders, setExpandFolders] = React.useState(false);
  const Expand = () => {
    setExpandFolders(!ExpandFolders);
  }
  const libs = ['lib1'];
  return (
    <div className="main-libs">
      {libs.map((lib) => (
        <div className="item-container" key={lib}>
          <div className="item">
            <DownOutlined className=""/>
            <HomeOutlined />
            <span className="item-text">{lib}</span>
          </div>
          <Folders LibName={lib} />
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
          <img
            className="left-panel__header__search-icon"
            src={search}
            alt="search"
          />
        </div>
        <div className="left-panel__content">
          <div>
            <Libs />
          </div>
        </div>
      </div>
      <div className="middle-panel">
        <Files />
      </div>
      <div className="right-panel" />
    </div>
  );
}
