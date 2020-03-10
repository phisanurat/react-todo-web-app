import React, {Component} from 'react'
import {getList, addToList, deleteItem, updateItem} from './ListFunctions'
import './styles.css'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            term: '',
            editDisabled: false,
            items: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.getAll()
    }

    onChange = e => {
        this.setState({
            term: e.target.value,
            editDisabled: 'disabled'
        })
    };

    getAll = () => {
        getList().then(data => {
            this.setState({
                    term: '',
                    items: [...data]
                },
                () => {
                    console.log(this.state.term)
                })
        })
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({editDisabled: ''});
        addToList(this.state.term).then(() => {
            this.getAll()
        })
    };

    onUpdate = e => {
        e.preventDefault()
        updateItem(this.state.term, this.state.id).then(() => {
            this.getAll()
        })
    };

    onEdit = (item, itemid, e) => {
        e.preventDefault();
        this.setState({
            id: itemid,
            term: item
        });
        console.log(itemid)
    };

    onDelete = (val, e) => {
        e.preventDefault();
        deleteItem(val);

        let data = [...this.state.items];
        data.filter((item, index) => {
            if (item[1] === val) {
                data.splice(index, 1)
            }
            return true
        });
        this.setState({items: [...data]})
    };

    render() {
        return (
            <div className="col-md-12">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div className={"font-2"}>
                            <label htmlFor="input1 ">M e m o r i e s</label>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="input1"
                                    value={this.state.term || ''}
                                    onChange={this.onChange.bind(this)}
                                />
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-primary font-btn"
                                        onClick={this.onUpdate.bind(this)}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-success btn-block font-btn"
                            type="submit"
                            onClick={this.onSubmit.bind(this)}>
                        Submit
                    </button>
                </form>
                {/*<br/>*/}
                {/*<br/>*/}
                <br/>
                <table className="table col-md-12">
                    <thead className={"shadow-sm p-3 mb-5 bg-white rounded "}>
                    <tr className={"bg-dark text-white font-btn"}>
                        <th scope="col" className={"text-center"}>Topic</th>
                        {/*<th scope="col" className={"text-center"}></th>*/}
                        <th scope="col" className={"text-center"}>Tools</th>
                    </tr>
                    </thead>
                    <br/>
                    <tbody>
                    {this.state.items.map((item, index) => (
                        <tr key={index}>
                            <td className="text-left font-sub">{item[0]}</td>
                            <td className="text-right">
                                <button className="btn btn-info mr-1 font-btn"
                                        disabled={this.state.editDisabled}
                                        onClick={this.onEdit.bind(this, item[0], item[1])}>
                                    Edit
                                </button>
                                <button className="btn btn-danger font-btn"
                                        disabled={this.state.editDisabled}
                                        onClick={this.onDelete.bind(this, item[1])}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List


