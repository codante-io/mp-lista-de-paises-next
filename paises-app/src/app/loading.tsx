export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-lg font-semibold text-purple-600">Carregando...</p>
      </div>
    </div>
  );
}
