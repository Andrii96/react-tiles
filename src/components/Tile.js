import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from './DropDownMenu';
import '../styles.css';
function Tile(props){

    const[width, setTileWidth] = useState(1);
    const[height, setTileHeight] = useState(1);

    useEffect(()=>{
        props.onSizeChanged();
    },[width,height])

    function onWidthChanged(_width){
        setTileWidth(_width);
        
    }

    function onHeightChanged(_height){
        setTileHeight(_height);
    }

    function onTileDeleted(){
        props.deleteTile(props.tile.id);
    }

    let tileClass = `packery-grid-item width-${width} height-${height}`;
    console.log(tileClass);

    return (
        <div className={tileClass} key = {props.tile.id}>
             <div  className="card ec-card" >
                <div className = "card-header">
                    {props.tile.title}
                    <DropDownMenu onTileDeleted={onTileDeleted} onWidthChanged={onWidthChanged} onHeightChanged={onHeightChanged}/>
                </div>
                <div className="card-body">
                    {props.tile.description}
                </div>
            </div>
        </div>
    )
}
Tile.propTypes = {
    tile:PropTypes.object.isRequired
};
export default Tile;