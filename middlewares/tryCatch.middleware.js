const { InternalError } = require('../helpers/errors');

const tryCatchMiddleware = (handler) => async (req, res, next) => {
  try {
    const result = await handler(req, res, next);

    if (!result) {
      throw new InternalError('Oops, something get wrong, try again');
    }
    res.send(result);
  } catch (e) {
    if (
      e.reason?.message ===
      'Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer'
    ) {
      return res.status(404).json({
        message:
          'You write wrong id. It must be a string of 12 bytes or a string of 24 hex characters or an integer'
      });
    }
    res.status(e.status || 500).json({ message: e.message });
  }
};

module.exports = {
  tryCatchMiddleware
};
