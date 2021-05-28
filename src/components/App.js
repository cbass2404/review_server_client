import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// local files

// temp components
const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
const NoMatch = () => <h2>Page not Found</h2>;

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/surveynew" component={SurveyNew} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
