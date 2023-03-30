import {Button,Upload} from "antd";
import React,{FC} from "react";
//import { FontAwesomeIcon,icon } from '@fortawesome/react-fontawesome'
import "./style.css"
import type { UploadProps } from 'antd'
//import { Icon } from 'antd';
import axios from 'axios';
import { CloseOutlined,ArrowUpOutlined } from '@ant-design/icons'

// function beforeUpload(file) {
//   const isJpgOrPng = file.type === 'video/mp4' || file.type === 'video/avi';
//   if (!isJpgOrPng) {
//     window.alert('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     window.alert('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// }



const handlefileupload=({file})=>{
  axios.post("https://api.upload.io/v2/accounts/kW15bBd/uploads/binary",file,{onUploadProgress:(event)=>{console.log(event);},});
};
const props: UploadProps={
  
  multiple:true,
  method:"POST",
   action :"https://api.upload.io/v2/accounts/kW15bBd/uploads/binary", 
   listType:'picture',
   accept:'.mp4,.avi' ,
   className:"uploadFile",
   progress: {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
  },
   showUploadList:{
    showRemoveIcon: true,
    removeIcon:<CloseOutlined className="Clossicon"/>},}
function App() {
  return (
    <div className="background" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}} >
     <div className="upload"> <Upload.Dragger  style={{border:'none', minHeight:"15rem",width:"45rem",display:"flex",justifyContent:"center",alignItems:"center"}} {...props} customRequest={handlefileupload}>
        <h1>You Can Upload Video</h1><br/>
        <p>CLICK ON THE BUTTON OR DRAG AND DROP FILES HERE</p>
      
      
         <Button icon={<ArrowUpOutlined />}  style={{backgroundColor:"rgb(51 102 255 / 73%)",color:"white",height:'45px'}} > Upload Video</Button>
      </Upload.Dragger>
      </div>
 
     
    </div>
  );
}

export default App;
