import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

// local files
import Header from "./Header";

// temp components
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
const NoMatch = () => <h2>Page not Found</h2>;

const App = ({ fetchUser }) => {
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <div className="container">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </div>
    );
};

export default connect(null, actions)(App);
