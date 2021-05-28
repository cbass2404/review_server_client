import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// local files
import Header from "./Header";

// temp components
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
const NoMatch = () => <h2>Page not Found</h2>;

const App = () => {
    return (
        <div className="container">
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
