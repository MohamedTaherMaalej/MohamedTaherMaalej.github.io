export default function Footer() {
    return (
        <footer className="mt-32 w-full text-center py-3 text-gray-500 border-t border-gray-200">
            <p>
                © {new Date().getFullYear()}{" "}
                <a href="https://mohamedtahermaalej.com" className="underline hover:text-gray-700">
                    Mohamed Taher MAALEJ
                </a>
                . All rights reserved.
            </p>
        </footer>
    );
}