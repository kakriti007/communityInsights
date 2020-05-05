/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateDiscourseInput = {
  discourse_id: number;
  content?: string | null;
  source_id?: number | null;
  region?: string | null;
  country_code?: number | null;
  created_time?: string | null;
  imported_time?: string | null;
};

export type UpdateDiscourseInput = {
  discourse_id: number;
  content?: string | null;
  source_id?: number | null;
  region?: string | null;
  country_code?: number | null;
  created_time?: string | null;
  imported_time?: string | null;
};

export type CreateImpactAreaInput = {
  impact_area_id: number;
  tag?: string | null;
  source_parent_id?: number | null;
  impact_parent_id?: number | null;
  source_ontology?: string | null;
};

export type UpdateImpactAreaInput = {
  impact_area_id: number;
  tag?: string | null;
  source_parent_id?: number | null;
  impact_parent_id?: number | null;
  source_ontology?: string | null;
};

export type CreateModelVersionInput = {
  model_id: number;
  model_task?: string | null;
  created_time?: string | null;
};

export type UpdateModelVersionInput = {
  model_id: number;
  model_task?: string | null;
  created_time?: string | null;
};

export type CreatePlatformInput = {
  platform_id: number;
  platform_desc?: string | null;
};

export type UpdatePlatformInput = {
  platform_id: number;
  platform_desc?: string | null;
};

export type CreateSourceInput = {
  source_id: number;
  platform_id?: number | null;
  source_desc?: string | null;
};

export type UpdateSourceInput = {
  source_id: number;
  platform_id?: number | null;
  source_desc?: string | null;
};

export type DeleteDiscourseMutation = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  country_code: number | null;
  created_time: string | null;
  imported_time: string | null;
};

export type CreateDiscourseMutation = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  country_code: number | null;
  created_time: string | null;
  imported_time: string | null;
};

export type UpdateDiscourseMutation = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  country_code: number | null;
  created_time: string | null;
  imported_time: string | null;
};

export type DeleteImpactAreaMutation = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type CreateImpactAreaMutation = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type UpdateImpactAreaMutation = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type DeleteModelVersionMutation = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type CreateModelVersionMutation = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type UpdateModelVersionMutation = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type DeletePlatformMutation = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
};

export type CreatePlatformMutation = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
};

export type UpdatePlatformMutation = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
};

export type DeleteSourceMutation = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
};

export type CreateSourceMutation = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
};

export type UpdateSourceMutation = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
};

export type GetDiscourseQuery = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  country_code: number | null;
  created_time: string | null;
  imported_time: string | null;
};

export type ListDiscoursesQuery = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  country_code: number | null;
  created_time: string | null;
  imported_time: string | null;
};

export type GetImpactAreaQuery = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type ListImpactAreasQuery = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type ListImpactTreeQuery = {
  __typename: "ImpactTree";
  tag: string | null;
  level2: string | null;
  level1: string | null;
  level0: string | null;
};

export type GetModelVersionQuery = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type ListModelVersionsQuery = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type GetPlatformQuery = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
};

export type ListPlatformsQuery = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
};

export type GetSourceQuery = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
};

export type ListSourcesQuery = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
};

export type ListTrendingTopicsQuery = {
  __typename: "TrendingTopics";
  topic: string | null;
  counts: number;
  n_gram: number;
  created_time: string | null;
};

export type ListDiscourseHashtagsQuery = {
  __typename: "DiscourseHashtags";
  counts: number | null;
  hashtag: string;
};

export type ListTrendingHashtagsQuery = {
  __typename: "listTrendingHashtags";
  counts: number | null;
  hashtag: string;
  sentiment: number | null;
  negative: number | null;
  neutral: number | null;
  positive: number | null;
  start_date: string | null;
};

export type ListTrendingTopicsMasterQuery = {
  __typename: "listTrendingTopicsMaster";
  topic: string;
  counts: number | null;
  sentiment: number | null;
  positive: number | null;
  negative: number | null;
  neutral: number | null;
  created_date: string | null;
};

export type DiscourseTrendingTopicsQuery = {
  __typename: "discourseTrendingTopics";
  counts: number | null;
  sentiment	: number | null;
  topic: string;
  date:string | null
};

export type HashtagMasterQuery = {
  __typename: "hashtagMaster";
  counts: number | null;
  sentiment	: number | null;
  topic: string;
  date:string | null
};

export type OnCreateDiscourseSubscription = {
  __typename: "Discourse";
  discourse_id: number;
  content: string | null;
  source_id: number | null;
  region: string | null;
  country_code: number | null;
  created_time: string | null;
  imported_time: string | null;
};

export type OnCreateImpactAreaSubscription = {
  __typename: "ImpactArea";
  impact_area_id: number;
  tag: string | null;
  source_parent_id: number | null;
  impact_parent_id: number | null;
  source_ontology: string | null;
};

export type OnCreateModelVersionSubscription = {
  __typename: "ModelVersion";
  model_id: number;
  model_task: string | null;
  created_time: string | null;
};

export type OnCreatePlatformSubscription = {
  __typename: "Platform";
  platform_id: number;
  platform_desc: string | null;
};

export type OnCreateSourceSubscription = {
  __typename: "Source";
  source_id: number;
  platform_id: number | null;
  source_desc: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async DeleteDiscourse(
    discourse_id: number
  ): Promise<DeleteDiscourseMutation> {
    const statement = `mutation DeleteDiscourse($discourse_id: Int!) {
        deleteDiscourse(discourse_id: $discourse_id) {
          __typename
          discourse_id
          content
          source_id
          region
          country_code
          created_time
          imported_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      discourse_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDiscourseMutation>response.data.deleteDiscourse;
  }
  async CreateDiscourse(
    createDiscourseInput: CreateDiscourseInput
  ): Promise<CreateDiscourseMutation> {
    const statement = `mutation CreateDiscourse($createDiscourseInput: CreateDiscourseInput!) {
        createDiscourse(createDiscourseInput: $createDiscourseInput) {
          __typename
          discourse_id
          content
          source_id
          region
          country_code
          created_time
          imported_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createDiscourseInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDiscourseMutation>response.data.createDiscourse;
  }
  async UpdateDiscourse(
    updateDiscourseInput: UpdateDiscourseInput
  ): Promise<UpdateDiscourseMutation> {
    const statement = `mutation UpdateDiscourse($updateDiscourseInput: UpdateDiscourseInput!) {
        updateDiscourse(updateDiscourseInput: $updateDiscourseInput) {
          __typename
          discourse_id
          content
          source_id
          region
          country_code
          created_time
          imported_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateDiscourseInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDiscourseMutation>response.data.updateDiscourse;
  }
  async DeleteImpactArea(
    impact_area_id: number
  ): Promise<DeleteImpactAreaMutation> {
    const statement = `mutation DeleteImpactArea($impact_area_id: Int!) {
        deleteImpactArea(impact_area_id: $impact_area_id) {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`;
    const gqlAPIServiceArguments: any = {
      impact_area_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteImpactAreaMutation>response.data.deleteImpactArea;
  }
  async CreateImpactArea(
    createImpactAreaInput: CreateImpactAreaInput
  ): Promise<CreateImpactAreaMutation> {
    const statement = `mutation CreateImpactArea($createImpactAreaInput: CreateImpactAreaInput!) {
        createImpactArea(createImpactAreaInput: $createImpactAreaInput) {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createImpactAreaInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateImpactAreaMutation>response.data.createImpactArea;
  }
  async UpdateImpactArea(
    updateImpactAreaInput: UpdateImpactAreaInput
  ): Promise<UpdateImpactAreaMutation> {
    const statement = `mutation UpdateImpactArea($updateImpactAreaInput: UpdateImpactAreaInput!) {
        updateImpactArea(updateImpactAreaInput: $updateImpactAreaInput) {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateImpactAreaInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateImpactAreaMutation>response.data.updateImpactArea;
  }
  async DeleteModelVersion(
    model_id: number
  ): Promise<DeleteModelVersionMutation> {
    const statement = `mutation DeleteModelVersion($model_id: Int!) {
        deleteModelVersion(model_id: $model_id) {
          __typename
          model_id
          model_task
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      model_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteModelVersionMutation>response.data.deleteModelVersion;
  }
  async CreateModelVersion(
    createModelVersionInput: CreateModelVersionInput
  ): Promise<CreateModelVersionMutation> {
    const statement = `mutation CreateModelVersion($createModelVersionInput: CreateModelVersionInput!) {
        createModelVersion(createModelVersionInput: $createModelVersionInput) {
          __typename
          model_id
          model_task
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createModelVersionInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateModelVersionMutation>response.data.createModelVersion;
  }
  async UpdateModelVersion(
    updateModelVersionInput: UpdateModelVersionInput
  ): Promise<UpdateModelVersionMutation> {
    const statement = `mutation UpdateModelVersion($updateModelVersionInput: UpdateModelVersionInput!) {
        updateModelVersion(updateModelVersionInput: $updateModelVersionInput) {
          __typename
          model_id
          model_task
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateModelVersionInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateModelVersionMutation>response.data.updateModelVersion;
  }
  async DeletePlatform(platform_id: number): Promise<DeletePlatformMutation> {
    const statement = `mutation DeletePlatform($platform_id: Int!) {
        deletePlatform(platform_id: $platform_id) {
          __typename
          platform_id
          platform_desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      platform_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePlatformMutation>response.data.deletePlatform;
  }
  async CreatePlatform(
    createPlatformInput: CreatePlatformInput
  ): Promise<CreatePlatformMutation> {
    const statement = `mutation CreatePlatform($createPlatformInput: CreatePlatformInput!) {
        createPlatform(createPlatformInput: $createPlatformInput) {
          __typename
          platform_id
          platform_desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createPlatformInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePlatformMutation>response.data.createPlatform;
  }
  async UpdatePlatform(
    updatePlatformInput: UpdatePlatformInput
  ): Promise<UpdatePlatformMutation> {
    const statement = `mutation UpdatePlatform($updatePlatformInput: UpdatePlatformInput!) {
        updatePlatform(updatePlatformInput: $updatePlatformInput) {
          __typename
          platform_id
          platform_desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updatePlatformInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePlatformMutation>response.data.updatePlatform;
  }
  async DeleteSource(source_id: number): Promise<DeleteSourceMutation> {
    const statement = `mutation DeleteSource($source_id: Int!) {
        deleteSource(source_id: $source_id) {
          __typename
          source_id
          platform_id
          source_desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      source_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSourceMutation>response.data.deleteSource;
  }
  async CreateSource(
    createSourceInput: CreateSourceInput
  ): Promise<CreateSourceMutation> {
    const statement = `mutation CreateSource($createSourceInput: CreateSourceInput!) {
        createSource(createSourceInput: $createSourceInput) {
          __typename
          source_id
          platform_id
          source_desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createSourceInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSourceMutation>response.data.createSource;
  }
  async UpdateSource(
    updateSourceInput: UpdateSourceInput
  ): Promise<UpdateSourceMutation> {
    const statement = `mutation UpdateSource($updateSourceInput: UpdateSourceInput!) {
        updateSource(updateSourceInput: $updateSourceInput) {
          __typename
          source_id
          platform_id
          source_desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateSourceInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSourceMutation>response.data.updateSource;
  }
  async GetDiscourse(discourse_id: number): Promise<GetDiscourseQuery> {
    const statement = `query GetDiscourse($discourse_id: Int!) {
        getDiscourse(discourse_id: $discourse_id) {
          __typename
          discourse_id
          content
          source_id
          region
          country_code
          created_time
          imported_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      discourse_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDiscourseQuery>response.data.getDiscourse;
  }
  async ListDiscourses(): Promise<Array<ListDiscoursesQuery>> {
    const statement = `query ListDiscourses {
        listDiscourses {
          __typename
          discourse_id
          content
          source_id
          region
          country_code
          created_time
          imported_time
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListDiscoursesQuery>>response.data.listDiscourses;
  }
  async GetImpactArea(impact_area_id: number): Promise<GetImpactAreaQuery> {
    const statement = `query GetImpactArea($impact_area_id: Int!) {
        getImpactArea(impact_area_id: $impact_area_id) {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`;
    const gqlAPIServiceArguments: any = {
      impact_area_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetImpactAreaQuery>response.data.getImpactArea;
  }
  async ListImpactAreas(): Promise<Array<ListImpactAreasQuery>> {
    const statement = `query ListImpactAreas {
        listImpactAreas {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListImpactAreasQuery>>response.data.listImpactAreas;
  }
  async ListImpactTree(): Promise<Array<ListImpactTreeQuery>> {
    const statement = `query ListImpactTree {
        listImpactTree {
          __typename
          tag
          level2
          level1
          level0
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListImpactTreeQuery>>response.data.listImpactTree;
  }
  async GetModelVersion(model_id: number): Promise<GetModelVersionQuery> {
    const statement = `query GetModelVersion($model_id: Int!) {
        getModelVersion(model_id: $model_id) {
          __typename
          model_id
          model_task
          created_time
        }
      }`;
    const gqlAPIServiceArguments: any = {
      model_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetModelVersionQuery>response.data.getModelVersion;
  }
  async ListModelVersions(): Promise<Array<ListModelVersionsQuery>> {
    const statement = `query ListModelVersions {
        listModelVersions {
          __typename
          model_id
          model_task
          created_time
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListModelVersionsQuery>>response.data.listModelVersions;
  }
  async GetPlatform(platform_id: number): Promise<GetPlatformQuery> {
    const statement = `query GetPlatform($platform_id: Int!) {
        getPlatform(platform_id: $platform_id) {
          __typename
          platform_id
          platform_desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      platform_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlatformQuery>response.data.getPlatform;
  }
  async ListPlatforms(): Promise<Array<ListPlatformsQuery>> {
    const statement = `query ListPlatforms {
        listPlatforms {
          __typename
          platform_id
          platform_desc
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListPlatformsQuery>>response.data.listPlatforms;
  }
  async GetSource(source_id: number): Promise<GetSourceQuery> {
    const statement = `query GetSource($source_id: Int!) {
        getSource(source_id: $source_id) {
          __typename
          source_id
          platform_id
          source_desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      source_id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSourceQuery>response.data.getSource;
  }
  async ListSources(): Promise<Array<ListSourcesQuery>> {
    const statement = `query ListSources {
        listSources {
          __typename
          source_id
          platform_id
          source_desc
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListSourcesQuery>>response.data.listSources;
  }
  async ListTrendingTopics(): Promise<Array<ListTrendingTopicsQuery>> {
    const statement = `query ListTrendingTopics {
        listTrendingTopics {
          __typename
          topic
          counts
          n_gram
          created_time
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListTrendingTopicsQuery>>response.data.listTrendingTopics;
  }
  async ListDiscourseHashtags(): Promise<Array<ListDiscourseHashtagsQuery>> {
    const statement = `query ListDiscourseHashtags {
        listDiscourseHashtags {
          __typename
          counts
          hashtag
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListDiscourseHashtagsQuery>>(
      response.data.listDiscourseHashtags
    );
  }
  async ListTrendingHashtags(
    start: string,
    end: string
  ): Promise<Array<ListTrendingHashtagsQuery>> {
    const statement = `query ListTrendingHashtags($start: String!, $end: String!) {
        listTrendingHashtags(start: $start, end: $end) {
          __typename
          counts
          hashtag
          sentiment
          negative
          neutral
          positive
          start_date
        }
      }`;
    const gqlAPIServiceArguments: any = {
      start,
      end
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<ListTrendingHashtagsQuery>>response.data.listTrendingHashtags;
  }
  async ListTrendingTopicsMaster(
    start: string,
    end: string,
    region: string
  ): Promise<Array<ListTrendingTopicsMasterQuery>> {
    const statement = `query ListTrendingTopicsMaster($start: String!, $end: String!, $region: String!) {
        listTrendingTopicsMaster(start: $start, end: $end, region: $region) {
          __typename
          topic
          counts
          sentiment
          positive
          negative
          neutral
          created_date
        }
      }`;
    const gqlAPIServiceArguments: any = {
      start,
      end,
      region
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<ListTrendingTopicsMasterQuery>>(
      response.data.listTrendingTopicsMaster
    );
  }
  async DiscourseTrendingTopics(
    start: string,
    end: string,
    region: string,
    topic: string
  ): Promise<Array<DiscourseTrendingTopicsQuery>> {
    const statement = `query DiscourseTrendingTopics($start: String!, $end: String!, $region: String!, $topic: String!) {
        discourseTrendingTopics(start: $start, end: $end, region: $region, topic: $topic) {
          __typename
          counts
          sentiment	
          topic
          date
        }
      }`;
    const gqlAPIServiceArguments: any = {
      start,
      end,
      region,
      topic
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<DiscourseTrendingTopicsQuery>>(
      response.data.discourseTrendingTopics
    );
  }
  async HashtagMaster(
    start: string,
    end: string,
    region: string,
    hashtag: string
  ): Promise<Array<HashtagMasterQuery>> {
    const statement = `query HashtagMaster($start: String!, $end: String!, $region: String!, $hashtag: String!) {
        hashtagMaster(start: $start, end: $end, region: $region, hashtag: $hashtag) {
          __typename
          counts
          topic
          sentiment
          date
        }
      }`;
    const gqlAPIServiceArguments: any = {
      start,
      end,
      region,
      hashtag
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<HashtagMasterQuery>>response.data.hashtagMaster;
  }
  OnCreateDiscourseListener: Observable<
    OnCreateDiscourseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDiscourse {
        onCreateDiscourse {
          __typename
          discourse_id
          content
          source_id
          region
          country_code
          created_time
          imported_time
        }
      }`
    )
  ) as Observable<OnCreateDiscourseSubscription>;

  OnCreateImpactAreaListener: Observable<
    OnCreateImpactAreaSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateImpactArea {
        onCreateImpactArea {
          __typename
          impact_area_id
          tag
          source_parent_id
          impact_parent_id
          source_ontology
        }
      }`
    )
  ) as Observable<OnCreateImpactAreaSubscription>;

  OnCreateModelVersionListener: Observable<
    OnCreateModelVersionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateModelVersion {
        onCreateModelVersion {
          __typename
          model_id
          model_task
          created_time
        }
      }`
    )
  ) as Observable<OnCreateModelVersionSubscription>;

  OnCreatePlatformListener: Observable<
    OnCreatePlatformSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlatform {
        onCreatePlatform {
          __typename
          platform_id
          platform_desc
        }
      }`
    )
  ) as Observable<OnCreatePlatformSubscription>;

  OnCreateSourceListener: Observable<OnCreateSourceSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateSource {
        onCreateSource {
          __typename
          source_id
          platform_id
          source_desc
        }
      }`
    )
  ) as Observable<OnCreateSourceSubscription>;
}
