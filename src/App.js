import DrugTwo from "./pages/DrugTwo";
import DrugOne from "./pages/DrugOne";
import drugTwo from "./data/drug2.json";
import drugOne from "./data/drug1.json";
import { useEffect, useState } from "react";

function App() {
  const [form, setForm] = useState(true);
  const [formElements, setFormElements] = useState(null);

  const handleClick = () => {
    setForm(false);
  };

  const handleChange = () => {
    setForm(true);
  };

  useEffect(() => {
    if (form === true) {
      setFormElements(drugOne);
    } else {
      setFormElements(drugTwo);
    }
  });

  const { fields } = formElements ?? {};
  return (
    <div className="container mt-5">
      <div>
        <h1 className="text-center">Clinical Decision Support System</h1>
        <a
          className="btn btn-success"
          href="https://github.com/kathiravanvellaisamy/clinical-decision-support"
          style={{ float: "right", textDecoration: "none" }}
        >
          GitHub Code
        </a>
      </div>
      {form ? (
        <>
          <input
            type="submit"
            className="btn btn-warning"
            value="Drug Two"
            onClick={handleClick}
          />
          <hr /> <DrugOne fields={fields} />
        </>
      ) : (
        <>
          <input
            type="submit"
            className="btn btn-warning"
            value="Drug One"
            onClick={handleChange}
          />
          <hr />
          <DrugTwo fields={fields} />
        </>
      )}
    </div>
  );
}

export default App;
