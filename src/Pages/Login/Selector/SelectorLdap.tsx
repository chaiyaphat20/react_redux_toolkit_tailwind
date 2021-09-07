import { useEffect, useState } from 'react';
import { Ldap } from '../../../models/login/ldap';
import { fetchDataLdap } from '../../../services/Api.services';
interface PropsType {
  setOrg: (org: string) => void;
}
function SelectorLdap({ setOrg }: PropsType) {
  const [ldap, setLdap] = useState<Ldap>();
  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    setOrg(e.currentTarget.value);
  };
  useEffect(() => {
    (async () => {
      const data = await fetchDataLdap();
      const getLdapThailand = data?.GetLDAPConfigByAppCodeResult.filter((e: { LdapServer: string }) => e.LdapServer === 'CPF');
      setOrg(getLdapThailand[0].LdapServer);
      setLdap(data);
    })();
  }, [setOrg]);

  return (
    <div className="relative flex flex-col mb-7">
      <select onChange={handleSelect} className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline">
        {ldap?.GetLDAPConfigByAppCodeResult.map((e: any, index: number) => {
          return (
            <option key={index} value={e.LdapServer}>
              {e.DescEng}
            </option>
          );
        }).reverse()}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

export default SelectorLdap;
