module.exports = {
  post: async (req, res) => {
    try {
      res
        .status(205)
        .clearCookie("accessToken", {
          sameSite: 'none',
          domain: "localhost",
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
