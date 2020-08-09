import React from "react";
import Sidebar from "react-sidebar";
import "./side.css"
import { Link, withRouter } from "react-router-dom";
const mql = window.matchMedia(`(min-width: 800px)`);
 
class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
 
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
 
  componentWillUnmount() {
    // this.state.mql.removeListener(this.mediaQueryChanged);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={
          <div>
          <hr/>
          <div ><p className="lead"></p></div>
          
          <hr/>
          <Link to="/feed" style={{ textDecoration: 'none', color: "black" }}>
          <div id='anim'><p className="lead">Feed</p></div>
          </Link>

          <hr/>
          <Link to="/movements" style={{ textDecoration: 'none', color: "black" }}>
          <div id='anim'><p className="lead">Movements</p></div>
          </Link>

          <hr/>
          <Link to="/create" style={{ textDecoration: 'none', color: "black" }}>
          <div id='anim'><p className="lead">Create</p></div>
          </Link>
          <hr/>
          </div>
        }
        
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        sidebarId="bar"
        styles= {{sidebar: {
          position: "fixed",
          background: "linear-gradient(0deg, rgb(230, 255, 255), white, rgb(253, 242, 255))",
        }}}
      >
      </Sidebar>
    );
  }
}
 
export default Side;
