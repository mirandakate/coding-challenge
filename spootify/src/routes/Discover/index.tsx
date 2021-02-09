import React, { useEffect, useState } from 'react';
import DiscoverBlock from './DiscoverBlock';
import { useSpotify } from 'src/common/hooks/useSpotify';
import { useRedux } from 'src/common/hooks/Reducer';
import './discover.scss';

interface FeaturedDataTypes {
  messages: string;
  playlists: {
    items: any[]
  }
}

interface NewReleasesDataTypes {
  albums: {
    items: any[]
  }
}

interface CategoriesDataTypes {
  categories: {
    items: any[]
  }
}

const Discover: React.FunctionComponent<any> = () => {
  const [{token}] = useRedux()
  const featuredPlaylistRequest = useSpotify<FeaturedDataTypes>('/browse/featured-playlists')
  const releasesRequest = useSpotify<NewReleasesDataTypes>('/browse/new-releases')
  const categoriesRequest = useSpotify<CategoriesDataTypes>('/browse/categories')

  useEffect(() => {
    if(token) {
      featuredPlaylistRequest.call()
      releasesRequest.call()
      categoriesRequest.call()
    }
  }, [token])
  
  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={releasesRequest.data?.albums?.items || []} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={featuredPlaylistRequest.data?.playlists?.items || []} />
      <DiscoverBlock text="BROWSE" id="browse" data={categoriesRequest.data?.categories?.items || []} imagesKey="icons" />
    </div>
  );
  
}

export default Discover;