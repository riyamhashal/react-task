import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import { BrowserRouter  as Router} from 'react-router-dom'

ReactDOM.createRoot(document.querySelector("#root")).render(
<Router>
  <App/>
</Router>
)