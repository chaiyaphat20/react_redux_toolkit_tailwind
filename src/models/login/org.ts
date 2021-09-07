export interface Org {
  GetOrganizationListByCountryResult: GetOrganizationListByCountryResult[];
}

export interface GetOrganizationListByCountryResult {
  ModifiedColumns: string[];
  RowState: number;
  OrgCode: string;
  OrgNameEng: string;
  OrgNameLoc: string;
  BUGroup: null;
  BUGroupNameEng: null;
  BUGroupNameLoc: null;
  DatabaseName: string;
  SchemaName: string;
  Seq: null;
  ShortNameEng: string;
  ShortNameLoc: string;
  UrlName: string;
}
