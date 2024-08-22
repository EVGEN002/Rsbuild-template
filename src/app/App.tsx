import "@/assets/sass/main.sass";

import AppStyle from "./App.module.sass";

const App = () => {
  return (
    <div className={AppStyle.app}>
      <div className={AppStyle.app__content}>
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
      </div>
    </div>
  );
};

export default App;
