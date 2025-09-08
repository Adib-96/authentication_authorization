const Images = require('../models/Image')
const { uploadToCloudinary } = require('../helpers/cloudinaryHelper')


const uploadImage = async (req, res) => {
    try {
        if(!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }
        
        const {url,publicId} = await uploadToCloudinary(req.file.path);
        const newlyUploadedImage = new Images({ url, publicId, uploadedBy: req.user.id });
        await newlyUploadedImage.save();
        res.status(201).json({ success: true, message: 'Image uploaded successfully', img: newlyUploadedImage });

    } catch (error) {
        res.status(500).json({ success: false, message: 'Error uploading image',error });
    }
}


module.exports = { uploadImage }