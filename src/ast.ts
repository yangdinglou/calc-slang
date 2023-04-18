import { Environment } from './types'

//////////////////////////////// NODES ////////////////////////////////

interface BaseNode {
  // Every leaf interface that extends BaseNode must specify a type property.
  // The type property should be a string literal. For example, Identifier
  // has: `type: "Identifier"`
  type: string
  loc?: SourceLocation | null | undefined
  range?: [number, number] | undefined
}

interface NodeMap {
  Type: Type
  Expression: Expression
  Identifier: Identifier
  Literal: Literal
  NodeArray: NodeArray
  Program: Program
  Statement: Statement
  DeclarationList: DeclarationList
}

export type Node = NodeMap[keyof NodeMap]

export interface NodeArray extends BaseNode {
  type: 'NodeArray'
  nodes: Array<BaseNode>
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

//////////////////////////////// PROGRAM ////////////////////////////////

export interface Program extends BaseNode {
  type: 'Program'
  sourceType: 'script' | 'module'
  smlType: Type
  body: Array<Statement>
}

//////////////////////////////// STATEMENTS ////////////////////////////////

export type Statement = 
  BlockStatement | ExpressionStatement | EmptyStatement | Declaration

interface BaseStatement extends BaseNode {
  smlType: Type
}

export interface EmptyStatement extends BaseStatement {
  type: 'EmptyStatement'
}

export interface BlockStatement extends BaseStatement {
  type: 'BlockStatement'
  body: Array<Statement>
}

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expression: Expression
}

//////////////////////////////// DECLARATIONS ////////////////////////////////

export type Declaration =
  | ValueDeclaration
  | RecValueDeclaration
  | FunctionDeclaration
  | LocalDeclaration
  | DeclarationList

interface BaseDeclaration extends BaseStatement {
  declEnv?: Environment
}

export interface ValueDeclaration extends BaseDeclaration {
  type: 'ValueDeclaration'
  id: Identifier
  init: Expression
}

export interface RecValueDeclaration extends BaseDeclaration {
  type: 'RecValueDeclaration'
  id: Identifier
  lambda: LambdaExpression
}

export interface FunctionDeclaration extends BaseDeclaration {
  type: 'FunctionDeclaration'
  id: Identifier
  params: Array<Pattern>
  body: Expression
}

export interface LocalDeclaration extends BaseDeclaration {
  type: 'LocalDeclaration'
  local: DeclarationList
  body: DeclarationList
}

export interface DeclarationList extends BaseDeclaration {
  type: 'DeclarationList'
  body: Array<Declaration>
}

////////////////////////// EXPRESSIONS & PATTERNS //////////////////////////

export interface ExpressionMap {
  CallExpression: ApplicationExpression
  ConditionalExpression: ConditionalExpression
  Identifier: Identifier
  LambdaExpression: LambdaExpression
  LetExpression: LetExpression
  Literal: Literal
  SequenceExpression: SequenceExpression
  TupleExpression: TupleExpression
  ListExpression: ListExpression
}

export type Expression = ExpressionMap[keyof ExpressionMap]

export interface BaseExpression extends BaseNode {
  smlType: Type
  annotatedType?: Type
  tail?: boolean
}

export interface PatternMap {
  Identifier: Identifier
  Literal: Literal
  TupleExpression: TupleExpression
}

export type Pattern = PatternMap[keyof PatternMap]

export interface BasePattern extends BaseNode {
  smlType: Type
  annotedType?: Type
}

export interface ApplicationExpression extends BaseExpression {
  type: 'ApplicationExpression'
  callee: Expression
  args: Array<Expression>
  isInfix: boolean
}

export interface ConditionalExpression extends BaseExpression {
  type: 'ConditionalExpression'
  pred: Expression
  cons: Expression
  alt: Expression
}

export interface LambdaExpression extends BaseExpression {
  type: 'LambdaExpression'
  smlType: FunctionType
  params: Array<Pattern>
  body: Expression
  recursiveId?: string
}

export interface LetExpression extends BaseExpression {
  type: 'LetExpression'
  declarations: DeclarationList
  body: SequenceExpression
}

export interface SequenceExpression extends BaseExpression {
  type: 'SequenceExpression'
  expressions: Expression[]
}

export interface TupleExpression extends BaseExpression, BasePattern {
  type: 'TupleExpression'
  smlType: TupleType
  elements: Expression[]
}

export interface ListExpression extends BaseExpression {
  smlType: ListType
  type: 'ListExpression'
  elements: Expression[]
}

export interface Identifier extends BaseExpression, BasePattern {
  type: 'Identifier'
  name: string
}

////////////////////////////////// SML TYPES //////////////////////////////////

export type Type = 
  LiteralType | ListType | FunctionType | TupleType | VariableType

export type BaseType = BaseNode

export type TypeType = LiteralTypeType | 'list' | 'function' | 'variable'

export type LiteralTypeType = 'bool' | 'real' | 'int' | 'string' | 'unit'

export interface LiteralType extends BaseType {
  type: LiteralTypeType
}

export interface ListType extends BaseType {
  type: 'list'
  elementType: Type
}

export interface TupleType extends BaseType {
  type: 'tuple'
  elementTypes: Type[]
}

export interface FunctionType extends BaseType {
  type: 'function'
  paramType: Type
  returnType: Type
}

// export interface FunctionApplicationType extends BaseType {
//   type: 'function_application'
//   caller: FunctionType,
//   args: Type[]
// }

export interface VariableType extends BaseType {
  type: 'variable'
  id: number
}

///////////////////////////////// SML VALUES /////////////////////////////////

export type SmlValue = Literal | List | Tuple | Closure

export type Literal = 
  BoolLiteral | StringLiteral | IntLiteral | RealLiteral | UnitLiteral

export type BaseSmlValue = BaseNode;

export interface SimpleLiteral extends BaseExpression, BasePattern, BaseSmlValue {
  type: 'Literal'
  smlType: LiteralType
  raw?: string | undefined
}

export interface BoolLiteral extends SimpleLiteral {
  value: boolean
}

export interface StringLiteral extends SimpleLiteral {
  value: string
}

export interface IntLiteral extends SimpleLiteral {
  value: number
}

export interface RealLiteral extends SimpleLiteral {
  value: number
}

export interface UnitLiteral extends SimpleLiteral {
  value: undefined
}

export type NumLiteral = IntLiteral | RealLiteral

export interface List extends BaseSmlValue {
  type: 'List'
  smlType: ListType
  value: Array<SmlValue>
}

export interface Tuple extends BaseSmlValue {
  type: 'Tuple'
  smlType: TupleType
  value: Array<SmlValue>
}

export interface Closure extends BaseSmlValue {
  type: 'Function'
  smlType: FunctionType
  value: 'fn'
  env: Environment
  srcNode: LambdaExpression
}
