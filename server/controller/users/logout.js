module.exports = {
  post: async (req, res) => {
    res
      .status(205)
      .cookie("accessToken", "", {
        maxAge: 0,
      })
      .send({ message: "Successfully Logged Out" });
  },
};
