'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter();
    console.log(router);

    return (
        <div>
            <h1>My list of profiles</h1>
            <div className="flex flex-col">
                <Link
                    scroll={false}
                    href={{
                        pathname: '/profile/1',
                        query: {
                            name: 'John',
                            age: 23
                        },
                    }}
                >
                    <div>A big square with text</div>
                </Link>
                <Link href="/profile/2">Profile 2</Link>
                <Link href="/profile/3">Profile 3</Link>
            </div>
        </div>
        
    )
}