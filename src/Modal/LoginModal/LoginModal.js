import React, { Component } from 'react';
import Modal from 'react-modal';
import styles from './styles.module.scss'

Modal.setAppElement('#root')
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
        this.handleValidation = this.handleValidation.bind(this);

    }

    componentWillUnmount() {
        this.clearData();
    }

    clearData() {
        this.setState(this.baseState)
    }


    handleSubmit(event) {
        event.preventDefault();
        let data = this.state;
        this.props.callback(data);
    }
    handleValidation() {
        //make sure all the properties are non empty
        let valid = (this.state.name !== '' && this.state.password !== '')
        return valid;
    }


    closeModal() {
        this.props.onClose();
    }


    handleChange(event) {
        let value = event.target.value;
        let name=event.target.name;
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
                    
                    <div className={styles.inputControls}>
                    
                    <span>Name</span>
                    <input type="text" title="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                    
                    <span>Password</span>
                    <input type="text" title="password" name="password" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className={styles.formControls}></div>
                    <button name='submit' type="submit"
                     inactive={!this.handleValidation()} 
                     onClick={this.handleSubmit} >submit</button>

                    <button className={styles.marginLeft50}
                         onClick={this.clearData}>
                    Reset</button>
                    

                </Modal>

            </div>
        );
    }
}
export default LoginModal;