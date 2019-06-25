import React from 'react';
import styles from './styles.module.scss'
import {Search} from '../../Components/Search';

class SearchPage extends React.Component {
   

    render() {

        return (
            <div id="searchPage">
                <Search/>
        
            </div>
        );
    }
}
export default SearchPage;