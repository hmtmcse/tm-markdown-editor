import React, {Component} from 'react';
import RaTree from "../artifacts/ra-tree";
import RaEditor from "../artifacts/ra-editor";
const { dialog } = window.require('electron').remote;
const ipcRenderer = window.require('electron').ipcRenderer;



export default class TMMainView extends Component {

    openProject(event){
       let path = dialog.showOpenDialog(
           { properties: ['openDirectory']},
                function (filePaths) {
                   let response = ipcRenderer.sendSync('listDirectory', filePaths[0]);
                   console.log(response);
                }
           )
    }

    render() {
        // TMmeIOUtil.test();
        return (
            <React.Fragment>
                <div className="window">

                    <header className="toolbar toolbar-header">
                        <div className="toolbar-actions">
                            <button className="btn btn-default" onClick={event => {this.openProject(event)}}><span className="icon icon-folder icon-text"></span>Open</button>
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
