export function BackgroundGradients() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl"></div>
    </div>
  );
}
