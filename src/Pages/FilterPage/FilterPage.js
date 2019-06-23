import React from 'react';
import styles from './styles.module.scss'

class FilterPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={styles.gridColumn}>
<div>1/4</div>               
<div>3/4</div> 
            </div>
        );
    }
}
export default FilterPage;