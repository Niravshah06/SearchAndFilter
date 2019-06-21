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
      showLogoutModal: false
    }
    this.onClickItem = this.onClickItem.bind(this);
    this.loginUser = this.loginUser.bind(this);

    this.closeLoginModal = this.closeLoginModal.bind(this);

  }
  onClickItem(item) {
    alert(item)
    if (item === 'login') {
      this.setState({ showLoginModal: true });
    }
    if (item === 'logout') {

      alert("Sucessfully ,logged out");
      //clear out local storage 
    }
  }
  loginUser(data) {
    alert(data);
  }

  closeLoginModal() {
    this.setState({ showLoginModal: false });
  }
  closeLogoutModal() {
    this.setState({ showLogoutModal: false });
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