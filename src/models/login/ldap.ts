export interface Ldap {
  GetLDAPConfigByAppCodeResult: GetLDAPConfigByAppCodeResult[];
}

interface GetLDAPConfigByAppCodeResult {
  ModifiedColumns: string[];
  RowState: number;
  AuthenMode: string;
  AuthenService: string;
  DefaultLang: string;
  DescEng: string;
  DescLoc: string;
  LdapServer: string;
  Region: string;
}
