import React from 'react';
import { connect } from 'react-redux';
import { searchItem, addItem } from './actions';

class FormNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTitle: true,
            showContent: true
        }
        this.searchRef = React.createRef();
        this.dataTitleRef = React.createRef();
        this.dataContentRef = React.createRef();
        this.handleNew = this.handleNew.bind(this);
    }

    handleNew(){
        let content = this.dataContentRef.current.value.trimLeft();
        let title = this.dataTitleRef.current.value.trimLeft();
        if( title.length && content.length ){
            this.setState({
                showTitle: true,
                showContent: true
            })
            let d = new Date();
            let date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes()
            this.props.handleNewItem(title, content, date);
        }
        else{
            this.setState({
                showTitle: false,
                showContent: false
            })
            if( title.length){
                this.setState({
                    showTitle: true
                })
            }
            if(content.length){
                this.setState({
                    showContent: true
                })
            }
        }
    }
    render() {
        return (
            <div className="input-group mb-3 container">
                <div className="input-group-prepend">
                    <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModal"> <i className="fas fa-plus"></i> </button>

                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title"> <i className="far fa-file-alt"></i> New Note </h4>
                                    <button type="button" className="close text-danger" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                        { !this.state.showTitle ? <button type="button" className="btn btn-primary btn-block text-left" disabled > Title is required </button> : null }
                                        { !this.state.showContent ? <button type="button" className="btn btn-secondary btn-block text-left" disabled > Content is required </button> : null }
                                    <div className="form-group">
                                        <label htmlFor="title">Title:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            ref={this.dataTitleRef}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Content:</label>
                                        <textarea
                                            className="form-control"
                                            name="subject"
                                            placeholder="Write something.."
                                            ref={this.dataContentRef}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tags">Tags:</label>
                                        <input type="text" className="form-control" id="tags" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" onClick={ this.handleNew } > <i className="far fa-save"></i> Save</button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal"> <i className="far fa-window-close"></i> Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <input type="text" className="form-control" ref={this.searchRef} />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.props.handleSearch(this.searchRef.current.value.trimLeft().toLowerCase())}
                    >
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearch: (search) => dispatch(searchItem(search)),
        handleNewItem: (name, content, date) => dispatch(addItem(name, content, date))
    }
}

export default connect(null, mapDispatchToProps)(FormNote);
