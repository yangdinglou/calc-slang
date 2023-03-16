// Type definitions for ESTree AST specification
// Project: https://github.com/estree/estree
// Definitions by: RReverser <https://github.com/RReverser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This definition file follows a somewhat unusual format. ESTree allows
// runtime type checks based on the `type` parameter. In order to explain this
// to typescript we want to use discriminated union types:
// https://github.com/Microsoft/TypeScript/pull/9163
//
// For ESTree this is a bit tricky because the high level interfaces like
// Node or Function are pulling double duty. We want to pass common fields down
// to the interfaces that extend them (like Identifier or
// ArrowFunctionExpression), but you can't extend a type union or enforce
// common fields on them. So we've split the high level interfaces into two
// types, a base type which passes down inherited fields, and a type union of
// all types which extend the base type. Only the type union is exported, and
// the union is how other types refer to the collection of inheriting types.
//
// This makes the definitions file here somewhat more difficult to maintain,
// but it has the notable advantage of making ESTree much easier to use as
// an end user.

interface BaseNodeWithoutComments {
  // Every leaf interface that extends BaseNode must specify a type property.
  // The type property should be a string literal. For example, Identifier
  // has: `type: "Identifier"`
  type: string
  loc?: SourceLocation | null | undefined
  range?: [number, number] | undefined
}

interface BaseNode extends BaseNodeWithoutComments {
  leadingComments?: Array<Comment> | undefined
  trailingComments?: Array<Comment> | undefined
}

interface NodeMap {
  Expression: Expression
  Identifier: Identifier
  Literal: Literal
  Pattern: Pattern
  Program: Program
  Statement: Statement
  VariableDeclarator: VariableDeclarator
}

export type Node = NodeMap[keyof NodeMap]

export interface Comment extends BaseNodeWithoutComments {
  type: 'Line' | 'Block'
  value: string
}

export interface SourceLocation {
  source?: string | null | undefined
  start: Position
  end: Position
}

export interface Position {
  /** >= 1 */
  line: number
  /** >= 0 */
  column: number
}

export interface Program extends BaseNode {
  type: 'Program'
  sourceType: 'script' | 'module'
  body: Array<Directive | Statement>
  comments?: Array<Comment> | undefined
}

export interface Directive extends BaseNode {
  type: 'ExpressionStatement'
  expression: Literal
  directive: string
}

export type Statement =
  | ExpressionStatement
  | BlockStatement
  | EmptyStatement
  | ReturnStatement
  | Declaration

type BaseStatement = BaseNode

export interface EmptyStatement extends BaseStatement {
  type: 'EmptyStatement'
}

export interface BlockStatement extends BaseStatement {
  type: 'BlockStatement'
  body: Array<Statement>
  innerComments?: Array<Comment> | undefined
}

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expression: Expression
}

export interface ReturnStatement extends BaseStatement {
  type: 'ReturnStatement'
  argument?: Expression | null | undefined
}

export type Declaration = VariableDeclaration

type BaseDeclaration = BaseStatement

export interface VariableDeclaration extends BaseDeclaration {
  type: 'VariableDeclaration'
  declarations: Array<VariableDeclarator>
  kind: 'var' | 'let' | 'const'
}

export interface VariableDeclarator extends BaseNode {
  type: 'VariableDeclarator'
  id: Pattern
  init?: Expression | null | undefined
}

export interface ExpressionMap {
  ArrayExpression: ArrayExpression
  AssignmentExpression: AssignmentExpression
  BinaryExpression: BinaryExpression
  CallExpression: CallExpression
  ChainExpression: ChainExpression
  Identifier: Identifier
  Literal: Literal
  SequenceExpression: SequenceExpression
  UnaryExpression: UnaryExpression
}

export type Expression = ExpressionMap[keyof ExpressionMap]

export type BaseExpression = BaseNode

type ChainElement = SimpleCallExpression

export interface ChainExpression extends BaseExpression {
  type: 'ChainExpression'
  expression: ChainElement
}

export interface ArrayExpression extends BaseExpression {
  type: 'ArrayExpression'
  elements: Array<Expression | null>
}

export interface SequenceExpression extends BaseExpression {
  type: 'SequenceExpression'
  expressions: Array<Expression>
}

export interface UnaryExpression extends BaseExpression {
  type: 'UnaryExpression'
  operator: UnaryOperator
  prefix: true
  argument: Expression
}

export interface BinaryExpression extends BaseExpression {
  type: 'BinaryExpression'
  operator: BinaryOperator
  left: Expression
  right: Expression
}

export interface AssignmentExpression extends BaseExpression {
  type: 'AssignmentExpression'
  operator: AssignmentOperator
  left: Pattern
  right: Expression
}

interface BaseCallExpression extends BaseExpression {
  callee: Expression
  arguments: Array<Expression>
}
export type CallExpression = SimpleCallExpression

export interface SimpleCallExpression extends BaseCallExpression {
  type: 'CallExpression'
  optional: boolean
}

export type Pattern = Identifier

type BasePattern = BaseNode

export interface Identifier extends BaseNode, BaseExpression, BasePattern {
  type: 'Identifier'
  name: string
}

export type Literal = SimpleLiteral

export interface SimpleLiteral extends BaseNode, BaseExpression {
  type: 'Literal'
  value: string | boolean | number | null
  raw?: string | undefined
}

export type UnaryOperator = '!'

export type BinaryOperator = '+' | '-' | '*' | '/'

export type AssignmentOperator = '='
