function userCompanyId() {
    const userCompanyId = localStorage.getItem(`companyId`);
  return userCompanyId;
}

export default userCompanyId