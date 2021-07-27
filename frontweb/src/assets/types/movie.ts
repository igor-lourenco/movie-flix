import { Review } from "./review";

export type Movies = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    reviews: Review[];
}
