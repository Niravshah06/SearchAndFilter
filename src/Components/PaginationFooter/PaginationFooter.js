import React from "react";
import Pagination from "react-js-pagination";
import styles from './styles.module.scss'


class PaginationFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageSize: 10 }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleChangePageSize = this.handleChangePageSize.bind(this);


  }
  handleChangePageSize(event) {
    const target = event.target;
    const value = target.value;
    this.setState({ pageSize: value });
    this.props.pageSize(value);
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.props.pageNumber(pageNumber);
  }
  render() {
    //  const pageRangeDisplayed=Math.floor(this.props.totalElements/this.state.pageSize)+1;
    //console.log(pageRangeDisplayed)
    return (

      <div className={styles.gridColumn}>
        <div  >
          <label>
            Pick your Result Size: </label>
          <select name="pageSize" value={this.state.pageSize} onChange={this.handleChangePageSize}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>
        <div>
          <Pagination innerClass={styles.UL} itemClass={styles.LI} activeLinkClass={styles.activeLI}
            activePage={this.props.activePage}
            itemsCountPerPage={this.state.pageSize}
            totalItemsCount={this.props.totalElements}
            pageRangeDisplayed={10}
            onChange={this.handlePageChange}
          />
          </div>
          <div>
            <label> <b>(Page {this.props.activePage} / {this.props.totalPages} ) </b></label>
          </div>
        
      </div>
    )
  }
}
export default PaginationFooter;