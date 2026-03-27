'use client';

import { AnyFieldApi } from '@tanstack/react-form';
import { cloneElement, isValidElement, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { FormLabel } from './form-label';
import { FormErrorMessage } from './form-error-message';
import { fieldContext, useFormContext, useFormValidatorsContext } from './form';

type FormFieldProps = {
  field?: AnyFieldApi;
  name?: string;
  validators?: any;
  label?: string;
  required?: boolean;
  size?: 'small' | 'middle' | 'large';
  className?: string;
  mapValue?: (value: any) => any;
  mapOnChange?: (value: any) => any;
  children: ReactNode | ReactElement<any> | ((field: AnyFieldApi) => ReactNode);
};

type FormFieldContentProps = {
  field: AnyFieldApi;
  label?: string;
  required?: boolean;
  size?: 'small' | 'middle' | 'large';
  className?: string;
  mapValue?: (value: any) => any;
  mapOnChange?: (value: any) => any;
  children: ReactNode | ReactElement<any> | ((field: AnyFieldApi) => ReactNode);
};

function FormFieldContent({
  field,
  label,
  required,
  size,
  className,
  mapValue,
  mapOnChange,
  children,
}: FormFieldContentProps) {
  const hasSubmitted = field.form.state.submissionAttempts > 0;
  const error =
    (field.state.meta.isTouched || hasSubmitted) && field.state.meta.errors.length > 0
      ? String(field.state.meta.errors[0])
      : undefined;

  const shouldRenderExternalError = () => {
    if (typeof children === 'function' || !isValidElement(children)) {
      return true;
    }

    const childType = children.type as { displayName?: string; name?: string };
    const childName = childType.displayName ?? childType.name;

    const selfHandledErrors = ['Input', 'InputPassword', 'DatePicker', 'TimePicker', 'DateRangePicker'];
    return !selfHandledErrors.includes(childName ?? '');
  };

  const resolveChangedValue = (value: any) => {
    if (value?.target) {
      if ('checked' in value.target) {
        return value.target.checked;
      }
      return value.target.value;
    }

    return value;
  };

  const renderChildren = () => {
    if (typeof children === 'function') {
      return children(field);
    }

    if (!isValidElement(children)) {
      return children;
    }

    const childElement = children as ReactElement<any>;
    const childProps = childElement.props ?? {};

    const currentValue = mapValue ? mapValue(field.state.value) : field.state.value;

    return cloneElement(childElement, {
      ...childProps,
      id: field.name,
      name: field.name,
      size,
      required,
      error,
      onChange: (value: any) => {
        childProps.onChange?.(value);
        const mappedValue = mapOnChange ? mapOnChange(value) : resolveChangedValue(value);

        if (mappedValue === undefined) {
          field.handleChange('' as never);
          return;
        }

        field.handleChange(mappedValue);
      },
      onBlur: (value: any) => {
        childProps.onBlur?.(value);
        field.handleBlur();
      },
      ...(typeof currentValue === 'boolean' ? { checked: currentValue } : { value: currentValue }),
    });
  };

  return (
    <div className={clsx('mb-4', className)}>
      {label && (
        <FormLabel id={field.name} size={size} required={required}>
          {label}
        </FormLabel>
      )}

      <fieldContext.Provider value={field as never}>
        {renderChildren()}
      </fieldContext.Provider>

      {error && shouldRenderExternalError() && <FormErrorMessage error={error} size={size} />}
    </div>
  );
}

function FormFieldByName({ name, validators, ...props }: Omit<FormFieldProps, 'field'> & { name: string }) {
  const form = useFormContext();
  const formValidators = useFormValidatorsContext();
  const resolvedValidators = validators ?? formValidators?.[name];

  return (
    <form.Field name={name as never} validators={resolvedValidators}>
      {(field) => <FormFieldContent field={field as unknown as AnyFieldApi} {...props} />}
    </form.Field>
  );
}

export function FormField(props: FormFieldProps) {
  if (props.field) {
    const { field, ...rest } = props;
    return <FormFieldContent field={field} {...rest} />;
  }

  if (props.name) {
    return <FormFieldByName {...props} name={props.name} />;
  }

  throw new Error('`FormField` requires either `field` or `name`.');
}
