import admin from "./admin";

class Authentication {

    async login(userCredentials, getIn) {
        const {data, headers} = await admin.getAdmin(userCredentials);
        if (!!headers.authorization) {
            localStorage.setItem("authorization", headers.authorization.split(" ")[1]);
            localStorage.setItem("userId", data._id);
            return getIn();
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