import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import Redux from './common/hooks/Reducer';
import './styles/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Redux>
      <CoreLayout>
        <Routes />
      </CoreLayout>
    </Redux>
  </React.StrictMode>,
  document.getElementById('root')
);
