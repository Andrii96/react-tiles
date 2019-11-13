import React,{useState,useEffect} from 'react';
import SlideOutHeader from './SlideOutHeader';
import TileForm from './TileForm';
import '../slideout.css';
function SlideOut(props){

    return (
        props.isOpen ?
        (
            <div className="slide-out">
                <SlideOutHeader onRemovedFromHidden = {props.removeFromHidden} hiddenTiles = {props.hiddenTiles}></SlideOutHeader>
                <hr></hr>
                 <TileForm tile={props.tile} isEditForm={props.isSideOutForEdit}/> 
            </div>
        ):
        (null)
        
    );

}
export default SlideOut;