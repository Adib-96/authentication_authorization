const cloudinary = require('../config/clodinary')


const uploadToCloudinary = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        return {
            url: result.secure_url,
            publicId: result.public_id
        };
    } catch (error) {
        throw new Error('Error uploading to Cloudinary');
    }
};

module.exports = {
    uploadToCloudinary
};
