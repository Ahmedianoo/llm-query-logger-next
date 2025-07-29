export default function Footer() {
  const now = new Date().toLocaleString();
  return (
    <footer>
      <p>Rendered at: {now}</p>
    </footer>
  );
}
