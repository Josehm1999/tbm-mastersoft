console.log("validaciones");

const isNameValid = async (req, res, next) => {
  return !req.body.password
    ? res.status(400).send({ message: "Incomplete data" })
    : next();
};
