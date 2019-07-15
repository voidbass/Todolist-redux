import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, saveEdit } from './actions'


class ItemNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.editNameRef = React.createRef();
        this.editContentRef = React.createRef();
    }
    handleEdit(){
        this.setState({
            show: false
        })
    }
    handleCancel(){
        this.setState({
            show: true
        })
        // this.editNameRef.current.value = this.props.name;
        // this.editContentRef.current.value = this.props.content;
    }
    handleSave(){
        this.setState({
            show: true
        })
        let d = new Date();
        let dateUpdate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes()
        this.props.handleSaveEdit(this.props.index, this.editNameRef.current.value, this.editContentRef.current.value, dateUpdate);
    }

    render() {
        let { index, date, name, content } = this.props;
        return (
            <>
                <tr>
                    <td>
                        { this.state.show ?
                            <button type="button" className="btn btn-outline-primary mr-2" onClick={this.handleEdit}> <i className="fas fa-pencil-alt"></i> </button>
                            : null}
                        { !this.state.show ?
                            <button type="button" className="btn btn-outline-success mr-2" onClick={this.handleSave}> <i className="far fa-save"></i> </button>
                            : null}
                        { !this.state.show ?
                            <button type="button" className="btn btn-outline-warning mr-2" onClick={this.handleCancel}> <i className="far fa-window-close"></i> </button>
                            : null}
                        <button type="button" className="btn btn-outline-danger" onClick={() => {this.props.handleDelete(index)}}> <i className="far fa-trash-alt"></i> </button>
                    </td>
                    <td>
                        { this.state.show ? <h6> {name} </h6> : null }
                        { !this.state.show ?
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={name}
                                ref={this.editNameRef}
                            />
                            : null
                        }
                    </td>
                    <td>
                    { this.state.show ? <h6> {content} </h6> : null }
                        { !this.state.show ?
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={content}
                                ref={this.editContentRef}
                            />
                            : null
                        }
                    </td>
                    <td>
                        <h6> {date} </h6>
                    </td>
                </tr>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleDelete: index => dispatch(deleteItem(index)),
        handleSaveEdit: (index, name, content, date) => dispatch(saveEdit(index, name, content, date))
    }
}

export default connect(null, mapDispatchToProps) (ItemNote);
