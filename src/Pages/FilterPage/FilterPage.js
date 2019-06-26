import React from 'react';
import styles from './styles.module.scss'
import { job_data } from '../../api/filterPageAPIMock';
import { SearchBar } from '../../Components/SearchBar';
import {Sorting} from '../../Components/Sorting';
import { FilterResults } from '../../Components/FilterResults';
import { PaginationFooter } from '../../Components/PaginationFooter';
import _ from "lodash";

const filterFields = ["compnay_name", "city", "state", "country", "job_type"
]
const sortingFields = ["Date","Title"];


class FilterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], filters: [],
            activePage: 1,
            pageSize: 10,
            totalPages: 1,
            totalElements: 0,
            sortDirection: 'Desc',
            keyword: ''



        }
        this.getData = this.getData.bind(this);

        this.populateFilters = this.populateFilters.bind(this);

        this.performSearch = this.performSearch.bind(this);
        this.performKeyWordSearch = this.performKeyWordSearch.bind(this);


        this.setPageSize = this.setPageSize.bind(this);
        this.setPageNumber = this.setPageNumber.bind(this);

        this.sortResultsBy = this.sortResultsBy.bind(this);
        this.orderResultsBy = this.orderResultsBy.bind(this);


    }

    //sort
    sortResultsBy(value)
    {
        alert(value);

    }

    //order
    orderResultsBy(value)
    {
        alert(value);
    }


    performSearch(value) {
        //do nothing ,this is value for event chaange after every press,we filter only when thet hit enter
        console.log(value);
    }
    performKeyWordSearch(value) {
        //keyword search
        this.setState({ keyword: value });
        // alert(value);

    }

    //paging methods

    setPageSize(pageSize) {
        this.setState({ activePage: 1 });
        this.setState({ pageSize: pageSize }, () => {
            this.performKeyWordSearch()
        });

    }
    setPageNumber(pageNumber) {
        this.setState({ activePage: pageNumber }, () => {
            this.performKeyWordSearch()
        });
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
        this.setState({ totalElements: this.state.data.length });
        this.setState({ totalPages: Math.floor(this.state.data.length / this.state.pageSize) });

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
        var setPageSize = this.setPageSize.bind(this);
        var setPageNumber = this.setPageNumber.bind(this);
        return (
            <div>

                <div className={styles.gridColumn}>
                    <div className={styles.columnDivider}>

                        <h3>Search for Jobs</h3>
                        <Sorting 
                        orderBy={this.orderResultsBy}
                        sortBy={this.sortResultsBy}
                        sortingOptions={sortingFields} ></Sorting>
                    </div>
                    <div>
                        <SearchBar width={500} performSearchFromsubmit={this.performSearch} performSearch={this.performSearch} />
                        <FilterResults data={this.state.data} />
                    </div>
                </div>
                <PaginationFooter totalPages={this.state.totalPages} totalElements={this.state.totalElements} pageNumber={setPageNumber} pageSize={setPageSize} activePage={this.state.activePage} />

            </div>
        );
    }
}
export default FilterPage;