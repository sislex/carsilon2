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
