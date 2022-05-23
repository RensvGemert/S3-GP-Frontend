import userCompanyId from "./userCompanyId";

function productsByCompany() {
    const url = `company/${userCompanyId()}/products`;
    return url;
}

export default productsByCompany