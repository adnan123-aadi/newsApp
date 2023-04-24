import { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [page, setPage] = useState(1);

  const pageSize = 18;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            key="general"
            path="/"
            element={
              <News
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            key="sports"
            path="/sports"
            element={
              <News
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            key="technology"
            path="/technology"
            element={
              <News
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                category="technology"
              />
            }
          ></Route>
          <Route
            exact
            key=""
            path="/entertainment"
            element={
              <News
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            key="business"
            path="/business"
            element={
              <News
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            key="health"
            path="/health"
            element={
              <News
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            key="science"
            path="/science"
            element={
              <News
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                category="science"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
