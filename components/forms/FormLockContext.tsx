"use client";

import { createContext, useCallback, useContext, useEffect, useRef, type ReactNode } from "react";

type FormId = "demo" | "contact";

interface FormLockContextValue {
  activate: (form: FormId) => void;
  registerReset: (form: FormId, resetFn: () => void) => void;
}

const FormLockContext = createContext<FormLockContextValue | null>(null);

export function ContactFormsProvider({ children }: { children: ReactNode }) {
  const activeFormRef = useRef<FormId | null>(null);
  const resetFns = useRef<Partial<Record<FormId, () => void>>>({});

  const registerReset = useCallback((form: FormId, resetFn: () => void) => {
    resetFns.current[form] = resetFn;
  }, []);

  const activate = useCallback((form: FormId) => {
    const previous = activeFormRef.current;
    if (previous && previous !== form) {
      resetFns.current[previous]?.();
    }
    activeFormRef.current = form;
  }, []);

  return (
    <FormLockContext.Provider value={{ activate, registerReset }}>
      {children}
    </FormLockContext.Provider>
  );
}

export function useFormLock(form: FormId, resetFn: () => void) {
  const ctx = useContext(FormLockContext);
  if (!ctx) {
    throw new Error("useFormLock must be used within a ContactFormsProvider");
  }
  const { activate, registerReset } = ctx;

  useEffect(() => {
    registerReset(form, resetFn);
  }, [form, resetFn, registerReset]);

  return { activate: useCallback(() => activate(form), [activate, form]) };
}
