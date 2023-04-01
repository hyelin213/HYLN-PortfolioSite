import Container from './components/container';
import { DarkModeProvider } from "./components/darkmodeContext";

import './style/style-PC.css';
import './style/style-Tablet.css';
import './style/style-Mobile.css';

export default function App() {
  return (
    <DarkModeProvider>
      <Container />
    </DarkModeProvider>
  );
}
