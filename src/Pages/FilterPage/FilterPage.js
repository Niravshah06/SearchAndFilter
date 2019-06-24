import React from 'react';
import styles from './styles.module.scss'
import { job_data } from '../../api/filterPageAPIMock';
import _ from "lodash";

const filterFields = ["compnay_name", "city", "state", "country", "job_type"
]


class FilterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], filters: [] }
        this.getData = this.getData.bind(this);
        this.populateFilters = this.populateFilters.bind(this);

    }
    populateFilters() {
        console.log(_.uniqBy(this.state.data, 'country').length);
        let data = this.state.data;
        let filterToPopulate = [];
        filterFields.forEach(function (key) {

            let result = [...new Set(data.map(item => item[key]))];
            if (result.length > 0) {
                filterToPopulate[key] = result;
            }


        })

        this.setState({
            filters: filterToPopulate
        })
    }
    getData() {
        this.setState({
            data: job_data
        }, () => {
                this.populateFilters()
            });


    }
    componentWillMount() {
        this.getData();
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