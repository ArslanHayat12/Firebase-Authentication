import React,{useCallback} from "react";
import { auth } from "../config/index";
import  { useBeforeAuth } from "../AuthProviders/BeforeAuth";
import { useAfterAuth } from "../AuthProviders/AfterAuth";
import { Layout,Button } from "antd";
import "antd/dist/antd.css";
import "../styles/index.css";
const { Header } = Layout;
const Head=({res}:any)=>{
  const {  logout,content } = useBeforeAuth();
  const {  data,dispatchAction } = useAfterAuth();
  const logoutAction = useCallback(() => {
    auth.signOut();
    dispatchAction({type: "UPDATE_DATA", data:{} })
    logout();
  }, []);
  return(
    <Header>
      
        <span style={{float:"left",color:"white"}}>  Quotes App </span>
        <span style={{float:"right",color:"white"}}>{data&&data.data?JSON.stringify(data.data):"Static"}</span>
        <span style={{float:"right",color:"white"}}> {content&&content.data && JSON.stringify(content.data.email ||(content.data.user&&(content.data.user.email ||content.data.user.phoneNumber)))} <Button onClick={logoutAction}>Logout </Button> </span>
       
    </Header>
  )
}
export {Head as default};