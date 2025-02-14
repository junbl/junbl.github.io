import { Button } from '@mui/material';
import logo from '../static/turtle.svg';
export default function Home() {
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="turtle" />
      <p>
        hi!
      </p>
      <Button href="/dice" size="large" variant="contained">dice</Button>
    </header>
  </div>
}