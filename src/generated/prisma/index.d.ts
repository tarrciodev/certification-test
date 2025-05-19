
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model CertificationTest
 * 
 */
export type CertificationTest = $Result.DefaultSelection<Prisma.$CertificationTestPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Alternative
 * 
 */
export type Alternative = $Result.DefaultSelection<Prisma.$AlternativePayload>
/**
 * Model TestAttempt
 * 
 */
export type TestAttempt = $Result.DefaultSelection<Prisma.$TestAttemptPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificationTest`: Exposes CRUD operations for the **CertificationTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CertificationTests
    * const certificationTests = await prisma.certificationTest.findMany()
    * ```
    */
  get certificationTest(): Prisma.CertificationTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alternative`: Exposes CRUD operations for the **Alternative** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alternatives
    * const alternatives = await prisma.alternative.findMany()
    * ```
    */
  get alternative(): Prisma.AlternativeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testAttempt`: Exposes CRUD operations for the **TestAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestAttempts
    * const testAttempts = await prisma.testAttempt.findMany()
    * ```
    */
  get testAttempt(): Prisma.TestAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Skill: 'Skill',
    CertificationTest: 'CertificationTest',
    Question: 'Question',
    Alternative: 'Alternative',
    TestAttempt: 'TestAttempt',
    Answer: 'Answer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "skill" | "certificationTest" | "question" | "alternative" | "testAttempt" | "answer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      CertificationTest: {
        payload: Prisma.$CertificationTestPayload<ExtArgs>
        fields: Prisma.CertificationTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificationTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificationTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTestPayload>
          }
          findFirst: {
            args: Prisma.CertificationTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificationTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTestPayload>
          }
          findMany: {
            args: Prisma.CertificationTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTestPayload>[]
          }
          create: {
            args: Prisma.CertificationTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTestPayload>
          }
          createMany: {
            args: Prisma.CertificationTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificationTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTestPayload>[]
          }
          delete: {
            args: Prisma.CertificationTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTestPayload>
          }
          update: {
            args: Prisma.CertificationTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTestPayload>
          }
          deleteMany: {
            args: Prisma.CertificationTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificationTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificationTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTestPayload>[]
          }
          upsert: {
            args: Prisma.CertificationTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationTestPayload>
          }
          aggregate: {
            args: Prisma.CertificationTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificationTest>
          }
          groupBy: {
            args: Prisma.CertificationTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificationTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificationTestCountArgs<ExtArgs>
            result: $Utils.Optional<CertificationTestCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Alternative: {
        payload: Prisma.$AlternativePayload<ExtArgs>
        fields: Prisma.AlternativeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlternativeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlternativeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          findFirst: {
            args: Prisma.AlternativeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlternativeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          findMany: {
            args: Prisma.AlternativeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          create: {
            args: Prisma.AlternativeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          createMany: {
            args: Prisma.AlternativeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlternativeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          delete: {
            args: Prisma.AlternativeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          update: {
            args: Prisma.AlternativeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          deleteMany: {
            args: Prisma.AlternativeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlternativeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlternativeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          upsert: {
            args: Prisma.AlternativeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          aggregate: {
            args: Prisma.AlternativeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlternative>
          }
          groupBy: {
            args: Prisma.AlternativeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlternativeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlternativeCountArgs<ExtArgs>
            result: $Utils.Optional<AlternativeCountAggregateOutputType> | number
          }
        }
      }
      TestAttempt: {
        payload: Prisma.$TestAttemptPayload<ExtArgs>
        fields: Prisma.TestAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptPayload>
          }
          findFirst: {
            args: Prisma.TestAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptPayload>
          }
          findMany: {
            args: Prisma.TestAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptPayload>[]
          }
          create: {
            args: Prisma.TestAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptPayload>
          }
          createMany: {
            args: Prisma.TestAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptPayload>[]
          }
          delete: {
            args: Prisma.TestAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptPayload>
          }
          update: {
            args: Prisma.TestAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptPayload>
          }
          deleteMany: {
            args: Prisma.TestAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptPayload>[]
          }
          upsert: {
            args: Prisma.TestAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptPayload>
          }
          aggregate: {
            args: Prisma.TestAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestAttempt>
          }
          groupBy: {
            args: Prisma.TestAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<TestAttemptCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    skill?: SkillOmit
    certificationTest?: CertificationTestOmit
    question?: QuestionOmit
    alternative?: AlternativeOmit
    testAttempt?: TestAttemptOmit
    answer?: AnswerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    TestAttempt: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TestAttempt?: boolean | UserCountOutputTypeCountTestAttemptArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestAttemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAttemptWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    tests: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | SkillCountOutputTypeCountTestsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificationTestWhereInput
  }


  /**
   * Count Type CertificationTestCountOutputType
   */

  export type CertificationTestCountOutputType = {
    questions: number
    attempts: number
  }

  export type CertificationTestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | CertificationTestCountOutputTypeCountQuestionsArgs
    attempts?: boolean | CertificationTestCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * CertificationTestCountOutputType without action
   */
  export type CertificationTestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTestCountOutputType
     */
    select?: CertificationTestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CertificationTestCountOutputType without action
   */
  export type CertificationTestCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * CertificationTestCountOutputType without action
   */
  export type CertificationTestCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAttemptWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    alternatives: number
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alternatives?: boolean | QuestionCountOutputTypeCountAlternativesArgs
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type AlternativeCountOutputType
   */

  export type AlternativeCountOutputType = {
    answers: number
  }

  export type AlternativeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | AlternativeCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * AlternativeCountOutputType without action
   */
  export type AlternativeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCountOutputType
     */
    select?: AlternativeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlternativeCountOutputType without action
   */
  export type AlternativeCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type TestAttemptCountOutputType
   */

  export type TestAttemptCountOutputType = {
    answers: number
  }

  export type TestAttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | TestAttemptCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * TestAttemptCountOutputType without action
   */
  export type TestAttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttemptCountOutputType
     */
    select?: TestAttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestAttemptCountOutputType without action
   */
  export type TestAttemptCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    name: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    TestAttempt?: boolean | User$TestAttemptArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TestAttempt?: boolean | User$TestAttemptArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      TestAttempt: Prisma.$TestAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      name: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TestAttempt<T extends User$TestAttemptArgs<ExtArgs> = {}>(args?: Subset<T, User$TestAttemptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.TestAttempt
   */
  export type User$TestAttemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
    where?: TestAttemptWhereInput
    orderBy?: TestAttemptOrderByWithRelationInput | TestAttemptOrderByWithRelationInput[]
    cursor?: TestAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestAttemptScalarFieldEnum | TestAttemptScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    tests?: boolean | Skill$testsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | Skill$testsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      tests: Prisma.$CertificationTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tests<T extends Skill$testsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly description: FieldRef<"Skill", 'String'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.tests
   */
  export type Skill$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestInclude<ExtArgs> | null
    where?: CertificationTestWhereInput
    orderBy?: CertificationTestOrderByWithRelationInput | CertificationTestOrderByWithRelationInput[]
    cursor?: CertificationTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificationTestScalarFieldEnum | CertificationTestScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model CertificationTest
   */

  export type AggregateCertificationTest = {
    _count: CertificationTestCountAggregateOutputType | null
    _avg: CertificationTestAvgAggregateOutputType | null
    _sum: CertificationTestSumAggregateOutputType | null
    _min: CertificationTestMinAggregateOutputType | null
    _max: CertificationTestMaxAggregateOutputType | null
  }

  export type CertificationTestAvgAggregateOutputType = {
    timeLimit: number | null
    passingScore: number | null
  }

  export type CertificationTestSumAggregateOutputType = {
    timeLimit: number | null
    passingScore: number | null
  }

  export type CertificationTestMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    timeLimit: number | null
    passingScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    skillId: string | null
  }

  export type CertificationTestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    timeLimit: number | null
    passingScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    skillId: string | null
  }

  export type CertificationTestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    timeLimit: number
    passingScore: number
    createdAt: number
    updatedAt: number
    skillId: number
    _all: number
  }


  export type CertificationTestAvgAggregateInputType = {
    timeLimit?: true
    passingScore?: true
  }

  export type CertificationTestSumAggregateInputType = {
    timeLimit?: true
    passingScore?: true
  }

  export type CertificationTestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    timeLimit?: true
    passingScore?: true
    createdAt?: true
    updatedAt?: true
    skillId?: true
  }

  export type CertificationTestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    timeLimit?: true
    passingScore?: true
    createdAt?: true
    updatedAt?: true
    skillId?: true
  }

  export type CertificationTestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    timeLimit?: true
    passingScore?: true
    createdAt?: true
    updatedAt?: true
    skillId?: true
    _all?: true
  }

  export type CertificationTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CertificationTest to aggregate.
     */
    where?: CertificationTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CertificationTests to fetch.
     */
    orderBy?: CertificationTestOrderByWithRelationInput | CertificationTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificationTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CertificationTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CertificationTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CertificationTests
    **/
    _count?: true | CertificationTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificationTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificationTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificationTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificationTestMaxAggregateInputType
  }

  export type GetCertificationTestAggregateType<T extends CertificationTestAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificationTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificationTest[P]>
      : GetScalarType<T[P], AggregateCertificationTest[P]>
  }




  export type CertificationTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificationTestWhereInput
    orderBy?: CertificationTestOrderByWithAggregationInput | CertificationTestOrderByWithAggregationInput[]
    by: CertificationTestScalarFieldEnum[] | CertificationTestScalarFieldEnum
    having?: CertificationTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificationTestCountAggregateInputType | true
    _avg?: CertificationTestAvgAggregateInputType
    _sum?: CertificationTestSumAggregateInputType
    _min?: CertificationTestMinAggregateInputType
    _max?: CertificationTestMaxAggregateInputType
  }

  export type CertificationTestGroupByOutputType = {
    id: string
    title: string
    description: string | null
    timeLimit: number | null
    passingScore: number
    createdAt: Date
    updatedAt: Date
    skillId: string
    _count: CertificationTestCountAggregateOutputType | null
    _avg: CertificationTestAvgAggregateOutputType | null
    _sum: CertificationTestSumAggregateOutputType | null
    _min: CertificationTestMinAggregateOutputType | null
    _max: CertificationTestMaxAggregateOutputType | null
  }

  type GetCertificationTestGroupByPayload<T extends CertificationTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificationTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificationTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificationTestGroupByOutputType[P]>
            : GetScalarType<T[P], CertificationTestGroupByOutputType[P]>
        }
      >
    >


  export type CertificationTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    timeLimit?: boolean
    passingScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillId?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    questions?: boolean | CertificationTest$questionsArgs<ExtArgs>
    attempts?: boolean | CertificationTest$attemptsArgs<ExtArgs>
    _count?: boolean | CertificationTestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificationTest"]>

  export type CertificationTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    timeLimit?: boolean
    passingScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillId?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificationTest"]>

  export type CertificationTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    timeLimit?: boolean
    passingScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillId?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificationTest"]>

  export type CertificationTestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    timeLimit?: boolean
    passingScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillId?: boolean
  }

  export type CertificationTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "timeLimit" | "passingScore" | "createdAt" | "updatedAt" | "skillId", ExtArgs["result"]["certificationTest"]>
  export type CertificationTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    questions?: boolean | CertificationTest$questionsArgs<ExtArgs>
    attempts?: boolean | CertificationTest$attemptsArgs<ExtArgs>
    _count?: boolean | CertificationTestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CertificationTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type CertificationTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $CertificationTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CertificationTest"
    objects: {
      skill: Prisma.$SkillPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      attempts: Prisma.$TestAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      timeLimit: number | null
      passingScore: number
      createdAt: Date
      updatedAt: Date
      skillId: string
    }, ExtArgs["result"]["certificationTest"]>
    composites: {}
  }

  type CertificationTestGetPayload<S extends boolean | null | undefined | CertificationTestDefaultArgs> = $Result.GetResult<Prisma.$CertificationTestPayload, S>

  type CertificationTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificationTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificationTestCountAggregateInputType | true
    }

  export interface CertificationTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CertificationTest'], meta: { name: 'CertificationTest' } }
    /**
     * Find zero or one CertificationTest that matches the filter.
     * @param {CertificationTestFindUniqueArgs} args - Arguments to find a CertificationTest
     * @example
     * // Get one CertificationTest
     * const certificationTest = await prisma.certificationTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificationTestFindUniqueArgs>(args: SelectSubset<T, CertificationTestFindUniqueArgs<ExtArgs>>): Prisma__CertificationTestClient<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CertificationTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificationTestFindUniqueOrThrowArgs} args - Arguments to find a CertificationTest
     * @example
     * // Get one CertificationTest
     * const certificationTest = await prisma.certificationTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificationTestFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificationTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificationTestClient<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CertificationTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTestFindFirstArgs} args - Arguments to find a CertificationTest
     * @example
     * // Get one CertificationTest
     * const certificationTest = await prisma.certificationTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificationTestFindFirstArgs>(args?: SelectSubset<T, CertificationTestFindFirstArgs<ExtArgs>>): Prisma__CertificationTestClient<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CertificationTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTestFindFirstOrThrowArgs} args - Arguments to find a CertificationTest
     * @example
     * // Get one CertificationTest
     * const certificationTest = await prisma.certificationTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificationTestFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificationTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificationTestClient<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CertificationTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CertificationTests
     * const certificationTests = await prisma.certificationTest.findMany()
     * 
     * // Get first 10 CertificationTests
     * const certificationTests = await prisma.certificationTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificationTestWithIdOnly = await prisma.certificationTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificationTestFindManyArgs>(args?: SelectSubset<T, CertificationTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CertificationTest.
     * @param {CertificationTestCreateArgs} args - Arguments to create a CertificationTest.
     * @example
     * // Create one CertificationTest
     * const CertificationTest = await prisma.certificationTest.create({
     *   data: {
     *     // ... data to create a CertificationTest
     *   }
     * })
     * 
     */
    create<T extends CertificationTestCreateArgs>(args: SelectSubset<T, CertificationTestCreateArgs<ExtArgs>>): Prisma__CertificationTestClient<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CertificationTests.
     * @param {CertificationTestCreateManyArgs} args - Arguments to create many CertificationTests.
     * @example
     * // Create many CertificationTests
     * const certificationTest = await prisma.certificationTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificationTestCreateManyArgs>(args?: SelectSubset<T, CertificationTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CertificationTests and returns the data saved in the database.
     * @param {CertificationTestCreateManyAndReturnArgs} args - Arguments to create many CertificationTests.
     * @example
     * // Create many CertificationTests
     * const certificationTest = await prisma.certificationTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CertificationTests and only return the `id`
     * const certificationTestWithIdOnly = await prisma.certificationTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificationTestCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificationTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CertificationTest.
     * @param {CertificationTestDeleteArgs} args - Arguments to delete one CertificationTest.
     * @example
     * // Delete one CertificationTest
     * const CertificationTest = await prisma.certificationTest.delete({
     *   where: {
     *     // ... filter to delete one CertificationTest
     *   }
     * })
     * 
     */
    delete<T extends CertificationTestDeleteArgs>(args: SelectSubset<T, CertificationTestDeleteArgs<ExtArgs>>): Prisma__CertificationTestClient<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CertificationTest.
     * @param {CertificationTestUpdateArgs} args - Arguments to update one CertificationTest.
     * @example
     * // Update one CertificationTest
     * const certificationTest = await prisma.certificationTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificationTestUpdateArgs>(args: SelectSubset<T, CertificationTestUpdateArgs<ExtArgs>>): Prisma__CertificationTestClient<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CertificationTests.
     * @param {CertificationTestDeleteManyArgs} args - Arguments to filter CertificationTests to delete.
     * @example
     * // Delete a few CertificationTests
     * const { count } = await prisma.certificationTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificationTestDeleteManyArgs>(args?: SelectSubset<T, CertificationTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CertificationTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CertificationTests
     * const certificationTest = await prisma.certificationTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificationTestUpdateManyArgs>(args: SelectSubset<T, CertificationTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CertificationTests and returns the data updated in the database.
     * @param {CertificationTestUpdateManyAndReturnArgs} args - Arguments to update many CertificationTests.
     * @example
     * // Update many CertificationTests
     * const certificationTest = await prisma.certificationTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CertificationTests and only return the `id`
     * const certificationTestWithIdOnly = await prisma.certificationTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CertificationTestUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificationTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CertificationTest.
     * @param {CertificationTestUpsertArgs} args - Arguments to update or create a CertificationTest.
     * @example
     * // Update or create a CertificationTest
     * const certificationTest = await prisma.certificationTest.upsert({
     *   create: {
     *     // ... data to create a CertificationTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CertificationTest we want to update
     *   }
     * })
     */
    upsert<T extends CertificationTestUpsertArgs>(args: SelectSubset<T, CertificationTestUpsertArgs<ExtArgs>>): Prisma__CertificationTestClient<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CertificationTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTestCountArgs} args - Arguments to filter CertificationTests to count.
     * @example
     * // Count the number of CertificationTests
     * const count = await prisma.certificationTest.count({
     *   where: {
     *     // ... the filter for the CertificationTests we want to count
     *   }
     * })
    **/
    count<T extends CertificationTestCountArgs>(
      args?: Subset<T, CertificationTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificationTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CertificationTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificationTestAggregateArgs>(args: Subset<T, CertificationTestAggregateArgs>): Prisma.PrismaPromise<GetCertificationTestAggregateType<T>>

    /**
     * Group by CertificationTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificationTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificationTestGroupByArgs['orderBy'] }
        : { orderBy?: CertificationTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificationTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificationTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CertificationTest model
   */
  readonly fields: CertificationTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CertificationTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificationTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends CertificationTest$questionsArgs<ExtArgs> = {}>(args?: Subset<T, CertificationTest$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attempts<T extends CertificationTest$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, CertificationTest$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CertificationTest model
   */
  interface CertificationTestFieldRefs {
    readonly id: FieldRef<"CertificationTest", 'String'>
    readonly title: FieldRef<"CertificationTest", 'String'>
    readonly description: FieldRef<"CertificationTest", 'String'>
    readonly timeLimit: FieldRef<"CertificationTest", 'Int'>
    readonly passingScore: FieldRef<"CertificationTest", 'Float'>
    readonly createdAt: FieldRef<"CertificationTest", 'DateTime'>
    readonly updatedAt: FieldRef<"CertificationTest", 'DateTime'>
    readonly skillId: FieldRef<"CertificationTest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CertificationTest findUnique
   */
  export type CertificationTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestInclude<ExtArgs> | null
    /**
     * Filter, which CertificationTest to fetch.
     */
    where: CertificationTestWhereUniqueInput
  }

  /**
   * CertificationTest findUniqueOrThrow
   */
  export type CertificationTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestInclude<ExtArgs> | null
    /**
     * Filter, which CertificationTest to fetch.
     */
    where: CertificationTestWhereUniqueInput
  }

  /**
   * CertificationTest findFirst
   */
  export type CertificationTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestInclude<ExtArgs> | null
    /**
     * Filter, which CertificationTest to fetch.
     */
    where?: CertificationTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CertificationTests to fetch.
     */
    orderBy?: CertificationTestOrderByWithRelationInput | CertificationTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CertificationTests.
     */
    cursor?: CertificationTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CertificationTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CertificationTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CertificationTests.
     */
    distinct?: CertificationTestScalarFieldEnum | CertificationTestScalarFieldEnum[]
  }

  /**
   * CertificationTest findFirstOrThrow
   */
  export type CertificationTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestInclude<ExtArgs> | null
    /**
     * Filter, which CertificationTest to fetch.
     */
    where?: CertificationTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CertificationTests to fetch.
     */
    orderBy?: CertificationTestOrderByWithRelationInput | CertificationTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CertificationTests.
     */
    cursor?: CertificationTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CertificationTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CertificationTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CertificationTests.
     */
    distinct?: CertificationTestScalarFieldEnum | CertificationTestScalarFieldEnum[]
  }

  /**
   * CertificationTest findMany
   */
  export type CertificationTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestInclude<ExtArgs> | null
    /**
     * Filter, which CertificationTests to fetch.
     */
    where?: CertificationTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CertificationTests to fetch.
     */
    orderBy?: CertificationTestOrderByWithRelationInput | CertificationTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CertificationTests.
     */
    cursor?: CertificationTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CertificationTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CertificationTests.
     */
    skip?: number
    distinct?: CertificationTestScalarFieldEnum | CertificationTestScalarFieldEnum[]
  }

  /**
   * CertificationTest create
   */
  export type CertificationTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestInclude<ExtArgs> | null
    /**
     * The data needed to create a CertificationTest.
     */
    data: XOR<CertificationTestCreateInput, CertificationTestUncheckedCreateInput>
  }

  /**
   * CertificationTest createMany
   */
  export type CertificationTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CertificationTests.
     */
    data: CertificationTestCreateManyInput | CertificationTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CertificationTest createManyAndReturn
   */
  export type CertificationTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * The data used to create many CertificationTests.
     */
    data: CertificationTestCreateManyInput | CertificationTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CertificationTest update
   */
  export type CertificationTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestInclude<ExtArgs> | null
    /**
     * The data needed to update a CertificationTest.
     */
    data: XOR<CertificationTestUpdateInput, CertificationTestUncheckedUpdateInput>
    /**
     * Choose, which CertificationTest to update.
     */
    where: CertificationTestWhereUniqueInput
  }

  /**
   * CertificationTest updateMany
   */
  export type CertificationTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CertificationTests.
     */
    data: XOR<CertificationTestUpdateManyMutationInput, CertificationTestUncheckedUpdateManyInput>
    /**
     * Filter which CertificationTests to update
     */
    where?: CertificationTestWhereInput
    /**
     * Limit how many CertificationTests to update.
     */
    limit?: number
  }

  /**
   * CertificationTest updateManyAndReturn
   */
  export type CertificationTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * The data used to update CertificationTests.
     */
    data: XOR<CertificationTestUpdateManyMutationInput, CertificationTestUncheckedUpdateManyInput>
    /**
     * Filter which CertificationTests to update
     */
    where?: CertificationTestWhereInput
    /**
     * Limit how many CertificationTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CertificationTest upsert
   */
  export type CertificationTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestInclude<ExtArgs> | null
    /**
     * The filter to search for the CertificationTest to update in case it exists.
     */
    where: CertificationTestWhereUniqueInput
    /**
     * In case the CertificationTest found by the `where` argument doesn't exist, create a new CertificationTest with this data.
     */
    create: XOR<CertificationTestCreateInput, CertificationTestUncheckedCreateInput>
    /**
     * In case the CertificationTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificationTestUpdateInput, CertificationTestUncheckedUpdateInput>
  }

  /**
   * CertificationTest delete
   */
  export type CertificationTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestInclude<ExtArgs> | null
    /**
     * Filter which CertificationTest to delete.
     */
    where: CertificationTestWhereUniqueInput
  }

  /**
   * CertificationTest deleteMany
   */
  export type CertificationTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CertificationTests to delete
     */
    where?: CertificationTestWhereInput
    /**
     * Limit how many CertificationTests to delete.
     */
    limit?: number
  }

  /**
   * CertificationTest.questions
   */
  export type CertificationTest$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * CertificationTest.attempts
   */
  export type CertificationTest$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
    where?: TestAttemptWhereInput
    orderBy?: TestAttemptOrderByWithRelationInput | TestAttemptOrderByWithRelationInput[]
    cursor?: TestAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestAttemptScalarFieldEnum | TestAttemptScalarFieldEnum[]
  }

  /**
   * CertificationTest without action
   */
  export type CertificationTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CertificationTest
     */
    select?: CertificationTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CertificationTest
     */
    omit?: CertificationTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationTestInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    score: number | null
  }

  export type QuestionSumAggregateOutputType = {
    score: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    score: number | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
    certificationTestId: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    score: number | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
    certificationTestId: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    score: number
    explanation: number
    createdAt: number
    updatedAt: number
    certificationTestId: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    score?: true
  }

  export type QuestionSumAggregateInputType = {
    score?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    score?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
    certificationTestId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    score?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
    certificationTestId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    score?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
    certificationTestId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    score: number
    explanation: string | null
    createdAt: Date
    updatedAt: Date
    certificationTestId: string
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    score?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificationTestId?: boolean
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
    alternatives?: boolean | Question$alternativesArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    score?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificationTestId?: boolean
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    score?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificationTestId?: boolean
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    score?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificationTestId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "score" | "explanation" | "createdAt" | "updatedAt" | "certificationTestId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
    alternatives?: boolean | Question$alternativesArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      certificationTest: Prisma.$CertificationTestPayload<ExtArgs>
      alternatives: Prisma.$AlternativePayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      score: number
      explanation: string | null
      createdAt: Date
      updatedAt: Date
      certificationTestId: string
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    certificationTest<T extends CertificationTestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CertificationTestDefaultArgs<ExtArgs>>): Prisma__CertificationTestClient<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alternatives<T extends Question$alternativesArgs<ExtArgs> = {}>(args?: Subset<T, Question$alternativesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly score: FieldRef<"Question", 'Float'>
    readonly explanation: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
    readonly certificationTestId: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.alternatives
   */
  export type Question$alternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    where?: AlternativeWhereInput
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    cursor?: AlternativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Alternative
   */

  export type AggregateAlternative = {
    _count: AlternativeCountAggregateOutputType | null
    _min: AlternativeMinAggregateOutputType | null
    _max: AlternativeMaxAggregateOutputType | null
  }

  export type AlternativeMinAggregateOutputType = {
    id: string | null
    text: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    questionId: string | null
  }

  export type AlternativeMaxAggregateOutputType = {
    id: string | null
    text: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    questionId: string | null
  }

  export type AlternativeCountAggregateOutputType = {
    id: number
    text: number
    isCorrect: number
    createdAt: number
    updatedAt: number
    questionId: number
    _all: number
  }


  export type AlternativeMinAggregateInputType = {
    id?: true
    text?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    questionId?: true
  }

  export type AlternativeMaxAggregateInputType = {
    id?: true
    text?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    questionId?: true
  }

  export type AlternativeCountAggregateInputType = {
    id?: true
    text?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    questionId?: true
    _all?: true
  }

  export type AlternativeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternative to aggregate.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alternatives
    **/
    _count?: true | AlternativeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlternativeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlternativeMaxAggregateInputType
  }

  export type GetAlternativeAggregateType<T extends AlternativeAggregateArgs> = {
        [P in keyof T & keyof AggregateAlternative]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlternative[P]>
      : GetScalarType<T[P], AggregateAlternative[P]>
  }




  export type AlternativeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeWhereInput
    orderBy?: AlternativeOrderByWithAggregationInput | AlternativeOrderByWithAggregationInput[]
    by: AlternativeScalarFieldEnum[] | AlternativeScalarFieldEnum
    having?: AlternativeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlternativeCountAggregateInputType | true
    _min?: AlternativeMinAggregateInputType
    _max?: AlternativeMaxAggregateInputType
  }

  export type AlternativeGroupByOutputType = {
    id: string
    text: string
    isCorrect: boolean
    createdAt: Date
    updatedAt: Date
    questionId: string
    _count: AlternativeCountAggregateOutputType | null
    _min: AlternativeMinAggregateOutputType | null
    _max: AlternativeMaxAggregateOutputType | null
  }

  type GetAlternativeGroupByPayload<T extends AlternativeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlternativeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlternativeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlternativeGroupByOutputType[P]>
            : GetScalarType<T[P], AlternativeGroupByOutputType[P]>
        }
      >
    >


  export type AlternativeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answers?: boolean | Alternative$answersArgs<ExtArgs>
    _count?: boolean | AlternativeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectScalar = {
    id?: boolean
    text?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
  }

  export type AlternativeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "isCorrect" | "createdAt" | "updatedAt" | "questionId", ExtArgs["result"]["alternative"]>
  export type AlternativeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answers?: boolean | Alternative$answersArgs<ExtArgs>
    _count?: boolean | AlternativeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlternativeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AlternativeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AlternativePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alternative"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      isCorrect: boolean
      createdAt: Date
      updatedAt: Date
      questionId: string
    }, ExtArgs["result"]["alternative"]>
    composites: {}
  }

  type AlternativeGetPayload<S extends boolean | null | undefined | AlternativeDefaultArgs> = $Result.GetResult<Prisma.$AlternativePayload, S>

  type AlternativeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlternativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlternativeCountAggregateInputType | true
    }

  export interface AlternativeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alternative'], meta: { name: 'Alternative' } }
    /**
     * Find zero or one Alternative that matches the filter.
     * @param {AlternativeFindUniqueArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlternativeFindUniqueArgs>(args: SelectSubset<T, AlternativeFindUniqueArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alternative that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlternativeFindUniqueOrThrowArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlternativeFindUniqueOrThrowArgs>(args: SelectSubset<T, AlternativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternative that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindFirstArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlternativeFindFirstArgs>(args?: SelectSubset<T, AlternativeFindFirstArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternative that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindFirstOrThrowArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlternativeFindFirstOrThrowArgs>(args?: SelectSubset<T, AlternativeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alternatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alternatives
     * const alternatives = await prisma.alternative.findMany()
     * 
     * // Get first 10 Alternatives
     * const alternatives = await prisma.alternative.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alternativeWithIdOnly = await prisma.alternative.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlternativeFindManyArgs>(args?: SelectSubset<T, AlternativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alternative.
     * @param {AlternativeCreateArgs} args - Arguments to create a Alternative.
     * @example
     * // Create one Alternative
     * const Alternative = await prisma.alternative.create({
     *   data: {
     *     // ... data to create a Alternative
     *   }
     * })
     * 
     */
    create<T extends AlternativeCreateArgs>(args: SelectSubset<T, AlternativeCreateArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alternatives.
     * @param {AlternativeCreateManyArgs} args - Arguments to create many Alternatives.
     * @example
     * // Create many Alternatives
     * const alternative = await prisma.alternative.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlternativeCreateManyArgs>(args?: SelectSubset<T, AlternativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alternatives and returns the data saved in the database.
     * @param {AlternativeCreateManyAndReturnArgs} args - Arguments to create many Alternatives.
     * @example
     * // Create many Alternatives
     * const alternative = await prisma.alternative.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alternatives and only return the `id`
     * const alternativeWithIdOnly = await prisma.alternative.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlternativeCreateManyAndReturnArgs>(args?: SelectSubset<T, AlternativeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alternative.
     * @param {AlternativeDeleteArgs} args - Arguments to delete one Alternative.
     * @example
     * // Delete one Alternative
     * const Alternative = await prisma.alternative.delete({
     *   where: {
     *     // ... filter to delete one Alternative
     *   }
     * })
     * 
     */
    delete<T extends AlternativeDeleteArgs>(args: SelectSubset<T, AlternativeDeleteArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alternative.
     * @param {AlternativeUpdateArgs} args - Arguments to update one Alternative.
     * @example
     * // Update one Alternative
     * const alternative = await prisma.alternative.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlternativeUpdateArgs>(args: SelectSubset<T, AlternativeUpdateArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alternatives.
     * @param {AlternativeDeleteManyArgs} args - Arguments to filter Alternatives to delete.
     * @example
     * // Delete a few Alternatives
     * const { count } = await prisma.alternative.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlternativeDeleteManyArgs>(args?: SelectSubset<T, AlternativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alternatives
     * const alternative = await prisma.alternative.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlternativeUpdateManyArgs>(args: SelectSubset<T, AlternativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternatives and returns the data updated in the database.
     * @param {AlternativeUpdateManyAndReturnArgs} args - Arguments to update many Alternatives.
     * @example
     * // Update many Alternatives
     * const alternative = await prisma.alternative.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alternatives and only return the `id`
     * const alternativeWithIdOnly = await prisma.alternative.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlternativeUpdateManyAndReturnArgs>(args: SelectSubset<T, AlternativeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alternative.
     * @param {AlternativeUpsertArgs} args - Arguments to update or create a Alternative.
     * @example
     * // Update or create a Alternative
     * const alternative = await prisma.alternative.upsert({
     *   create: {
     *     // ... data to create a Alternative
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alternative we want to update
     *   }
     * })
     */
    upsert<T extends AlternativeUpsertArgs>(args: SelectSubset<T, AlternativeUpsertArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCountArgs} args - Arguments to filter Alternatives to count.
     * @example
     * // Count the number of Alternatives
     * const count = await prisma.alternative.count({
     *   where: {
     *     // ... the filter for the Alternatives we want to count
     *   }
     * })
    **/
    count<T extends AlternativeCountArgs>(
      args?: Subset<T, AlternativeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlternativeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlternativeAggregateArgs>(args: Subset<T, AlternativeAggregateArgs>): Prisma.PrismaPromise<GetAlternativeAggregateType<T>>

    /**
     * Group by Alternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlternativeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlternativeGroupByArgs['orderBy'] }
        : { orderBy?: AlternativeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlternativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlternativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alternative model
   */
  readonly fields: AlternativeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alternative.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlternativeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Alternative$answersArgs<ExtArgs> = {}>(args?: Subset<T, Alternative$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alternative model
   */
  interface AlternativeFieldRefs {
    readonly id: FieldRef<"Alternative", 'String'>
    readonly text: FieldRef<"Alternative", 'String'>
    readonly isCorrect: FieldRef<"Alternative", 'Boolean'>
    readonly createdAt: FieldRef<"Alternative", 'DateTime'>
    readonly updatedAt: FieldRef<"Alternative", 'DateTime'>
    readonly questionId: FieldRef<"Alternative", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alternative findUnique
   */
  export type AlternativeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative findUniqueOrThrow
   */
  export type AlternativeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative findFirst
   */
  export type AlternativeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternatives.
     */
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative findFirstOrThrow
   */
  export type AlternativeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternatives.
     */
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative findMany
   */
  export type AlternativeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternatives to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative create
   */
  export type AlternativeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The data needed to create a Alternative.
     */
    data: XOR<AlternativeCreateInput, AlternativeUncheckedCreateInput>
  }

  /**
   * Alternative createMany
   */
  export type AlternativeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alternatives.
     */
    data: AlternativeCreateManyInput | AlternativeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alternative createManyAndReturn
   */
  export type AlternativeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * The data used to create many Alternatives.
     */
    data: AlternativeCreateManyInput | AlternativeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alternative update
   */
  export type AlternativeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The data needed to update a Alternative.
     */
    data: XOR<AlternativeUpdateInput, AlternativeUncheckedUpdateInput>
    /**
     * Choose, which Alternative to update.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative updateMany
   */
  export type AlternativeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alternatives.
     */
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyInput>
    /**
     * Filter which Alternatives to update
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to update.
     */
    limit?: number
  }

  /**
   * Alternative updateManyAndReturn
   */
  export type AlternativeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * The data used to update Alternatives.
     */
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyInput>
    /**
     * Filter which Alternatives to update
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alternative upsert
   */
  export type AlternativeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The filter to search for the Alternative to update in case it exists.
     */
    where: AlternativeWhereUniqueInput
    /**
     * In case the Alternative found by the `where` argument doesn't exist, create a new Alternative with this data.
     */
    create: XOR<AlternativeCreateInput, AlternativeUncheckedCreateInput>
    /**
     * In case the Alternative was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlternativeUpdateInput, AlternativeUncheckedUpdateInput>
  }

  /**
   * Alternative delete
   */
  export type AlternativeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter which Alternative to delete.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative deleteMany
   */
  export type AlternativeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternatives to delete
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to delete.
     */
    limit?: number
  }

  /**
   * Alternative.answers
   */
  export type Alternative$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Alternative without action
   */
  export type AlternativeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
  }


  /**
   * Model TestAttempt
   */

  export type AggregateTestAttempt = {
    _count: TestAttemptCountAggregateOutputType | null
    _avg: TestAttemptAvgAggregateOutputType | null
    _sum: TestAttemptSumAggregateOutputType | null
    _min: TestAttemptMinAggregateOutputType | null
    _max: TestAttemptMaxAggregateOutputType | null
  }

  export type TestAttemptAvgAggregateOutputType = {
    score: number | null
    completionTime: number | null
  }

  export type TestAttemptSumAggregateOutputType = {
    score: number | null
    completionTime: number | null
  }

  export type TestAttemptMinAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    score: number | null
    passed: boolean | null
    completionTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
    certificationTestId: string | null
    userId: string | null
  }

  export type TestAttemptMaxAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    score: number | null
    passed: boolean | null
    completionTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
    certificationTestId: string | null
    userId: string | null
  }

  export type TestAttemptCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    score: number
    passed: number
    completionTime: number
    createdAt: number
    updatedAt: number
    certificationTestId: number
    userId: number
    _all: number
  }


  export type TestAttemptAvgAggregateInputType = {
    score?: true
    completionTime?: true
  }

  export type TestAttemptSumAggregateInputType = {
    score?: true
    completionTime?: true
  }

  export type TestAttemptMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    score?: true
    passed?: true
    completionTime?: true
    createdAt?: true
    updatedAt?: true
    certificationTestId?: true
    userId?: true
  }

  export type TestAttemptMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    score?: true
    passed?: true
    completionTime?: true
    createdAt?: true
    updatedAt?: true
    certificationTestId?: true
    userId?: true
  }

  export type TestAttemptCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    score?: true
    passed?: true
    completionTime?: true
    createdAt?: true
    updatedAt?: true
    certificationTestId?: true
    userId?: true
    _all?: true
  }

  export type TestAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestAttempt to aggregate.
     */
    where?: TestAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAttempts to fetch.
     */
    orderBy?: TestAttemptOrderByWithRelationInput | TestAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestAttempts
    **/
    _count?: true | TestAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestAttemptMaxAggregateInputType
  }

  export type GetTestAttemptAggregateType<T extends TestAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateTestAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestAttempt[P]>
      : GetScalarType<T[P], AggregateTestAttempt[P]>
  }




  export type TestAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAttemptWhereInput
    orderBy?: TestAttemptOrderByWithAggregationInput | TestAttemptOrderByWithAggregationInput[]
    by: TestAttemptScalarFieldEnum[] | TestAttemptScalarFieldEnum
    having?: TestAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestAttemptCountAggregateInputType | true
    _avg?: TestAttemptAvgAggregateInputType
    _sum?: TestAttemptSumAggregateInputType
    _min?: TestAttemptMinAggregateInputType
    _max?: TestAttemptMaxAggregateInputType
  }

  export type TestAttemptGroupByOutputType = {
    id: string
    startTime: Date
    endTime: Date | null
    score: number | null
    passed: boolean | null
    completionTime: number | null
    createdAt: Date
    updatedAt: Date
    certificationTestId: string
    userId: string
    _count: TestAttemptCountAggregateOutputType | null
    _avg: TestAttemptAvgAggregateOutputType | null
    _sum: TestAttemptSumAggregateOutputType | null
    _min: TestAttemptMinAggregateOutputType | null
    _max: TestAttemptMaxAggregateOutputType | null
  }

  type GetTestAttemptGroupByPayload<T extends TestAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], TestAttemptGroupByOutputType[P]>
        }
      >
    >


  export type TestAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    score?: boolean
    passed?: boolean
    completionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificationTestId?: boolean
    userId?: boolean
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | TestAttempt$answersArgs<ExtArgs>
    _count?: boolean | TestAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testAttempt"]>

  export type TestAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    score?: boolean
    passed?: boolean
    completionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificationTestId?: boolean
    userId?: boolean
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testAttempt"]>

  export type TestAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    score?: boolean
    passed?: boolean
    completionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificationTestId?: boolean
    userId?: boolean
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testAttempt"]>

  export type TestAttemptSelectScalar = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    score?: boolean
    passed?: boolean
    completionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificationTestId?: boolean
    userId?: boolean
  }

  export type TestAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startTime" | "endTime" | "score" | "passed" | "completionTime" | "createdAt" | "updatedAt" | "certificationTestId" | "userId", ExtArgs["result"]["testAttempt"]>
  export type TestAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | TestAttempt$answersArgs<ExtArgs>
    _count?: boolean | TestAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificationTest?: boolean | CertificationTestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestAttempt"
    objects: {
      certificationTest: Prisma.$CertificationTestPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startTime: Date
      endTime: Date | null
      score: number | null
      passed: boolean | null
      completionTime: number | null
      createdAt: Date
      updatedAt: Date
      certificationTestId: string
      userId: string
    }, ExtArgs["result"]["testAttempt"]>
    composites: {}
  }

  type TestAttemptGetPayload<S extends boolean | null | undefined | TestAttemptDefaultArgs> = $Result.GetResult<Prisma.$TestAttemptPayload, S>

  type TestAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestAttemptCountAggregateInputType | true
    }

  export interface TestAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestAttempt'], meta: { name: 'TestAttempt' } }
    /**
     * Find zero or one TestAttempt that matches the filter.
     * @param {TestAttemptFindUniqueArgs} args - Arguments to find a TestAttempt
     * @example
     * // Get one TestAttempt
     * const testAttempt = await prisma.testAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestAttemptFindUniqueArgs>(args: SelectSubset<T, TestAttemptFindUniqueArgs<ExtArgs>>): Prisma__TestAttemptClient<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestAttemptFindUniqueOrThrowArgs} args - Arguments to find a TestAttempt
     * @example
     * // Get one TestAttempt
     * const testAttempt = await prisma.testAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, TestAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestAttemptClient<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptFindFirstArgs} args - Arguments to find a TestAttempt
     * @example
     * // Get one TestAttempt
     * const testAttempt = await prisma.testAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestAttemptFindFirstArgs>(args?: SelectSubset<T, TestAttemptFindFirstArgs<ExtArgs>>): Prisma__TestAttemptClient<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptFindFirstOrThrowArgs} args - Arguments to find a TestAttempt
     * @example
     * // Get one TestAttempt
     * const testAttempt = await prisma.testAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, TestAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestAttemptClient<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestAttempts
     * const testAttempts = await prisma.testAttempt.findMany()
     * 
     * // Get first 10 TestAttempts
     * const testAttempts = await prisma.testAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testAttemptWithIdOnly = await prisma.testAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestAttemptFindManyArgs>(args?: SelectSubset<T, TestAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestAttempt.
     * @param {TestAttemptCreateArgs} args - Arguments to create a TestAttempt.
     * @example
     * // Create one TestAttempt
     * const TestAttempt = await prisma.testAttempt.create({
     *   data: {
     *     // ... data to create a TestAttempt
     *   }
     * })
     * 
     */
    create<T extends TestAttemptCreateArgs>(args: SelectSubset<T, TestAttemptCreateArgs<ExtArgs>>): Prisma__TestAttemptClient<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestAttempts.
     * @param {TestAttemptCreateManyArgs} args - Arguments to create many TestAttempts.
     * @example
     * // Create many TestAttempts
     * const testAttempt = await prisma.testAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestAttemptCreateManyArgs>(args?: SelectSubset<T, TestAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestAttempts and returns the data saved in the database.
     * @param {TestAttemptCreateManyAndReturnArgs} args - Arguments to create many TestAttempts.
     * @example
     * // Create many TestAttempts
     * const testAttempt = await prisma.testAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestAttempts and only return the `id`
     * const testAttemptWithIdOnly = await prisma.testAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, TestAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestAttempt.
     * @param {TestAttemptDeleteArgs} args - Arguments to delete one TestAttempt.
     * @example
     * // Delete one TestAttempt
     * const TestAttempt = await prisma.testAttempt.delete({
     *   where: {
     *     // ... filter to delete one TestAttempt
     *   }
     * })
     * 
     */
    delete<T extends TestAttemptDeleteArgs>(args: SelectSubset<T, TestAttemptDeleteArgs<ExtArgs>>): Prisma__TestAttemptClient<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestAttempt.
     * @param {TestAttemptUpdateArgs} args - Arguments to update one TestAttempt.
     * @example
     * // Update one TestAttempt
     * const testAttempt = await prisma.testAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestAttemptUpdateArgs>(args: SelectSubset<T, TestAttemptUpdateArgs<ExtArgs>>): Prisma__TestAttemptClient<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestAttempts.
     * @param {TestAttemptDeleteManyArgs} args - Arguments to filter TestAttempts to delete.
     * @example
     * // Delete a few TestAttempts
     * const { count } = await prisma.testAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestAttemptDeleteManyArgs>(args?: SelectSubset<T, TestAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestAttempts
     * const testAttempt = await prisma.testAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestAttemptUpdateManyArgs>(args: SelectSubset<T, TestAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestAttempts and returns the data updated in the database.
     * @param {TestAttemptUpdateManyAndReturnArgs} args - Arguments to update many TestAttempts.
     * @example
     * // Update many TestAttempts
     * const testAttempt = await prisma.testAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestAttempts and only return the `id`
     * const testAttemptWithIdOnly = await prisma.testAttempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, TestAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestAttempt.
     * @param {TestAttemptUpsertArgs} args - Arguments to update or create a TestAttempt.
     * @example
     * // Update or create a TestAttempt
     * const testAttempt = await prisma.testAttempt.upsert({
     *   create: {
     *     // ... data to create a TestAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestAttempt we want to update
     *   }
     * })
     */
    upsert<T extends TestAttemptUpsertArgs>(args: SelectSubset<T, TestAttemptUpsertArgs<ExtArgs>>): Prisma__TestAttemptClient<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptCountArgs} args - Arguments to filter TestAttempts to count.
     * @example
     * // Count the number of TestAttempts
     * const count = await prisma.testAttempt.count({
     *   where: {
     *     // ... the filter for the TestAttempts we want to count
     *   }
     * })
    **/
    count<T extends TestAttemptCountArgs>(
      args?: Subset<T, TestAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAttemptAggregateArgs>(args: Subset<T, TestAttemptAggregateArgs>): Prisma.PrismaPromise<GetTestAttemptAggregateType<T>>

    /**
     * Group by TestAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestAttemptGroupByArgs['orderBy'] }
        : { orderBy?: TestAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestAttempt model
   */
  readonly fields: TestAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    certificationTest<T extends CertificationTestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CertificationTestDefaultArgs<ExtArgs>>): Prisma__CertificationTestClient<$Result.GetResult<Prisma.$CertificationTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends TestAttempt$answersArgs<ExtArgs> = {}>(args?: Subset<T, TestAttempt$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestAttempt model
   */
  interface TestAttemptFieldRefs {
    readonly id: FieldRef<"TestAttempt", 'String'>
    readonly startTime: FieldRef<"TestAttempt", 'DateTime'>
    readonly endTime: FieldRef<"TestAttempt", 'DateTime'>
    readonly score: FieldRef<"TestAttempt", 'Float'>
    readonly passed: FieldRef<"TestAttempt", 'Boolean'>
    readonly completionTime: FieldRef<"TestAttempt", 'Int'>
    readonly createdAt: FieldRef<"TestAttempt", 'DateTime'>
    readonly updatedAt: FieldRef<"TestAttempt", 'DateTime'>
    readonly certificationTestId: FieldRef<"TestAttempt", 'String'>
    readonly userId: FieldRef<"TestAttempt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TestAttempt findUnique
   */
  export type TestAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
    /**
     * Filter, which TestAttempt to fetch.
     */
    where: TestAttemptWhereUniqueInput
  }

  /**
   * TestAttempt findUniqueOrThrow
   */
  export type TestAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
    /**
     * Filter, which TestAttempt to fetch.
     */
    where: TestAttemptWhereUniqueInput
  }

  /**
   * TestAttempt findFirst
   */
  export type TestAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
    /**
     * Filter, which TestAttempt to fetch.
     */
    where?: TestAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAttempts to fetch.
     */
    orderBy?: TestAttemptOrderByWithRelationInput | TestAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestAttempts.
     */
    cursor?: TestAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestAttempts.
     */
    distinct?: TestAttemptScalarFieldEnum | TestAttemptScalarFieldEnum[]
  }

  /**
   * TestAttempt findFirstOrThrow
   */
  export type TestAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
    /**
     * Filter, which TestAttempt to fetch.
     */
    where?: TestAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAttempts to fetch.
     */
    orderBy?: TestAttemptOrderByWithRelationInput | TestAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestAttempts.
     */
    cursor?: TestAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestAttempts.
     */
    distinct?: TestAttemptScalarFieldEnum | TestAttemptScalarFieldEnum[]
  }

  /**
   * TestAttempt findMany
   */
  export type TestAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
    /**
     * Filter, which TestAttempts to fetch.
     */
    where?: TestAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAttempts to fetch.
     */
    orderBy?: TestAttemptOrderByWithRelationInput | TestAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestAttempts.
     */
    cursor?: TestAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAttempts.
     */
    skip?: number
    distinct?: TestAttemptScalarFieldEnum | TestAttemptScalarFieldEnum[]
  }

  /**
   * TestAttempt create
   */
  export type TestAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a TestAttempt.
     */
    data: XOR<TestAttemptCreateInput, TestAttemptUncheckedCreateInput>
  }

  /**
   * TestAttempt createMany
   */
  export type TestAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestAttempts.
     */
    data: TestAttemptCreateManyInput | TestAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestAttempt createManyAndReturn
   */
  export type TestAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many TestAttempts.
     */
    data: TestAttemptCreateManyInput | TestAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestAttempt update
   */
  export type TestAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a TestAttempt.
     */
    data: XOR<TestAttemptUpdateInput, TestAttemptUncheckedUpdateInput>
    /**
     * Choose, which TestAttempt to update.
     */
    where: TestAttemptWhereUniqueInput
  }

  /**
   * TestAttempt updateMany
   */
  export type TestAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestAttempts.
     */
    data: XOR<TestAttemptUpdateManyMutationInput, TestAttemptUncheckedUpdateManyInput>
    /**
     * Filter which TestAttempts to update
     */
    where?: TestAttemptWhereInput
    /**
     * Limit how many TestAttempts to update.
     */
    limit?: number
  }

  /**
   * TestAttempt updateManyAndReturn
   */
  export type TestAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * The data used to update TestAttempts.
     */
    data: XOR<TestAttemptUpdateManyMutationInput, TestAttemptUncheckedUpdateManyInput>
    /**
     * Filter which TestAttempts to update
     */
    where?: TestAttemptWhereInput
    /**
     * Limit how many TestAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestAttempt upsert
   */
  export type TestAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the TestAttempt to update in case it exists.
     */
    where: TestAttemptWhereUniqueInput
    /**
     * In case the TestAttempt found by the `where` argument doesn't exist, create a new TestAttempt with this data.
     */
    create: XOR<TestAttemptCreateInput, TestAttemptUncheckedCreateInput>
    /**
     * In case the TestAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestAttemptUpdateInput, TestAttemptUncheckedUpdateInput>
  }

  /**
   * TestAttempt delete
   */
  export type TestAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
    /**
     * Filter which TestAttempt to delete.
     */
    where: TestAttemptWhereUniqueInput
  }

  /**
   * TestAttempt deleteMany
   */
  export type TestAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestAttempts to delete
     */
    where?: TestAttemptWhereInput
    /**
     * Limit how many TestAttempts to delete.
     */
    limit?: number
  }

  /**
   * TestAttempt.answers
   */
  export type TestAttempt$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * TestAttempt without action
   */
  export type TestAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempt
     */
    select?: TestAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempt
     */
    omit?: TestAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    testAttemptId: string | null
    questionId: string | null
    alternativeId: string | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    testAttemptId: string | null
    questionId: string | null
    alternativeId: string | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    createdAt: number
    testAttemptId: number
    questionId: number
    alternativeId: number
    _all: number
  }


  export type AnswerMinAggregateInputType = {
    id?: true
    createdAt?: true
    testAttemptId?: true
    questionId?: true
    alternativeId?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    testAttemptId?: true
    questionId?: true
    alternativeId?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    createdAt?: true
    testAttemptId?: true
    questionId?: true
    alternativeId?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    createdAt: Date
    testAttemptId: string
    questionId: string
    alternativeId: string | null
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    testAttemptId?: boolean
    questionId?: boolean
    alternativeId?: boolean
    testAttempt?: boolean | TestAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | Answer$alternativeArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    testAttemptId?: boolean
    questionId?: boolean
    alternativeId?: boolean
    testAttempt?: boolean | TestAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | Answer$alternativeArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    testAttemptId?: boolean
    questionId?: boolean
    alternativeId?: boolean
    testAttempt?: boolean | TestAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | Answer$alternativeArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    testAttemptId?: boolean
    questionId?: boolean
    alternativeId?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "testAttemptId" | "questionId" | "alternativeId", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testAttempt?: boolean | TestAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | Answer$alternativeArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testAttempt?: boolean | TestAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | Answer$alternativeArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testAttempt?: boolean | TestAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    alternative?: boolean | Answer$alternativeArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      testAttempt: Prisma.$TestAttemptPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
      alternative: Prisma.$AlternativePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      testAttemptId: string
      questionId: string
      alternativeId: string | null
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testAttempt<T extends TestAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestAttemptDefaultArgs<ExtArgs>>): Prisma__TestAttemptClient<$Result.GetResult<Prisma.$TestAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alternative<T extends Answer$alternativeArgs<ExtArgs> = {}>(args?: Subset<T, Answer$alternativeArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly testAttemptId: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly alternativeId: FieldRef<"Answer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer.alternative
   */
  export type Answer$alternativeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    where?: AlternativeWhereInput
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const CertificationTestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    timeLimit: 'timeLimit',
    passingScore: 'passingScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    skillId: 'skillId'
  };

  export type CertificationTestScalarFieldEnum = (typeof CertificationTestScalarFieldEnum)[keyof typeof CertificationTestScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    score: 'score',
    explanation: 'explanation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    certificationTestId: 'certificationTestId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AlternativeScalarFieldEnum: {
    id: 'id',
    text: 'text',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    questionId: 'questionId'
  };

  export type AlternativeScalarFieldEnum = (typeof AlternativeScalarFieldEnum)[keyof typeof AlternativeScalarFieldEnum]


  export const TestAttemptScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    score: 'score',
    passed: 'passed',
    completionTime: 'completionTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    certificationTestId: 'certificationTestId',
    userId: 'userId'
  };

  export type TestAttemptScalarFieldEnum = (typeof TestAttemptScalarFieldEnum)[keyof typeof TestAttemptScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    testAttemptId: 'testAttemptId',
    questionId: 'questionId',
    alternativeId: 'alternativeId'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    TestAttempt?: TestAttemptListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    TestAttempt?: TestAttemptOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    TestAttempt?: TestAttemptListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    tests?: CertificationTestListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tests?: CertificationTestOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    description?: StringNullableFilter<"Skill"> | string | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    tests?: CertificationTestListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    description?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type CertificationTestWhereInput = {
    AND?: CertificationTestWhereInput | CertificationTestWhereInput[]
    OR?: CertificationTestWhereInput[]
    NOT?: CertificationTestWhereInput | CertificationTestWhereInput[]
    id?: StringFilter<"CertificationTest"> | string
    title?: StringFilter<"CertificationTest"> | string
    description?: StringNullableFilter<"CertificationTest"> | string | null
    timeLimit?: IntNullableFilter<"CertificationTest"> | number | null
    passingScore?: FloatFilter<"CertificationTest"> | number
    createdAt?: DateTimeFilter<"CertificationTest"> | Date | string
    updatedAt?: DateTimeFilter<"CertificationTest"> | Date | string
    skillId?: StringFilter<"CertificationTest"> | string
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    questions?: QuestionListRelationFilter
    attempts?: TestAttemptListRelationFilter
  }

  export type CertificationTestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    timeLimit?: SortOrderInput | SortOrder
    passingScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillId?: SortOrder
    skill?: SkillOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    attempts?: TestAttemptOrderByRelationAggregateInput
  }

  export type CertificationTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    skillId?: string
    AND?: CertificationTestWhereInput | CertificationTestWhereInput[]
    OR?: CertificationTestWhereInput[]
    NOT?: CertificationTestWhereInput | CertificationTestWhereInput[]
    title?: StringFilter<"CertificationTest"> | string
    description?: StringNullableFilter<"CertificationTest"> | string | null
    timeLimit?: IntNullableFilter<"CertificationTest"> | number | null
    passingScore?: FloatFilter<"CertificationTest"> | number
    createdAt?: DateTimeFilter<"CertificationTest"> | Date | string
    updatedAt?: DateTimeFilter<"CertificationTest"> | Date | string
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    questions?: QuestionListRelationFilter
    attempts?: TestAttemptListRelationFilter
  }, "id" | "skillId">

  export type CertificationTestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    timeLimit?: SortOrderInput | SortOrder
    passingScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillId?: SortOrder
    _count?: CertificationTestCountOrderByAggregateInput
    _avg?: CertificationTestAvgOrderByAggregateInput
    _max?: CertificationTestMaxOrderByAggregateInput
    _min?: CertificationTestMinOrderByAggregateInput
    _sum?: CertificationTestSumOrderByAggregateInput
  }

  export type CertificationTestScalarWhereWithAggregatesInput = {
    AND?: CertificationTestScalarWhereWithAggregatesInput | CertificationTestScalarWhereWithAggregatesInput[]
    OR?: CertificationTestScalarWhereWithAggregatesInput[]
    NOT?: CertificationTestScalarWhereWithAggregatesInput | CertificationTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CertificationTest"> | string
    title?: StringWithAggregatesFilter<"CertificationTest"> | string
    description?: StringNullableWithAggregatesFilter<"CertificationTest"> | string | null
    timeLimit?: IntNullableWithAggregatesFilter<"CertificationTest"> | number | null
    passingScore?: FloatWithAggregatesFilter<"CertificationTest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CertificationTest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CertificationTest"> | Date | string
    skillId?: StringWithAggregatesFilter<"CertificationTest"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    score?: FloatFilter<"Question"> | number
    explanation?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    certificationTestId?: StringFilter<"Question"> | string
    certificationTest?: XOR<CertificationTestScalarRelationFilter, CertificationTestWhereInput>
    alternatives?: AlternativeListRelationFilter
    answers?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    score?: SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificationTestId?: SortOrder
    certificationTest?: CertificationTestOrderByWithRelationInput
    alternatives?: AlternativeOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    score?: FloatFilter<"Question"> | number
    explanation?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    certificationTestId?: StringFilter<"Question"> | string
    certificationTest?: XOR<CertificationTestScalarRelationFilter, CertificationTestWhereInput>
    alternatives?: AlternativeListRelationFilter
    answers?: AnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    score?: SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificationTestId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    score?: FloatWithAggregatesFilter<"Question"> | number
    explanation?: StringNullableWithAggregatesFilter<"Question"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    certificationTestId?: StringWithAggregatesFilter<"Question"> | string
  }

  export type AlternativeWhereInput = {
    AND?: AlternativeWhereInput | AlternativeWhereInput[]
    OR?: AlternativeWhereInput[]
    NOT?: AlternativeWhereInput | AlternativeWhereInput[]
    id?: StringFilter<"Alternative"> | string
    text?: StringFilter<"Alternative"> | string
    isCorrect?: BoolFilter<"Alternative"> | boolean
    createdAt?: DateTimeFilter<"Alternative"> | Date | string
    updatedAt?: DateTimeFilter<"Alternative"> | Date | string
    questionId?: StringFilter<"Alternative"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type AlternativeOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type AlternativeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlternativeWhereInput | AlternativeWhereInput[]
    OR?: AlternativeWhereInput[]
    NOT?: AlternativeWhereInput | AlternativeWhereInput[]
    text?: StringFilter<"Alternative"> | string
    isCorrect?: BoolFilter<"Alternative"> | boolean
    createdAt?: DateTimeFilter<"Alternative"> | Date | string
    updatedAt?: DateTimeFilter<"Alternative"> | Date | string
    questionId?: StringFilter<"Alternative"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type AlternativeOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    _count?: AlternativeCountOrderByAggregateInput
    _max?: AlternativeMaxOrderByAggregateInput
    _min?: AlternativeMinOrderByAggregateInput
  }

  export type AlternativeScalarWhereWithAggregatesInput = {
    AND?: AlternativeScalarWhereWithAggregatesInput | AlternativeScalarWhereWithAggregatesInput[]
    OR?: AlternativeScalarWhereWithAggregatesInput[]
    NOT?: AlternativeScalarWhereWithAggregatesInput | AlternativeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alternative"> | string
    text?: StringWithAggregatesFilter<"Alternative"> | string
    isCorrect?: BoolWithAggregatesFilter<"Alternative"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Alternative"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alternative"> | Date | string
    questionId?: StringWithAggregatesFilter<"Alternative"> | string
  }

  export type TestAttemptWhereInput = {
    AND?: TestAttemptWhereInput | TestAttemptWhereInput[]
    OR?: TestAttemptWhereInput[]
    NOT?: TestAttemptWhereInput | TestAttemptWhereInput[]
    id?: StringFilter<"TestAttempt"> | string
    startTime?: DateTimeFilter<"TestAttempt"> | Date | string
    endTime?: DateTimeNullableFilter<"TestAttempt"> | Date | string | null
    score?: FloatNullableFilter<"TestAttempt"> | number | null
    passed?: BoolNullableFilter<"TestAttempt"> | boolean | null
    completionTime?: IntNullableFilter<"TestAttempt"> | number | null
    createdAt?: DateTimeFilter<"TestAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"TestAttempt"> | Date | string
    certificationTestId?: StringFilter<"TestAttempt"> | string
    userId?: StringFilter<"TestAttempt"> | string
    certificationTest?: XOR<CertificationTestScalarRelationFilter, CertificationTestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type TestAttemptOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    passed?: SortOrderInput | SortOrder
    completionTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificationTestId?: SortOrder
    userId?: SortOrder
    certificationTest?: CertificationTestOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type TestAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestAttemptWhereInput | TestAttemptWhereInput[]
    OR?: TestAttemptWhereInput[]
    NOT?: TestAttemptWhereInput | TestAttemptWhereInput[]
    startTime?: DateTimeFilter<"TestAttempt"> | Date | string
    endTime?: DateTimeNullableFilter<"TestAttempt"> | Date | string | null
    score?: FloatNullableFilter<"TestAttempt"> | number | null
    passed?: BoolNullableFilter<"TestAttempt"> | boolean | null
    completionTime?: IntNullableFilter<"TestAttempt"> | number | null
    createdAt?: DateTimeFilter<"TestAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"TestAttempt"> | Date | string
    certificationTestId?: StringFilter<"TestAttempt"> | string
    userId?: StringFilter<"TestAttempt"> | string
    certificationTest?: XOR<CertificationTestScalarRelationFilter, CertificationTestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type TestAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    passed?: SortOrderInput | SortOrder
    completionTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificationTestId?: SortOrder
    userId?: SortOrder
    _count?: TestAttemptCountOrderByAggregateInput
    _avg?: TestAttemptAvgOrderByAggregateInput
    _max?: TestAttemptMaxOrderByAggregateInput
    _min?: TestAttemptMinOrderByAggregateInput
    _sum?: TestAttemptSumOrderByAggregateInput
  }

  export type TestAttemptScalarWhereWithAggregatesInput = {
    AND?: TestAttemptScalarWhereWithAggregatesInput | TestAttemptScalarWhereWithAggregatesInput[]
    OR?: TestAttemptScalarWhereWithAggregatesInput[]
    NOT?: TestAttemptScalarWhereWithAggregatesInput | TestAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestAttempt"> | string
    startTime?: DateTimeWithAggregatesFilter<"TestAttempt"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"TestAttempt"> | Date | string | null
    score?: FloatNullableWithAggregatesFilter<"TestAttempt"> | number | null
    passed?: BoolNullableWithAggregatesFilter<"TestAttempt"> | boolean | null
    completionTime?: IntNullableWithAggregatesFilter<"TestAttempt"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TestAttempt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestAttempt"> | Date | string
    certificationTestId?: StringWithAggregatesFilter<"TestAttempt"> | string
    userId?: StringWithAggregatesFilter<"TestAttempt"> | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    testAttemptId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    alternativeId?: StringNullableFilter<"Answer"> | string | null
    testAttempt?: XOR<TestAttemptScalarRelationFilter, TestAttemptWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    alternative?: XOR<AlternativeNullableScalarRelationFilter, AlternativeWhereInput> | null
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    testAttemptId?: SortOrder
    questionId?: SortOrder
    alternativeId?: SortOrderInput | SortOrder
    testAttempt?: TestAttemptOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    alternative?: AlternativeOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    testAttemptId_questionId?: AnswerTestAttemptIdQuestionIdCompoundUniqueInput
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    testAttemptId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    alternativeId?: StringNullableFilter<"Answer"> | string | null
    testAttempt?: XOR<TestAttemptScalarRelationFilter, TestAttemptWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    alternative?: XOR<AlternativeNullableScalarRelationFilter, AlternativeWhereInput> | null
  }, "id" | "testAttemptId_questionId">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    testAttemptId?: SortOrder
    questionId?: SortOrder
    alternativeId?: SortOrderInput | SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    testAttemptId?: StringWithAggregatesFilter<"Answer"> | string
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    alternativeId?: StringNullableWithAggregatesFilter<"Answer"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
    TestAttempt?: TestAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
    TestAttempt?: TestAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TestAttempt?: TestAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TestAttempt?: TestAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    tests?: CertificationTestCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    tests?: CertificationTestUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: CertificationTestUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: CertificationTestUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificationTestCreateInput = {
    id?: string
    title: string
    description?: string | null
    timeLimit?: number | null
    passingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: SkillCreateNestedOneWithoutTestsInput
    questions?: QuestionCreateNestedManyWithoutCertificationTestInput
    attempts?: TestAttemptCreateNestedManyWithoutCertificationTestInput
  }

  export type CertificationTestUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    timeLimit?: number | null
    passingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skillId: string
    questions?: QuestionUncheckedCreateNestedManyWithoutCertificationTestInput
    attempts?: TestAttemptUncheckedCreateNestedManyWithoutCertificationTestInput
  }

  export type CertificationTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutTestsNestedInput
    questions?: QuestionUpdateManyWithoutCertificationTestNestedInput
    attempts?: TestAttemptUpdateManyWithoutCertificationTestNestedInput
  }

  export type CertificationTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillId?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutCertificationTestNestedInput
    attempts?: TestAttemptUncheckedUpdateManyWithoutCertificationTestNestedInput
  }

  export type CertificationTestCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    timeLimit?: number | null
    passingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skillId: string
  }

  export type CertificationTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificationTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    score?: number
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTest: CertificationTestCreateNestedOneWithoutQuestionsInput
    alternatives?: AlternativeCreateNestedManyWithoutQuestionInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    score?: number
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTestId: string
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTest?: CertificationTestUpdateOneRequiredWithoutQuestionsNestedInput
    alternatives?: AlternativeUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTestId?: StringFieldUpdateOperationsInput | string
    alternatives?: AlternativeUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    score?: number
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTestId: string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTestId?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativeCreateInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAlternativesInput
    answers?: AnswerCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeUncheckedCreateInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAlternativesNestedInput
    answers?: AnswerUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeCreateManyInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
  }

  export type AlternativeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlternativeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type TestAttemptCreateInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    score?: number | null
    passed?: boolean | null
    completionTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTest: CertificationTestCreateNestedOneWithoutAttemptsInput
    user: UserCreateNestedOneWithoutTestAttemptInput
    answers?: AnswerCreateNestedManyWithoutTestAttemptInput
  }

  export type TestAttemptUncheckedCreateInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    score?: number | null
    passed?: boolean | null
    completionTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTestId: string
    userId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutTestAttemptInput
  }

  export type TestAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTest?: CertificationTestUpdateOneRequiredWithoutAttemptsNestedInput
    user?: UserUpdateOneRequiredWithoutTestAttemptNestedInput
    answers?: AnswerUpdateManyWithoutTestAttemptNestedInput
  }

  export type TestAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutTestAttemptNestedInput
  }

  export type TestAttemptCreateManyInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    score?: number | null
    passed?: boolean | null
    completionTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTestId: string
    userId: string
  }

  export type TestAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateInput = {
    id?: string
    createdAt?: Date | string
    testAttempt: TestAttemptCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    alternative?: AlternativeCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    testAttemptId: string
    questionId: string
    alternativeId?: string | null
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testAttempt?: TestAttemptUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    alternative?: AlternativeUpdateOneWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testAttemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    alternativeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerCreateManyInput = {
    id?: string
    createdAt?: Date | string
    testAttemptId: string
    questionId: string
    alternativeId?: string | null
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testAttemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    alternativeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TestAttemptListRelationFilter = {
    every?: TestAttemptWhereInput
    some?: TestAttemptWhereInput
    none?: TestAttemptWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CertificationTestListRelationFilter = {
    every?: CertificationTestWhereInput
    some?: CertificationTestWhereInput
    none?: CertificationTestWhereInput
  }

  export type CertificationTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificationTestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillId?: SortOrder
  }

  export type CertificationTestAvgOrderByAggregateInput = {
    timeLimit?: SortOrder
    passingScore?: SortOrder
  }

  export type CertificationTestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillId?: SortOrder
  }

  export type CertificationTestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillId?: SortOrder
  }

  export type CertificationTestSumOrderByAggregateInput = {
    timeLimit?: SortOrder
    passingScore?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CertificationTestScalarRelationFilter = {
    is?: CertificationTestWhereInput
    isNot?: CertificationTestWhereInput
  }

  export type AlternativeListRelationFilter = {
    every?: AlternativeWhereInput
    some?: AlternativeWhereInput
    none?: AlternativeWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AlternativeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    score?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificationTestId?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    score?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificationTestId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    score?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificationTestId?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AlternativeCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
  }

  export type AlternativeMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
  }

  export type AlternativeMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TestAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    completionTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificationTestId?: SortOrder
    userId?: SortOrder
  }

  export type TestAttemptAvgOrderByAggregateInput = {
    score?: SortOrder
    completionTime?: SortOrder
  }

  export type TestAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    completionTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificationTestId?: SortOrder
    userId?: SortOrder
  }

  export type TestAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    completionTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificationTestId?: SortOrder
    userId?: SortOrder
  }

  export type TestAttemptSumOrderByAggregateInput = {
    score?: SortOrder
    completionTime?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TestAttemptScalarRelationFilter = {
    is?: TestAttemptWhereInput
    isNot?: TestAttemptWhereInput
  }

  export type AlternativeNullableScalarRelationFilter = {
    is?: AlternativeWhereInput | null
    isNot?: AlternativeWhereInput | null
  }

  export type AnswerTestAttemptIdQuestionIdCompoundUniqueInput = {
    testAttemptId: string
    questionId: string
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    testAttemptId?: SortOrder
    questionId?: SortOrder
    alternativeId?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    testAttemptId?: SortOrder
    questionId?: SortOrder
    alternativeId?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    testAttemptId?: SortOrder
    questionId?: SortOrder
    alternativeId?: SortOrder
  }

  export type TestAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<TestAttemptCreateWithoutUserInput, TestAttemptUncheckedCreateWithoutUserInput> | TestAttemptCreateWithoutUserInput[] | TestAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestAttemptCreateOrConnectWithoutUserInput | TestAttemptCreateOrConnectWithoutUserInput[]
    createMany?: TestAttemptCreateManyUserInputEnvelope
    connect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
  }

  export type TestAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TestAttemptCreateWithoutUserInput, TestAttemptUncheckedCreateWithoutUserInput> | TestAttemptCreateWithoutUserInput[] | TestAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestAttemptCreateOrConnectWithoutUserInput | TestAttemptCreateOrConnectWithoutUserInput[]
    createMany?: TestAttemptCreateManyUserInputEnvelope
    connect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TestAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestAttemptCreateWithoutUserInput, TestAttemptUncheckedCreateWithoutUserInput> | TestAttemptCreateWithoutUserInput[] | TestAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestAttemptCreateOrConnectWithoutUserInput | TestAttemptCreateOrConnectWithoutUserInput[]
    upsert?: TestAttemptUpsertWithWhereUniqueWithoutUserInput | TestAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestAttemptCreateManyUserInputEnvelope
    set?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    disconnect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    delete?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    connect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    update?: TestAttemptUpdateWithWhereUniqueWithoutUserInput | TestAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestAttemptUpdateManyWithWhereWithoutUserInput | TestAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestAttemptScalarWhereInput | TestAttemptScalarWhereInput[]
  }

  export type TestAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestAttemptCreateWithoutUserInput, TestAttemptUncheckedCreateWithoutUserInput> | TestAttemptCreateWithoutUserInput[] | TestAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestAttemptCreateOrConnectWithoutUserInput | TestAttemptCreateOrConnectWithoutUserInput[]
    upsert?: TestAttemptUpsertWithWhereUniqueWithoutUserInput | TestAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestAttemptCreateManyUserInputEnvelope
    set?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    disconnect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    delete?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    connect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    update?: TestAttemptUpdateWithWhereUniqueWithoutUserInput | TestAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestAttemptUpdateManyWithWhereWithoutUserInput | TestAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestAttemptScalarWhereInput | TestAttemptScalarWhereInput[]
  }

  export type CertificationTestCreateNestedManyWithoutSkillInput = {
    create?: XOR<CertificationTestCreateWithoutSkillInput, CertificationTestUncheckedCreateWithoutSkillInput> | CertificationTestCreateWithoutSkillInput[] | CertificationTestUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CertificationTestCreateOrConnectWithoutSkillInput | CertificationTestCreateOrConnectWithoutSkillInput[]
    createMany?: CertificationTestCreateManySkillInputEnvelope
    connect?: CertificationTestWhereUniqueInput | CertificationTestWhereUniqueInput[]
  }

  export type CertificationTestUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<CertificationTestCreateWithoutSkillInput, CertificationTestUncheckedCreateWithoutSkillInput> | CertificationTestCreateWithoutSkillInput[] | CertificationTestUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CertificationTestCreateOrConnectWithoutSkillInput | CertificationTestCreateOrConnectWithoutSkillInput[]
    createMany?: CertificationTestCreateManySkillInputEnvelope
    connect?: CertificationTestWhereUniqueInput | CertificationTestWhereUniqueInput[]
  }

  export type CertificationTestUpdateManyWithoutSkillNestedInput = {
    create?: XOR<CertificationTestCreateWithoutSkillInput, CertificationTestUncheckedCreateWithoutSkillInput> | CertificationTestCreateWithoutSkillInput[] | CertificationTestUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CertificationTestCreateOrConnectWithoutSkillInput | CertificationTestCreateOrConnectWithoutSkillInput[]
    upsert?: CertificationTestUpsertWithWhereUniqueWithoutSkillInput | CertificationTestUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: CertificationTestCreateManySkillInputEnvelope
    set?: CertificationTestWhereUniqueInput | CertificationTestWhereUniqueInput[]
    disconnect?: CertificationTestWhereUniqueInput | CertificationTestWhereUniqueInput[]
    delete?: CertificationTestWhereUniqueInput | CertificationTestWhereUniqueInput[]
    connect?: CertificationTestWhereUniqueInput | CertificationTestWhereUniqueInput[]
    update?: CertificationTestUpdateWithWhereUniqueWithoutSkillInput | CertificationTestUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: CertificationTestUpdateManyWithWhereWithoutSkillInput | CertificationTestUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: CertificationTestScalarWhereInput | CertificationTestScalarWhereInput[]
  }

  export type CertificationTestUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<CertificationTestCreateWithoutSkillInput, CertificationTestUncheckedCreateWithoutSkillInput> | CertificationTestCreateWithoutSkillInput[] | CertificationTestUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CertificationTestCreateOrConnectWithoutSkillInput | CertificationTestCreateOrConnectWithoutSkillInput[]
    upsert?: CertificationTestUpsertWithWhereUniqueWithoutSkillInput | CertificationTestUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: CertificationTestCreateManySkillInputEnvelope
    set?: CertificationTestWhereUniqueInput | CertificationTestWhereUniqueInput[]
    disconnect?: CertificationTestWhereUniqueInput | CertificationTestWhereUniqueInput[]
    delete?: CertificationTestWhereUniqueInput | CertificationTestWhereUniqueInput[]
    connect?: CertificationTestWhereUniqueInput | CertificationTestWhereUniqueInput[]
    update?: CertificationTestUpdateWithWhereUniqueWithoutSkillInput | CertificationTestUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: CertificationTestUpdateManyWithWhereWithoutSkillInput | CertificationTestUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: CertificationTestScalarWhereInput | CertificationTestScalarWhereInput[]
  }

  export type SkillCreateNestedOneWithoutTestsInput = {
    create?: XOR<SkillCreateWithoutTestsInput, SkillUncheckedCreateWithoutTestsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutTestsInput
    connect?: SkillWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutCertificationTestInput = {
    create?: XOR<QuestionCreateWithoutCertificationTestInput, QuestionUncheckedCreateWithoutCertificationTestInput> | QuestionCreateWithoutCertificationTestInput[] | QuestionUncheckedCreateWithoutCertificationTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCertificationTestInput | QuestionCreateOrConnectWithoutCertificationTestInput[]
    createMany?: QuestionCreateManyCertificationTestInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type TestAttemptCreateNestedManyWithoutCertificationTestInput = {
    create?: XOR<TestAttemptCreateWithoutCertificationTestInput, TestAttemptUncheckedCreateWithoutCertificationTestInput> | TestAttemptCreateWithoutCertificationTestInput[] | TestAttemptUncheckedCreateWithoutCertificationTestInput[]
    connectOrCreate?: TestAttemptCreateOrConnectWithoutCertificationTestInput | TestAttemptCreateOrConnectWithoutCertificationTestInput[]
    createMany?: TestAttemptCreateManyCertificationTestInputEnvelope
    connect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutCertificationTestInput = {
    create?: XOR<QuestionCreateWithoutCertificationTestInput, QuestionUncheckedCreateWithoutCertificationTestInput> | QuestionCreateWithoutCertificationTestInput[] | QuestionUncheckedCreateWithoutCertificationTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCertificationTestInput | QuestionCreateOrConnectWithoutCertificationTestInput[]
    createMany?: QuestionCreateManyCertificationTestInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type TestAttemptUncheckedCreateNestedManyWithoutCertificationTestInput = {
    create?: XOR<TestAttemptCreateWithoutCertificationTestInput, TestAttemptUncheckedCreateWithoutCertificationTestInput> | TestAttemptCreateWithoutCertificationTestInput[] | TestAttemptUncheckedCreateWithoutCertificationTestInput[]
    connectOrCreate?: TestAttemptCreateOrConnectWithoutCertificationTestInput | TestAttemptCreateOrConnectWithoutCertificationTestInput[]
    createMany?: TestAttemptCreateManyCertificationTestInputEnvelope
    connect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SkillUpdateOneRequiredWithoutTestsNestedInput = {
    create?: XOR<SkillCreateWithoutTestsInput, SkillUncheckedCreateWithoutTestsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutTestsInput
    upsert?: SkillUpsertWithoutTestsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutTestsInput, SkillUpdateWithoutTestsInput>, SkillUncheckedUpdateWithoutTestsInput>
  }

  export type QuestionUpdateManyWithoutCertificationTestNestedInput = {
    create?: XOR<QuestionCreateWithoutCertificationTestInput, QuestionUncheckedCreateWithoutCertificationTestInput> | QuestionCreateWithoutCertificationTestInput[] | QuestionUncheckedCreateWithoutCertificationTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCertificationTestInput | QuestionCreateOrConnectWithoutCertificationTestInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCertificationTestInput | QuestionUpsertWithWhereUniqueWithoutCertificationTestInput[]
    createMany?: QuestionCreateManyCertificationTestInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCertificationTestInput | QuestionUpdateWithWhereUniqueWithoutCertificationTestInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCertificationTestInput | QuestionUpdateManyWithWhereWithoutCertificationTestInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type TestAttemptUpdateManyWithoutCertificationTestNestedInput = {
    create?: XOR<TestAttemptCreateWithoutCertificationTestInput, TestAttemptUncheckedCreateWithoutCertificationTestInput> | TestAttemptCreateWithoutCertificationTestInput[] | TestAttemptUncheckedCreateWithoutCertificationTestInput[]
    connectOrCreate?: TestAttemptCreateOrConnectWithoutCertificationTestInput | TestAttemptCreateOrConnectWithoutCertificationTestInput[]
    upsert?: TestAttemptUpsertWithWhereUniqueWithoutCertificationTestInput | TestAttemptUpsertWithWhereUniqueWithoutCertificationTestInput[]
    createMany?: TestAttemptCreateManyCertificationTestInputEnvelope
    set?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    disconnect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    delete?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    connect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    update?: TestAttemptUpdateWithWhereUniqueWithoutCertificationTestInput | TestAttemptUpdateWithWhereUniqueWithoutCertificationTestInput[]
    updateMany?: TestAttemptUpdateManyWithWhereWithoutCertificationTestInput | TestAttemptUpdateManyWithWhereWithoutCertificationTestInput[]
    deleteMany?: TestAttemptScalarWhereInput | TestAttemptScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutCertificationTestNestedInput = {
    create?: XOR<QuestionCreateWithoutCertificationTestInput, QuestionUncheckedCreateWithoutCertificationTestInput> | QuestionCreateWithoutCertificationTestInput[] | QuestionUncheckedCreateWithoutCertificationTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCertificationTestInput | QuestionCreateOrConnectWithoutCertificationTestInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCertificationTestInput | QuestionUpsertWithWhereUniqueWithoutCertificationTestInput[]
    createMany?: QuestionCreateManyCertificationTestInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCertificationTestInput | QuestionUpdateWithWhereUniqueWithoutCertificationTestInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCertificationTestInput | QuestionUpdateManyWithWhereWithoutCertificationTestInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type TestAttemptUncheckedUpdateManyWithoutCertificationTestNestedInput = {
    create?: XOR<TestAttemptCreateWithoutCertificationTestInput, TestAttemptUncheckedCreateWithoutCertificationTestInput> | TestAttemptCreateWithoutCertificationTestInput[] | TestAttemptUncheckedCreateWithoutCertificationTestInput[]
    connectOrCreate?: TestAttemptCreateOrConnectWithoutCertificationTestInput | TestAttemptCreateOrConnectWithoutCertificationTestInput[]
    upsert?: TestAttemptUpsertWithWhereUniqueWithoutCertificationTestInput | TestAttemptUpsertWithWhereUniqueWithoutCertificationTestInput[]
    createMany?: TestAttemptCreateManyCertificationTestInputEnvelope
    set?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    disconnect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    delete?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    connect?: TestAttemptWhereUniqueInput | TestAttemptWhereUniqueInput[]
    update?: TestAttemptUpdateWithWhereUniqueWithoutCertificationTestInput | TestAttemptUpdateWithWhereUniqueWithoutCertificationTestInput[]
    updateMany?: TestAttemptUpdateManyWithWhereWithoutCertificationTestInput | TestAttemptUpdateManyWithWhereWithoutCertificationTestInput[]
    deleteMany?: TestAttemptScalarWhereInput | TestAttemptScalarWhereInput[]
  }

  export type CertificationTestCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<CertificationTestCreateWithoutQuestionsInput, CertificationTestUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: CertificationTestCreateOrConnectWithoutQuestionsInput
    connect?: CertificationTestWhereUniqueInput
  }

  export type AlternativeCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AlternativeUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CertificationTestUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<CertificationTestCreateWithoutQuestionsInput, CertificationTestUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: CertificationTestCreateOrConnectWithoutQuestionsInput
    upsert?: CertificationTestUpsertWithoutQuestionsInput
    connect?: CertificationTestWhereUniqueInput
    update?: XOR<XOR<CertificationTestUpdateToOneWithWhereWithoutQuestionsInput, CertificationTestUpdateWithoutQuestionsInput>, CertificationTestUncheckedUpdateWithoutQuestionsInput>
  }

  export type AlternativeUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    upsert?: AlternativeUpsertWithWhereUniqueWithoutQuestionInput | AlternativeUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    set?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    disconnect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    delete?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    update?: AlternativeUpdateWithWhereUniqueWithoutQuestionInput | AlternativeUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AlternativeUpdateManyWithWhereWithoutQuestionInput | AlternativeUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AlternativeUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    upsert?: AlternativeUpsertWithWhereUniqueWithoutQuestionInput | AlternativeUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    set?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    disconnect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    delete?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    update?: AlternativeUpdateWithWhereUniqueWithoutQuestionInput | AlternativeUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AlternativeUpdateManyWithWhereWithoutQuestionInput | AlternativeUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAlternativesInput = {
    create?: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAlternativesInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutAlternativeInput = {
    create?: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput> | AnswerCreateWithoutAlternativeInput[] | AnswerUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAlternativeInput | AnswerCreateOrConnectWithoutAlternativeInput[]
    createMany?: AnswerCreateManyAlternativeInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutAlternativeInput = {
    create?: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput> | AnswerCreateWithoutAlternativeInput[] | AnswerUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAlternativeInput | AnswerCreateOrConnectWithoutAlternativeInput[]
    createMany?: AnswerCreateManyAlternativeInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestionUpdateOneRequiredWithoutAlternativesNestedInput = {
    create?: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAlternativesInput
    upsert?: QuestionUpsertWithoutAlternativesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAlternativesInput, QuestionUpdateWithoutAlternativesInput>, QuestionUncheckedUpdateWithoutAlternativesInput>
  }

  export type AnswerUpdateManyWithoutAlternativeNestedInput = {
    create?: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput> | AnswerCreateWithoutAlternativeInput[] | AnswerUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAlternativeInput | AnswerCreateOrConnectWithoutAlternativeInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAlternativeInput | AnswerUpsertWithWhereUniqueWithoutAlternativeInput[]
    createMany?: AnswerCreateManyAlternativeInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAlternativeInput | AnswerUpdateWithWhereUniqueWithoutAlternativeInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAlternativeInput | AnswerUpdateManyWithWhereWithoutAlternativeInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutAlternativeNestedInput = {
    create?: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput> | AnswerCreateWithoutAlternativeInput[] | AnswerUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAlternativeInput | AnswerCreateOrConnectWithoutAlternativeInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAlternativeInput | AnswerUpsertWithWhereUniqueWithoutAlternativeInput[]
    createMany?: AnswerCreateManyAlternativeInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAlternativeInput | AnswerUpdateWithWhereUniqueWithoutAlternativeInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAlternativeInput | AnswerUpdateManyWithWhereWithoutAlternativeInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CertificationTestCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<CertificationTestCreateWithoutAttemptsInput, CertificationTestUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: CertificationTestCreateOrConnectWithoutAttemptsInput
    connect?: CertificationTestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTestAttemptInput = {
    create?: XOR<UserCreateWithoutTestAttemptInput, UserUncheckedCreateWithoutTestAttemptInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestAttemptInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutTestAttemptInput = {
    create?: XOR<AnswerCreateWithoutTestAttemptInput, AnswerUncheckedCreateWithoutTestAttemptInput> | AnswerCreateWithoutTestAttemptInput[] | AnswerUncheckedCreateWithoutTestAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutTestAttemptInput | AnswerCreateOrConnectWithoutTestAttemptInput[]
    createMany?: AnswerCreateManyTestAttemptInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutTestAttemptInput = {
    create?: XOR<AnswerCreateWithoutTestAttemptInput, AnswerUncheckedCreateWithoutTestAttemptInput> | AnswerCreateWithoutTestAttemptInput[] | AnswerUncheckedCreateWithoutTestAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutTestAttemptInput | AnswerCreateOrConnectWithoutTestAttemptInput[]
    createMany?: AnswerCreateManyTestAttemptInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CertificationTestUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<CertificationTestCreateWithoutAttemptsInput, CertificationTestUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: CertificationTestCreateOrConnectWithoutAttemptsInput
    upsert?: CertificationTestUpsertWithoutAttemptsInput
    connect?: CertificationTestWhereUniqueInput
    update?: XOR<XOR<CertificationTestUpdateToOneWithWhereWithoutAttemptsInput, CertificationTestUpdateWithoutAttemptsInput>, CertificationTestUncheckedUpdateWithoutAttemptsInput>
  }

  export type UserUpdateOneRequiredWithoutTestAttemptNestedInput = {
    create?: XOR<UserCreateWithoutTestAttemptInput, UserUncheckedCreateWithoutTestAttemptInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestAttemptInput
    upsert?: UserUpsertWithoutTestAttemptInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestAttemptInput, UserUpdateWithoutTestAttemptInput>, UserUncheckedUpdateWithoutTestAttemptInput>
  }

  export type AnswerUpdateManyWithoutTestAttemptNestedInput = {
    create?: XOR<AnswerCreateWithoutTestAttemptInput, AnswerUncheckedCreateWithoutTestAttemptInput> | AnswerCreateWithoutTestAttemptInput[] | AnswerUncheckedCreateWithoutTestAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutTestAttemptInput | AnswerCreateOrConnectWithoutTestAttemptInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutTestAttemptInput | AnswerUpsertWithWhereUniqueWithoutTestAttemptInput[]
    createMany?: AnswerCreateManyTestAttemptInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutTestAttemptInput | AnswerUpdateWithWhereUniqueWithoutTestAttemptInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutTestAttemptInput | AnswerUpdateManyWithWhereWithoutTestAttemptInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutTestAttemptNestedInput = {
    create?: XOR<AnswerCreateWithoutTestAttemptInput, AnswerUncheckedCreateWithoutTestAttemptInput> | AnswerCreateWithoutTestAttemptInput[] | AnswerUncheckedCreateWithoutTestAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutTestAttemptInput | AnswerCreateOrConnectWithoutTestAttemptInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutTestAttemptInput | AnswerUpsertWithWhereUniqueWithoutTestAttemptInput[]
    createMany?: AnswerCreateManyTestAttemptInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutTestAttemptInput | AnswerUpdateWithWhereUniqueWithoutTestAttemptInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutTestAttemptInput | AnswerUpdateManyWithWhereWithoutTestAttemptInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type TestAttemptCreateNestedOneWithoutAnswersInput = {
    create?: XOR<TestAttemptCreateWithoutAnswersInput, TestAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: TestAttemptCreateOrConnectWithoutAnswersInput
    connect?: TestAttemptWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type AlternativeCreateNestedOneWithoutAnswersInput = {
    create?: XOR<AlternativeCreateWithoutAnswersInput, AlternativeUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AlternativeCreateOrConnectWithoutAnswersInput
    connect?: AlternativeWhereUniqueInput
  }

  export type TestAttemptUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<TestAttemptCreateWithoutAnswersInput, TestAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: TestAttemptCreateOrConnectWithoutAnswersInput
    upsert?: TestAttemptUpsertWithoutAnswersInput
    connect?: TestAttemptWhereUniqueInput
    update?: XOR<XOR<TestAttemptUpdateToOneWithWhereWithoutAnswersInput, TestAttemptUpdateWithoutAnswersInput>, TestAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type AlternativeUpdateOneWithoutAnswersNestedInput = {
    create?: XOR<AlternativeCreateWithoutAnswersInput, AlternativeUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AlternativeCreateOrConnectWithoutAnswersInput
    upsert?: AlternativeUpsertWithoutAnswersInput
    disconnect?: AlternativeWhereInput | boolean
    delete?: AlternativeWhereInput | boolean
    connect?: AlternativeWhereUniqueInput
    update?: XOR<XOR<AlternativeUpdateToOneWithWhereWithoutAnswersInput, AlternativeUpdateWithoutAnswersInput>, AlternativeUncheckedUpdateWithoutAnswersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TestAttemptCreateWithoutUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    score?: number | null
    passed?: boolean | null
    completionTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTest: CertificationTestCreateNestedOneWithoutAttemptsInput
    answers?: AnswerCreateNestedManyWithoutTestAttemptInput
  }

  export type TestAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    score?: number | null
    passed?: boolean | null
    completionTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTestId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutTestAttemptInput
  }

  export type TestAttemptCreateOrConnectWithoutUserInput = {
    where: TestAttemptWhereUniqueInput
    create: XOR<TestAttemptCreateWithoutUserInput, TestAttemptUncheckedCreateWithoutUserInput>
  }

  export type TestAttemptCreateManyUserInputEnvelope = {
    data: TestAttemptCreateManyUserInput | TestAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TestAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: TestAttemptWhereUniqueInput
    update: XOR<TestAttemptUpdateWithoutUserInput, TestAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<TestAttemptCreateWithoutUserInput, TestAttemptUncheckedCreateWithoutUserInput>
  }

  export type TestAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: TestAttemptWhereUniqueInput
    data: XOR<TestAttemptUpdateWithoutUserInput, TestAttemptUncheckedUpdateWithoutUserInput>
  }

  export type TestAttemptUpdateManyWithWhereWithoutUserInput = {
    where: TestAttemptScalarWhereInput
    data: XOR<TestAttemptUpdateManyMutationInput, TestAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type TestAttemptScalarWhereInput = {
    AND?: TestAttemptScalarWhereInput | TestAttemptScalarWhereInput[]
    OR?: TestAttemptScalarWhereInput[]
    NOT?: TestAttemptScalarWhereInput | TestAttemptScalarWhereInput[]
    id?: StringFilter<"TestAttempt"> | string
    startTime?: DateTimeFilter<"TestAttempt"> | Date | string
    endTime?: DateTimeNullableFilter<"TestAttempt"> | Date | string | null
    score?: FloatNullableFilter<"TestAttempt"> | number | null
    passed?: BoolNullableFilter<"TestAttempt"> | boolean | null
    completionTime?: IntNullableFilter<"TestAttempt"> | number | null
    createdAt?: DateTimeFilter<"TestAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"TestAttempt"> | Date | string
    certificationTestId?: StringFilter<"TestAttempt"> | string
    userId?: StringFilter<"TestAttempt"> | string
  }

  export type CertificationTestCreateWithoutSkillInput = {
    id?: string
    title: string
    description?: string | null
    timeLimit?: number | null
    passingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutCertificationTestInput
    attempts?: TestAttemptCreateNestedManyWithoutCertificationTestInput
  }

  export type CertificationTestUncheckedCreateWithoutSkillInput = {
    id?: string
    title: string
    description?: string | null
    timeLimit?: number | null
    passingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutCertificationTestInput
    attempts?: TestAttemptUncheckedCreateNestedManyWithoutCertificationTestInput
  }

  export type CertificationTestCreateOrConnectWithoutSkillInput = {
    where: CertificationTestWhereUniqueInput
    create: XOR<CertificationTestCreateWithoutSkillInput, CertificationTestUncheckedCreateWithoutSkillInput>
  }

  export type CertificationTestCreateManySkillInputEnvelope = {
    data: CertificationTestCreateManySkillInput | CertificationTestCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type CertificationTestUpsertWithWhereUniqueWithoutSkillInput = {
    where: CertificationTestWhereUniqueInput
    update: XOR<CertificationTestUpdateWithoutSkillInput, CertificationTestUncheckedUpdateWithoutSkillInput>
    create: XOR<CertificationTestCreateWithoutSkillInput, CertificationTestUncheckedCreateWithoutSkillInput>
  }

  export type CertificationTestUpdateWithWhereUniqueWithoutSkillInput = {
    where: CertificationTestWhereUniqueInput
    data: XOR<CertificationTestUpdateWithoutSkillInput, CertificationTestUncheckedUpdateWithoutSkillInput>
  }

  export type CertificationTestUpdateManyWithWhereWithoutSkillInput = {
    where: CertificationTestScalarWhereInput
    data: XOR<CertificationTestUpdateManyMutationInput, CertificationTestUncheckedUpdateManyWithoutSkillInput>
  }

  export type CertificationTestScalarWhereInput = {
    AND?: CertificationTestScalarWhereInput | CertificationTestScalarWhereInput[]
    OR?: CertificationTestScalarWhereInput[]
    NOT?: CertificationTestScalarWhereInput | CertificationTestScalarWhereInput[]
    id?: StringFilter<"CertificationTest"> | string
    title?: StringFilter<"CertificationTest"> | string
    description?: StringNullableFilter<"CertificationTest"> | string | null
    timeLimit?: IntNullableFilter<"CertificationTest"> | number | null
    passingScore?: FloatFilter<"CertificationTest"> | number
    createdAt?: DateTimeFilter<"CertificationTest"> | Date | string
    updatedAt?: DateTimeFilter<"CertificationTest"> | Date | string
    skillId?: StringFilter<"CertificationTest"> | string
  }

  export type SkillCreateWithoutTestsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type SkillUncheckedCreateWithoutTestsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type SkillCreateOrConnectWithoutTestsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutTestsInput, SkillUncheckedCreateWithoutTestsInput>
  }

  export type QuestionCreateWithoutCertificationTestInput = {
    id?: string
    text: string
    score?: number
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alternatives?: AlternativeCreateNestedManyWithoutQuestionInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutCertificationTestInput = {
    id?: string
    text: string
    score?: number
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutCertificationTestInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCertificationTestInput, QuestionUncheckedCreateWithoutCertificationTestInput>
  }

  export type QuestionCreateManyCertificationTestInputEnvelope = {
    data: QuestionCreateManyCertificationTestInput | QuestionCreateManyCertificationTestInput[]
    skipDuplicates?: boolean
  }

  export type TestAttemptCreateWithoutCertificationTestInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    score?: number | null
    passed?: boolean | null
    completionTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTestAttemptInput
    answers?: AnswerCreateNestedManyWithoutTestAttemptInput
  }

  export type TestAttemptUncheckedCreateWithoutCertificationTestInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    score?: number | null
    passed?: boolean | null
    completionTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutTestAttemptInput
  }

  export type TestAttemptCreateOrConnectWithoutCertificationTestInput = {
    where: TestAttemptWhereUniqueInput
    create: XOR<TestAttemptCreateWithoutCertificationTestInput, TestAttemptUncheckedCreateWithoutCertificationTestInput>
  }

  export type TestAttemptCreateManyCertificationTestInputEnvelope = {
    data: TestAttemptCreateManyCertificationTestInput | TestAttemptCreateManyCertificationTestInput[]
    skipDuplicates?: boolean
  }

  export type SkillUpsertWithoutTestsInput = {
    update: XOR<SkillUpdateWithoutTestsInput, SkillUncheckedUpdateWithoutTestsInput>
    create: XOR<SkillCreateWithoutTestsInput, SkillUncheckedCreateWithoutTestsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutTestsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutTestsInput, SkillUncheckedUpdateWithoutTestsInput>
  }

  export type SkillUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutCertificationTestInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutCertificationTestInput, QuestionUncheckedUpdateWithoutCertificationTestInput>
    create: XOR<QuestionCreateWithoutCertificationTestInput, QuestionUncheckedCreateWithoutCertificationTestInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutCertificationTestInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutCertificationTestInput, QuestionUncheckedUpdateWithoutCertificationTestInput>
  }

  export type QuestionUpdateManyWithWhereWithoutCertificationTestInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutCertificationTestInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    score?: FloatFilter<"Question"> | number
    explanation?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    certificationTestId?: StringFilter<"Question"> | string
  }

  export type TestAttemptUpsertWithWhereUniqueWithoutCertificationTestInput = {
    where: TestAttemptWhereUniqueInput
    update: XOR<TestAttemptUpdateWithoutCertificationTestInput, TestAttemptUncheckedUpdateWithoutCertificationTestInput>
    create: XOR<TestAttemptCreateWithoutCertificationTestInput, TestAttemptUncheckedCreateWithoutCertificationTestInput>
  }

  export type TestAttemptUpdateWithWhereUniqueWithoutCertificationTestInput = {
    where: TestAttemptWhereUniqueInput
    data: XOR<TestAttemptUpdateWithoutCertificationTestInput, TestAttemptUncheckedUpdateWithoutCertificationTestInput>
  }

  export type TestAttemptUpdateManyWithWhereWithoutCertificationTestInput = {
    where: TestAttemptScalarWhereInput
    data: XOR<TestAttemptUpdateManyMutationInput, TestAttemptUncheckedUpdateManyWithoutCertificationTestInput>
  }

  export type CertificationTestCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    timeLimit?: number | null
    passingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: SkillCreateNestedOneWithoutTestsInput
    attempts?: TestAttemptCreateNestedManyWithoutCertificationTestInput
  }

  export type CertificationTestUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    timeLimit?: number | null
    passingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skillId: string
    attempts?: TestAttemptUncheckedCreateNestedManyWithoutCertificationTestInput
  }

  export type CertificationTestCreateOrConnectWithoutQuestionsInput = {
    where: CertificationTestWhereUniqueInput
    create: XOR<CertificationTestCreateWithoutQuestionsInput, CertificationTestUncheckedCreateWithoutQuestionsInput>
  }

  export type AlternativeCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeUncheckedCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeCreateOrConnectWithoutQuestionInput = {
    where: AlternativeWhereUniqueInput
    create: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput>
  }

  export type AlternativeCreateManyQuestionInputEnvelope = {
    data: AlternativeCreateManyQuestionInput | AlternativeCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    createdAt?: Date | string
    testAttempt: TestAttemptCreateNestedOneWithoutAnswersInput
    alternative?: AlternativeCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    createdAt?: Date | string
    testAttemptId: string
    alternativeId?: string | null
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type CertificationTestUpsertWithoutQuestionsInput = {
    update: XOR<CertificationTestUpdateWithoutQuestionsInput, CertificationTestUncheckedUpdateWithoutQuestionsInput>
    create: XOR<CertificationTestCreateWithoutQuestionsInput, CertificationTestUncheckedCreateWithoutQuestionsInput>
    where?: CertificationTestWhereInput
  }

  export type CertificationTestUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: CertificationTestWhereInput
    data: XOR<CertificationTestUpdateWithoutQuestionsInput, CertificationTestUncheckedUpdateWithoutQuestionsInput>
  }

  export type CertificationTestUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutTestsNestedInput
    attempts?: TestAttemptUpdateManyWithoutCertificationTestNestedInput
  }

  export type CertificationTestUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillId?: StringFieldUpdateOperationsInput | string
    attempts?: TestAttemptUncheckedUpdateManyWithoutCertificationTestNestedInput
  }

  export type AlternativeUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AlternativeWhereUniqueInput
    update: XOR<AlternativeUpdateWithoutQuestionInput, AlternativeUncheckedUpdateWithoutQuestionInput>
    create: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput>
  }

  export type AlternativeUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AlternativeWhereUniqueInput
    data: XOR<AlternativeUpdateWithoutQuestionInput, AlternativeUncheckedUpdateWithoutQuestionInput>
  }

  export type AlternativeUpdateManyWithWhereWithoutQuestionInput = {
    where: AlternativeScalarWhereInput
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AlternativeScalarWhereInput = {
    AND?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
    OR?: AlternativeScalarWhereInput[]
    NOT?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
    id?: StringFilter<"Alternative"> | string
    text?: StringFilter<"Alternative"> | string
    isCorrect?: BoolFilter<"Alternative"> | boolean
    createdAt?: DateTimeFilter<"Alternative"> | Date | string
    updatedAt?: DateTimeFilter<"Alternative"> | Date | string
    questionId?: StringFilter<"Alternative"> | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    testAttemptId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    alternativeId?: StringNullableFilter<"Answer"> | string | null
  }

  export type QuestionCreateWithoutAlternativesInput = {
    id?: string
    text: string
    score?: number
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTest: CertificationTestCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAlternativesInput = {
    id?: string
    text: string
    score?: number
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTestId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAlternativesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
  }

  export type AnswerCreateWithoutAlternativeInput = {
    id?: string
    createdAt?: Date | string
    testAttempt: TestAttemptCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutAlternativeInput = {
    id?: string
    createdAt?: Date | string
    testAttemptId: string
    questionId: string
  }

  export type AnswerCreateOrConnectWithoutAlternativeInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput>
  }

  export type AnswerCreateManyAlternativeInputEnvelope = {
    data: AnswerCreateManyAlternativeInput | AnswerCreateManyAlternativeInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutAlternativesInput = {
    update: XOR<QuestionUpdateWithoutAlternativesInput, QuestionUncheckedUpdateWithoutAlternativesInput>
    create: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAlternativesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAlternativesInput, QuestionUncheckedUpdateWithoutAlternativesInput>
  }

  export type QuestionUpdateWithoutAlternativesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTest?: CertificationTestUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAlternativesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTestId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutAlternativeInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutAlternativeInput, AnswerUncheckedUpdateWithoutAlternativeInput>
    create: XOR<AnswerCreateWithoutAlternativeInput, AnswerUncheckedCreateWithoutAlternativeInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutAlternativeInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutAlternativeInput, AnswerUncheckedUpdateWithoutAlternativeInput>
  }

  export type AnswerUpdateManyWithWhereWithoutAlternativeInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAlternativeInput>
  }

  export type CertificationTestCreateWithoutAttemptsInput = {
    id?: string
    title: string
    description?: string | null
    timeLimit?: number | null
    passingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: SkillCreateNestedOneWithoutTestsInput
    questions?: QuestionCreateNestedManyWithoutCertificationTestInput
  }

  export type CertificationTestUncheckedCreateWithoutAttemptsInput = {
    id?: string
    title: string
    description?: string | null
    timeLimit?: number | null
    passingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skillId: string
    questions?: QuestionUncheckedCreateNestedManyWithoutCertificationTestInput
  }

  export type CertificationTestCreateOrConnectWithoutAttemptsInput = {
    where: CertificationTestWhereUniqueInput
    create: XOR<CertificationTestCreateWithoutAttemptsInput, CertificationTestUncheckedCreateWithoutAttemptsInput>
  }

  export type UserCreateWithoutTestAttemptInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTestAttemptInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTestAttemptInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestAttemptInput, UserUncheckedCreateWithoutTestAttemptInput>
  }

  export type AnswerCreateWithoutTestAttemptInput = {
    id?: string
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
    alternative?: AlternativeCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutTestAttemptInput = {
    id?: string
    createdAt?: Date | string
    questionId: string
    alternativeId?: string | null
  }

  export type AnswerCreateOrConnectWithoutTestAttemptInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutTestAttemptInput, AnswerUncheckedCreateWithoutTestAttemptInput>
  }

  export type AnswerCreateManyTestAttemptInputEnvelope = {
    data: AnswerCreateManyTestAttemptInput | AnswerCreateManyTestAttemptInput[]
    skipDuplicates?: boolean
  }

  export type CertificationTestUpsertWithoutAttemptsInput = {
    update: XOR<CertificationTestUpdateWithoutAttemptsInput, CertificationTestUncheckedUpdateWithoutAttemptsInput>
    create: XOR<CertificationTestCreateWithoutAttemptsInput, CertificationTestUncheckedCreateWithoutAttemptsInput>
    where?: CertificationTestWhereInput
  }

  export type CertificationTestUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: CertificationTestWhereInput
    data: XOR<CertificationTestUpdateWithoutAttemptsInput, CertificationTestUncheckedUpdateWithoutAttemptsInput>
  }

  export type CertificationTestUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutTestsNestedInput
    questions?: QuestionUpdateManyWithoutCertificationTestNestedInput
  }

  export type CertificationTestUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillId?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutCertificationTestNestedInput
  }

  export type UserUpsertWithoutTestAttemptInput = {
    update: XOR<UserUpdateWithoutTestAttemptInput, UserUncheckedUpdateWithoutTestAttemptInput>
    create: XOR<UserCreateWithoutTestAttemptInput, UserUncheckedCreateWithoutTestAttemptInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestAttemptInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestAttemptInput, UserUncheckedUpdateWithoutTestAttemptInput>
  }

  export type UserUpdateWithoutTestAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTestAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutTestAttemptInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutTestAttemptInput, AnswerUncheckedUpdateWithoutTestAttemptInput>
    create: XOR<AnswerCreateWithoutTestAttemptInput, AnswerUncheckedCreateWithoutTestAttemptInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutTestAttemptInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutTestAttemptInput, AnswerUncheckedUpdateWithoutTestAttemptInput>
  }

  export type AnswerUpdateManyWithWhereWithoutTestAttemptInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutTestAttemptInput>
  }

  export type TestAttemptCreateWithoutAnswersInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    score?: number | null
    passed?: boolean | null
    completionTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTest: CertificationTestCreateNestedOneWithoutAttemptsInput
    user: UserCreateNestedOneWithoutTestAttemptInput
  }

  export type TestAttemptUncheckedCreateWithoutAnswersInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    score?: number | null
    passed?: boolean | null
    completionTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTestId: string
    userId: string
  }

  export type TestAttemptCreateOrConnectWithoutAnswersInput = {
    where: TestAttemptWhereUniqueInput
    create: XOR<TestAttemptCreateWithoutAnswersInput, TestAttemptUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    text: string
    score?: number
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTest: CertificationTestCreateNestedOneWithoutQuestionsInput
    alternatives?: AlternativeCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    text: string
    score?: number
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTestId: string
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type AlternativeCreateWithoutAnswersInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAlternativesInput
  }

  export type AlternativeUncheckedCreateWithoutAnswersInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
  }

  export type AlternativeCreateOrConnectWithoutAnswersInput = {
    where: AlternativeWhereUniqueInput
    create: XOR<AlternativeCreateWithoutAnswersInput, AlternativeUncheckedCreateWithoutAnswersInput>
  }

  export type TestAttemptUpsertWithoutAnswersInput = {
    update: XOR<TestAttemptUpdateWithoutAnswersInput, TestAttemptUncheckedUpdateWithoutAnswersInput>
    create: XOR<TestAttemptCreateWithoutAnswersInput, TestAttemptUncheckedCreateWithoutAnswersInput>
    where?: TestAttemptWhereInput
  }

  export type TestAttemptUpdateToOneWithWhereWithoutAnswersInput = {
    where?: TestAttemptWhereInput
    data: XOR<TestAttemptUpdateWithoutAnswersInput, TestAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type TestAttemptUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTest?: CertificationTestUpdateOneRequiredWithoutAttemptsNestedInput
    user?: UserUpdateOneRequiredWithoutTestAttemptNestedInput
  }

  export type TestAttemptUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTest?: CertificationTestUpdateOneRequiredWithoutQuestionsNestedInput
    alternatives?: AlternativeUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTestId?: StringFieldUpdateOperationsInput | string
    alternatives?: AlternativeUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AlternativeUpsertWithoutAnswersInput = {
    update: XOR<AlternativeUpdateWithoutAnswersInput, AlternativeUncheckedUpdateWithoutAnswersInput>
    create: XOR<AlternativeCreateWithoutAnswersInput, AlternativeUncheckedCreateWithoutAnswersInput>
    where?: AlternativeWhereInput
  }

  export type AlternativeUpdateToOneWithWhereWithoutAnswersInput = {
    where?: AlternativeWhereInput
    data: XOR<AlternativeUpdateWithoutAnswersInput, AlternativeUncheckedUpdateWithoutAnswersInput>
  }

  export type AlternativeUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAlternativesNestedInput
  }

  export type AlternativeUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type TestAttemptCreateManyUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    score?: number | null
    passed?: boolean | null
    completionTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificationTestId: string
  }

  export type TestAttemptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTest?: CertificationTestUpdateOneRequiredWithoutAttemptsNestedInput
    answers?: AnswerUpdateManyWithoutTestAttemptNestedInput
  }

  export type TestAttemptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTestId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutTestAttemptNestedInput
  }

  export type TestAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificationTestId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificationTestCreateManySkillInput = {
    id?: string
    title: string
    description?: string | null
    timeLimit?: number | null
    passingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificationTestUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutCertificationTestNestedInput
    attempts?: TestAttemptUpdateManyWithoutCertificationTestNestedInput
  }

  export type CertificationTestUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutCertificationTestNestedInput
    attempts?: TestAttemptUncheckedUpdateManyWithoutCertificationTestNestedInput
  }

  export type CertificationTestUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyCertificationTestInput = {
    id?: string
    text: string
    score?: number
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestAttemptCreateManyCertificationTestInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    score?: number | null
    passed?: boolean | null
    completionTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type QuestionUpdateWithoutCertificationTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alternatives?: AlternativeUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutCertificationTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alternatives?: AlternativeUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutCertificationTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAttemptUpdateWithoutCertificationTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestAttemptNestedInput
    answers?: AnswerUpdateManyWithoutTestAttemptNestedInput
  }

  export type TestAttemptUncheckedUpdateWithoutCertificationTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutTestAttemptNestedInput
  }

  export type TestAttemptUncheckedUpdateManyWithoutCertificationTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativeCreateManyQuestionInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    createdAt?: Date | string
    testAttemptId: string
    alternativeId?: string | null
  }

  export type AlternativeUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testAttempt?: TestAttemptUpdateOneRequiredWithoutAnswersNestedInput
    alternative?: AlternativeUpdateOneWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testAttemptId?: StringFieldUpdateOperationsInput | string
    alternativeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testAttemptId?: StringFieldUpdateOperationsInput | string
    alternativeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerCreateManyAlternativeInput = {
    id?: string
    createdAt?: Date | string
    testAttemptId: string
    questionId: string
  }

  export type AnswerUpdateWithoutAlternativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testAttempt?: TestAttemptUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAlternativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testAttemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyWithoutAlternativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testAttemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyTestAttemptInput = {
    id?: string
    createdAt?: Date | string
    questionId: string
    alternativeId?: string | null
  }

  export type AnswerUpdateWithoutTestAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    alternative?: AlternativeUpdateOneWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutTestAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    alternativeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerUncheckedUpdateManyWithoutTestAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    alternativeId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}