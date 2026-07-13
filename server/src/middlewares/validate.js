export function validate(schema) {
  return async (req, res, next) => {
    const result = await schema.safeParseAsync({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      return res.status(400).json({
        message: "Dados inválidos.",
        errors: result.error.flatten().fieldErrors,
      });
    }

    req.validated = result.data;
    next();
  };
}
