import {Router} from 'express';
import {imageController} from '../controllers/imageController';

class ImageRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', imageController.create);
        this.router.put('/:id', imageController.update);
        this.router.delete('/:id', imageController.delete);
    }
}

const imageRoutes = new ImageRoutes();
export default imageRoutes.router;
