import './globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'LLM Query Logger',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="App-header">
          <h2>LLM Query Logger</h2>
        </header>
        <main className="App">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
