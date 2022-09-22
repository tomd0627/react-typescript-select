import React, { useState } from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Select, { SelectOption } from "./Select";

const options = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
  { label: "Four", value: 4 },
  { label: "Five", value: 5 },
  { label: "Six", value: 6 },
];

function App() {
  const [valueSingle, setValueSingle] = useState<SelectOption | undefined>(
    options[0]
  );
  const [valueMultiple, setValueMultiple] = useState<SelectOption[]>([
    options[0],
  ]);

  return (
    <div className="App h-100">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12">
            <div className="h-100 d-flex flex-column align-items-center justify-content-center">
              <h3 className="my-3">Single Select</h3>
              <div className="w-25">
                <Select
                  options={options}
                  value={valueSingle}
                  onChange={(o) => setValueSingle(o)}
                />
              </div>
              <h3 className="my-3">Multiple Select</h3>
              <div className="w-25">
                <Select
                  multiple
                  options={options}
                  value={valueMultiple}
                  onChange={(o) => setValueMultiple(o)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
