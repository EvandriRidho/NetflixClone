import Navbar from "./Navbar"

function Layout({ children }) {
    return (
        <main className="layout">
            <Navbar />
            {children}
        </main>
    )
}

export default Layout