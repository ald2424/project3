import axios from "axios";

export default {
    datesTaken: function() {
        return new Promise((resolve, reject) => {
            axios
            .get("")
            .then(res => {
                const users = res.data;
                const results = users.map(user => {
                    return {
                        // login: user.login
                    };
                });
                resolve(results);
            })
            .catch(err => reject(err));
        })
    }
}