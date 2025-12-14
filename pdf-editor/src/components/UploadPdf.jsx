
import React ,{useState}from 'react'
import axios from 'axios';

const UploadPdf =()=>{
  const [file , setFile]=useState()
 
    const handleUpload=(e)=>{
        e.preventDefault();
        const selectedFile=e.target.files[0]
        if(selectedFile&& selectedFile.type==="application/pdf")
        {
          setFile(selectedFile)
        }
        else{
            alert("please select a pdf file")
        }
    }

    const handleclearFile=()=>{
        setFile(null)
    }
    const handleSubmit=async()=>{
      if(!file)
      {
        alert("no file uploaded")
        return
      }
      else{

      }
    }
    return(
        <>
        <div  className=" w-full min-h-screen bg-white flex items-center justify-center ">
            <div className="w-[24%] h-auto rounded-md bg-white rounded-md border border-slate-400 p-5">
               <label htmlFor ="input" className ="block text-slate-800 font-medium mb-1.5">Upload Pdf</label>
    <div className="flex items-start w-full">
        {file ? (
           <div className="text-start my-3">
            <div className="relative inline-block">
                <div className="w-full h-auto px-3 py-1 bg-gray-200 text-[0.8rem] text-gray dark:bg-gray-800 dark:bg-white rounded-md">
                 <span className='text-black text-base  font-medium'>File Name:{" "}</span>
                 {file.name}
                </div>
                <button className="btn absolute -top-3 -right-2 bg-gray-200 text-red-500 dark:text-red-400 cursor-pointer rounded-sm "onClick ={handleclearFile}>
                    
                  clear file
                </button>
            </div>
           </div>
        ):(
           <label htmlFor="dragdrop-file" className='flex flex-col items-center border-dashed rounded-lg justify-center w-full h-[17vh] border-2 border-gray-400 cursor-pointer bg-gray-300'>
            <div className="flex flex-col-items-center justify-center pt-6 pb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cloud-arrow-up text-gray-600 " viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"/>
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg>
<p className='mb-2 dark:text-gray-400'>
    <span className='font-medium p-2'> click to upload  </span>
</p>
            </div>

           </label>
        )}
    </div> 
           <input  id="dragdrop-file"type= "file"  className="hidden" onChange={handleUpload}/>

            </div>

        </div>
        </>
    )

}
export default UploadPdf