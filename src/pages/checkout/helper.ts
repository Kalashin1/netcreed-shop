import { FormEvent } from 'react';
import { z } from 'zod';

export function handleSubmit<T extends z.ZodObject<z.ZodRawShape>>(
  e: FormEvent<HTMLFormElement>,
  Schema: T,
  keys: [keyof z.ZodRawShape]
): [z.infer<T> | null, null | object] {
  e.preventDefault();
  try {
    const _form: Record<keyof z.ZodRawShape, object> = Object.create({});
    for (let i = 0; i < keys.length; i++) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      _form[keys[i]] = e.target ? e.target[keys[i]].value: {};
    }
    return [Schema.parse(_form) as z.infer<T>, null];
  } catch (err: any) {
    const error: any = {};
    error['path'] = err.issues[0].path;
    error['message'] = err.issues[0].message;
    return [null, error];
  }
}