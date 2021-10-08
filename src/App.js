import "./App.css";
import Map from "./components/Map";
import { withGoogleMap, withScriptjs } from "react-google-maps";

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100vh", width: "100%" }} />}
        containerElement={<div style={{ height: `400px`, width: "30%" }} />}
        mapElement={<div style={{ height: `100vh`, width: "100%" }} />}
      />
    </div>
  );
}

export default App;
