// tslint:disable
// this is an auto generated file. This will be overwritten

export const getRoutes = `query GetRoutes($id: ID!) {
  getRoutes(id: $id) {
    id
    username
    userData
    timeStart
    addressStart
    addressFinish
    coordinatesStart
    coordinatesFinish
    description
  }
}
`;
export const listRoutess = `query ListRoutess(
  $filter: ModelRoutesFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoutess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      userData
      timeStart
      addressStart
      addressFinish
      coordinatesStart
      coordinatesFinish
      description
    }
    nextToken
  }
}
`;
export const getFeedback = `query GetFeedback($id: ID!) {
  getFeedback(id: $id) {
    id
    email
    text
  }
}
`;
export const listFeedbacks = `query ListFeedbacks(
  $filter: ModelFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      text
    }
    nextToken
  }
}
`;
