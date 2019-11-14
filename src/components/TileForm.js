import React,{useState,useEffect} from 'react';

function TileForm(props){

    const[title,setTilte] = useState("");
    const[description,setDescription]=useState("");

    useEffect(()=>{
        if(props.isEditForm){
            setTilte(props.tile.title);
            setDescription(props.tile.description);
        }
    },[props.tile]);

    function onTitleChanged(e){
        setTilte(e.target.value);
    }

    function onDescriptionChanged(e){
        setDescription(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const tile = props.tile?{...props.tile}:{};
        tile.title = title;
        tile.description= description;
        props.saveTile(tile);
    }


    return (
        <div className="tile-form">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Title</label>
                    <input onChange={onTitleChanged} type="text" value={title}/>
                </div>
                <div className="form-control">
                    <label>Description</label>
                    <input onChange={onDescriptionChanged} type="text"  value={description}/>
                </div>
                <input className="btn btn-success right" type="submit" value={props.isEditForm ? "Edit":"Add"}/>
            </form>

        </div>
       
    )
}

export default TileForm;