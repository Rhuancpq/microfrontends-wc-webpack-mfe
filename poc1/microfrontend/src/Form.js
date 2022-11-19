import React, { useState, useCallback } from "react";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
  "Phasellus aliquet lobortis tempor.";

function Form() {
  const [text, setText] = useState(lorem);
  const modalOpen = useCallback(() => {
    alert(text);
  }, []);

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div style={{ marginTop: "1em" }}>
        <button onClick={modalOpen}>Submeter Formulário</button>
      </div>
    </div>
  );
}

export default Form;
