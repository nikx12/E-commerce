import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';  
import Login from './Login';
import SignUp from './SignUp';
// import Home from './Home';
import { Layout, Menu, Icon } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Routes from './Routes';
import { connect } from 'react-redux'
//import { login } from './Reducers/Reducer';


const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  constructor(){
    super();
    this.state={
      collapsed: false,
      clicked: false,
      signup: false,
      checkedValue:false,
      myData: [],
      fields:{},
      errors:{},
      nextPage:false
    }
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  // componentWillMount(){
  //   var result=[]
  //   fetch('https://randomuser.me/api/')
  //   .then((Response) => Response.json())
  //   .then((findresponse) =>{
  //       result= findresponse
  //   console.log("in will mount ", result)    
  //   this.setState({
  //     myData: result
  //    });
  // //   console.log(" mount " ,this.state.myData)
  //   })
    
  //   .catch((err) =>{
  //     console.log(err)
  //   });
   // async await usage
   // console.log(" mounted " ,this.state.myData)
   
  //}
  
  // handleLogin=(usr,pw)=>{
  
  //   this.state.myData.forEach((user) => {
  //     if(user.name === usr){
  //       if(user.password=== pw){
  //         this.setState({
  //           nextPage: true
  //         });
  //         console.log("Sucess");
  //         return true
  //       }
  //       else{
  //         console.log("Error");
  //         return false
  //       }
  //     }
  //     else{
  //       console.log("Invalid data")
  //       return false
  //     }

  //   })
  //   // console.log("user: ", user);
  //   // console.log("pwd: ", pwd);

  //   // console.log(usr+"  "+pw);
  // }
  handleClick=(e)=>{
    this.setState({
      clicked:!this.state.clicked
    });
    
  }
  // try to call componentdidmount so as to make a call to local storage or try to use JWT tokens
  // try to check if data is there in local storage. if not then make a db call
   handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        checkedValue: this.state.checkedVal,
        fields
      });

    }
  handleSignUp=(e)=>{
    this.setState({
      signup:!this.state.signup
    });
  }
  render() {
  //   if(isLoginSuccess){
  //     return(
  //        <Redirect to={{
  //                      pathname: '/Profile',
  //                      state: user 
  //                  }} push  />
  //     )
  // }

    return (
     
      <div className="App">
      {/* <h1 onClick={this.setState({ nextPage: true  })}>LOGIN SUCCESS</h1> */}
        <Login  handleClick={this.handleClick} handleLogin={this.handleLogin} {...this.state}/>
        <SignUp handleClick={this.handleClick} handleSignUp={this.handleSignUp}  {...this.state}/> 

        {/* Navigation bar */}
         <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span><Link to='/'>E-Comm</Link></span>
              {/* try using force update */}
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3"><a onClick={this.handleClick}>Login</a></Menu.Item>
              <Menu.Item key="4"><a onClick={this.handleSignUp}>Sign Up</a></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="folder-open" /><span>Categories</span></span>}
            >
              <Menu.Item key="6"><Link to="/Food">Food</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/Clothing">Clothing</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/Footwear">Footwear</Link></Menu.Item>

            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span><Link to="/About">About</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Routes isLoginSuccess={this.props.isLoginSuccess} clicked={this.props.clicked} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            E-Comm ©2018 Created by Volans
          </Footer>
        </Layout>
      </Layout>
      </div>
    );
  }
}

const mapStateToProps= (state) =>{
  return {
    isLoginSuccess: state.isLoginSuccess,
    user: state.user
  }
}
// const dispatchToProps = (dispatch) =>{
//   return {

//   }
// }
export default connect(mapStateToProps)(App);
