import React, { useState, useEffect } from "react";
import { loadComponent } from "./utils/loadComponent";

function System(props) {
  const {
    system,
    system: { remote, url, module, tag },
  } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (remote && url && module)
      loadComponent(remote, "default", module, url)().then(() => {
        setLoading(false);
      });

    return () => {};
  }, [remote, url, module]);

  if (!system || !remote || !url || !module) {
    return <h2>Nenhum microfrontend especificado</h2>;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <div dangerouslySetInnerHTML={{ __html: `<${tag} />` }}></div>;
}

function App() {
  const [system, setSystem] = React.useState({});

  function setMicrofrontend() {
    setSystem({
      remote: "microfrontend",
      url: "http://localhost:3002/bundle.js",
      module: "./Microfrontend",
      tag: "micro-frontend",
    });
  }

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1>Prova de Conceito 1</h1>
      <button onClick={setMicrofrontend}>Carregar microfrontend</button>
      <div style={{ marginTop: "2em" }}>
        <System system={system} />
      </div>
    </div>
  );
}

export default App;
