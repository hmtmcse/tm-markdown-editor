import React, {Component} from 'react';
import RaTree from "../artifacts/ra-tree";
import RaEditor from "../artifacts/ra-editor";



export default class TMMainView extends Component {

    render() {
        // TMmeIOUtil.test();
        return (
            <React.Fragment>
                <div className="window">

                    <header className="toolbar toolbar-header">
                        <div className="toolbar-actions">
                            <button className="btn btn-default"><span className="icon icon-folder icon-text"></span>Open</button>
                        </div>
                    </header>

                    <div className="window-content">
                        <div className="pane-group">
                            <div className="pane pane-sm sidebar">
                                <RaTree/>
                            </div>

                            <div className="pane">
                                <RaEditor/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
