import * as React from 'react';
import { Button } from 'reactstrap';

export class LoginPage extends React.Component {
  onClickLoginBtn = () => {
    console.log('yay');
  }

  render() {
    return (
      <Button onClick={this.onClickLoginBtn} className="btn-social btn-github" style={{ height: '35px' }}>
        <i className="fab fa-github" />
        Login With Github
      </Button>
    )
  }
}
