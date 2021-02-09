import React from 'react';
import './discover-item.scss';

interface DiscoverItemProps {
    images: any;
    name: string;
}

const DiscoverItem: React.FunctionComponent<DiscoverItemProps> = ({ images, name }) => {
  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${images[0].url})` }}
      />
      <p className="discover-item__title">{name}</p>
    </div>
  );
}

export default DiscoverItem