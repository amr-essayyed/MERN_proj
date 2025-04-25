import express from'express';
const router = express.Router();
import { addPost, getPosts, updatePost, deletePost } from "./controller.js";
import { authorizeMW } from '../auth/controller.js';
import multer from 'multer';
import path from 'path';

import { __projdir } from '../app.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__projdir, '/server/public/assets/images'))
    },
    filename: function (req, file, cb) {
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, "img-"+uniquePrefix+'-' + file.originalname)
    }
})

const upload = multer({ storage:storage});


router.post('/', authorizeMW, upload.single('image'), addPost);
router.get('/', getPosts);
router.put('/:id', upload.single('image'), updatePost);
router.delete('/:id', deletePost);
export default router;