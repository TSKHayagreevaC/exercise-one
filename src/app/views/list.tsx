import DataGridDemo from "../components/datagrid-demo";
import React, {FC} from "react";
import NxWelcome from "../nx-welcome";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { add } from "../store/listReducer";
import { useNavigate } from "react-router-dom";


interface ListProps {
    title?: String
    name?: String
}

const List: FC<ListProps> = ({title, name}) => {
    const listState = useSelector(state => state);
    console.log("listState :: ", listState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <React.Fragment>
        <NxWelcome title={title} />
        <Button component="a" onClick={() => navigate(`/${name}/new`)} variant='contained' sx={{mb:1}}>Add New</Button>
        <DataGridDemo title={name} data={listState} />
    </React.Fragment>
}

export default List;