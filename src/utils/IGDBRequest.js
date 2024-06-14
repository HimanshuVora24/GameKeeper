import axios from "axios";

async function searchGame(name) {
    return axios({
        method:'post',
        headers: {
            'Content-Type':'application/json'
        },
        url:'http://localhost:5120/api/IGDB/search',
        data: JSON.stringify(name)
    }).then((res)=> {
        console.log(res.data);
        return res.data;
    });
}

export default searchGame;