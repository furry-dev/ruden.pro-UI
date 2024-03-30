/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Manga = {
  __typename?: 'Manga';
  added: Scalars['String']['output'];
  cover: Array<Maybe<MangaCover>>;
  description: Array<Maybe<MangaDescription>>;
  id: Scalars['Int']['output'];
  title: Array<Maybe<MangaTitle>>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type MangaCover = {
  __typename?: 'MangaCover';
  file: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  langCodes?: Maybe<Language>;
  langCodesId: Scalars['Int']['output'];
  mangaId: Scalars['Int']['output'];
};

export type MangaDescription = {
  __typename?: 'MangaDescription';
  id: Scalars['Int']['output'];
  langCodes?: Maybe<Language>;
  langCodesId: Scalars['Int']['output'];
  mangaId: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type MangaTitle = {
  __typename?: 'MangaTitle';
  id: Scalars['Int']['output'];
  langCodes?: Maybe<Language>;
  langCodesId: Scalars['Int']['output'];
  mangaId: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  mangaList: Array<Manga>;
};


export type QueryMangaListArgs = {
  direction?: InputMaybe<Scalars['String']['input']>;
  genres?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Scalars['String']['input']>;
};

export type MangasQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type MangasQuery = { __typename?: 'Query', mangaList: Array<{ __typename?: 'Manga', year?: number | null, added: string, id: number, title: Array<{ __typename?: 'MangaTitle', text: string, langCodes?: { __typename?: 'Language', name: string } | null } | null>, description: Array<{ __typename?: 'MangaDescription', text: string, langCodes?: { __typename?: 'Language', name: string } | null } | null>, cover: Array<{ __typename?: 'MangaCover', file: string, langCodes?: { __typename?: 'Language', name: string } | null } | null> }> };


export const MangasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Mangas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mangaList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"langCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"langCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"added"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"langCodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MangasQuery, MangasQueryVariables>;