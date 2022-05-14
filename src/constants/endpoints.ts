const ENDPOINTS = {
  GET: {
    allAccounts: '/login-data',
    account: (id: number | string) => `/login-data/${id}`,
    passwordInfo: (id: number | string) => `/login-data/${id}/password-managerd`,
  },
  POST: {
    createAccount: '/login-data',
    addPassword: (id: number | string) => `/login-data/${id}/password-managerd`,
  },
  PUT: {
    editPassword: (userId: number | string, id: number | string) =>
      `/login-data/${userId}/password-managerd/${id}`,
  },
  DELETE: {
    deletePasswordInfo: (userId: number | string, id: number | string) =>
      `/login-data/${userId}/password-managerd/${id}`,
  },
}

export default ENDPOINTS
