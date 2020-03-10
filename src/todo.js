import React, {Component} from 'react';
import List from "./List";
import './styles.css'
class Todo extends Component {
    render() {
        return (
            <div className={""}>
                <div className="pos-f-t">
                    <div className="collapse " id="navbarToggleExternalContent">
                        <div className="bg-dark p-4">
                            <h5 className="text-white h4 font-2">M e m o r i e s.</h5>
                            <span className="text-muted font-2">R e m e m b e r  m e.</span>
                        </div>
                    </div>
                    <nav className="navbar navbar-dark bg-dark">
                        <button className="navbar-toggler font-btn" type="button" data-toggle="collapse"
                                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            {/*<span className="navbar-toggler-icon"> </span>*/}
                            {' '}Hello UnderWorld :)
                        </button>
                    </nav>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <br/>
                            {/*<br/>*/}
                            <h2 className="text-center shadow p-3 mb-5 bg-white rounded font-2">😛 M e m o r i e s.</h2>
                            <List/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;
