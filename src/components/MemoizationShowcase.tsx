import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@artifact/ui-lib/card";
import { ReactMemoExample } from "./memoization/ReactMemoExample";
import { UseCallbackExample } from "./memoization/UseCallbackExample";
import { UseMemoExample } from "./memoization/UseMemoExample";

/**
 * Composes the three memoization examples side by side so the difference
 * between useMemo, useCallback and React.memo is easy to compare.
 * Each example lives in its own file under ./memoization.
 */
export function MemoizationShowcase() {
  return (
    <Card className="h-full border-slate-200/80 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">
          useMemo vs useCallback vs React.memo
        </CardTitle>
        <CardDescription className="text-sm leading-6 text-slate-600">
          Each tool memoizes a different thing: <strong>useMemo</strong> a computed value,{" "}
          <strong>useCallback</strong> a function reference, and <strong>React.memo</strong> a whole
          component. Trigger renders in each panel and watch the counters.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 lg:grid-cols-3">
        <ReactMemoExample />
        <UseCallbackExample />
        <UseMemoExample />
      </CardContent>
    </Card>
  );
}
