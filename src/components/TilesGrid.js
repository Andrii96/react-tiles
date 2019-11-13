import React, {useState,useEffect,useImperativeHandle, useRef, forwardRef} from 'react';
import Packery from 'packery';
import Draggabilly from 'draggabilly';
import PropTypes from 'prop-types';
import Tile from './Tile';

function TilesGrid(props,ref){

    const[packery,setPackery] = useState();

    useEffect(()=>{
        initPackery();
    },[]);

    useEffect(()=>{
        debugger;
        if(packery === undefined) return;
        
        var packeryItems = document.querySelectorAll('.packery-grid-item');
        packeryItems.forEach(pi=> makeItemDraggable(pi,packery));
        updatePackery();
    },[props.tiles])

    const initPackery= ()=>{
        console.log('Initializing packery..');
        const packeryOptions = {
            percentPosition: true,
            itemSelector:'.packery-grid-item',
            columnWidth:'.grid-sizer',
            rowWidth:'.grid-sizer',
            gutter:'.gutter-sizer'
        }
         const _packery = new Packery('.packery-grid',packeryOptions);
         var packeryItems = document.querySelectorAll('.packery-grid-item');
         packeryItems.forEach(pi=> makeItemDraggable(pi,_packery));
         setPackery(_packery);
     }

    //  function addTile(tile){
    //      setTiles([...tiles,tile]);
    //      const tileElement = <Tile tile={tile}/>
    //      packery.appended(tileElement);
    //      makeItemDraggable(tileElement,packery);
    //  }

    function makeItemDraggable(item,packery){
        item.draggable = true;
        let draggie = new Draggabilly(item);
        packery.bindDraggabillyEvents(draggie);
    }

    function updatePackery(){
        if(packery !== undefined){
            packery.reloadItems();
            packery.layout();
        }
    }

    const _tiles = props.tiles ? props.tiles.map(t => <Tile deleteTile={props.onTileHide} onSizeChanged={updatePackery} tile={t}/>) :[];
    
    return (

        <div  className='container-fluid'>
             <div  className='packery-grid'>
                <div className = 'grid-sizer'></div>
                <div className = 'gutter-sizer'></div>
                {_tiles}
            </div>
           
        </div>
        
    );

}
TilesGrid = forwardRef(TilesGrid);
export default TilesGrid;

