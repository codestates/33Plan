module.exports = {
  post: async (req, res) => {
    try {
      res
        .status(205)
        .clearCookie("accessToken", {
          sameSite: 'none',
          domain: "33plan.ga",
          path: '/',
          secure: true,
          httpOnly: true
        })
        .json({ message: "Successfully Logged Out" });
    } catch (error) {
      console.error(error);
    }
  },
};
