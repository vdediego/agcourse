import {Router} from 'express';
import {plantController} from '../controllers/plantController';

class PlantRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', plantController.list);
        this.router.get('/:id', plantController.show);
        this.router.post('/', plantController.create);
        this.router.put('/:id', plantController.update);
        this.router.delete('/:id', plantController.delete);
    }
}

const plantRoutes = new PlantRoutes();
export default plantRoutes.router;
