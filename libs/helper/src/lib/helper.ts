import algoliasearch from 'algoliasearch';

export function helper(): string {
  return 'helper';
}

export const PAGE_TITLE = 'WorldTradeX - The Future of Food';

export const algolia = algoliasearch('3F1EKTQZV9', 'd53537a2c2ad07b694530cf08f59dc9b');

export const isOwner = (role: string) => role === 'OWNER';
export const isEditor = (role: string) => role === 'EDITOR';
export const isViewer = (role: string) => role === 'VIEWER';