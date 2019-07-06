import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

const _onPreRenders = []
const _onPostRenders = [
  function() {
    var splash = document.querySelector('#splash-spinner')
    var spinner = document.querySelector('.spinner')
    if (splash) {
      document.head.removeChild(splash)
    }
    if (spinner && spinner.parentNode) {
      spinner.parentNode.removeChild(spinner)
    }
  },
]

const onPreRender = () => _onPreRenders.forEach(f => f && f())
const onPostRender = () => _onPostRenders.forEach(f => f && f())

const root = document.querySelector('#root')
const render = (Component = Root) => {
  onPreRender()
  ReactDOM.render(<Component />, root, onPostRender)
}

render(Root)
