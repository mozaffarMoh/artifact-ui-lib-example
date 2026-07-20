import { memo, useState } from "react";
import { Button } from "@artifact/ui-lib/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@artifact/ui-lib/card";
import { useRenderCount } from "./useRenderCount";

/**
 * React.memo — memoizes a COMPONENT.
 * A memoized child skips re-rendering when its props are unchanged.
 */

// Wrapped in React.memo: re-renders only when `label` changes.
const MemoizedChild = memo(function MemoizedChild({ label }: { label: string }) {
  const renders = useRenderCount();
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-medium text-slate-900">{label}</p>
      <p className="mt-1 text-xs text-slate-500">
        Wrapped in <code className="font-mono">React.memo</code> — rendered{" "}
        <span className="font-semibold text-indigo-600">{renders}</span> time(s).
      </p>
    </div>
  );
});

// Same child WITHOUT memo: re-renders every time the parent does.
function PlainChild({ label }: { label: string }) {
  const renders = useRenderCount();
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-slate-900">{label}</p>
      <p className="mt-1 text-xs text-slate-500">
        No memo — rendered <span className="font-semibold text-rose-600">{renders}</span> time(s).
      </p>
    </div>
  );
}

export function ReactMemoExample() {
  const [tick, setTick] = useState(0);

  return (
    <Card className="h-full border-slate-200/80 bg-white/90">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-950">React.memo</CardTitle>
        <CardDescription className="text-sm text-slate-600">
          Memoizes a <strong>component</strong>. Click the button to re-render the parent: the plain
          child&apos;s counter climbs, the memoized child stays put.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <MemoizedChild label="Memoized child" />
          <PlainChild label="Plain child" />
        </div>
        <Button color="primary" variant="soft" onClick={() => setTick((n) => n + 1)}>
          Re-render parent (tick = {tick})
        </Button>
      </CardContent>
    </Card>
  );
}
