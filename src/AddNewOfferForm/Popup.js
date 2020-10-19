import { DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react';
import Dialog from "@material-ui/core/Dialog"

export default function Popup(props){

const {title, children, openPopup, setOpenPopup} = props;
return (
    <Dialog open={openPopup}>
        <DialogTitle>
                <div>title goes</div>
        </DialogTitle>
        <DialogContent dividers>
            
        {children}
        </DialogContent>
    </Dialog>
)
}