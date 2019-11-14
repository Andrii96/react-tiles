import React, {useState,useEffect} from 'react';
import HiddenTile from './HiddenTile';
import {faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function SlideOutHeader(props){



    return (
        <div className="slideout-header">
           
            <FontAwesomeIcon onClick={ props.onCloseSlideout} className="slideout-close-button" size="2x"  icon={faLongArrowAltLeft}/>
            
            <div className="hidden-tiles-container">
                { props.hiddenTiles.map(tile=><HiddenTile onRemovedFromHidden={props.onRemovedFromHidden} tile={tile}/>) }
            </div>
        </div>
       
    )

}

export default SlideOutHeader;