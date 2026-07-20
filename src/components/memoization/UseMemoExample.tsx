import { useMemo, useState } from "react";
import { Button } from "@artifact/ui-lib/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@artifact/ui-lib/card";

/**
 * useMemo — memoizes a COMPUTED VALUE.
 * The expensive calculation only re-runs when its dependencies change.
 */

// Deliberately expensive: counts divisors the naive way plus some busy-work.
function countDivisors(n: number): number {
  let divisors = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) divisors += 1;
  }
  let busy = 0;
  for (let i = 0; i < 2_000_000; i += 1) busy += i % 3;
  return divisors + (busy % 1);
}

export function UseMemoExample() {
  const [input, setInput] = useState(12);
  const [tick, setTick] = useState(0);

  // Recomputes only when `input` changes. Bumping `tick` reuses the cache.
  const memoized = useMemo(() => countDivisors(input), [input]);

  // For contrast: runs on every single render.
  const notMemoized = countDivisors(4);

  return (
    <Card className="h-full border-slate-200/80 bg-white/90">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-950">useMemo</CardTitle>
        <CardDescription className="text-sm text-slate-600">
          Memoizes a <strong>computed value</strong>. Changing the input recomputes the divisor
          count; re-rendering the parent reuses the cached result.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-700">
            divisors(<span className="font-mono">{input}</span>) ={" "}
            <span className="font-semibold text-indigo-600">{memoized}</span>{" "}
            <span className="text-xs text-slate-400">(memoized)</span>
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Non-memoized reference: {notMemoized} (recomputed every render)
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button color="info" onClick={() => setInput((n) => n + 6)}>
            Change input (recomputes)
          </Button>
          <Button color="secondary" variant="ghost" onClick={() => setTick((n) => n + 1)}>
            Re-render only (reuses cache · tick {tick})
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
