import { memo, useCallback, useState } from "react";
import { Button } from "@artifact/ui-lib/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@artifact/ui-lib/card";
import { useRenderCount } from "./useRenderCount";

/**
 * useCallback — memoizes a FUNCTION REFERENCE.
 * A stable function identity lets a React.memo child skip re-rendering.
 * A new function each render (unstable) defeats that memoization.
 */

// Memoized child: only re-renders when its `onAction` reference changes.
const ActionChild = memo(function ActionChild({
  label,
  onAction,
}: {
  label: string;
  onAction: () => void;
}) {
  const renders = useRenderCount();
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-medium text-slate-900">{label}</p>
      <p className="mt-1 text-xs text-slate-500">
        Rendered <span className="font-semibold text-indigo-600">{renders}</span> time(s).
      </p>
      <Button className="mt-3" size="sm" color="secondary" variant="soft" onClick={onAction}>
        Fire action
      </Button>
    </div>
  );
});

export function UseCallbackExample() {
  const [tick, setTick] = useState(0);

  // Stable reference — same identity across renders, so ActionChild is skipped.
  const stableHandler = useCallback(() => {
    alert("Stable handler (useCallback) fired!");
  }, []);

  // Unstable reference — a brand-new function every render, so its ActionChild
  // re-renders every time the parent does.
  const unstableHandler = () => {
    alert("Unstable handler fired!");
  };

  return (
    <Card className="h-full border-slate-200/80 bg-white/90">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-950">useCallback</CardTitle>
        <CardDescription className="text-sm text-slate-600">
          Memoizes a <strong>function reference</strong>. Both children are wrapped in{" "}
          <code className="font-mono">React.memo</code>, but only the one fed a stable handler skips
          re-rendering when the parent updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <ActionChild label="Stable handler (useCallback)" onAction={stableHandler} />
          <ActionChild label="Unstable handler (new fn)" onAction={unstableHandler} />
        </div>
        <Button color="primary" variant="soft" onClick={() => setTick((n) => n + 1)}>
          Re-render parent (tick = {tick})
        </Button>
      </CardContent>
    </Card>
  );
}
