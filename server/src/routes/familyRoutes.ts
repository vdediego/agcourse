import {Router} from 'express';
import {familyController} from '../controllers/familyController';

class FamilyRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', familyController.list);
        this.router.get('/:id', familyController.show);
        this.router.post('/', familyController.create);
        this.router.put('/:id', familyController.update);
        this.router.delete('/:id', familyController.delete);
    }
}

const familyRoutes = new FamilyRoutes();
export default familyRoutes.router;
