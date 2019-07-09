import React from 'react';
import styles from './styles.module.scss'
import { job_data } from '../../api/filterPageAPIMock';
import { SearchBar } from '../../Components/SearchBar';
import { Sorting } from '../../Components/Sorting';
import { FilterResults } from '../../Components/FilterResults';
import { PaginationFooter } from '../../Components/PaginationFooter';
import { Filter } from '../../Components/Filter'
import _ from "lodash";


const filterFields = ["country", "job_type"]
const sortingFields = ["date", "title"];
/*
var predicate = function() {
    var args = _.toArray(arguments[checkboxes]);
    
    return function() {
      var equals = _.partial(_.isEqual, arguments[name]);
      
      return args.some(equals);
    }
  }
  */

class FilterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            og_data: [], data: [], displayData: [], filters: [], appliedFilters: [],
            activePage: 1,
            pageSize: 10,
            totalPages: 1,
            totalElements: 0,
            keyword: '',
            sortObj: []


        }
        this.getData = this.getData.bind(this);

        this.populateFilters = this.populateFilters.bind(this);
        this.applyFilters = this.applyFilters.bind(this);


        this.performSearch = this.performSearch.bind(this);
        this.performKeyWordSearch = this.performKeyWordSearch.bind(this);


        this.setPageSize = this.setPageSize.bind(this);
        this.setPageNumber = this.setPageNumber.bind(this);
        this.updatePagingAttributes = this.updatePagingAttributes.bind(this);


        this.sortResultsBy = this.sortResultsBy.bind(this);
    }

    //sort
    sortResultsBy(sortObj) {
        this.setState({ sortObj: sortObj });
        let data = []
        if (sortObj['property'] === 'date') {
            const Moment = require('moment')
            data = _.orderBy(this.state.data, (a) => {
                return new Moment(a.date).format('YYYYMMDD');
            }, sortObj['direction']);

        }
        else {
            data = _.orderBy(this.state.data, sortObj['property'], sortObj['direction']);
        }
        this.setState({ data: data });
        //start from first page
        this.setState({ activePage: 1 }, () => {
            this.populateDisplayData(data);

        });
    }

    /////search bar methods

    performSearch(value) {
        //do nothing ,this is value for event chaange after every press,we filter only when thet hit enter
        console.log(value);
    }
    performKeyWordSearch(value) {
        value = value.toLowerCase();
        this.setState({ keyword: value });
        //if value is empty use og data
        let data = this.state.og_data;
        if (value && value !== '') {
            //keyword search

            data = _.filter(this.state.og_data, function (item) {
                return item.title.toLowerCase().indexOf(value) > -1;
            });
        }
        //check if data after filter if used is >0
        if (data.length > 0) {
            this.setState({ data: data });
            this.setState({ activePage: 1 }, () => {
                this.populateDisplayData(data);
                this.sortResultsBy(this.state.sortObj);
                this.updatePagingAttributes();
                this.populateFilters();

            });
        }
        else
            alert("no matching result found!,please update searching crieteria");



    }

    //paging methods

    setPageSize(pageSize) {
        this.setState({ activePage: 1 });
        this.setState({ pageSize: pageSize }, () => {
            this.populateDisplayData(this.state.data);
        });

    }
    setPageNumber(pageNumber) {
        this.setState({ activePage: pageNumber }, () => {
            this.populateDisplayData(this.state.data);
        });
    }

    updatePagingAttributes() {
        this.setState({ totalElements: this.state.data.length });
        this.setState({ totalPages: Math.floor(this.state.data.length / this.state.pageSize) + 1 });

    }

    //filter checkbox methods

    applyFilters(filter) {
        const filterName = filter.name;
        const checkboxes = filter.checkboxes;
        let appliedFilters=this.state.appliedFilters;
        let data =this.state.og_data;
        const filterValues = [];
        if (filter && filterName && checkboxes) {
            Object.keys(checkboxes).forEach((key) => {
                if (checkboxes[key]) {
                    filterValues.push(key);
                }
            })
        }
        appliedFilters[filterName]=filterValues;
        Object.keys(appliedFilters).forEach((key) => {

            if ( appliedFilters[key].length > 0) {
                data = _.filter(data, function (item) {
                    return appliedFilters[key].includes(item[key]);
                });
            }
        })

            this.setState({ appliedFilters: appliedFilters });
            this.setState({ data: data });
            this.setState({ activePage: 1 }, () => {
                this.populateDisplayData(data);
                this.sortResultsBy(this.state.sortObj);
                this.updatePagingAttributes();
            });
        
    }

    //populate filter based on data dynamically
    populateFilters() {
        // console.log(_.uniqBy(this.state.data, 'country').length);
        let data = this.state.data;
        let filterToPopulate = [];
        filterFields.forEach(function (key) {

            let result = [...new Set(data.map(item => item[key]))];
            filterToPopulate.push({
                name: key,
                options: result
            });

        })
        this.setState({
            filters: filterToPopulate
        }, () => {
            this.updatePagingAttributes();
        });

    }


    getData() {
        //intial values for sorting
        let sortObj = [];
        sortObj['property'] = 'date';
        sortObj['direction'] = 'desc';

        this.setState({ data: job_data });
        this.setState({
            og_data: job_data
        }, () => {
            this.populateFilters();
            //do sorting
            this.sortResultsBy(sortObj);

        });
    }

    populateDisplayData(data) {

        let pageSize = Number(this.state.pageSize);
        let activePage = this.state.activePage;
        let startIndex = (activePage - 1) * pageSize;
        let endIndex = startIndex + pageSize;
        this.setState({ displayData: data.slice(startIndex, endIndex) });

    }

    componentWillMount() {

        //get inital data
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
                            sort={this.sortResultsBy}
                            sortingOptions={sortingFields} ></Sorting>
                        <Filter filters={this.state.filters} onFilterChange={this.applyFilters} />
                    </div>
                    <div>
                        <SearchBar width={500} performSearchFromsubmit={this.performKeyWordSearch} performSearch={this.performSearch} />
                        <FilterResults data={this.state.displayData} />
                    </div>
                </div>
                <PaginationFooter totalPages={this.state.totalPages} totalElements={this.state.totalElements} pageNumber={setPageNumber}
                    pageSize={setPageSize} activePage={this.state.activePage} />

            </div>
        );
    }
}
export default FilterPage;