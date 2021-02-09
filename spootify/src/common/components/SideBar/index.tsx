import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch, faStream,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './sidebar.scss';

interface SideBarOptionProps {
  link: string;
  icon: any;
  text: string;
  options?: any;
}

const SideBarOption: React.FunctionComponent<SideBarOptionProps> = ({link, icon, text, options: { selected } = {}}) => {
  return (
    <div
      className={cx('sidebar__option', { 'sidebar__option--selected': selected })}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  )
}

const SideBar: React.FunctionComponent<any> = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>Bob Smith</p>
      </div>
      <div className="sidebar__options">
        <SideBarOption link='/' icon={faHeadphonesAlt} text='Discover' options={{ selected: true }} />
        <SideBarOption link='/search' icon={faSearch} text='Search' />
        <SideBarOption link='/favourites' icon={faHeart} text='Favourites' />
        <SideBarOption link='/playlists' icon={faPlayCircle} text='Playlists' />
        <SideBarOption link='/charts' icon={faStream} text='Charts' />
      </div>
    </div>
  );
}

export default SideBar
