export default function Navbar({ children }) {
    return (
        <nav>
        <h1>Librería Petricor</h1>
        {children}
        <ul>
            <li>Comics</li>
            <li>Horror</li>
            <li>Romance</li>
            <li>Obras literarias</li>
        </ul>
        </nav>
    )
}