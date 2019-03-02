import React, {Component} from 'react';
import PropTypes from "prop-types";
import VanillaTree from '../lib/tree/vanillatree';
import '../lib/tree/image-css/vanillatree.css';

export default class RaTree extends Component {

    constructor(props) {
        super(props);
        this.tree = undefined;
        this.raTreeHolder = React.createRef();
    }

    populateRaTree(directoryList, parent = ''){
        let component = this;
        if (component.tree && directoryList){
            directoryList.map(function (fileOrDir, key) {
                console.log(fileOrDir);
                console.log(component.tree);
                component.tree.add({
                    label: fileOrDir.name,
                    parent: parent,
                    id: fileOrDir.path,
                    // opened: true,
                    // selected: true
                });
                if (fileOrDir.isDirectory && fileOrDir.subDirectories){
                    component.populateRaTree(fileOrDir.subDirectories, fileOrDir.path)
                }
            })
        }
    }

    componentDidMount() {
        this.loadRaTree(this.raTreeHolder.current);
    }

    loadRaTree(reference){
        if (this.tree === undefined){
            this.tree = new VanillaTree(reference, {
                contextmenu: [{
                    label: 'Hey',
                    action: function (id) {
                        alert('Hey ' + id);
                    }
                }, {
                    label: 'Blah',
                    action: function (id) {
                        alert('Blah ' + id);
                    }
                }]
            });
        }
    }

    render() {
        const {directoryList} = this.props;
        this.populateRaTree(directoryList);
        return (<span ref={this.raTreeHolder}/>);

    }
}

RaTree.propTypes = {
    directoryList: PropTypes.array
};

RaTree.defaultProps = {
    directoryList: []
};
