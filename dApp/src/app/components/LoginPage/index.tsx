import * as React from 'react';
import { Button } from 'reactstrap';

const CLIENT_ID = 'd345adcdaf9142e9cc19';
const REDIRECT_URI = 'http://localhost:3000/';

export namespace LoginPage {
  export interface State {
    token?: string,
    isLogined: boolean,
  }
}

export class LoginPage extends React.Component<{}, LoginPage.State> {
  constructor(props?: any, context?: any) {
    super(props, context);

    this.state = {
      token: '',
      isLogined: false,
    };
  }

  componentDidMount() {
    const oauth = window.location.href.match(/\?code=(.*)/);
    if (oauth) {
      const code = oauth.length === 2 && oauth[1] || null;
      fetch(`https://githubcolonygatekeeper.herokuapp.com/authenticate/${code}`)
        .then(response => response.json())
        .then(({ token }) => {
          this.setState({
            token,
            isLogined: true,
          });
        });
    }
  }

  onClickLoginBtn = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`;
  }

  render() {
    return (
      <div>
        {this.state.isLogined && (<h1> Welcome</h1>)}
        {!!!this.state.isLogined && (
          <Button onClick={this.onClickLoginBtn} className="btn-social btn-github" style={{ height: '35px' }}>
            <i className="fab fa-github" />
            Login With Github
          </Button>
        )}
      </div>
    );
  }
}
