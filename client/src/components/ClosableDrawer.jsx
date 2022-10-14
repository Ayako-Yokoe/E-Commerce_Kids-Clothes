import React from "react"
import { useNavigate } from "react-router-dom"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import styled from "styled-components"

const Container = styled.div``

const ClosableDrawer = (props) => {
  const navigate = useNavigate()

  const selectMenu = (event, path) => {
    navigate(path)
    props.onClose(event, false)
  }

  const menus = [
    { func: selectMenu, label: "Home", id: "home", value: "/" },
    { func: selectMenu, label: "Favorite", id: "favorite", value: "/favorite" },
    { func: selectMenu, label: "Cart", id: "cart", value: "/cart" },
    { func: selectMenu, label: "Log Out", id: "logout", value: "/login" },
  ]

  return (
    <Container>
      <Drawer
        variant="temporary"
        anchor={"right"}
        open={props.open}
        onClose={(e) => props.onClose(e, false)}
        ModalProps={{ keepMounted: true }}
      >
        <div
          onClose={(e) => props.onClose(e, false)}
          onKeyDown={(e) => props.onClose(e, false)}
        >
          <List>
            {menus.map((menu) => (
              <ListItem
                button
                key={menu.id}
                onClick={(e) => menu.func(e, menu.value)}
              >
                <ListItemText primary={menu.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Container>
  )
}

export default ClosableDrawer
