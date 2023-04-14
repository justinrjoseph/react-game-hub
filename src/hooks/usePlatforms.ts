import {Platform} from '../models/platform';

import useData from './useData';

function usePlatforms(selectedPlatform: Platform | null): {
  loading: boolean;
  data: Platform[];
  error: string;
} {
  return useData<Platform>('/platforms/lists/parents', {}, [selectedPlatform?.id]);
}

export default usePlatforms;