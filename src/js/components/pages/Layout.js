import React from "react";
import { Link } from "react-router";
import Cookies from 'js-cookie';
import Footer from "../layout/Footer";
import Nav from "../layout/Nav";
import createHistory from 'history/createBrowserHistory';
import AuthenticationStore from '../../stores/AuthenticationStore';
import { isLoggin } from '../../actions/AuthenticationAction';
import Login from './Login';
const isLoggedIn = Cookies.get('debprojdb');
const history = createHistory({
  forceRefresh: true
})
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = this.userState();
    
  }
//Mounts the api after the articles have been mounted
  componentDidMount() {
    AuthenticationStore.addChangeListener(this.login);
  }
  componentWillUnmount() {
    AuthenticationStore.removeChangeListener(this.login)
  }
  login() {
    this.setState(this.userState())
  }

  userState() {
    return {
      user: AuthenticationStore.getUser()
    }
  }
render() {
  const { location } = this.props;
  const containerStyle = {
    marginTop: "60px"
  }; 

      return (

      <div>

            <Nav location={location} isLoggedIn={this.state.user.isAuthenticated} />

            <div class="container" style={containerStyle}>
              <div class="row">
                <div class="col-lg-12">
                  {this.props.children}
                </div>
              </div>
              <Footer />
            </div>
          </div>

          );
  }
}