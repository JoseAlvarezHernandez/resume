import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/App.scss'

import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle'

import Home from './page/home.component'

import ContextMenuListener from './ContextMenu'

document.addEventListener('contextmenu', ContextMenuListener)

function App() {
  return <Home />;
}

export default App;
