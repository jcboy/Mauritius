import axios from "axios";

class fetchActivities {

    async getActivities (key, currentPage, ...tags) {
        let endpoints = '';
        let URL = key + '?page=' + currentPage;
        if (!!tags[0]) {
            if (tags.length === 1) {
                endpoints = '&tag=' + tags[0];
            } else {
                endpoints = tags.reduce((red, acc) => {
                    return '&tag=' + red + '&tag=' + acc
                });
            }
            URL = URL + endpoints;
        }
        const {data} = await axios.get('http://localhost:8080/' + URL);
        return data;
    }

    async getActivity(id) {
        const URL = 'http://localhost:8080/activities/' + id;
        const {data} = await axios.get(URL);
        return data;
    }


}

export default new fetchActivities();