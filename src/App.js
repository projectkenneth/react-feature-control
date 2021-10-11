import { useState } from "react";

import Config from "./Config";

import RoleSwitcher from "./RoleSwitcher";
import Editor from "./Editor/Editor";

function App() {
  const availablePlans = Config.availablePlans;

  const [activePlan, setActivePlan] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col p-3">
          <RoleSwitcher 
            plans={availablePlans} activePlan={activePlan} 
            setActivePlan={setActivePlan} />
        </div>
      </div>
      <div className="row">
        <div className="col p-3">
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default App;
