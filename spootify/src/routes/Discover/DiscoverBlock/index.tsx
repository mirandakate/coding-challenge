import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DiscoverItem from '../DiscoverItem';
import './discover-block.scss';

type Options = {
    isNegative?: boolean;
}

interface DiscoverBlockProps {
    text: string;
    id: string;
    data: any[];
    imagesKey?: string;
}

function scrollContainer(id: string, { isNegative }: Options = {}) {
  return () => {
    const scrollableContainer = document.getElementById(id);

    if(!scrollableContainer) return;

    const amount = isNegative ? -scrollableContainer.offsetWidth : scrollableContainer.offsetWidth;

    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
}

const DiscoverBlock: React.FunctionComponent<DiscoverBlockProps> = ({ text, id, data, imagesKey = 'images' }) => {
  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        <span />
        {
          data.length ? (
            <div className="animate__animated animate__fadeIn">
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={scrollContainer(id, { isNegative: true })}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollContainer(id)}
              />
            </div>
          ) : null
        }
      </div>
      <div className="discover-block__row" id={id}>
        {data.map(({ [imagesKey]: images, name }) => (
          <DiscoverItem key={name} images={images} name={name} />
        ))}
      </div>
    </div>
  );
}

export default DiscoverBlock
