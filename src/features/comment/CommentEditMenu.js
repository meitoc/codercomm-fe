import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux';
import { deleteComment } from './commentSlice';

const ITEM_HEIGHT = 48;

export default function CommenEditMenu (props) {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const {postId,commentId} = props;
    return (
        <div>
        <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreVertIcon />
        </IconButton>
        <Menu
            id="long-menu"
            MenuListProps={{
            'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
            style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
            },
            }}
        >
            <MenuItem selected="delete" onClick={()=>{
                if(commentId!==undefined & postId!==undefined) dispatch(deleteComment({postId, commentId}));
            }} >
                Delete
            </MenuItem>
        </Menu>
        </div>
    );
}