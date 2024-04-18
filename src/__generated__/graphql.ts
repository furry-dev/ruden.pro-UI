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

export enum AgeRating {
  R_12 = 'R_12',
  R_16 = 'R_16',
  R_18 = 'R_18'
}

export type CoverInput = {
  file: Scalars['String']['input'];
  lang: Scalars['Int']['input'];
};

export type DescriptionInput = {
  lang: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Manga = {
  __typename?: 'Manga';
  added: Scalars['String']['output'];
  ageRating: Scalars['String']['output'];
  artist: Array<Maybe<People>>;
  author: Array<Maybe<People>>;
  cover: Array<Maybe<MangaCover>>;
  description: Array<Maybe<MangaDescription>>;
  id: Scalars['Int']['output'];
  publisher: Array<Maybe<Publisher>>;
  title: Array<Maybe<MangaTitle>>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type MangaCover = {
  __typename?: 'MangaCover';
  file: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lang: Scalars['Int']['output'];
  langCodes?: Maybe<Language>;
  mangaId: Scalars['Int']['output'];
};

export type MangaDescription = {
  __typename?: 'MangaDescription';
  id: Scalars['Int']['output'];
  lang: Scalars['Int']['output'];
  langCodes?: Maybe<Language>;
  mangaId: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export enum MangaSorting {
  LatestUpdates = 'LATEST_UPDATES',
  New = 'NEW',
  Popularity = 'POPULARITY'
}

export enum MangaStatus {
  Finish = 'finish',
  Ongoing = 'ongoing',
  Release = 'release'
}

export type MangaTitle = {
  __typename?: 'MangaTitle';
  id: Scalars['Int']['output'];
  lang: Scalars['Int']['output'];
  langCodes?: Maybe<Language>;
  mangaId: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLanguage: Language;
  createManga: Manga;
  createPeople: People;
  createPublisher: Publisher;
};


export type MutationCreateLanguageArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateMangaArgs = {
  age_rating: AgeRating;
  artist?: InputMaybe<Array<PeopleInput>>;
  author?: InputMaybe<Array<PeopleInput>>;
  cover: Array<CoverInput>;
  description: Array<DescriptionInput>;
  publisher?: InputMaybe<Array<PublisherInput>>;
  status: MangaStatus;
  title: Array<TitleInput>;
  year: Scalars['Int']['input'];
};


export type MutationCreatePeopleArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreatePublisherArgs = {
  name: Scalars['String']['input'];
};

export type People = {
  __typename?: 'People';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type PeopleInput = {
  id: Scalars['Int']['input'];
};

export type Publisher = {
  __typename?: 'Publisher';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type PublisherInput = {
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  mangaList: Array<Manga>;
};


export type QueryMangaListArgs = {
  direction?: InputMaybe<SortingDirection>;
  genres?: InputMaybe<Scalars['String']['input']>;
  langId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<MangaSorting>;
};

export enum SortingDirection {
  Desc = 'DESC'
}

export type TitleInput = {
  lang: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};

export type QueryQueryVariables = Exact<{
  langId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
}>;


export type QueryQuery = { __typename?: 'Query', mangaList: Array<{ __typename?: 'Manga', id: number, ageRating: string, cover: Array<{ __typename?: 'MangaCover', file: string } | null>, title: Array<{ __typename?: 'MangaTitle', text: string } | null> }> };

export type GetRecommendedMangasQueryVariables = Exact<{
  langId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
}>;


export type GetRecommendedMangasQuery = { __typename?: 'Query', mangaList: Array<{ __typename?: 'Manga', id: number, ageRating: string, cover: Array<{ __typename?: 'MangaCover', file: string } | null> }> };


export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"langId"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mangaList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"langId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"langId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ageRating"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const GetRecommendedMangasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecommendedMangas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"langId"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mangaList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"langId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"langId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ageRating"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"}}]}}]}}]}}]} as unknown as DocumentNode<GetRecommendedMangasQuery, GetRecommendedMangasQueryVariables>;