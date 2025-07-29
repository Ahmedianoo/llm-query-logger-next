'use client';

export default function QueryForm({ query, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={query}
        onChange={onChange}
        placeholder="Type your query here..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}
