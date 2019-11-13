import React from 'react';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../slideout.css';
function HiddenTile(props){

    function onClickHandle(e){
        props.onRemovedFromHidden(props.tile);
    }

    return(
        <div className="hidden-tile">
            <div className="hidden-tile-title">
                <div> {props.tile.title}</div>
            </div>

            <div onClick={onClickHandle} class='show-button'>
                <a >
                    <FontAwesomeIcon icon={faPlus}> </FontAwesomeIcon>
                </a>
                <div> Add app </div>
            </div>
            
        </div>
    )

}

export default HiddenTile;