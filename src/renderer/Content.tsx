import './Content.scss';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import FolderOutlined from '@ant-design/icons/FolderOutlined';

import FilePdfOutlined from '@ant-design/icons/FilePdfOutlined';
import search from '../../assets/svg/search.svg';

function Files({ FolderName }: { FolderName: string }) {
  const files = ['file1', 'file2', 'file3'];
  return (
    <div className="main-files">
      {files.map((file) => (
        <div className="item-container" key={file}>
          <div className="item">
            <FilePdfOutlined />
            <span className="item-text">
              {FolderName}-{file}
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
            <span className="folder-item-text">
              {LibName}-{folder}
            </span>
          </div>
          <Files FolderName={folder} />
        </div>
      ))}
    </div>
  );
}

function Libs() {
  const libs = ['lib1'];
  return (
    <div className="main-libs">
      {libs.map((lib) => (
        <div className="item-container" key={lib}>
          <div className="item">
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
      <div className="right-panel" />
    </div>
  );
}
