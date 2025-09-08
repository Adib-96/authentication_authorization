require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require('./database/db')
const authRoutes = require('./routes/auth-routes');
const homesRoutes = require('./routes/home-routes');
const adminRoutes = require('./routes/admin-routes');
const uploadImageRotes = require('./routes/image-routes')

connectDB();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/home', homesRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/images', uploadImageRotes);
  



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


