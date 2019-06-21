import React from 'react';
import styles from './styles.module.scss'
import {Header} from '../../Components/Header';
import {Search} from '../../Components/Search';

class DashBoardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }

    render() {

        return (
            <div>
                <Header></Header>
                <Search/>
        
            </div>
        );
    }
}
export default DashBoardPage;