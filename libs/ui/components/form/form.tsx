'use client';

import {
  useForm,
  createFormHook,
  createFormHookContexts,
} from '@tanstack/react-form';
import clsx from 'clsx';
import { ComponentType, createContext, FormEventHandler, ReactNode, useContext } from 'react';
import { z } from 'zod';

export { z, useForm };

type AppFormWrapperProps = {
  form: {
    AppForm: ComponentType<{ children?: ReactNode }>;
    handleSubmit: () => void;
  };
  schema?: Record<string, z.ZodTypeAny>;
  validators?: Record<string, any>;
  className?: string;
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

type FormSubmitProps = {
  form: {
    Subscribe: ComponentType<{
      selector: (state: any) => boolean;
      children: (isSubmitting: boolean) => ReactNode;
    }>;
  };
  children: (isSubmitting: boolean) => ReactNode;
};

const formValidatorsContext = createContext<Record<string, any> | undefined>(undefined);

export function useFormValidatorsContext() {
  return useContext(formValidatorsContext);
}

export function createZodFieldValidators(schema: Record<string, z.ZodTypeAny>) {
  const validateWith = (schemaRule: z.ZodTypeAny) => {
    return ({ value }: { value: unknown }) => {
      const result = schemaRule.safeParse(value);
      return result.success ? undefined : result.error.issues[0]?.message;
    };
  };

  return Object.fromEntries(
    Object.entries(schema).map(([name, schemaRule]) => [
      name,
      {
        onChange: validateWith(schemaRule),
        onSubmit: validateWith(schemaRule),
      },
    ])
  );
}

export function Form({ form, schema, validators, className, children, onSubmit }: AppFormWrapperProps) {
  const resolvedValidators = validators ?? (schema ? createZodFieldValidators(schema) : undefined);

  return (
    <formValidatorsContext.Provider value={resolvedValidators}>
      <form.AppForm>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
            onSubmit?.(e);
          }}
          className={clsx(className)}
        >
          {children}
        </form>
      </form.AppForm>
    </formValidatorsContext.Provider>
  );
}

export function FormSubmit({ form, children }: FormSubmitProps) {
  return <form.Subscribe selector={(state) => state.isSubmitting}>{children}</form.Subscribe>;
}

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {},
  formComponents: {},
});
