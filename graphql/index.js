const { join } = require('path')
const { readFileSync } = require('fs')
const { mergeTypeDefs , mergeResolvers } = require('@graphql-tools/merge')

const { responseType } = require('./Response')
const { mailType, mailResolver } = require('./Mail')

const schema = readFileSync(join(__dirname, 'schema.gql'), { encoding: 'utf8'})

const types = [
    schema,
    responseType,
    mailType
]

const resolversDef = [
    mailResolver
]

const typeDefs = mergeTypeDefs(types, {all: true})
const resolvers = mergeResolvers(resolversDef)

module.exports = {
    typeDefs,
    resolvers
}