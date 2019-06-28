import React from 'react';
import styles from './styles.module.scss'




class Sorting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortProperty: 'date',sortDirection:'desc'
        }
    }

    onPropertyClick(value) {
        let sortObj=[];
        this.setState({ sortProperty: value });
        sortObj['property']=value;
        sortObj['direction']=this.state.sortDirection;
       this.props.sort(sortObj);

    }

    onDirectionClick(value) {
        let sortObj=[];
        this.setState({ sortDirection: value });
        sortObj['property']=this.state.sortProperty;
        sortObj['direction']=value;
       this.props.sort(sortObj);
    }



    render() {
        let sortProperty = this.state.sortProperty;
        let sortDirection = this.state.sortDirection;

        return (
            <div id="sortingDiv">
            <div id="sortingOptions">
            <span>Sort By :</span>
                {this.props.sortingOptions.map((option,index) => {
                    return (<span key={index} onClick={() => this.onPropertyClick(option)} 
                        className={sortProperty === option ?
                            styles.anchorClassActive : styles.anchorClass}>{option}</span>)
                })
                }
            </div>
            <div id="orderingOption">
            <span>Sort Direction :</span>
            <span onClick={() => this.onDirectionClick("desc")} 
                        className={sortDirection === "desc" ?
                            styles.anchorClassActive : styles.anchorClass}>desc</span>
           
           <span onClick={() => this.onDirectionClick("asc")} 
                        className={sortDirection === "asc" ?
                            styles.anchorClassActive : styles.anchorClass}>asc</span>
           
           
            </div>
            </div>
        );
    }
}
export default Sorting;