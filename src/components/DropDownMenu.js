import React,{useState,useEffect, Component} from 'react';
import '.././styles.css';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

class CustomBtnToggle extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            <div className='drop-down-item'>
                <a >
                    {this.props.title}
                 </a>
                 <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
            </div>
           
        )
    }
}

function DropDownMenu(props){

  
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [firstDropdownOpen, setFirstDropdownOpen] = useState(false);
    const [secondDropdownOpen, setSecondDropdownOpen] = useState(false);
    
    function toggle(){
        let trigger = dropdownOpen;
        setDropdownOpen(!trigger);
    }

    function onFirstDropDownMouseOver(){
        setFirstDropdownOpen(true);
    }

    function onFirstDropDownMouseLeave(){
        setFirstDropdownOpen(false);
    }

    function onSecondDropDownMouseOver(){
        setSecondDropdownOpen(true);
    }

    function onSecondDropDownMouseLeave(){
        setSecondDropdownOpen(false);
    }

    function setDropdownState(){
        toggle();
        setSecondDropdownOpen(false);
        setFirstDropdownOpen(false);
    }

    function onWidthItemSelected(e){
        let value = e.currentTarget.getAttribute("value");
        setDropdownState();
        props.onWidthChanged(value);
    }

    function onHeightItemSelected(e){
        let value = e.currentTarget.getAttribute("value");
        setDropdownState();
        props.onHeightChanged(value);
    }

    function onTileDeleted(e){
        props.onTileDeleted();
    }

    function onEditTile(e){
        props.onEditTile();
    }


    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle 
                tag="span"
                onClick={toggle}
                data-toggle='dropdown'
                aria-expanded={dropdownOpen}>
                <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
            </DropdownToggle>
            <DropdownMenu>
                
                    <Dropdown direction="right" isOpen={firstDropdownOpen} onMouseOver={onFirstDropDownMouseOver} onMouseLeave={onFirstDropDownMouseLeave} toggle={setDropdownState}>

                        <DropdownToggle
                            tag="div"
                            data-toggle='dropdown'
                            aria-expanded={firstDropdownOpen}>
                                <CustomBtnToggle title="Adjust width"/>
                        </DropdownToggle>

                        <DropdownMenu  right='true'>
                            <DropdownItem onClick={onWidthItemSelected} value="1"> 1 column </DropdownItem>
                            <DropdownItem onClick={onWidthItemSelected} value="2"> 2 column </DropdownItem>
                            <DropdownItem onClick={onWidthItemSelected} value="3"> 3 column </DropdownItem>
                        </DropdownMenu>

                    </Dropdown>
                    

                 <div>
                     <Dropdown  direction="right" isOpen={secondDropdownOpen} onMouseOver={onSecondDropDownMouseOver} onMouseLeave={onSecondDropDownMouseLeave} toggle={setDropdownState}>

                     <DropdownToggle
                            tag="div"
                            data-toggle='dropdown'
                            aria-expanded={secondDropdownOpen}>
                                <CustomBtnToggle title="Adjust height"/>
                        </DropdownToggle>

                        <DropdownMenu>
                            <DropdownItem onClick={onHeightItemSelected} value="1"> 1 column </DropdownItem>
                            <DropdownItem onClick={onHeightItemSelected} value="2"> 2 column </DropdownItem>
                            <DropdownItem onClick={onHeightItemSelected} value="3"> 3 column </DropdownItem>
                        </DropdownMenu>

                     </Dropdown>
                   
                </div>  
                <DropdownItem divider='true'/>
                 <DropdownItem onClick={onTileDeleted}> Hide tile</DropdownItem> 
                 <DropdownItem onClick={onEditTile}> Edit tile</DropdownItem> 
                
            </DropdownMenu>
           
                 
        </Dropdown>
    );
}

export default DropDownMenu;