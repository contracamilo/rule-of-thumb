import { Router } from 'express';
import { catchErrors } from '../../utils/errorHandler';
import controllers from './person.controllers';

const router = Router();

// api/person
router
  .route('/')
  .get(catchErrors(controllers.getMany))
  .post(catchErrors(controllers.createOne));

// api/person/:id
router
  .route('/:id')
  .get(catchErrors(controllers.getOne))
  .post(catchErrors(controllers.updateOne))
  .delete(catchErrors(controllers.removeOne));

export default router;
