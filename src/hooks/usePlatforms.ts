import { default as data } from '../data/platforms';
import { Platform } from '../models/platform';

// import useData from './useData';

function usePlatforms(): {
  loading: boolean;
  data: Platform[];
  error: string | null;
} {
  // return useData<Platform>('/platforms/lists/parents', {}, [selectedPlatform?.id]);
  return { loading: false, data, error: null }
}

export default usePlatforms;