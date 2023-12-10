'use client';
import Link from "next/link";
import { useParams, useRouter, usePathname } from "next/navigation";

export default function ProfileID() {
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();
    console.log(params);
    return (
        <div>
            <h1>Profile page id: {params.profileID}</h1>
            <div onClick={() => router.push('/profile')}>Back to main page</div>
            <div className="flex flex-col">
                <Link href={`${pathname}/post/1`}>Post 1</Link>
                <Link href={`${pathname}/post/2`}>Post 2</Link>
                <Link href={`${pathname}/post/3`}>Post 3</Link>
            </div>
        </div>
    )
}