import React, { useState, useEffect } from "react";
import { loadComponent } from "./utils/loadComponent";
import "./App.css";

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

const AsideMicrofrontend = {
  remote: "AsideMicrofrontend",
  url: "http://localhost:3002/bundle.js",
  module: "./Microfrontend",
  tag: "aside-microfrontend",
};

const MainMicrofrontend = {
  remote: "MainMicrofrontend",
  url: "http://localhost:4201/bundle.js",
  module: "./Microfrontend",
  tag: "main-microfrontend",
};

const HeaderMicrofrontend = {
  remote: "HeaderMicrofrontend",
  url: "http://localhost:3004/bundle.js",
  module: "./Microfrontend",
  tag: "header-microfrontend",
};

function App() {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <div>
        <System system={HeaderMicrofrontend} />
      </div>
      <h1 className="title">Prova de Conceito 2</h1>
      <div className="box">
        <div className="main-box">
          <System system={MainMicrofrontend} />
        </div>
        <div className="aside-box">
          <System system={AsideMicrofrontend} />
        </div>
      </div>
      {/* <div style={{ marginTop: "2em" }}>
        <System system={system} />
      </div> */}
    </div>
  );
}

export default App;
