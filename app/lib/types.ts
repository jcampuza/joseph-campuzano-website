import { DataFunctionArgs } from '@remix-run/server-runtime';
import { FC } from 'react';

export type FCWithClassName<P = {}> = FC<P & { className?: string }>;

export type InferRemixLoaderType<T extends (...args: any[]) => any> = Awaited<ReturnType<T>>;

export type LoaderFunctionArgs = DataFunctionArgs;

export type ActionFunctionArgs = DataFunctionArgs;
