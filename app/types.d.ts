interface CustomError extends Error {
  reason: string;
}

export type WagmiError = CustomError | null;
