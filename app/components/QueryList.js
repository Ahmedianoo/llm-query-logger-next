'use client';

export default function QueryList({ queries }) {
  return (
    <ul>
      {queries.map((q, index) => (
        <li key={index}>
          <strong>{q.timestamp}</strong>: {q.text}
        </li>
      ))}
    </ul>
  );
}
