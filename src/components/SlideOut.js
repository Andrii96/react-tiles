import React,{useState,useEffect} from 'react';
import SlideOutHeader from './SlideOutHeader';
import '../slideout.css';
function SlideOut(props){

    return (
        props.isOpen ?
        (
            <div className="slide-out">
                <SlideOutHeader onRemovedFromHidden = {props.removeFromHidden} hiddenTiles = {props.hiddenTiles}></SlideOutHeader>
            </div>
        ):
        (null)
        
    );

}
export default SlideOut;