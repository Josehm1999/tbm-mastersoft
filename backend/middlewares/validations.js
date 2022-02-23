let message = 'Incomplete data';

const isNameValid = async (req, res, next) => {
  return !req.body.name ? res.status(400).send({ message }) : next();
};
const isPasswordValid = async (req, res, next) => {
  return !req.body.password ? res.status(400).send({ message }) : next();
};

const isRoleValid = async (req, res, next) => {
  return !req.body.role ? res.status(400).send({ message }) : next();
};

const isEmailValid = async (req, res, next) => {
  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!req.body.email) {
    return !regex.test(req.params.email)
      ? res.status(400).send({ message: 'Invalid email' })
      : next();
  } else {
    return !regex.test(req.body.email)
      ? res.status(400).send({ message: 'Invalid email' })
      : next();
  }
};
export { isNameValid, isPasswordValid, isRoleValid, isEmailValid };
