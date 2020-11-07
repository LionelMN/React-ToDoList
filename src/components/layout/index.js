import React from 'react';
import {
    Alignment,
    Classes,
    Navbar,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";
import './style.css';

function crud(props){
    return (
        <React.Fragment>
            <Navbar className={Classes.DARK}>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>
                        Crud
                    </NavbarHeading>
                </NavbarGroup>
            </Navbar>

            <div className='page'>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default crud;