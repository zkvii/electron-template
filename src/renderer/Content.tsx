import './Content.scss';
import React from 'react';
import {
  RightOutlined,
  FilePdfOutlined,
  FolderOutlined,
  HomeOutlined,
  DownOutlined,
} from '@ant-design/icons';
import search from '../../../refm/assets/svg/search.svg';
import { useAppContext, AppProvider } from './AppContext';
import { PdfPanel } from './PdfPanel';

interface FolderElement {
  name: string;
  children?: FolderElement[];
}

function Files() {
  let files = [] as string[];
  const { selectedFolder } = useAppContext();
  if (selectedFolder === 'folder1.1') {
    files = ['file1', 'file2', 'file3','file1', 'file2', 'file3','file1', 'file2', 'file3','file1', 'file2', 'file3','file1', 'file2', 'file3'];
  }

  return (
    <div className="main-files">
      <div className="file-header">
        <span className="file-header__text">标题</span>
      </div>
      <div className="files-container">
        {files.map((file) => (
          <div className="item-container" key={file}>
            <div className="item">
              <FilePdfOutlined />
              <span className="item-text">-{file}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

function Folders({ folderName }: { folderName: string }) {
  let folders = [] as FolderElement[];
  if (folderName === 'lib1')
    folders = [
      {
        name: 'folder1',
        children: [
          {
            name: 'folder1.1',
          },
          {
            name: 'folder1.2',
          },
        ],
      },
    ];
  if (folderName === 'folder1')
    folders = [
      {
        name: 'folder1.1',
      },
      {
        name: 'folder1.2',
      },
    ];

  const { setSelectedFolder } = useAppContext();
  const [expandFolders, setExpandFolders] = React.useState(false);

  const handleExpand = () => {
    setExpandFolders(!expandFolders);
  };

  const handleFolderClick = (selectedFolderName: string) => {
    setSelectedFolder(selectedFolderName);
    handleExpand();
  };

  return (
    <div className="folders-container">
      {folders.map((folder) => (
        <div className="item-container" key={folder.name}>
          <div className="item" onClick={() => handleFolderClick(folder.name)}>
            {folder.children && (
              <span className="item-expand">
                {expandFolders && <DownOutlined />}
                {!expandFolders && <RightOutlined />}
              </span>
            )}
            <FolderOutlined />
            <span className="item-text">
              {folderName}-{folder.name}
            </span>
          </div>
          {folder.children && expandFolders && (
            <Folders folderName={folder.name} />
          )}
        </div>
      ))}
    </div>
  );
}

function Libs() {
  const [expandFolders, setExpandFolders] = React.useState(false);

  const handleExpand = () => {
    setExpandFolders(!expandFolders);
  };

  const libs = ['lib1'];
  return (
    <div className="main-libs">
      {libs.map((lib) => (
        <div className="item-container" key={lib}>
          <div className="item" onClick={handleExpand}>
            <span className="item-expand">
              {expandFolders && <DownOutlined />}
              {!expandFolders && <RightOutlined />}
            </span>
            <HomeOutlined />
            <span className="item-text">{lib}</span>
          </div>
          {expandFolders && <Folders folderName={lib} />}
        </div>
      ))}
    </div>
  );
}

export function Content() {
  return (
    <AppProvider>
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
        <div className="right-panel" >
          <PdfPanel />
        </div>
      </div>
    </AppProvider>
  );
}
