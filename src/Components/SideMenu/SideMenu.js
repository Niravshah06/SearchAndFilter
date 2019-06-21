import React from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
//import styles from './styles.module.scss'

class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false,
        }
    }

    onClickItem(item) {
        this.setState({ showNav: false });
        this.props.clickedItem(item);
    }
    render() {
        const item = !localStorage.getItem('user') ? <div onClick={() => this.onClickItem("login")}>Login</div> : <div onClick={() => this.onClickItem("logout")}>logout</div>;

        return (
            <div style={{ marginTop: 25 }}>

                <MenuIcon onClick={() => this.setState({ showNav: true })} />

                <SideNav
                    showNav={this.state.showNav}
                    onHideNav={() => this.setState({ showNav: false })}
                    title="Menu"
                    items={[item,
                        <a href="/">Home</a>,

                    ]}
                    titleStyle={{ color: 'black', backgroundColor: 'grey' }}
                    itemStyle={{ color: 'black', backgroundColor: 'lightgrey' }}
                    itemHoverStyle={{ color: 'red' }}


                />

            </div>
        );
    }
}
export default SideMenu;