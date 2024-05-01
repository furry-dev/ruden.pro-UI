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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateGenreInput = {
  /** Manga titles */
  names: Array<LocalizedStrDto>;
};

export type CreateMangaInput = {
  /** Manga age rating */
  ageRating: MangaAgeRatingEnum;
  /** Manga people _id list */
  artists: Array<Scalars['String']['input']>;
  /** Manga people _id list */
  authors: Array<Scalars['String']['input']>;
  /** Manga descriptions */
  covers: Array<LocalizedImageDto>;
  /** Manga descriptions */
  descriptions: Array<LocalizedStrDto>;
  /** Manga genres _id list */
  genres: Array<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  /** Manga status */
  status: MangaStatusEnum;
  /** Manga titles */
  titles: Array<LocalizedStrDto>;
  /** Manga year */
  year: Scalars['Int']['input'];
};

export type CreatePersonInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  /** Manga descriptions */
  bio: Array<LocalizedStrDto>;
  /** Year of birth */
  birthYear?: InputMaybe<Scalars['Int']['input']>;
  /** Manga titles */
  name: Array<LocalizedStrDto>;
  /** Place where person leave */
  place?: InputMaybe<Scalars['String']['input']>;
  /** Manga descriptions */
  socialLinks: Array<LabeledStrDto>;
};

export type GenreEntity = {
  __typename?: 'GenreEntity';
  _id: Scalars['String']['output'];
  names: Array<LocalizedStrEntity>;
};

export type LabeledStrDto = {
  /** Lang code */
  label: Scalars['String']['input'];
  /** Some text */
  text: Scalars['String']['input'];
};

export type LabeledStrEntity = {
  __typename?: 'LabeledStrEntity';
  label: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type LocalizedImageDto = {
  /** Path to image */
  imagePath: Scalars['String']['input'];
  /** Lang code */
  lang: Scalars['String']['input'];
};

export type LocalizedImageEntity = {
  __typename?: 'LocalizedImageEntity';
  imagePath: Scalars['String']['output'];
  lang: Scalars['String']['output'];
};

export type LocalizedStrDto = {
  /** Lang code */
  lang: Scalars['String']['input'];
  /** Some text */
  text: Scalars['String']['input'];
};

export type LocalizedStrEntity = {
  __typename?: 'LocalizedStrEntity';
  lang: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export enum MangaAgeRatingEnum {
  R_12 = 'R_12',
  R_16 = 'R_16',
  R_18 = 'R_18',
  RH = 'R_H'
}

export type MangaEntity = {
  __typename?: 'MangaEntity';
  _id: Scalars['String']['output'];
  ageRating: MangaAgeRatingEnum;
  artists: Array<PersonEntity>;
  authors: Array<PersonEntity>;
  covers: Array<LocalizedImageEntity>;
  createdAt: Scalars['DateTime']['output'];
  descriptions: Array<LocalizedStrEntity>;
  genres: Array<GenreEntity>;
  slug: Scalars['String']['output'];
  status: MangaStatusEnum;
  titles: Array<LocalizedStrEntity>;
  updatedAt: Scalars['DateTime']['output'];
  year: Scalars['Int']['output'];
};

export enum MangaStatusEnum {
  Finished = 'finished',
  Ongoing = 'ongoing',
  Released = 'released'
}

export type Mutation = {
  __typename?: 'Mutation';
  createGenre: GenreEntity;
  createManga: MangaEntity;
  createPerson: PersonEntity;
  removeGenre: GenreEntity;
  removeManga: MangaEntity;
  removePerson: PersonEntity;
  updateGenre: GenreEntity;
  updateManga: MangaEntity;
  updatePerson: PersonEntity;
};


export type MutationCreateGenreArgs = {
  createGenreInput: CreateGenreInput;
};


export type MutationCreateMangaArgs = {
  createMangaInput: CreateMangaInput;
};


export type MutationCreatePersonArgs = {
  createPersonInput: CreatePersonInput;
};


export type MutationRemoveGenreArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveMangaArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemovePersonArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateGenreArgs = {
  updateGenreInput: UpdateGenreInput;
};


export type MutationUpdateMangaArgs = {
  updateMangaInput: UpdateMangaInput;
};


export type MutationUpdatePersonArgs = {
  updatePersonInput: UpdatePersonInput;
};

export type PersonEntity = {
  __typename?: 'PersonEntity';
  _id: Scalars['String']['output'];
  avatar?: Maybe<Scalars['String']['output']>;
  bio: Array<LocalizedStrEntity>;
  birthYear?: Maybe<Scalars['Int']['output']>;
  name: Array<LocalizedStrEntity>;
  place?: Maybe<Scalars['String']['output']>;
  socialLinks: Array<LabeledStrEntity>;
};

export type Query = {
  __typename?: 'Query';
  genre: GenreEntity;
  genres: Array<GenreEntity>;
  getHello: Scalars['String']['output'];
  manga: MangaEntity;
  mangas: Array<MangaEntity>;
  people: Array<PersonEntity>;
  person: PersonEntity;
};


export type QueryGenreArgs = {
  id: Scalars['String']['input'];
};


export type QueryMangaArgs = {
  fieldsFilterLangCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  idOrSlug: Scalars['String']['input'];
};


export type QueryMangasArgs = {
  fieldsFilterLangCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  genreIds?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryPersonArgs = {
  id: Scalars['String']['input'];
};

export type UpdateGenreInput = {
  _id: Scalars['String']['input'];
  /** Manga titles */
  names?: InputMaybe<Array<LocalizedStrDto>>;
};

export type UpdateMangaInput = {
  _id: Scalars['String']['input'];
  /** Manga age rating */
  ageRating?: InputMaybe<MangaAgeRatingEnum>;
  /** Manga people _id list */
  artists?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Manga people _id list */
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Manga descriptions */
  covers?: InputMaybe<Array<LocalizedImageDto>>;
  /** Manga descriptions */
  descriptions?: InputMaybe<Array<LocalizedStrDto>>;
  /** Manga genres _id list */
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Manga status */
  status?: InputMaybe<MangaStatusEnum>;
  /** Manga titles */
  titles?: InputMaybe<Array<LocalizedStrDto>>;
  /** Manga year */
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePersonInput = {
  _id: Scalars['String']['input'];
  avatar?: InputMaybe<Scalars['String']['input']>;
  /** Manga descriptions */
  bio?: InputMaybe<Array<LocalizedStrDto>>;
  /** Year of birth */
  birthYear?: InputMaybe<Scalars['Int']['input']>;
  /** Manga titles */
  name?: InputMaybe<Array<LocalizedStrDto>>;
  /** Place where person leave */
  place?: InputMaybe<Scalars['String']['input']>;
  /** Manga descriptions */
  socialLinks?: InputMaybe<Array<LabeledStrDto>>;
};

export type ExampleQueryQueryVariables = Exact<{
  idOrSlug: Scalars['String']['input'];
  fieldsFilterLangCodes?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type ExampleQueryQuery = { __typename?: 'Query', manga: { __typename?: 'MangaEntity', year: number, status: MangaStatusEnum, createdAt: any, covers: Array<{ __typename?: 'LocalizedImageEntity', imagePath: string, lang: string }>, titles: Array<{ __typename?: 'LocalizedStrEntity', lang: string, text: string }>, descriptions: Array<{ __typename?: 'LocalizedStrEntity', lang: string, text: string }>, genres: Array<{ __typename?: 'GenreEntity', names: Array<{ __typename?: 'LocalizedStrEntity', lang: string, text: string }> }>, authors: Array<{ __typename?: 'PersonEntity', _id: string, name: Array<{ __typename?: 'LocalizedStrEntity', lang: string, text: string }> }>, artists: Array<{ __typename?: 'PersonEntity', _id: string, name: Array<{ __typename?: 'LocalizedStrEntity', lang: string, text: string }> }> } };

export type QueryQueryVariables = Exact<{
  fieldsFilterLangCodes?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type QueryQuery = { __typename?: 'Query', mangas: Array<{ __typename?: 'MangaEntity', _id: string, ageRating: MangaAgeRatingEnum, slug: string, covers: Array<{ __typename?: 'LocalizedImageEntity', lang: string, imagePath: string }>, titles: Array<{ __typename?: 'LocalizedStrEntity', lang: string, text: string }>, genres: Array<{ __typename?: 'GenreEntity', names: Array<{ __typename?: 'LocalizedStrEntity', lang: string, text: string }> }> }> };


export const ExampleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExampleQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idOrSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fieldsFilterLangCodes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manga"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idOrSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idOrSlug"}}},{"kind":"Argument","name":{"kind":"Name","value":"fieldsFilterLangCodes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fieldsFilterLangCodes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"covers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"descriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"names"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ExampleQueryQuery, ExampleQueryQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fieldsFilterLangCodes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mangas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fieldsFilterLangCodes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fieldsFilterLangCodes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"ageRating"}},{"kind":"Field","name":{"kind":"Name","value":"covers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"names"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;