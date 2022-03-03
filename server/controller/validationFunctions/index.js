module.exports = {
  validateEmail: (email) => {
    const regExp =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    return regExp.test(email);
  },
  validatePW: (password) => {
    // 비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다
    const pattern1 = /[0-9]/; // 숫자
    const pattern2 = /[a-zA-Z]/; // 문자
    const pattern3 = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자

    if (
      !pattern1.test(password) ||
      !pattern2.test(password) ||
      !pattern3.test(password) ||
      password.length < 8
    ) {
      return false;
    } else {
      return true;
    }
  },
};
