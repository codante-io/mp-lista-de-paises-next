"use client";

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return <div className="p-4 text-red-600">Erro: {error.message}</div>;
}
