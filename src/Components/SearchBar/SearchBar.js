import React, { Component } from 'react';
import styles from './styles.module.scss'

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.callSearch = this.callSearch.bind(this);

        this.typingTimeout = null;


    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.performSearchFromsubmit(this.state.value);
    }





    handleChange(event) {
        clearTimeout(this.typingTimeout);

        // Reset the timer, to make the http call after 475MS (this.callSearch is a method which will call the search API. Don't forget to bind it in constructor.)
        this.typingTimeout = setTimeout(this.callSearch, 475);

        // Setting value of the search box to a state.
        this.setState({ [event.target.name]: event.target.value });



    }
    callSearch() {
        this.props.performSearch(this.state.value);
    }



    render() {


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="value"
                        placeholder="Search..."
                        style={{ width: this.props.width ? this.props.width : 200 }}
                        type="text" className={styles.inputforSearch}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
                <div>
                </div>
            </div>

        );
    }
}
export default SearchBar;