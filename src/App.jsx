import React from "react";
import Header from "modules/Header";

import "./index.scss";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <Header
        navigation={[
          { name: "Dashboard", href: "#", current: true },
          { name: "Products", href: "#" },
        ]}
        containerStyle={{ backgroundColor: "" }}
      />
    </div>
  );
};

export default App;
