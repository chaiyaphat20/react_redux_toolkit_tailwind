import { useEffect, useRef, useState } from 'react';
import { Org } from '../../../models/login/org';
import { fetchDataOrg } from '../../../services/Api.services';
import _ from 'lodash';
interface PropsType {
  org: string;
}
function SelectorOrg({ org }: PropsType) {
  const [orgName, setOrgName] = useState<Org>();
  useEffect(() => {
    if (org !== 'none' && org) {
      (async function () {
        const getDataOrg = await fetchDataOrg(org);
        setOrgName(() => {
          return getDataOrg;
        });
      })();
    }
  }, [org]);

  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === 'none') return;
    console.log(e.currentTarget.value);
    // if (e.currentTarget.value === 'none') return 0;
    // (async function () {
    //   await BaseServices.getOrg(`/Food/Food_Authen_Center/AuthenService.svc/GetOrganizationListByCountry/OMS_SMARTFAC/${e.currentTarget.value}`).then((data) => {
    //     console.log(data);
    //   });
    // })();
  };

  //watch change object
  function useDeepEffect(fn: ()=>void, deps: any) {
    const isFirst = useRef(true);
    const prevDeps = useRef(deps);
    useEffect(() => {
      const isFirstEffect = isFirst.current;
      const isSame = prevDeps.current.every((obj: any, index: any) => {
        return _.isEqual(obj, deps[index]);
      });
      isFirst.current = false;
      prevDeps.current = deps;
      if (isFirstEffect || !isSame) {
        return fn();
      }
      // eslint-disable-next-line
    }, deps);
  }

  useDeepEffect(() => {
    console.log(orgName?.GetOrganizationListByCountryResult[0].OrgNameLoc);
  }, [orgName]);

  return (
    <div className="relative flex flex-col mb-7">
      <select onChange={handleSelect} className="w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline">
        {orgName &&
          orgName?.GetOrganizationListByCountryResult.map((e: any, index: number) => {
            return (
              <option key={index} value={e.OrgNameEng}>
                {e.OrgNameLoc}
              </option>
            );
          })}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

export default SelectorOrg;
