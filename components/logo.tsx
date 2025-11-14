// components/logo.tsx
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-teal-500 to-emerald-700 text-xs font-semibold text-white">
        BS
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-slate-900">
          Blank Slate Dev
        </span>
        <span className="text-xs text-slate-500">
          From idea to production
        </span>
      </div>
    </div>
  );
}
