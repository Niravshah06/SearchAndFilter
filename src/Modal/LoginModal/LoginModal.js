import React, { Component } from 'react';
import Modal from 'react-modal';
import styles from './styles.module.scss'

class LoginModal extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', password: '' }
        // preserve the initial state in a new object
        this.baseState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.clearData = this.clearData.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentWillUnmount() {
        this.clearData();
    }

    clearData() {
        this.setState(this.baseState)
    }
    componentDidMount() {
        Modal.setAppElement('body');
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = this.state;
        this.props.callback(data);
    }



    closeModal() {
        this.props.onClose();
    }


    handleChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }



    render() {


        return (
            <div id="modalContainer">
                <Modal
                    isOpen
                    onRequestClose={this.closeModal}
                    contentLabel="Modal"
                    overlayClassName={styles.overlay}
                    className={styles.content}>


                    <div className={styles.modalTitle}>Login</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className={styles.inputControls}>

                            <span>Name</span>
                            <input required type="text" title="Name" name="name" value={this.state.name} onChange={this.handleChange} />

                            <span>Password</span>
                            <input required type="text" title="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className={styles.formControls}></div>


                        <button type="submit" value="Submit">Submit</button>


                        <button className={styles.marginLeft50}
                            onClick={this.clearData}>
                            Reset</button>
                    </form>

                </Modal>

            </div>
        );
    }
}
export default LoginModal;