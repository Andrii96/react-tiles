import React, {useEffect,useState} from 'react';
import TilesGrid from './components/TilesGrid';
import SlideOut from './components/SlideOut';
import {saveTile as saveTileToDb, getApps}  from './api/api';
import {ToastContainer, toast} from 'react-toastify';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
function ClientPage (props){
    
    const[visibleTiles, setVisibleTiles] = useState([...props.apps]);
    const[hiddenTiles,setHiddenTiles]= useState([]);
    const[isSideOutOpen, setSideOutOpen]= useState(false);
    const[isSideOutForEdit, setSideOutForEdit]=useState(false);
    const[tileToEdit,setTileToEdit]=useState();
    function handleHiddenTilesClick(e){
            setSideOutOpen(true);
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
        setTileToEdit(visibleTiles.find(t=>t.id===id));
    }

    function slideOutClose(){
        setSideOutOpen(false);
        setSideOutForEdit(false);
    }

    function saveTile(tile){
        saveTileToDb(tile)
        .then(response=>{
            getApps().then(apps=>{
                slideOutClose();
                toast(`Application was successfully ${isSideOutForEdit?"edited":"added"} `, {type:"success"});
                setVisibleTiles(apps);
                setTileToEdit({});
            });
        })
    }

    return(
        <div className="client-page">
            <button onClick={handleHiddenTilesClick}> Hidden tiles</button>
            <div className="content-container" >
                <TilesGrid editTile = {editTile} onTileHide={onTileHide} tiles = {visibleTiles}/>
                <SlideOut saveTile={saveTile} onCloseSlideOut={slideOutClose} tile={tileToEdit} isSideOutForEdit={isSideOutForEdit} removeFromHidden={onRemovedFromHidden} hiddenTiles={hiddenTiles} isOpen={isSideOutOpen}></SlideOut>
                <ToastContainer  />
            </div>
           
           
        </div>  
    );
}

export default ClientPage;