import { A } from "@solidjs/router";

export default function Header() {
    return (
        <header className="flex-col p-5">
            <A class="text-blue-500 p-5 text-xl" href="/">首页</A>
            <A class="text-blue-500 p-5 text-xl" href="/about">关于</A>
        </header>
    )
}