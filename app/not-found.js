"use client"

import { usePathname } from "next/navigation";

export default function NotFound() {

    const path = usePathname();

    return (
        <div className="text-center">
            <h1 className="font-bold text-xl"> {path} Page not found</h1>
        </div>
    );
}