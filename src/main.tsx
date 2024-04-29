import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { IAppProps } from './components/models.ts';

const getAppProps = (): IAppProps => {
  let searchParams = new URLSearchParams(window.location.search);
  let data = searchParams.get("data") ?? JSON.stringify({});
  return JSON.parse(data) as IAppProps;
}

ReactDOM.createRoot(document.getElementById('webresroot')!).render(
  <React.StrictMode>
    <App {...getAppProps()} />
  </React.StrictMode>,
)
