import { connect } from "react-redux";

const Header = ({ auth }) => {
    const renderContent = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login With Google</a>
                    </li>
                );
            default:
                return (
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                );
        }
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <a className="left brand-logo" href="/">
                    Emaily
                </a>
                <ul className="right">{renderContent()}</ul>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
