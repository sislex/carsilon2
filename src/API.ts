/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateRoutesInput = {
  id?: string | null,
  username: string,
  userData: string,
  timeStart: string,
  addressStart: string,
  addressFinish: string,
  coordinatesStart: string,
  coordinatesFinish: string,
  description?: string | null,
};

export type UpdateRoutesInput = {
  id: string,
  username?: string | null,
  userData?: string | null,
  timeStart?: string | null,
  addressStart?: string | null,
  addressFinish?: string | null,
  coordinatesStart?: string | null,
  coordinatesFinish?: string | null,
  description?: string | null,
};

export type DeleteRoutesInput = {
  id?: string | null,
};

export type CreateFeedbackInput = {
  id?: string | null,
  email: string,
  text: string,
};

export type UpdateFeedbackInput = {
  id: string,
  email?: string | null,
  text?: string | null,
};

export type DeleteFeedbackInput = {
  id?: string | null,
};

export type ModelRoutesFilterInput = {
  id?: ModelIDFilterInput | null,
  username?: ModelStringFilterInput | null,
  userData?: ModelStringFilterInput | null,
  timeStart?: ModelStringFilterInput | null,
  addressStart?: ModelStringFilterInput | null,
  addressFinish?: ModelStringFilterInput | null,
  coordinatesStart?: ModelStringFilterInput | null,
  coordinatesFinish?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelRoutesFilterInput | null > | null,
  or?: Array< ModelRoutesFilterInput | null > | null,
  not?: ModelRoutesFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFeedbackFilterInput = {
  id?: ModelIDFilterInput | null,
  email?: ModelStringFilterInput | null,
  text?: ModelStringFilterInput | null,
  and?: Array< ModelFeedbackFilterInput | null > | null,
  or?: Array< ModelFeedbackFilterInput | null > | null,
  not?: ModelFeedbackFilterInput | null,
};

export type CreateRoutesMutationVariables = {
  input: CreateRoutesInput,
};

export type CreateRoutesMutation = {
  createRoutes:  {
    __typename: "Routes",
    id: string,
    username: string,
    userData: string,
    timeStart: string,
    addressStart: string,
    addressFinish: string,
    coordinatesStart: string,
    coordinatesFinish: string,
    description: string | null,
  } | null,
};

export type UpdateRoutesMutationVariables = {
  input: UpdateRoutesInput,
};

export type UpdateRoutesMutation = {
  updateRoutes:  {
    __typename: "Routes",
    id: string,
    username: string,
    userData: string,
    timeStart: string,
    addressStart: string,
    addressFinish: string,
    coordinatesStart: string,
    coordinatesFinish: string,
    description: string | null,
  } | null,
};

export type DeleteRoutesMutationVariables = {
  input: DeleteRoutesInput,
};

export type DeleteRoutesMutation = {
  deleteRoutes:  {
    __typename: "Routes",
    id: string,
    username: string,
    userData: string,
    timeStart: string,
    addressStart: string,
    addressFinish: string,
    coordinatesStart: string,
    coordinatesFinish: string,
    description: string | null,
  } | null,
};

export type CreateFeedbackMutationVariables = {
  input: CreateFeedbackInput,
};

export type CreateFeedbackMutation = {
  createFeedback:  {
    __typename: "Feedback",
    id: string,
    email: string,
    text: string,
  } | null,
};

export type UpdateFeedbackMutationVariables = {
  input: UpdateFeedbackInput,
};

export type UpdateFeedbackMutation = {
  updateFeedback:  {
    __typename: "Feedback",
    id: string,
    email: string,
    text: string,
  } | null,
};

export type DeleteFeedbackMutationVariables = {
  input: DeleteFeedbackInput,
};

export type DeleteFeedbackMutation = {
  deleteFeedback:  {
    __typename: "Feedback",
    id: string,
    email: string,
    text: string,
  } | null,
};

export type GetRoutesQueryVariables = {
  id: string,
};

export type GetRoutesQuery = {
  getRoutes:  {
    __typename: "Routes",
    id: string,
    username: string,
    userData: string,
    timeStart: string,
    addressStart: string,
    addressFinish: string,
    coordinatesStart: string,
    coordinatesFinish: string,
    description: string | null,
  } | null,
};

export type ListRoutessQueryVariables = {
  filter?: ModelRoutesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutessQuery = {
  listRoutess:  {
    __typename: "ModelRoutesConnection",
    items:  Array< {
      __typename: "Routes",
      id: string,
      username: string,
      userData: string,
      timeStart: string,
      addressStart: string,
      addressFinish: string,
      coordinatesStart: string,
      coordinatesFinish: string,
      description: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFeedbackQueryVariables = {
  id: string,
};

export type GetFeedbackQuery = {
  getFeedback:  {
    __typename: "Feedback",
    id: string,
    email: string,
    text: string,
  } | null,
};

export type ListFeedbacksQueryVariables = {
  filter?: ModelFeedbackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedbacksQuery = {
  listFeedbacks:  {
    __typename: "ModelFeedbackConnection",
    items:  Array< {
      __typename: "Feedback",
      id: string,
      email: string,
      text: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRoutesSubscription = {
  onCreateRoutes:  {
    __typename: "Routes",
    id: string,
    username: string,
    userData: string,
    timeStart: string,
    addressStart: string,
    addressFinish: string,
    coordinatesStart: string,
    coordinatesFinish: string,
    description: string | null,
  } | null,
};

export type OnUpdateRoutesSubscription = {
  onUpdateRoutes:  {
    __typename: "Routes",
    id: string,
    username: string,
    userData: string,
    timeStart: string,
    addressStart: string,
    addressFinish: string,
    coordinatesStart: string,
    coordinatesFinish: string,
    description: string | null,
  } | null,
};

export type OnDeleteRoutesSubscription = {
  onDeleteRoutes:  {
    __typename: "Routes",
    id: string,
    username: string,
    userData: string,
    timeStart: string,
    addressStart: string,
    addressFinish: string,
    coordinatesStart: string,
    coordinatesFinish: string,
    description: string | null,
  } | null,
};

export type OnCreateFeedbackSubscription = {
  onCreateFeedback:  {
    __typename: "Feedback",
    id: string,
    email: string,
    text: string,
  } | null,
};

export type OnUpdateFeedbackSubscription = {
  onUpdateFeedback:  {
    __typename: "Feedback",
    id: string,
    email: string,
    text: string,
  } | null,
};

export type OnDeleteFeedbackSubscription = {
  onDeleteFeedback:  {
    __typename: "Feedback",
    id: string,
    email: string,
    text: string,
  } | null,
};
