import NavHeader from "./nav-header";

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-center bg-muted min-h-[80px] w-full border-b border-primary shadow shadow-lg " >
            <NavHeader />
        </header>
    );
    }