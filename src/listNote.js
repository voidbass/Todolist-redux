import React from 'react';
import ItemNote from './itemNote';
import { connect } from 'react-redux';


class ListNote extends React.Component {
    render() {
        console.log("ListNote: ",this.props.listNote);
        let list = this.props.listNote.datas.filter((item, index) => {
            return item.name.toLowerCase().indexOf(this.props.listNote.search) !== -1;
        })
        let listdata = list.map((item, index) => {
            return  <ItemNote
                        key={index}
                        {...item}
                        index={index}
                    />
        })
        return (
            <div className="container">
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Updated Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listdata}
                    </tbody>
                </table>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listNote : state
    }
}

export default connect(mapStateToProps, null)(ListNote);
