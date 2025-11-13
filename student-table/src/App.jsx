import React, { useState } from "react";
import StudentTable from "./components/StudentTable";
import SignInForm from "./components/SignInForm";

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div>
      {signedIn ? (
        <StudentTable />
      ) : (
        <SignInForm onSignIn={() => setSignedIn(true)} />
      )}
    </div>
  );
}

export default App;
