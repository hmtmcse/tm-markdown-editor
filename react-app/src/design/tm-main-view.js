import React, {Component} from 'react';
import RaTree from "../artifacts/ra-tree";
import RaEditor from "../artifacts/ra-editor";
const { dialog } = window.require('electron').remote;
const ipcRenderer = window.require('electron').ipcRenderer;
import '../artifacts/loader.css';
import RaLoader from "../artifacts/ra-loader";
import JsTreeView from "../lib/js-tree-view/js-tree-view";



export default class TMMainView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            directoryList: [],
        };
    }

    openProject(event) {
        let component = this;
        dialog.showOpenDialog(
            {properties: ['openDirectory']},
            function (filePaths) {
                if (filePaths !== undefined && filePaths.length) {
                    let response = ipcRenderer.sendSync('listDirectory', filePaths[0]);
                    if (response){
                        component.setState({directoryList:response});
                    }
                }
            }
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="window">
                    <RaLoader/>
                    <span ref={element =>{
                        new JsTreeView(element);
                    }}/>
                    <header className="toolbar toolbar-header">
                        <div className="toolbar-actions">
                            <button className="btn btn-default" onClick={event => {this.openProject(event)}}><span className="icon icon-folder icon-text"></span>Open</button>
                        </div>

                    </header>

                    <div className="window-content">
                        <div className="pane-group">
                            <div className="pane pane-sm sidebar">
                                <RaTree directoryList={this.state.directoryList}/>
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
