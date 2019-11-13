import React, { Component} from 'react';
import Packery from 'packery';
import Draggabilly from 'draggabilly';
import PropTypes from 'prop-types';

class GridView extends Component{

    constructor(props){
        super(props);
        this.domRef = React.createRef();
        this.packery=false;
        this.domChildren = [];
        this.initializePackery = this.initializePackery.bind(this);
    }

    initializePackery(){
        if(!this.packery){
            this.packery = new Packery(this.domRef.current,this.props.options);
        }
        this.domChildren = this.getChildren();
    }

    makeChildNodesDraggable(){
            this.domChildren.forEach((gridItem)=>{
                this.makeNodeDraggable(gridItem);
            });
    }

    makeNodeDraggable(node){
        let draggie = new Draggabilly(node);
        this.packery.bindDraggabillyEvents(draggie);
    }

    getChildren(){
        let node = this.domRef.current;
        let children = this.props.options.itemSelector ? node.querySelectorAll(this.props.options.itemSelector):node.children;
        return Array.prototype.slice.call(children);
    }

    getDifferences(){
        //debugger;

        let oldNodes = this.domChildren.filter(node=>node.parentNode !== null);

        let currentChildNodes = this.getChildren();

        let addedNodes = currentChildNodes.filter(node => !~oldNodes.indexOf(node));

        let removedNodes = this.domChildren.filter(node=>node.parentNode === null);

        this.domChildren = currentChildNodes;

        return {
            addedNodes:addedNodes,
            removedNodes:removedNodes
        };
        
    }

    updateLayout(){
        let differences = this.getDifferences();

        if(differences.removedNodes.length > 0){
            this.packery.remove(differences.removedNodes);
            this.packery.reloadItems();
        }
        if(differences.addedNodes.length > 0){
            differences.addedNodes.forEach(node=>this.makeNodeDraggable(node));
            this.packery.appended(differences.addedNodes);
            this.packery.reloadItems();
        }
        this.packery.layout();
    }

    

    componentDidMount(){
        //debugger;
        this.initializePackery();
        this.makeChildNodesDraggable()
    }

    componentDidUpdate() {
        this.updateLayout();
    }

    componentWillReceiveProps() {
        this._timer = setTimeout(function() {
            this.packery.reloadItems();
            this.isMounted && this.isMounted() && this.forceUpdate();
        }.bind(this), 0);
    }

    render(){
        return  React.createElement(this.props.elementType,{
            className:this.props.className,
            ref:this.domRef
        },this.props.children);
    }

}
GridView.propsTypes = {
    className:PropTypes.string.isRequired,
    elementType:PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    children: PropTypes.array
}

GridView.defaultProps = {
    className:'',
    elementType:'div',
    options:{},
    children:[]
}
export default GridView;