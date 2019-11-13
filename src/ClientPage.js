import React, {useEffect,useState} from 'react';
import TilesGrid from './components/TilesGrid';
import SlideOut from './components/SlideOut';
import './styles.css';
function ClientPage (props){
    
    const[visibleTiles, setVisibleTiles] = useState([...props.apps]);
    const[hiddenTiles,setHiddenTiles]= useState([]);
    const[isSideOutOpen, setSideOutOpen]= useState(false);
    const[isSideOutForEdit, setSideOutForEdit]=useState(false);
    const[tileToEdit,setTileToEdit]=useState();
    function handleHiddenTilesClick(e){
            setSideOutOpen(!isSideOutOpen);
    }

    function onAddTileClickHandler(){
        
        const element = {
            id:visibleTiles.length + hiddenTiles.length+1,
            title:'Test title',
            description:'test description'
        };
        setVisibleTiles([...visibleTiles,element]);
    }

    function onTileHide(id){
        const _visibleTiles = [...visibleTiles];
        let index = _visibleTiles.findIndex(t=>t.id === id);
        setHiddenTiles([...hiddenTiles,_visibleTiles[index]]);
         _visibleTiles.splice(index,1);
        setVisibleTiles(_visibleTiles);
    }

    function onRemovedFromHidden(tile){
        const _hiddenTile = [...hiddenTiles];
        let index = _hiddenTile.findIndex(t=>t.id === tile.id);
        setVisibleTiles([...visibleTiles,_hiddenTile[index]]);
        _hiddenTile.splice(index,1);
        setHiddenTiles(_hiddenTile);
    }

    function editTile(id){
        setSideOutOpen(true);
        setSideOutForEdit(true);
        setTileToEdit(visibleTiles.find(t=>t.id===id)) ;
        
    }

    function sideOutClose(){
        setSideOutOpen(false);
        setSideOutForEdit(false);
       
    }
   

    return(
        <>
            <button onClick={handleHiddenTilesClick}> Hidden tiles</button>
            <div className="content-container" >
                <TilesGrid editTile = {editTile} onTileHide={onTileHide} tiles = {visibleTiles}/>
                <SlideOut tile={tileToEdit} isSideOutForEdit={isSideOutForEdit} removeFromHidden={onRemovedFromHidden} hiddenTiles={hiddenTiles} isOpen={isSideOutOpen}></SlideOut>
            </div>
            <button onClick={onAddTileClickHandler}>Add tile</button>
        </>  
    );
}

export default ClientPage;