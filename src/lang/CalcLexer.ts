// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator'
import { CharStream } from 'antlr4ts/CharStream'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { Lexer } from 'antlr4ts/Lexer'
import * as Utils from 'antlr4ts/misc/Utils'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

export class CalcLexer extends Lexer {
  public static readonly T__0 = 1
  public static readonly T__1 = 2
  public static readonly T__2 = 3
  public static readonly T__3 = 4
  public static readonly T__4 = 5
  public static readonly T__5 = 6
  public static readonly T__6 = 7
  public static readonly T__7 = 8
  public static readonly T__8 = 9
  public static readonly T__9 = 10
  public static readonly T__10 = 11
  public static readonly INTEGER_LITERAL = 12
  public static readonly BOOLEAN_LITERAL = 13
  public static readonly TYPE = 14
  public static readonly IDENTIFIER = 15
  public static readonly WHITESPACE = 16

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN']

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ['DEFAULT_MODE']

  public static readonly ruleNames: string[] = [
    'T__0',
    'T__1',
    'T__2',
    'T__3',
    'T__4',
    'T__5',
    'T__6',
    'T__7',
    'T__8',
    'T__9',
    'T__10',
    'INTEGER_LITERAL',
    'BOOLEAN_LITERAL',
    'TYPE',
    'SYMBOLIC_IDENTIFIER',
    'ALPHANUMERIC_IDENTIFIER',
    'IDENTIFIER',
    'WHITESPACE'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "':'",
    "'if'",
    "'then'",
    "'else'",
    "'fn'",
    "'=>'",
    "'('",
    "')'",
    "'val'",
    "'='",
    "';'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'INTEGER_LITERAL',
    'BOOLEAN_LITERAL',
    'TYPE',
    'IDENTIFIER',
    'WHITESPACE'
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    CalcLexer._LITERAL_NAMES,
    CalcLexer._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return CalcLexer.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input)
    this._interp = new LexerATNSimulator(CalcLexer._ATN, this)
  }

  // @Override
  public get grammarFileName(): string {
    return 'Calc.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return CalcLexer.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return CalcLexer._serializedATN
  }

  // @Override
  public get channelNames(): string[] {
    return CalcLexer.channelNames
  }

  // @Override
  public get modeNames(): string[] {
    return CalcLexer.modeNames
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x12x\b\x01\x04' +
    '\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04' +
    '\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r' +
    '\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12' +
    '\x04\x13\t\x13\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06' +
    '\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n' +
    '\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x06\rJ\n\r\r\r\x0E\r' +
    'K\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03' +
    '\x0E\x05\x0EW\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03' +
    '\x0F\x05\x0F`\n\x0F\x03\x10\x06\x10c\n\x10\r\x10\x0E\x10d\x03\x11\x03' +
    '\x11\x07\x11i\n\x11\f\x11\x0E\x11l\v\x11\x03\x12\x03\x12\x05\x12p\n\x12' +
    '\x03\x13\x06\x13s\n\x13\r\x13\x0E\x13t\x03\x13\x03\x13\x02\x02\x02\x14' +
    '\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02' +
    '\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D' +
    '\x02\x10\x1F\x02\x02!\x02\x02#\x02\x11%\x02\x12\x03\x02\x07\x03\x022;' +
    '\v\x02##%),1<<>B^^``~~\x80\x80\x04\x02C\\c|\x07\x02))2;C\\aac|\x05\x02' +
    '\v\f\x0F\x0F""\x02|\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02' +
    '\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02' +
    '\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02' +
    '\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02' +
    '\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02' +
    "#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x03'\x03\x02\x02\x02\x05)\x03" +
    '\x02\x02\x02\x07,\x03\x02\x02\x02\t1\x03\x02\x02\x02\v6\x03\x02\x02\x02' +
    '\r9\x03\x02\x02\x02\x0F<\x03\x02\x02\x02\x11>\x03\x02\x02\x02\x13@\x03' +
    '\x02\x02\x02\x15D\x03\x02\x02\x02\x17F\x03\x02\x02\x02\x19I\x03\x02\x02' +
    '\x02\x1BV\x03\x02\x02\x02\x1D_\x03\x02\x02\x02\x1Fb\x03\x02\x02\x02!f' +
    "\x03\x02\x02\x02#o\x03\x02\x02\x02%r\x03\x02\x02\x02'(\x07<\x02\x02(" +
    '\x04\x03\x02\x02\x02)*\x07k\x02\x02*+\x07h\x02\x02+\x06\x03\x02\x02\x02' +
    ',-\x07v\x02\x02-.\x07j\x02\x02./\x07g\x02\x02/0\x07p\x02\x020\b\x03\x02' +
    '\x02\x0212\x07g\x02\x0223\x07n\x02\x0234\x07u\x02\x0245\x07g\x02\x025' +
    '\n\x03\x02\x02\x0267\x07h\x02\x0278\x07p\x02\x028\f\x03\x02\x02\x029:' +
    '\x07?\x02\x02:;\x07@\x02\x02;\x0E\x03\x02\x02\x02<=\x07*\x02\x02=\x10' +
    '\x03\x02\x02\x02>?\x07+\x02\x02?\x12\x03\x02\x02\x02@A\x07x\x02\x02AB' +
    '\x07c\x02\x02BC\x07n\x02\x02C\x14\x03\x02\x02\x02DE\x07?\x02\x02E\x16' +
    '\x03\x02\x02\x02FG\x07=\x02\x02G\x18\x03\x02\x02\x02HJ\t\x02\x02\x02I' +
    'H\x03\x02\x02\x02JK\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02' +
    'L\x1A\x03\x02\x02\x02MN\x07v\x02\x02NO\x07t\x02\x02OP\x07w\x02\x02PW\x07' +
    'g\x02\x02QR\x07h\x02\x02RS\x07c\x02\x02ST\x07n\x02\x02TU\x07u\x02\x02' +
    'UW\x07g\x02\x02VM\x03\x02\x02\x02VQ\x03\x02\x02\x02W\x1C\x03\x02\x02\x02' +
    'XY\x07d\x02\x02YZ\x07q\x02\x02Z[\x07q\x02\x02[`\x07n\x02\x02\\]\x07k\x02' +
    '\x02]^\x07p\x02\x02^`\x07v\x02\x02_X\x03\x02\x02\x02_\\\x03\x02\x02\x02' +
    '`\x1E\x03\x02\x02\x02ac\t\x03\x02\x02ba\x03\x02\x02\x02cd\x03\x02\x02' +
    '\x02db\x03\x02\x02\x02de\x03\x02\x02\x02e \x03\x02\x02\x02fj\t\x04\x02' +
    '\x02gi\t\x05\x02\x02hg\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02' +
    '\x02jk\x03\x02\x02\x02k"\x03\x02\x02\x02lj\x03\x02\x02\x02mp\x05!\x11' +
    '\x02np\x05\x1F\x10\x02om\x03\x02\x02\x02on\x03\x02\x02\x02p$\x03\x02\x02' +
    '\x02qs\t\x06\x02\x02rq\x03\x02\x02\x02st\x03\x02\x02\x02tr\x03\x02\x02' +
    '\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02vw\b\x13\x02\x02w&\x03\x02\x02' +
    '\x02\n\x02KV_djot\x03\b\x02\x02'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!CalcLexer.__ATN) {
      CalcLexer.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(CalcLexer._serializedATN)
      )
    }

    return CalcLexer.__ATN
  }
}
