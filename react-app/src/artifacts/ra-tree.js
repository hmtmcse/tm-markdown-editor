import React, {Component} from 'react';
import VanillaTree from '../lib/tree/vanillatree';
import '../lib/tree/image-css/vanillatree.css';

export default class RaTree extends Component {

    constructor(props) {
        super(props);
    }

    loadRaTree(reference){
        let tree = new VanillaTree(reference, {
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
        tree.add({
            label: 'Label A',
            id: 'a',
            opened: true
        });

        tree.add({
            label: 'Label B',
            id: 'b'
        });

        tree.add({
            label: 'Label A.A',
            parent: 'a',
            id: 'a.a',
            opened: true,
            selected: true
        });

        tree.add({
            label: 'Label A.A.A',
            parent: 'a.a',
            id: 'a.a.a',
        });

        tree.add({
            label: 'Label #A',
            parent: 'a.a.a',
            id: 'a.a.a.a',
        });
        tree.add({
            label: 'Label #A Label #A Label #A',
            parent: 'a.a.a.a',
            id: 'a.a.a.a.a',
        });


        tree.add({
            label: 'Label A.A.B',
            parent: 'a.a'
        });

        tree.add({
            label: 'Label B.A',
            parent: 'b'
        });
    }

    render() {
        return (<span ref={reference => {this.loadRaTree(reference)}}/>);

    }
}
