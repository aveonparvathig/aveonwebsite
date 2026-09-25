"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type FormId = "demo" | "contact";

interface FormLockContextValue {
  dirty: Record<FormId, boolean>;
  setDirty: (form: FormId, value: boolean) => void;
  registerClear: (form: FormId, clearFn: () => void) => void;
  clear: (form: FormId) => void;
}

const FormLockContext = createContext<FormLockContextValue | null>(null);

export function ContactFormsProvider({ children }: { children: ReactNode }) {
  const [dirty, setDirtyState] = useState<Record<FormId, boolean>>({ demo: false, contact: false });
  const clearFns = useRef<Partial<Record<FormId, () => void>>>({});

  const setDirty = useCallback((form: FormId, value: boolean) => {
    setDirtyState((prev) => (prev[form] === value ? prev : { ...prev, [form]: value }));
  }, []);

  const registerClear = useCallback((form: FormId, clearFn: () => void) => {
    clearFns.current[form] = clearFn;
  }, []);

  const clear = useCallback((form: FormId) => clearFns.current[form]?.(), []);

  return (
    <FormLockContext.Provider value={{ dirty, setDirty, registerClear, clear }}>
      {children}
    </FormLockContext.Provider>
  );
}

/** Only one form can hold details at a time: moving into a form clears the other one. */
export function useFormLock(form: FormId, isDirty: boolean, clearSelf: () => void) {
  const ctx = useContext(FormLockContext);
  if (!ctx) {
    throw new Error("useFormLock must be used within a ContactFormsProvider");
  }
  const { dirty, setDirty, registerClear, clear } = ctx;
  const other: FormId = form === "demo" ? "contact" : "demo";

  useEffect(() => {
    setDirty(form, isDirty);
  }, [form, isDirty, setDirty]);

  useEffect(() => {
    registerClear(form, clearSelf);
  }, [form, clearSelf, registerClear]);

  return { isLocked: dirty[other], clearOther: () => clear(other) };
}
