import React from 'react';

function TileForm(props){

    return (
        <div className="tile-form">
            <form>
                <div className="form-control">
                    <label>Title</label>
                    <input type="text" value={props.isEditForm ? props.tile.title:""}/>
                </div>
                <div className="form-control">
                    <label>Description</label>
                    <input type="text"  value={props.isEditForm ? props.tile.description:""}/>
                </div>
                <input className="btn btn-success right" type="submit" value={props.isEditForm ? "Edit":"Add"}/>
            </form>

        </div>
       
    )
}

export default TileForm;