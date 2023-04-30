import './App.css'
import {Header} from './header/Header.tsx';
import {MainBlock} from './mainBlock/MainBlock.tsx';
import {Skills} from './skills/Skills.tsx';

export const App = () => {

  return (
    <div className={'App'}>
        <Header/>
        <MainBlock/>
        <Skills/>
    </div>
  )
}
