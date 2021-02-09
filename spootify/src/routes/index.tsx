import axios from 'axios';
import React, { useEffect } from 'react';
import { useRedux, ReduxActionType } from 'src/common/hooks/Reducer';
import Discover from './Discover';
import config from '../config'
const Routes: React.FunctionComponent = () => {
  const [, dispatch] = useRedux()
  
  useEffect(() => {
    axios.post(config.api.authUrl, 
      'grant_type=client_credentials',
      {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${config.api.clientId}:${config.api.clientSecret}`)}`
      },
    }).then((response) => {
      dispatch({
        type: ReduxActionType.SET_TOKEN,
        payload: response.data.access_token
      })
    })
  }, [])

  return <Discover />;
}

export default Routes