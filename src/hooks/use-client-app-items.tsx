import { useEffect, useState } from "react";
import removeDuplicates from "../utilities/helpers/removeDuplicates";
import useLoadingState from "./use-loading-state";
import { unstable_batchedUpdates } from "react-dom";
import fetchClientAppItems from "../asyncActions/fetchClientItems";
type ClientAppItemProps<T> = T & {
  itemType: string;
  id: string;
  pk: { timestamp: number; itemType: string };
};
const useClientAppItems = <T,>({ itemType }: { itemType: string }) => {
  const [items, setItems] = useState<ClientAppItemProps<T>[]>([]);
  const [lastEvalKey, setLastEvalKey] = useState<undefined | null | string>(
    null
  );
  const { status, result, callFunction } = useLoadingState({
    asyncFunc: fetchClientAppItems,
  });
  //fetch items on mount
  useEffect(() => {
    if (status === "loading") return;
    if (items && items.length > 0) return;
    if (lastEvalKey === undefined) return;
    callFunction({ itemType });
  }, [items, status, callFunction, lastEvalKey, itemType]);
  //update items on result
  useEffect(() => {
    if (!result) return;
    const resultItems = result.result.Items as ClientAppItemProps<T>[];
    const lastEvalKey = result.result.LastEvaluatedKey;
    unstable_batchedUpdates(() => {
      setItems((state) => {
        if (!state) return resultItems;
        const newArr = [...state, ...resultItems];
        return removeDuplicates(newArr);
      });
      if (lastEvalKey) setLastEvalKey(JSON.stringify(lastEvalKey));
      else setLastEvalKey(undefined);
    });
  }, [result]);
  return {
    status,
    items,
    setItems,
  };
};
export default useClientAppItems;
