
import React from "react";
import { List, Datagrid, TextField } from 'react-admin';
const MajorList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="majorId" />
            <TextField source="majorName" />
            <TextField source="status" />
        </Datagrid>
    </List>
);

export default MajorList