import { Router } from 'express';
import { catchErrors } from '../../utils/errorHandler';
import controllers from './list.controllers';

const router = Router();

// api/item
router
  .route('/')
  .get(catchErrors(controllers.getMany))
  .post(catchErrors(controllers.createOne));

// api/item/:id
router
  .route('/:id')
  .get(catchErrors(controllers.getOne))
  .post(catchErrors(controllers.updateOne))
  .delete(catchErrors(controllers.removeOne));

export default router;
