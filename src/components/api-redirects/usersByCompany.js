import userCompanyId from "./userCompanyId";

function usersByCompany() {
    const url = `company/${userCompanyId()}/users`;
    return url;
}

export default usersByCompany