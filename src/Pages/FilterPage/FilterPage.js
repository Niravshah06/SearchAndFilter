import React from 'react';
import styles from './styles.module.scss'
import { job_data } from '../../api/filterPageAPIMock';
class FilterPage extends React.Component {
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);

    }

    getData() {
        this.setState({
            data: job_data

        })
    }
    componentWillMount() {
        this.getData();
    }

    render() {
        alert(this.state.data.length)
        return (
            <div className={styles.gridColumn}>
                <div>1/4</div>
                <div>3/4</div>
            </div>
        );
    }
}
export default FilterPage;