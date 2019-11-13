import React, {useState,useEffect} from 'react';
import HiddenTile from './HiddenTile';
function SlideOutHeader(props){

    return (
        <div className="hidden-tiles-container">
            { props.hiddenTiles.map(tile=><HiddenTile onRemovedFromHidden={props.onRemovedFromHidden} tile={tile}/>) }
        </div>
    )

}

export default SlideOutHeader;