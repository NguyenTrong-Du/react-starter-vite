class Const {
  static get DRAWER_WIDTH(): number {
    return 240
  }

  static get MINI_DRAWER_WIDTH(): number {
    return 72
  }

  static get TOAST_ERROR_CODES() {
    return {}
  }

  static get VALIDATION_ERROR_CODES() {
    return {
      // login
      U10004: ['email', 'password'] // Email or password incorrect
    }
  }
}

export default Const
