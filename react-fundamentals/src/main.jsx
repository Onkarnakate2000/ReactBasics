import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppTodo from './todo.jsx'
import UseEffect from './useEffect.jsx'
import UseEffectById from './useEffectRender.jsx'
import UseMemo from './UseMemo.jsx'
import UseMemoApproach from './MemoApproachInUseEffect.jsx'
import UseCallbackfunction from './useCallback.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseCallbackfunction/>
  </StrictMode>,
)
