import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "~/routes";
import Defaultlayout from "~/components/Layouts/DefaultLayout";
import { Fragment } from "react";
import Login from "./Login/Login";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        {/* eslint-disable-next-line array-callback-return*/}
        {privateRoutes.map((route, index) => {
            let Layout= Defaultlayout;
            const Page = route.component;
            if(route.layout){
              Layout= route.layout;
            }else if(route.layout=== null) {
              Layout=Fragment;
            }
  
            return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
        })}
        {publicRoutes.map((route, index) => {
          let Layout= Defaultlayout;
          const Page = route.component;
          if(route.layout){
            Layout= route.layout;
          }else if(route.layout=== null) {
            Layout=Fragment;
          }

          return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
        })}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
