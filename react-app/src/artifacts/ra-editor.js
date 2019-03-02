import React, {Component} from 'react';
import SimpleMDE from '../tm-markdown/simplemde';
import '../tm-markdown/simplemde.css';

export default class RaEditor extends Component {

    constructor(props) {
        super(props);
        this.raEditorTextArea = React.createRef();
    }


    render() {
        return(<div style={{height:"500px", width: "100%"}}>
            <textarea ref={element => {
                new SimpleMDE({
                    element:element,
                    spellChecker: false,
                })
            }}></textarea></div>
        );

    }
}
