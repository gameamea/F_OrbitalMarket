import ApiService from "@/services/api.service";

export interface ISearchProduct {
    _id: string;
    title: string;
    slug: string;
    owner: string;
    price: { value: number };
    discount: { value: number };
    description: { value: string };
    pictures: { thumbnail: Array<string> };
    computed: {
        score: {
            value: number;
            totalRatings: number;
            meanRatings: number;
        }
    }
}

export default {
    async query (params: any): Promise<Array<ISearchProduct>> {
        const result = await ApiService.get("/products/search", { params });
        return result.data;
    }
};