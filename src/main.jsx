import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseStatelearn from './useStateLearn'
import UseEffectslearn from './UseEffectsLearn'
import UseContextLearn from './UseContextLearn'
import UseRefLearn from './UseRefLearn'
import UseReducerLearn from './UseReducerLearn'
import UseLayoutEffectLearn from './UseLayoutEffectLearn'
import UseMemoLearn from './UseMemoLearn'
import UseCallBack from './UseCallBack'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseStatelearn />
    <br /> <hr />
    <UseEffectslearn />
    <br /> <hr />
    <UseContextLearn />
    <br /> <hr />
    <UseRefLearn />
    <br /> <hr />
    <UseReducerLearn />
    <br /> <hr />
    <UseLayoutEffectLearn />
    <br /> <hr />
    <UseMemoLearn />
    <br /> <hr />
    <UseCallBack />
  </StrictMode>,
)
