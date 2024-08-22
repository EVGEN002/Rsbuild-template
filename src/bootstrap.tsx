import React from 'react';
import ReactDOM from 'react-dom/client';
import AppViewer from './AppViewer';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <AppViewer />
    </React.StrictMode>,
  );
}
