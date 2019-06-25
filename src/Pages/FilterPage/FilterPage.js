import React from 'react';
import styles from './styles.module.scss'
import { job_data } from '../../api/filterPageAPIMock';
import { SearchBar } from '../../Components/SearchBar';
import {FilterResults} from '../../Components/FilterResults';
import _ from "lodash";

const filterFields = ["compnay_name", "city", "state", "country", "job_type"
]


class FilterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], filters: [] }
        this.getData = this.getData.bind(this);
        this.populateFilters = this.populateFilters.bind(this);
        this.performSearch = this.performSearch.bind(this);


    }

    performSearch(value) {
        //do nothing ,this is value for event chaange after every press,we filter only when thet hit enter
        console.log(value);
    }
    performKeyWordSearch(value) {
        //keyword search
        alert(value);

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
            <div>

                <div className={styles.gridColumn}>
                    <div className={styles.columnDivider}>
                      
                        <h3>Search for Jobs</h3>
                    </div>
                    <div>
                        <SearchBar width={500} performSearchFromsubmit={this.performSearch} performSearch={this.performSearch} />
<FilterResults data={this.state.data}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default FilterPage;