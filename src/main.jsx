import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastProvider } from "react-toast-notifications";
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-right">
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ToastProvider>

)
