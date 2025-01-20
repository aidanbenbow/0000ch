import express from 'express';
import ejs from 'ejs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './models/blog.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 80;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    }).catch((err) => {
    console.log(err);
}  );


// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set(express.static('public'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.get('/', async(req, res) => {
    const blogs = await Blog.find();
    res.render('index', { blogs });
    
});

app.get('/:slug', async (req, res) => {
    const blog = await Blog.findOne({ slug: req.params.slug });
    res.render('blog', { blog });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
