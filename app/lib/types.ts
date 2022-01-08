import { FC } from 'react';

export type FCWithClassName<P = {}> = FC<P & { className?: string }>;
