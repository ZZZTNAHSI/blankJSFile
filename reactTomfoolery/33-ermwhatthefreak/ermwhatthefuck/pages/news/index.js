import Link from "next/link"
export default function NewsPage() {
    return (<>
        <h1>The News Page</h1>
        <ul>
            <li><Link href="/news/alsdjflkasdjlfalsjdfj">NextJS is a greate framework</Link></li>
            <li><Link href="/news/whatthewhat">This is something telse</Link></li>
        </ul>
        </>
    )
}