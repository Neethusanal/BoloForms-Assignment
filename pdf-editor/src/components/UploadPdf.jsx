
import React ,{useState}from 'react'
const UploadPdf =()=>{
  const [file , setFile]=useState()

    const handleDragOver=(e)=>{
        e.preventDefault();
        const selectedFile=e.target.Files[0]
        if(selectedFile)
        {
          setFile(selectedFile.name)
        }
    }

    const handleclearFile=()=>{
        setFile(null)
    }
    return(
        <>
        <div  className=" w-full min-h-screen bg-white flex items-center justify-center ">
            <div className="w-[24%] h-auto rounded-md bg-white rounded-md border border-slate-400">
               <label htmlFor="input" className="block text-slate-800 text-base font-medium mb-1.5">Upload Pdf</label>
    <div className='w-full flex items-start'></div>
           <input type="file"/>

            </div>

        </div>
        </>
    )

}
export default UploadPdf