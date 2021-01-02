import { Router } from 'express';
import { catchErrors } from '../../utils/errorHandler';
import controllers from './user.controller';
import User from './user.model';
import { hashSync } from 'bcrypt';

const router = Router();

// api/user
router
  .route('/')
  .get(catchErrors(controllers.getMany))
  .post((req, res) => {
    let { body } = req;

    let user = new User({
      ...body,
      password: hashSync(`${body.password}`, 10),
    });

    user.save((err, dbUser) => {
      if (err) {
        res.status(400).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        user: dbUser,
      });
    });
  });

// api/user/:id
router
  .route('/:id')
  .get(catchErrors(controllers.getOne))
  .post(catchErrors(controllers.updateOne))
  .delete(catchErrors(controllers.removeOne));

export default router;
