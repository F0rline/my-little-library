import '../App.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <footer class="page-footer font-small blue">
            <div class="footer-copyright text-center py-3">© 2023 Copyright:
                <Link to={"/"}>Mes Livre.org</Link>
            </div>
        </footer>
    )
}