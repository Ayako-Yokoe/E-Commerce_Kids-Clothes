import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styled from 'styled-components';


const Container = styled.div``

const AdminClosableDrawer = (props) => {
    const navigate = useNavigate()

    const selectMenu = (event, path) => {
        navigate(path)
        props.onClose(event, false)
    }

    const menus = [
        {func: selectMenu, label: 'Product List', id: 'productlist', value: '/admin'},
        {func: selectMenu, label: 'Create New', id: 'createnew', value: '/adminnewproduct'},
        {func: selectMenu, label: 'Log out', id: 'logout', value: '/adminlogin'}
    ]

  return (
    <Container>
        <Drawer
            variant='temporary'
            anchor={'right'}
            open={props.open}
            onClose={(e) => props.onClose(e, false)}
            ModalProps={{keepMounted: true}}
        >
        <div
            onClose={(e) => props.onClose(e, false)}
            onKeyDown={(e) => props.onClose(e, false)}
        >
        <List>
            {menus.map(menu => (
                <ListItem button key={menu.id} onClick={(e) => menu.func(e, menu.value)}>
                    <ListItemText primary={menu.label} />
                </ListItem>
            ))}
        </List>
        </div>
        </Drawer>
    </Container>
  );
}

export default AdminClosableDrawer