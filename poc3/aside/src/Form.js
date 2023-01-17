import React, { useState, useEffect, useCallback, useRef } from "react";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
  "Phasellus aliquet lobortis tempor.";

function Form() {
  const [text, setText] = useState(lorem);
  const [isShellContent, setIsShellContent] = useState(false);
  const rootDiv = useRef(null);
  const modalOpen = useCallback(() => {
    alert(text);
  }, []);
  const alterContent = useCallback(() => {
    setIsShellContent((old) => !old);
  }, []);

  const loadShellContent = useCallback(() => {
    const shellContent = document.getElementById("shell-aside-content");
    if (shellContent) {
      const fragment = shellContent.content.cloneNode(true);
      let fragmentChilds = fragment.childNodes.length;

      while (fragmentChilds-- > 1) {
        rootDiv.current.appendChild(fragment.firstChild);
      }
    }
  });

  useEffect(() => {
    if (isShellContent) {
      loadShellContent();
    }
  }, [isShellContent]);

  return (
    <div>
      {!isShellContent && (
        <>
          <textarea
            rows="4"
            cols="50"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div style={{ marginTop: "1em" }}>
            <button onClick={modalOpen}>Submeter Formulário</button>
          </div>
        </>
      )}
      {isShellContent && <div ref={rootDiv}></div>}
      <div style={{ marginTop: "2em" }}>
        <button onClick={alterContent}>Alternar conteúdo</button>
      </div>
    </div>
  );
}

export default Form;
