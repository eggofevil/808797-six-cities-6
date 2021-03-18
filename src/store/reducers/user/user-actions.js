export const authorizeUser = () => {
  return {
    type: `AUTHORIZE_USER`,
    autorisationStatus: true,
    getUserData: null
  };
};
