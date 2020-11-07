import React from 'react';
import { Button, Intent, Callout } from "@blueprintjs/core";
import Layout from '../../components/layout';
import {
    Card,
    H2,
    Divider,
    UL,
    Checkbox,
    Label,
    InputGroup,
    
} from "@blueprintjs/core";
import './style.css';

function CrudPage(props) {
    const {
        items,
        onNewItem,
        onRemoveItem,
        newItemText,
        onChangeNewItemText,
        onExitEditMode,
        onEnterEditMode,
        onToggleItemComplete,
    } = props;

    return (
            <Layout>
               <Card>
                    <H2>Crud</H2>
    
                    <Button 
                        text="Añadir tarea"
                        intent={Intent.PRIMARY}
                        icon="new-object"
                        className="new-crud-item"
                        onClick={onNewItem}
                    />

                    

                    <Divider />

                    <UL className="crud-list">
                        {items.map(item =>  
                            <li 
                            className="crud-item"
                            key={item.id}>
                                <Button
                                small
                                icon="remove"
                                intent="danger"
                                className="crud-item-action"
                                onClick={() => onRemoveItem(item)}
                                />

                                {item.isEditing ?
                                    <InputGroup
                                        small
                                        className="crud-item-text-edit"
                                        placeholder="Introduce una tarea"
                                        value={newItemText}
                                        onChange={onChangeNewItemText}
                                        onBlur={() => onExitEditMode(item)}
                                        inputRef={ref => ref && ref.focus()}
                                    />
                                    :
                                    <React.Fragment>
                                        <Checkbox 
                                        className="crud-item-label"
                                        checked={item.isChecked}
                                        onChange={() => onToggleItemComplete(item)}
                                        />

                                        <Label 
                                            className={`crud-item-label $(item.isChecked ? 'done' : ''}`} 
                                            onClick={()=> onEnterEditMode(item)} >
                                            {item.text}
                                        </Label>
                                    </React.Fragment>
                                }
                            </li>
                        )}
                    </UL>
                </Card> 
            </Layout>
    );
}

export default CrudPage;