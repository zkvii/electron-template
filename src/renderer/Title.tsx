import MinusOutlined from '@ant-design/icons/MinusOutlined';
import BorderOutlined from '@ant-design/icons/BorderOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import React, { useEffect, useState, useRef } from 'react';
import { useClickAway } from "@uidotdev/usehooks";
import icon from '../../../refm/assets/quote.png';

function FileMenus() {
  return (
    <div className="sub-menus">
      <div className="menu-item">新建</div>
      <div className="menu-item">打开</div>
      <div className="menu-item">保存</div>
      <div className="menu-item">另存为</div>
      <div className="menu-item">退出</div>
    </div>
  );
}

function EditMenus() {
  return (
    <div className="sub-menus">
      <div className="menu-item">撤销</div>
      <div className="menu-item">重做</div>
      <div className="menu-item">剪切</div>
      <div className="menu-item">复制</div>
      <div className="menu-item">粘贴</div>
    </div>
  );
}

function ViewMenus() {
  return (
    <div className="sub-menus">
      <div className="menu-item">全屏</div>
      <div className="menu-item">缩放</div>
      <div className="menu-item">主题</div>
      <div className="menu-item">字体</div>
      <div className="menu-item">布局</div>
    </div>
  );
}

function ConfigMenus() {
  function showSettings() {
    window.electron.ipcRenderer.sendMessage('show-settings');
  }
  return (
    <div className="sub-menus">
      <div className="menu-item" onClick={showSettings}>
        设置
      </div>
      <div className="menu-item">插件</div>
      <div className="menu-item">主题</div>
      <div className="menu-item">字体</div>
      <div className="menu-item">布局</div>
    </div>
  );
}

function HelpMenus() {
  return (
    <div className="sub-menus">
      <div className="menu-item">帮助</div>
      <div className="menu-item">关于</div>
      <div className="menu-item">联系</div>
      <div className="menu-item">反馈</div>
      <div className="menu-item">问题</div>
    </div>
  );
}

function LeftMenu() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [shoSubMenus, setShowSubMenus] = useState(-1);
  const ShowSubMenus = (num: number) => {
    setShowSubMenus(num);
    setDisplayMenu(!displayMenu);
  };
  const ref = useClickAway(() => {
    setDisplayMenu(false);
  });

  return (
    <div className="left-menu" ref={ref}>
      <div className="menu-item" onClick={() => ShowSubMenus(0)}>
        文件
        {displayMenu && shoSubMenus === 0 && <FileMenus />}
      </div>
      <div className="menu-item" onClick={() => ShowSubMenus(1)}>
        编辑
        {displayMenu && shoSubMenus === 1 && <EditMenus />}
      </div>
      <div className="menu-item" onClick={() => ShowSubMenus(2)}>
        查看
        {displayMenu && shoSubMenus === 2 && <ViewMenus />}
      </div>
      <div className="menu-item" onClick={() => ShowSubMenus(3)}>
        配置
        {displayMenu && shoSubMenus === 3 && <ConfigMenus />}
      </div>
      <div className="menu-item" onClick={() => ShowSubMenus(4)}>
        帮助
        {displayMenu && shoSubMenus === 4 && <HelpMenus />}
      </div>
    </div>
  );
}

function minizeWindow() {
  window.electron.ipcRenderer.sendMessage('minimize-window');
}

function maximizeWindow() {
  window.electron.ipcRenderer.sendMessage('maximize-window');
}

function closeWindow() {
  window.electron.ipcRenderer.sendMessage('close-window');
}

export function Title() {
  return (
    <header className="titleBar">
      <div className="left-title">
        <img className="icon-image" src={icon} alt="icon" />
        <LeftMenu />
      </div>
      <div className="right-title">
        <div className="traffic-light" onClick={minizeWindow}>
          <MinusOutlined />
        </div>
        <div className="traffic-light" onClick={maximizeWindow}>
          <BorderOutlined />
        </div>
        <div className="traffic-light" onClick={closeWindow}>
          <CloseOutlined />
        </div>
      </div>
    </header>
  );
}
