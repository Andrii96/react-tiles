import React, {useState} from 'react';
import Tile from './Tile';
import GridView from './GridView';

function useForceUpdate(){
    const[value,setValue] = useState(true);
    return ()=>setValue(!value);
}

function TilesGrid(props,ref){

    const forceUpdate = useForceUpdate();
    const _tiles = props.tiles.map(t => <Tile key={t.id} editTile={props.editTile}   deleteTile={props.onTileHide} onSizeChanged={forceUpdate} tile={t}/>);

    const packeryOptions = {
        percentPosition: true,
        itemSelector:'.packery-grid-item',
        columnWidth:'.grid-sizer',
        rowWidth:'.grid-sizer',
        gutter:'.gutter-sizer'
    }

    return (
        <div className='container-fluid'>
            <GridView   className='packery-grid' options={packeryOptions}>
                <div className = 'grid-sizer'></div>
                <div className = 'gutter-sizer'></div>
                {_tiles}
            </GridView>
        </div>
    );
}

export default TilesGrid;

