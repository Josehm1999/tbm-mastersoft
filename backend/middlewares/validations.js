console.log("validaciones");
let message = "Incomplete data";
const isPasswordValid = async (req, res, next) => {
  return !req.body.password
    ? res.status(400).send({ message: message })
    : next();
};

const isNullRole = async (req, res, next) => {
    return !req.body.role
      ? res.status(400).send({ message: message })
      : next();
  };

export { isPasswordValid , isNullRole};
