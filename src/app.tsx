import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import CardMemoryGame from './components/card-memory-game'
import DragAndDrop from './components/drag-drop'
import ChangeWallet from './components/change-wallet'
import ChangeLanguage from './components/change-language'
import QrBarCodeGenerator from './components/qr-bar-code-generator'
import ColorGenerator from './components/color-generator'
import PasswordGenerator from './components/password-generator'
import TextGenerator from './components/text-generator'
import Todo from './components/todo'
import Timer from './components/timer'
import Validation from './components/validation'
import Weather from './components/weather'
import Main from './main'

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/card-memory-game" element={<CardMemoryGame />} />
      <Route path="/drag-and-drop" element={<DragAndDrop />} />
      <Route path="/change-wallet" element={<ChangeWallet />} />
      <Route path="/change-language" element={<ChangeLanguage />} />
      <Route path="/qr-bar-code-generator" element={<QrBarCodeGenerator />} />
      <Route path="/color-generator" element={<ColorGenerator />} />
      <Route path="/password-generator" element={<PasswordGenerator />} />
      <Route path="/text-generator" element={<TextGenerator />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/validation" element={<Validation />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  )
}

export default App
