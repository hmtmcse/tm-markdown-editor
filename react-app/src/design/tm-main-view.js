import React, {Component} from 'react';
import RaWysiwygEditor from "../artifacts/ra-wysiwyg-editor";


export default class TMMainView extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="window">

                    <header className="toolbar toolbar-header">
                        <h1 className="title">Photon</h1>
                    </header>

                    <div className="window-content">
                        <div className="pane-group">
                            <div className="pane pane-sm sidebar">
                                <nav className="nav-group">
                                    <h5 className="nav-group-title">Favorites</h5>
                                    <span className="nav-group-item">
                <span className="icon icon-home"></span>
                connors
              </span>
                                    <span className="nav-group-item">
                <span className="icon icon-folder"></span>
                Documents
              </span>
                                    <span className="nav-group-item">
                <span className="icon icon-window"></span>
                Applications
              </span>
                                    <span className="nav-group-item">
                <span className="icon icon-signal"></span>
                AirDrop
              </span>
                                    <span className="nav-group-item">
                <span className="icon icon-monitor"></span>
                Desktop
              </span>
                                </nav>
                            </div>

                            <div className="pane">
                                <RaWysiwygEditor/>


                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
