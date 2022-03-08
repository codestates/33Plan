module.exports = {
  post: async (req, res) => {
    try {
      res
        .status(205)
        .cookie("accessToken", "", {
          maxAge: 0,
        })
        .json({ message: "Successfully Logged Out" });
    } catch (error) {
      console.error(error);
    }
  },
};
