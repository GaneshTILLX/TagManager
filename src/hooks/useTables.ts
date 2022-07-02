import { useCallback, useMemo } from "react";

const API_ENDPOINT = '';


export interface UseTables {}
  


export interface useTablesProps {
    organisationID:string;
    venueID:string;
}

export function useTables(input: useTablesProps):UseTables
{
   const [tables,setTables] = useState<
   const fetchTablesURL= API_ENDPOINT + '/' + input.organisationID + '/' + input.venueID  ;
   const fetchTables= useCallback(
     async () => 
     {return await fetch(fetchTablesURL)},
     [fetchTablesURL]);

}
  