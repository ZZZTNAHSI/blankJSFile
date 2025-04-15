import { useRouter } from "next/router";

export default function DetailPage() {
    const router = useRouter();
    const newsId = router.query.newsId;
    console.log(router);
    return (
        <h1>The {newsId} Page</h1>
    );
}