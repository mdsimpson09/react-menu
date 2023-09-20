import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import FoodItem from "./FoodItem"; // Food item component
import DrinkItem from "./DrinkItem"; // Drink item component



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const snacks = await SnackOrBoozeApi.getSnacks();
        const drinks = await SnackOrBoozeApi.getDrinks();
        setSnacks(snacks);
        setDrinks(drinks);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <DrinkItem items={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}


//   useEffect(() => {
//     async function getSnacks() {
//       let snacks = await SnackOrBoozeApi.getSnacks();
//       setSnacks(snacks);
//       setIsLoading(false);
//     }
//     getSnacks();
//   }, []);

//   if (isLoading) {
//     return <p>Loading &hellip;</p>;
//   }

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         <main>
//           <Switch>
//             <Route exact path="/">
//               <Home snacks={snacks} />
//             </Route>
//             <Route exact path="/snacks">
//               <Menu snacks={snacks} title="Snacks" />
//             </Route>
//             <Route path="/snacks/:id">
//               <Snack items={snacks} cantFind="/snacks" />
//             </Route>
//             <Route>
//               <p>Hmmm. I can't seem to find what you want.</p>
//             </Route>
//           </Switch>
//         </main>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
