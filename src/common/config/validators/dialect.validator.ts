import { ValidationOptions, ValidateBy, buildMessage } from 'class-validator';

type Dialect =
  | 'mysql'
  | 'postgres'
  | 'sqlite'
  | 'mariadb'
  | 'mssql'
  | 'db2'
  | 'snowflake'
  | 'oracle';
const Dialects = ['mysql', 'postgres', 'sqlite', 'mariadb', 'mssql', 'db2', 'snowflake', 'oracle'];
export const IS_VALID_DIALECT = 'isValidDialect';

export function IsValidDialect(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    ValidateBy(
      {
        name: IS_VALID_DIALECT,
        validator: {
          validate(value: any) {
            return typeof value === 'string' && Dialects.includes(value);
          },
          defaultMessage: buildMessage(
            (eachPrefix) =>
              `${eachPrefix}($property) must be a valid dialect (${Dialects.join(', ')})`,
            validationOptions
          ),
        },
      },
      {}
    )(object, propertyName);
  };
}
