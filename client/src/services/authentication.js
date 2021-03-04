import getAdmin from "./getAdmin";

class Authentication {

    async login(userCredentials, getIn, getOut) {
        const {data, headers} = await getAdmin(userCredentials);
        if (!!headers.authorization) {
            localStorage.setItem("authorization", headers.authorization.split(" ")[1]);
            localStorage.setItem("userId", data._id);
            return getIn();
        } else {
            return getOut();
        }
    }

    logout(goToLogin) {
        localStorage.clear();
        return goToLogin();
    }

    isLoggedIn() {
        return !!localStorage.getItem("authorization");
    }

}

export default new Authentication();