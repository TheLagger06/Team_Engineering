import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="footer text-center text-lg-start">
            <div className="text-center p-3" style={{ backgroundColor: '#18164d' }}>
                <a className="text-light text-decoration-none p-3">© 2022 Copyright:</a>
                <a className="text-light text-decoration-none" href="https://digitalfutures.com/" >DigitalFutures.com</a>
            </div>
        </footer>
    );
}

export default Footer;