import React from 'react';
import styles from './styles.module.scss'

class FilterRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expaneded: false,
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState({
            expaneded: !this.state.expaneded
        })
    }

    render() {
        let job = this.props.data;
        let imgSource = '/images/Characters/' + job.title.charAt(0) + '.png';
        return (

            <div style={{
                marginTop: '10px', background: 'whitesmoke'
            }}>
                <div>
                    <img class={styles.imgClass} alt="logo" src={imgSource} />
                    <span>{job.title}  |  </span>
                    <span> {job.compnay_name}  |  </span>
                    <span>{job.date} |  </span>
                    <span>

                        <a role="button">
                            expand
              <i onClick={this.handleClick}
                                className={this.state.active ? "fa fa-chevron-up" : "fa fa-chevron-down"}
                                aria-hidden="true"></i>


                        </a>

                    </span>
                </div>
                <div>

                    <span>{job.city}, {job.country}</span>
                    <span>{job.job_type}</span>
                </div>
                {this.state.expaneded && <div><span><b>Job Desc :</b> </span>{job.job_desc} </div>}
            </div>


        )


    }
}
export default FilterRow;