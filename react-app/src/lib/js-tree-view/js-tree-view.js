
// import mJ from './balalaika.min'
import './js-tree-view.css';

export default class JsTreeView {

    mJ = function(p,e,l,h,q,n,k,b,f,g,d,c){c=function(a,b){return new c.i(a,b)};c.i=function(a,m){l.push.apply(this,a?a.nodeType||a==p?[a]:""+a===a?/</.test(a)?((b=e.createElement(m||"q")).innerHTML=a,b.children):(m&&c(m)[0]||e).querySelectorAll(a):/f/.test(typeof a)?/c/.test(e.readyState)?a():c(e).on("DOMContentLoaded",a):a:l)};c.i[d="prototype"]=(c.extend=function(a){g=arguments;for(b=1;b<g.length;b++)if(d=g[b])for(f in d)a[f]=d[f];return a})(c.fn=c[d]=l,{on:function(a,c){a=a.split(h);this.map(function(d){(h[b=a[0]+(d.b$=d.b$||++q)]=h[b]||[]).push([c,a[1]]);d["add"+n](a[0],c)});return this},off:function(a,c){a=a.split(h);d="remove"+n;this.map(function(e){if(b=(g=h[a[0]+e.b$])&&g.length)for(;f=g[--b];)c&&c!=f[0]||a[1]&&a[1]!=f[1]||(e[d](a[0],f[0]),g.splice(b,1));else!a[1]&&e[d](a[0],c)});return this},is:function(a){b=this[0];return(b.matches||b["webkit"+k]||b["moz"+k]||b["ms"+k]||b["o"+k]).call(b,a)}});return c}(window,document,[],/\.(.+)/,0,"EventListener","MatchesSelector");

    createElement(tagName, attributes){
        return this.mJ.extend(document.createElement( tagName ), attributes);
    }

    _selectFirstElement(element){
        element = this.mJ(element);
        if (element && element.length){
            return element[0];
        }
        throw "No Element Found."
    }
    

    constructor(element, settings){
        let container = this._selectFirstElement(element);
        this.jsTreeView = container.appendChild(this.createElement('ul', {className: 'jtview'}));
        console.log(this.jsTreeView);
    }

    add(){}

    remove(){}

    select(nodeId){

    }

    toggle(nodeId){

    }

    clean(){}


    defaultSettings(settings){
        let defaults ={
            enableContextMenu: true,
            contextMenu: [
                {
                    label: "Label",
                    name: "Name",
                    action: (elementId) =>{
                        console.log("Bismillah " + elementId)
                    }
                }
            ]
        }
    }
}
