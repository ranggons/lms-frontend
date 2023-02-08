import { GET } from "@configs/api";

export default {
    get: () => GET(`https://imdb8.p.rapidapi.com/actors/get-all-videos`, { nconst: 'nm0001667', region: 'US' })
}