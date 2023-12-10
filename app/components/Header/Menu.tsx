'use client';

export default function Menu(props: any) {
    return (
        <div className="w-1/4 p-3 m-3 rounded bg-green-200 text-black">
            {props.name}
            {props.age}
            {props.isMan ? "is man" : "is woman"}
        </div>
    )
}