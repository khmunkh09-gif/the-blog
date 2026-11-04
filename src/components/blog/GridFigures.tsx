const yellow = "bg-[#f2c94c]";

export function GridStructuresFigure() {
  const items = [
    { name: "Column", text: "Ideal for simple content", cols: 4 },
    { name: "Modular", text: "Great for repeating items", cols: 4 },
    { name: "Hierarchical", text: "Content ranked by importance", cols: 3 },
  ];
  return (
    <figure className="rounded-sm bg-white p-4 text-[#0b0e23] md:p-6">
      <figcaption className="text-center text-sm font-semibold md:text-lg">Common Grid Structures in Websites and Interfaces</figcaption>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {items.map((i, idx) => (
          <div key={i.name} className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-wide">{i.name}</p>
            <p className="text-[9px] text-slate-500">{i.text}</p>
            <div className="mt-2 grid aspect-[1.3/1] gap-1 rounded-sm bg-amber-100 p-1.5"
              style={{ gridTemplateColumns: idx === 2 ? "2fr 1fr" : "repeat(3,1fr)" }}>
              {Array.from({ length: idx === 0 ? 3 : idx === 1 ? 9 : 3 }).map((_, k) => (
                <span key={k} className={`${yellow} ${idx === 2 && k === 0 ? "row-span-2" : ""}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}

export function DoDontFigure() {
  return (
    <figure className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-pink-200">
      {[true, false].map((ok) => (
        <div key={String(ok)} className="relative flex aspect-[1.6/1] items-center justify-center bg-pink-100">
          <div className="absolute inset-y-0 left-[15%] w-[18%] bg-pink-200/80" />
          <div className="absolute inset-y-0 right-[15%] w-[18%] bg-pink-200/80" />
          <span className={`relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg ring-1 ring-black/10 ${ok ? "text-amber-600" : "text-red-500"}`}>
            {ok ? "✓" : "✕"}
          </span>
        </div>
      ))}
      <figcaption className="sr-only">Place content within columns, not gutters</figcaption>
    </figure>
  );
}
