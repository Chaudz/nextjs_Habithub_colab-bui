"use client";

export default function Error({ error }: { error?: Error }) {
  return (
    <div>{error ? <p>Error message: {error.message}</p> : <p>No error message available</p>}</div>
  );
}
