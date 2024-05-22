import React,{useRef} from 'react';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

const SideDrawer = props => {
  const nodeRef = useRef(null);
  const content = (<CSSTransition in={props.show} 
                            timeout={200} 
                            classNames="slide-in-right" 
                            mountOnEnter 
                            unmountOnExit
                            nodeRef={nodeRef}
                            >
                      <aside className="side-drawer" onClick={props.click}>{props.children}</aside>
                  </CSSTransition>)
  return ReactDom.createPortal(content, document.getElementById("drawer-hook"))
};

export default SideDrawer;