const kernelController = {
  getKernels(req, res) {
    // get all the kernels in the database that pertain to the user
    const { user_id } = req.params;
    Kernel.find({ user_id: user_id })
      .then((kernelData) => {
        res.json(kernelData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // add a kernel to the database
  async addKernel(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;
    Kernel.create(req.body)
      .then(() => {
        res.redirect(`https://localhost:3000/kernel/user/${user_id}`);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
