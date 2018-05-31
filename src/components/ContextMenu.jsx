import { ContextMenu, Item, Separator, Submenu, ContextMenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import React from 'react';

const MyMenu = (onClick) => (
  <ContextMenu id='menu_id'>
     <Item onClick={onClick}>Lorem</Item>
     <Item onClick={onClick}>Ipsum</Item>
     <Separator />
     <Item disabled>Dolor</Item>
     <Separator />
     <Submenu label="Foobar">
      <Item onClick={onClick}>Foo</Item>
      <Item onClick={onClick}>Bar</Item>
     </Submenu>
  </ContextMenu>
);

const MyContextMenu = ({data}) => (
  <span className='context-menu'>
    <ContextMenuProvider id="menu_id">
      <b>{data}</b>
    </ContextMenuProvider>
    <MyMenu />
  </span>
);


export default MyContextMenu;
