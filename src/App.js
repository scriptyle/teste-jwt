import logo from './logo.svg';
import './App.css';
import jwt_decode from "jwt-decode";

function App() {
  let token = "eyJpZCI6IjAwMDEiLCJ0eXBlIjoiZG9udXQiLCJuYW1lIjoiQ2FrZSIsInBwdSI6MC41NSwiYmF0dGVycyI6eyJiYXR0ZXIiOlt7ImlkIjoiMTAwMSIsInR5cGUiOiJSZWd1bGFyIn0seyJpZCI6IjEwMDIiLCJ0eXBlIjoiQ2hvY29sYXRlIn0seyJpZCI6IjEwMDMiLCJ0eXBlIjoiQmx1ZWJlcnJ5In0seyJpZCI6IjEwMDQiLCJ0eXBlIjoiRGV2aWwncyBGb29kIn1dfSwidG9wcGluZyI6W3siaWQiOiI1MDAxIiwidHlwZSI6Ik5vbmUifSx7ImlkIjoiNTAwMiIsInR5cGUiOiJHbGF6ZWQifSx7ImlkIjoiNTAwNSIsInR5cGUiOiJTdWdhciJ9LHsiaWQiOiI1MDA3IiwidHlwZSI6IlBvd2RlcmVkIFN1Z2FyIn0seyJpZCI6IjUwMDYiLCJ0eXBlIjoiQ2hvY29sYXRlIHdpdGggU3ByaW5rbGVzIn0seyJpZCI6IjUwMDMiLCJ0eXBlIjoiQ2hvY29sYXRlIn0seyJpZCI6IjUwMDQiLCJ0eXBlIjoiTWFwbGUifV0sImFsZyI6IlJTMjU2IiwiY3R5IjoiSldUIn0.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNjAzMzc2MDExfQ.QlaOZGXgv74zP1Toq5uUYLzVuTjqcYx6UXs1fm7AXxAGpCF9tZ-Y4VL1J7XAsYoRI5fwQzlrZm_zhWsC0jzVwFZEj5nKCaRLO1vSq59NepbUT0QpL0UPH1k_yLDxLClOLP31CbwCYZAqFWidfAL0SREyG_3Ho3NGqttyYEl9NWo";
  let decoded = jwt_decode(token);

  console.log(decoded);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Homol
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
