import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema(
  {
    pdfName: {
      type: String,
      required: true,
    
    },

    pdfId: {
      type: String,
      required: true,
      unique: true,
    },

    originalHash: {
      type: String,
      
    },
     signedHash: {
      type: String,
      
    },
    status:{
        type:String,
    },
    uploadedAt:{
        type:Date,
    },
    signedAt:{
        type:Date,
    }

  
  },
  
);

export default mongoose.model("Pdf", pdfSchema);


