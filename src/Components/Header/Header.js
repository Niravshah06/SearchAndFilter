import React from 'react';
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';
import { SideMenu } from '../SideMenu';
import { LoginModal } from '../../Modal/LoginModal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
    }
    this.onClickItem = this.onClickItem.bind(this);
    this.loginUser = this.loginUser.bind(this);

    this.closeLoginModal = this.closeLoginModal.bind(this);

  }
  onClickItem(item) {
    // alert(item)
    if (item === 'login') {
      this.setState({ showLoginModal: true });
    }
    if (item === 'logout') {

      localStorage.removeItem('user');
  alert("logout sucesfull")
    }
  }
  loginUser(data) {
    if (data) {
      if (data.name === 'nirav' && data.password === 'shah') {
        alert("login sucesfull")
        this.setState({ showLoginModal: false });
        localStorage.setItem('user', JSON.stringify(data));
        return;
      }
    }
    alert("login unsucessfull")
  }


  closeLoginModal() {
    this.setState({ showLoginModal: false });
  }
 
  render() {

    return (
      <div className={styles.parent}>
        <div>
          <SideMenu clickedItem={this.onClickItem} />
          <Link to={`/`} className={styles.title}>
            <img className={styles.logo} alt="logo" src={'/images/logo.svg'} />
          </Link>
        </div>
        <div>

          {this.state.showLoginModal && <LoginModal callback={this.loginUser} onClose={this.closeLoginModal} />
          }

        </div>
      </div>
    );
  }
}
export default Header;