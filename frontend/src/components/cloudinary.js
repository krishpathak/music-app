import axios from "axios"
export async function uploadSong(file){
    let date = Date.now();
   let time = Math.floor(Math.random()*1000);
   const formData = new FormData();
   formData.append("file",file);
   formData.append("upload_preset", 'musicify');
   const fileName = file.name
    let newName = fileName.split('.')[0]+ '_'+date+'_'+time;
   formData.append("public_id", newName);
   try{
     const response =  await axios.post("https://api.cloudinary.com/v1_1/dw1rh4myb/video/upload",formData);
     if(response){
       console.log(response.data);
       const {secure_url} = response.data; // wrokeddd yay
     return secure_url;
    
   }else{
       throw "e";
   }
     
   }catch(error){
      return null;
   }
 
}
export async function uploadCover(file){
    let date = Date.now();
   let time = Math.floor(Math.random()*1000);
   const formData = new FormData();
   formData.append("file",file);
   formData.append("upload_preset", 'musicify');
   const fileName = file.name
    let newName = fileName.split('.')[0]+ '_'+date+'_'+time;
   formData.append("public_id", newName);
   try{
     const response =  await axios.post("https://api.cloudinary.com/v1_1/dw1rh4myb/image/upload",formData);
     if(response){
       console.log(response.data);
       const {secure_url} = response.data; // wrokeddd yay
     return secure_url;
    
   }else{
       throw "e";
   }
     
   }catch(error){
      return null;
   }
 
}